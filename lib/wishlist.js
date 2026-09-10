"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "bsm-wishlist";

function readStorage() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeStorage(ids) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    /* storage unavailable — fail silently */
  }
}

// Simple pub/sub so every component using the hook stays in sync
// within the same tab (localStorage's own "storage" event only fires
// across other tabs, not the one that made the change).
const listeners = new Set();
function notify(ids) {
  listeners.forEach((fn) => fn(ids));
}

export function useWishlist() {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    setIds(readStorage());
    const listener = (next) => setIds(next);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  const toggle = useCallback((productId) => {
    setIds((prev) => {
      const next = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      writeStorage(next);
      notify(next);
      return next;
    });
  }, []);

  const isSaved = useCallback((productId) => ids.includes(productId), [ids]);

  return { ids, toggle, isSaved };
}
