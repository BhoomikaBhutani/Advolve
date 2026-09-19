import { META_PIXEL_ID } from "@/config/site";

let loaded = false;

export const initPixel = () => {
  if (loaded || !META_PIXEL_ID || typeof window === "undefined") return;
  loaded = true;
  const n = (window.fbq = window.fbq || function (...args) {
    n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
  });
  if (!window._fbq) window._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
};

export const trackEvent = (name, data) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", name, data);
  }
};
