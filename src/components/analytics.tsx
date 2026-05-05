'use client';

import { GoogleAnalytics, sendGAEvent } from '@next/third-parties/google';
import { addScript, setup } from 'meta-pixel';
import { useEffect } from 'react';

export function setupMetaPixel(pixelId = '') {
  if (typeof window === 'undefined') return;
  const fbq = addScript(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js',
  );
  setup(fbq).init(pixelId).pageView();

  return fbq;
}

const isDev = process.env.NODE_ENV === 'development';

export default function Analytics() {
  const pixelId = '';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    sendGAEvent({
      action: 'page_view',
      category: 'Page View',
      label: window.location.pathname,
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const fbq = setupMetaPixel(pixelId);

    return () => {
      fbq?.('track', 'PageView');
    };
  }, [pixelId]);

  return (
    <>
      <GoogleAnalytics
        dataLayerName='leanitech'
        gaId={'G-8XESHQVKX5'}
        debugMode={isDev}
      />

      <noscript>
        {/* eslint-disable-next-line */}
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
