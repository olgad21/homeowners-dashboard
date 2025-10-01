"use client";

import dynamic from "next/dynamic";
import React from "react";

/**
 * Wraps a component to disable SSR and render only on the client.
 */
export function withClientOnly<T extends object>(
  Component: React.ComponentType<T>
) {
  return dynamic(() => Promise.resolve(Component), {
    ssr: false,
  });
}
