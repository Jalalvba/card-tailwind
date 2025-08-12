'use client';

import useViewport from './useViewport';

export default function Page() {
  const {
    widthPx,
    heightPx,
    widthRem,
    heightRem,
    rootFontSize,
    dpr,
    breakpoint,
  } = useViewport();

  return (
    <main className="min-h-screen bg-blue-600 flex items-center justify-center">

      <section className="w-full max-w-xl rounded-2xl border border-white/20 bg-red-700/80 p-4 text-white m-4">

        <header className="flex items-center justify-between mb-6">

          <h1 className="text-xl font-semibold">jalal tailwind card</h1>

          <div className="flex items-center gap-2">
            <span className="text-xs px-2 py-1 rounded border border-white/30">1rem = {rootFontSize}px</span>
            <span className="text-xs px-2 py-1 rounded border border-white/30">BP: {breakpoint} </span>
          </div>

        </header>

        <form >
          {/* Width */}
          <label className="flex flex-col gap-1" htmlFor="vp-width">
            <span className="text-sm font-medium">Viewport Width</span>
            <input
              id="vp-width"
              value={`${widthPx}px (${widthRem}rem)`}
              readOnly
              className="h-10 rounded-md border border-white/20 bg-white text-black px-3"
            />
          </label>

          {/* Height */}
          <label className="flex flex-col gap-1" htmlFor="vp-height">
            <span className="text-sm font-medium">Viewport Height</span>
            <input
              id="vp-height"
              value={`${heightPx}px (${heightRem}rem)`}
              readOnly
              className="h-10 rounded-md border border-white/20 bg-white text-black px-3"
            />
          </label>

          {/* Device Pixel Ratio */}
          <label className="flex flex-col gap-1" htmlFor="vp-dpr">
            <span className="text-sm font-medium">Device Pixel Ratio</span>
            <input
              id="vp-dpr"
              value={Number(dpr).toFixed(2)}
              readOnly
              className="h-10 rounded-md border border-white/20 bg-white text-black px-3"
            />
          </label>

          {/* Breakpoint */}
          <label className="flex flex-col gap-1" htmlFor="vp-bp">
            <span className="text-sm font-medium">Tailwind Breakpoint</span>
            <input
              id="vp-bp"
              value={breakpoint}
              readOnly
              className="h-10 rounded-md border border-white/20 bg-white text-black px-3 uppercase tracking-wide"
            />
          </label>
        </form>
      </section>
    </main>
  );
}
