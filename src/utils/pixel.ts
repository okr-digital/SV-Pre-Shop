export const PIXEL_ID = '144614776114329';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export const initFacebookPixel = () => {
  if (typeof window === 'undefined') return;
  if (window.fbq) return;

  const f = window;
  const b = document;
  const e = 'script';
  const v = 'https://connect.facebook.net/en_US/fbevents.js';

  let n: any = f.fbq = function() {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = '2.0';
  n.queue = [];
  
  const t = b.createElement(e) as HTMLScriptElement;
  t.async = !0;
  t.src = v;
  b.head.appendChild(t);

  window.fbq('init', PIXEL_ID);
  window.fbq('track', 'PageView');
};

export const trackLead = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
};
