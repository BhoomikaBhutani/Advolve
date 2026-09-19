import { useEffect, useState } from "react";

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

// Shared real timer: counts down to midnight IST for everyone, restarts daily.
const msRemainingToday = () => {
  const istNow = Date.now() + IST_OFFSET_MS;
  const nextMidnight = Math.floor(istNow / DAY_MS) * DAY_MS + DAY_MS;
  return nextMidnight - istNow;
};

const format = (ms) => {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(total / 3600)).padStart(2, "0");
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
};

const read = () => {
  const ms = msRemainingToday();
  return { label: format(ms), pct: ms / DAY_MS };
};

export const useIstCountdown = () => {
  const [state, setState] = useState(read);
  useEffect(() => {
    const id = setInterval(() => setState(read()), 1000);
    return () => clearInterval(id);
  }, []);
  return state;
};
