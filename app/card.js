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

  const labelClass =
    'flex flex-col gap-1';
  const inputClass =
    'h-10 rounded-md border border-white/20 bg-white text-black px-3 text-xl';

  // Safe formatters (avoid "undefined" & NaN)
  const fmtSize = (px, rem) =>
    px != null && rem != null ? `${px}px (${rem}rem)` : '';
  const fmtDpr = (v) =>
    Number.isFinite(Number(v)) ? Number(v).toFixed(2) : '';

  return (
    <main className="min-h-screen bg-blue-600 flex items-center justify-center">
      <section className="w-full max-w-xl rounded-2xl border border-white/20 bg-red-700/80 p-4 text-white m-4">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">jalal tailwind card</h1>
          <div className="flex items-center gap-2">                                 
            <span className="text-xs px-2 py-1 rounded border border-white/30">
              1rem = {rootFontSize ?? '-'}px
            </span>
            <span className="text-xs px-2 py-1 rounded border border-white/30">
              BP: {breakpoint ?? '-'}
            </span>
          </div>
        </header>


        <form className="flex flex-col  gap-4">
          {/* Width */}
          <label className={labelClass}>
            <span className="text-sm text-blue-700  font-bold">Viewport Width</span>
            
            <input
              value={fmtSize(widthPx, widthRem)}
              readOnly
              aria-readonly="true"
              className={inputClass}
              placeholder="—"
            />
          </label>

          {/* Height */}
          <label className={labelClass}>
            <span className="text-sm font-medium">Viewport Height</span>
            <input
              value={fmtSize(heightPx, heightRem)}
              readOnly
              aria-readonly="true"
              className={inputClass}
              placeholder="—"
            />
          </label>

          {/* Device Pixel Ratio */}
          <label className={labelClass}>
            <span className="text-sm font-medium">Device Pixel Ratio</span>
            <input
              value={fmtDpr(dpr)}
              readOnly
              aria-readonly="true"
              className={inputClass}
              placeholder="—"
            />
          </label>

          {/* Breakpoint */}
          <label className={labelClass}>
            <span className="text-sm font-medium">Tailwind Breakpoint</span>
            <input
              value={breakpoint ?? ''}
              readOnly
              aria-readonly="true"
              className={`${inputClass} uppercase tracking-wide`}
              placeholder="—"
            />
          </label>
        </form>
      </section>
    </main>
  );
}
