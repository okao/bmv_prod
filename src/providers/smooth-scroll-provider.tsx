"use client"

import * as React from "react"
import { ReactLenis } from "@studio-freight/react-lenis"

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

const LenisOptions = {
  lerp: 0.1,
  duration: 1.5,
  syncTouch: true,
  smooth: true,
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis root options={LenisOptions}>
      {children}
    </ReactLenis>
  )
}
