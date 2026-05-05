'use client';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

export default function Analytics() {
  // <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-8XESHQVKX5"></script> <script>   window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'G-8XESHQVKX5'); </script>
  return (
    <>
      <Script src='https://example.com/script.js' />
      <GoogleTagManager gtmId='G-8XESHQVKX5' />
      <GoogleAnalytics gaId={'G-8XESHQVKX5'} />
    </>
  );
}
