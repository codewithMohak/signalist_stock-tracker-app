'use client'

import { useEffect, useRef } from "react"

const useTradingViewWidget = (scriptUrl: string, config: Record<string, unknown>, height = 600) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || container.dataset.loaded === "true") return

    const widgetContainer = container.querySelector<HTMLDivElement>(".tradingview-widget-container__widget")
    if (!widgetContainer) return

    container.style.height = `${height}px`
    widgetContainer.style.width = "100%"
    widgetContainer.style.height = `${height}px`

    const script = document.createElement("script")
    script.src = scriptUrl
    script.async = true
    script.textContent = JSON.stringify(config)
    container.appendChild(script)
    container.dataset.loaded = "true"

    return () => {
      script.remove()
      widgetContainer.replaceChildren()
      container.style.removeProperty("height")
      delete container.dataset.loaded
    }
  }, [scriptUrl, config, height])

  return containerRef
}

export default useTradingViewWidget
