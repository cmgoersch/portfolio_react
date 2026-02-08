import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Matter from 'matter-js';
import './Landing.css';

const Landing = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Funktion: Ballgröße abhängig von Bildschirmbreite
  const getBallRadius = () => {
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
    // Matter.js Setup
    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Runner, Body } = Matter;

    // Engine erstellen
    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 0.5;

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

    // Bälle mit Gradient-Textur erstellen
    for (let i = 0; i < 160; i++) {
      const radius = getBallRadius();
      const ball = Bodies.circle(
        Math.random() * window.innerWidth,
        Math.random() * -500,
        radius,
        {
          restitution: 0.9,
          friction: 0.4,
          render: {
            sprite: {
              texture: '/assets/images/gradient-circle.svg',
              xScale: 2 * (radius / 100),
              yScale: 2 * (radius / 100),
            },
          },
        }
      );
      World.add(world, ball);
    }

    // Spezieller Smiley-Ball
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

    // Wände
    const leftWall = Bodies.rectangle(-30, window.innerHeight / 2, 60, window.innerHeight, {
      isStatic: true,
      render: { fillStyle: 'transparent' },
    });
    const rightWall = Bodies.rectangle(window.innerWidth + 30, window.innerHeight / 2, 60, window.innerHeight, {
      isStatic: true,
      render: { fillStyle: 'transparent' },
    });

    World.add(world, [ground, leftWall, rightWall]);

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
  }, []);

  const handleButtonClick = () => {
    navigate('/about');
  };

  const handleReload = () => {
    window.location.reload();
  };

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
        <p>grab a bubble and make room on the screen</p>
      </div>

      {/* Button Container */}
      <div className="button-container">
        <div id="button-barrier"></div>
        <button className="startButton" onClick={handleButtonClick}>
          Enough with the bubbles! Let's go!
        </button>
      </div>

      {/* Canvas */}
      <canvas id="ballCanvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default Landing;
