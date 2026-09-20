export const trackEvent = (name, data) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", name, data);
  }
};
