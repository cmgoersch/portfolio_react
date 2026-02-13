import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Matter from 'matter-js';
import { useTheme } from '../../context/ThemeContext';
import './Landing.css';

const Landing = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isIceTheme = theme === 'ocean';
  const isSmileTheme = theme === 'sunset';
  const isBalloonTheme = theme === 'purple';

  // Größe der Bubbles abhängig von der Bildschirmbreite
  // 👉 Hier kannst du die minimale / maximale Bubble-Größe anpassen
  const getBubbleRadius = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      return Math.random() * 20 + 10;
    } else if (screenWidth < 1024) {
      return Math.random() * 30 + 15;
    } else {
      return Math.random() * 40 + 20;
    }
  };

  // Größe der Eiswürfel abhängig von der Bildschirmbreite
  // 👉 Hier kannst du die minimale / maximale Eiswürfel-Größe anpassen
  const getCubeSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      return Math.random() * 20 + 10;
    } else if (screenWidth < 1024) {
      return Math.random() * 30 + 15;
    } else {
      return Math.random() * 40 + 20;
    }
  };

  useEffect(() => {
    // Solange noch kein Theme gesetzt ist, keine Physik starten
    if (!theme) return;
    // Matter.js Setup
    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Runner, Body } = Matter;

    // Engine erstellen
    const engine = Engine.create();
    const world = engine.world;
    // Für das Ballon-Theme Gravitation nach oben, sonst nach unten
    world.gravity.y = isBalloonTheme ? -0.4 : 0.5;

    // Auf sehr schmalen Screens etwas mehr Elemente anzeigen
    const isSmallScreen = window.innerWidth < 600;

    // Renderer erstellen
    const canvas = canvasRef.current;
    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
      },
    });

    if (isIceTheme) {
      // Eiswürfel mit Gradient-Textur erstellen
      // 👉 Anzahl der Eiswürfel: Basiswert 1560 (auf sehr schmalen Screens automatisch deutlich erhöht)
      const iceCount = isSmallScreen ? Math.floor(1560 * 1.7) : 1560;
      for (let i = 0; i < iceCount; i++) {
        const size = getCubeSize();
        // 👉 X-Position etwas zur Mitte verschoben, damit weniger Würfel seitlich aus dem View fallen
        const spawnX = window.innerWidth * 0.1 + Math.random() * window.innerWidth * 0.8;
        const cube = Bodies.rectangle(
          spawnX,
          Math.random() * -600, // etwas größerer vertikaler Spawn-Bereich ≈ 20% mehr Abstand
          size,
          size,
          {
              restitution: 1.0,
              friction: 0.4,
            angle: Math.random() * Math.PI,
            render: {
              sprite: {
                texture: '/assets/images/ice-cube.png',
                // 👉 Sichtbare Größe der Eiswürfel: xScale / yScale anpassen
                xScale: size / 140,
                yScale: size / 140,
              },
            },
          }
        );
          // leichte horizontale Startgeschwindigkeit (etwas reduziert),
          // damit sie sich wegdrücken, aber weniger stark seitlich aus dem View wandern
          Body.setVelocity(cube, {
            x: (Math.random() - 0.5) * 1,
            y: 0,
          });
        World.add(world, cube);
      }

      // Großer Eiswürfel als besonderes Element in der Mitte (leicht verkleinert)
      // 👉 Größe des großen Eiswürfels: specialCubeSize + xScale / yScale anpassen
      const specialCubeSize = window.innerWidth < 700 ? 50 : 80;
      const specialCube = Bodies.rectangle(
        window.innerWidth / 2,
        -120,
        specialCubeSize,
        specialCubeSize,
        {
            restitution: 1.0,
            friction: 0.4,
          angle: Math.random() * Math.PI,
          render: {
            sprite: {
              texture: '/assets/images/ice-cube.png',
              xScale: specialCubeSize / 150,
              yScale: specialCubeSize / 150,
            },
          },
        }
      );
        Body.setVelocity(specialCube, {
          x: (Math.random() - 0.5) * 1.5,
          y: 0,
        });
      World.add(world, specialCube);
    } else if (isSmileTheme) {
      // Smiley-Bubbles für das orange Theme (selbe Physik wie die normalen Bubbles)
      // 👉 Anzahl der Smileys: Basiswert 910 (auf sehr schmalen Screens automatisch deutlich erhöht)
      const smileCount = isSmallScreen ? Math.floor(910 * 1.7) : 910;
      for (let i = 0; i < smileCount; i++) {
        const radius = getBubbleRadius();
        const smile = Bodies.circle(
          Math.random() * window.innerWidth,
          Math.random() * -500,
          radius,
          {
            restitution: 0.9,
            friction: 0.7,
            render: {
              sprite: {
                texture: '/assets/images/smily.svg',
                // 👉 Sichtbare Größe der Smileys: xScale / yScale anpassen
                xScale: 2 * (radius / 150),
                yScale: 2 * (radius / 150),
              },
            },
          }
        );
        World.add(world, smile);
      }
    } else if (isBalloonTheme) {
      // Ballons für das lila Theme: von unten nach oben, bleiben an der Decke hängen
      const balloonTextures = [
        '/assets/images/b1.png',
        '/assets/images/b2.png',
        '/assets/images/b3.png',
        '/assets/images/b4.png',
        '/assets/images/b5.png',
        '/assets/images/b6.png',
        '/assets/images/b7.png',
      ];

      // 👉 Anzahl der Ballons: Basiswert 650 (auf sehr schmalen Screens automatisch deutlich erhöht)
      const balloonCount = isSmallScreen ? Math.floor(650 * 1.7) : 650;
      for (let i = 0; i < balloonCount; i++) {
        const radius = getBubbleRadius();
        const texture = balloonTextures[Math.floor(Math.random() * balloonTextures.length)];
        const balloon = Bodies.circle(
          Math.random() * window.innerWidth,
          window.innerHeight + Math.random() * 300,
          radius,
          {
            restitution: 0.6,
            friction: 0.3,
            render: {
              sprite: {
                texture,
                // 👉 Sichtbare Größe der Ballons: xScale / yScale anpassen
                xScale: radius / 200,
                yScale: radius / 200,
              },
            },
          }
        );
        World.add(world, balloon);
      }
    } else {
      // Bubbles mit Gradient-Textur erstellen
      // 👉 Anzahl der Standard-Bubbles: Basiswert 910 (auf sehr schmalen Screens automatisch deutlich erhöht)
      const bubbleCount = isSmallScreen ? Math.floor(910 * 1.7) : 910;
      for (let i = 0; i < bubbleCount; i++) {
        const radius = getBubbleRadius();
        const bubble = Bodies.circle(
          Math.random() * window.innerWidth,
          Math.random() * -500,
          radius,
          {
            restitution: 0.9,
            friction: 0.4,
            render: {
              sprite: {
                texture: '/assets/images/gradient-circle.svg',
                // 👉 Sichtbare Größe der Bubbles: xScale / yScale anpassen
                xScale: 2 * (radius / 100),
                yScale: 2 * (radius / 100),
              },
            },
          }
        );
        World.add(world, bubble);
      }

      // Spezieller Smiley-Bubble
      const specialBallRadius = window.innerWidth < 600 ? 30 : 50;
      const specialBall = Bodies.circle(
        window.innerWidth / 2,
        -100,
        specialBallRadius,
        {
          restitution: 0.9,
          friction: 0.4,
          render: {
            sprite: {
              texture: '/assets/images/smily_2.png',
              xScale: 2 * (specialBallRadius / 240),
              yScale: 2 * (specialBallRadius / 240),
            },
          },
        }
      );
      World.add(world, specialBall);
    }

    // Boden erstellen
    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 30,
      window.innerWidth,
      60,
      {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }
    );

    // Decke, damit Ballons oben „hängen bleiben“ können
    const ceiling = Bodies.rectangle(
      window.innerWidth / 2,
      -30,
      window.innerWidth,
      60,
      {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }
    );

    // Wände
    const leftWall = Bodies.rectangle(-30, window.innerHeight / 2, 60, window.innerHeight, {
      isStatic: true,
      render: { fillStyle: 'transparent' },
    });
    const rightWall = Bodies.rectangle(window.innerWidth + 30, window.innerHeight / 2, 60, window.innerHeight, {
      isStatic: true,
      render: { fillStyle: 'transparent' },
    });

    World.add(world, [ground, ceiling, leftWall, rightWall]);

    // Button-Barriere erstellen
    const buttonBarrierDiv = document.getElementById('button-barrier');
    let buttonBarrier = null;
    
    if (buttonBarrierDiv) {
      const buttonBarrierRect = buttonBarrierDiv.getBoundingClientRect();
      buttonBarrier = Bodies.rectangle(
        buttonBarrierRect.left + buttonBarrierRect.width / 2,
        buttonBarrierRect.top + buttonBarrierRect.height / 2,
        buttonBarrierRect.width,
        buttonBarrierRect.height,
        {
          isStatic: true,
          render: { fillStyle: 'transparent' },
        }
      );
      World.add(world, buttonBarrier);
    }

    // Mausinteraktion
    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    // Mousedown-Listener anpassen für Button
    mouse.element.removeEventListener('mousedown', mouseConstraint.mouse.mousedown);
    mouse.element.addEventListener('mousedown', (event) => {
      const target = event.target;
      if (!target.closest('.button-container')) {
        mouseConstraint.mouse.mousedown(event);
      }
    });

    World.add(world, mouseConstraint);

    // Runner erstellen und starten
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Resize-Handler
    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;

      if (buttonBarrier && buttonBarrierDiv) {
        const updatedRect = buttonBarrierDiv.getBoundingClientRect();
        Body.setPosition(buttonBarrier, {
          x: updatedRect.left + updatedRect.width / 2,
          y: updatedRect.top + updatedRect.height / 2,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
    };
  }, [theme, isIceTheme, isSmileTheme, isBalloonTheme]);

  const handleButtonClick = () => {
    navigate('/about');
  };

  const handleReload = () => {
    window.location.reload();
  };

  const subtitle = isIceTheme
    ? 'grab an ice cube and make room on the screen'
    : isSmileTheme
      ? 'grab a smile and make room on the screen'
      : isBalloonTheme
        ? 'grab a balloon and make room on the screen'
        : 'grab a bubble and make room on the screen';

  // 👉 Button-Text pro Theme anpassen
  const buttonLabel = isIceTheme
    ? "Enough with the ice cubes! Let's go!"
    : isSmileTheme
      ? "Enough with the smiles! Let's go!"
      : isBalloonTheme
        ? "Enough with the balloons! Let's go!"
        : "Enough with the bubbles! Let's go!";

  return (
    <div id="container">
      {/* Reload Icon */}
      <div id="reload-icon">
        <img 
          src="/assets/images/reload.svg" 
          alt="Reload Icon" 
          onClick={handleReload}
        />
      </div>

      {/* Message */}
      <div id="message">
        <h1>Welcome</h1>
        <p>{subtitle}</p>
      </div>

      {/* Button Container */}
      <div className="button-container">
        <div id="button-barrier"></div>
        <button className="startButton" onClick={handleButtonClick}>{buttonLabel}</button>
      </div>

      {/* Canvas */}
      <canvas id="ballCanvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default Landing;
