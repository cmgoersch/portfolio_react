import { createContext, useContext, useEffect, useState } from 'react';

const ConsentContext = createContext(null);

export const ConsentProvider = ({ children }) => {
  const [status, setStatus] = useState('unknown'); // 'unknown' | 'accepted' | 'declined'
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('externalContentConsent');
      if (stored === 'accepted' || stored === 'declined') {
        setStatus(stored);
        setBannerOpen(false);
      } else {
        setStatus('unknown');
        setBannerOpen(true);
      }
    } catch (e) {
      setStatus('unknown');
      setBannerOpen(true);
    }
  }, []);

  const accept = () => {
    setStatus('accepted');
    setBannerOpen(false);
    try {
      window.localStorage.setItem('externalContentConsent', 'accepted');
    } catch (e) {
      // ignore storage errors
    }
  };

  const decline = () => {
    setStatus('declined');
    setBannerOpen(false);
    try {
      window.localStorage.setItem('externalContentConsent', 'declined');
    } catch (e) {
      // ignore storage errors
    }
  };

  const openBanner = () => {
    setBannerOpen(true);
  };

  const reset = () => {
    setStatus('unknown');
    setBannerOpen(true);
    try {
      window.localStorage.removeItem('externalContentConsent');
    } catch (e) {
      // ignore
    }
  };

  const value = {
    status,
    hasConsented: status === 'accepted',
    bannerOpen,
    accept,
    decline,
    openBanner,
    reset,
  };

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
};

export const useConsent = () => {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return ctx;
};
