import { META_PIXEL_ID } from "@/config/site";

// Standard in-page event (fbq queues async — never blocks)
export const trackEvent = (name, data) => {
  if (typeof window === "undefined") return;
  if (window.fbq) window.fbq("track", name, data);
};

// Fire-and-forget event for click→redirect flows: fbq queues async AND a
// sendBeacon hit goes out in parallel, so navigation never waits on the pixel.
export const trackEventAsync = (name, data) => {
  if (typeof window === "undefined") return;
  const eventId = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
  if (window.fbq) window.fbq("track", name, data, { eventID: eventId });
  try {
    const params = new URLSearchParams({
      id: META_PIXEL_ID,
      ev: name,
      eid: eventId,
      dl: window.location.href,
      ts: String(Date.now()),
    });
    if (data && data.value != null) {
      params.set("cd[value]", String(data.value));
      if (data.currency) params.set("cd[currency]", data.currency);
    }
    navigator.sendBeacon(`https://www.facebook.com/tr/?${params.toString()}`);
  } catch (e) {
    // beacon is a best-effort backup; fbq already queued the event
  }
};
