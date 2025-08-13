'use client';

export default function Page() {
  const labelClass =
    'h-10 w-full rounded-md border border-white/20 bg-blue-500 px-3 text-xl flex items-center text-white';
  const inputClass =
    'h-10 w-full rounded-md border border-white/20 bg-white text-black px-3 text-xl';

  const names = ['jalal', 'chafiq', 'rabia', 'sami', 'jalal', 'chafiq', 'rabia', 'sami', 'jalal', 'chafiq', 'rabia', 'sami'];

  return (
    <div className="min-h-screen bg-blue-700 p-6 flex items-center justify-center">
      <div className="border border-white/20 rounded-xl p-4 w-full max-w-6xl">
        {/* Fluid grid: auto-fit columns with a min width per card */}
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          {names.map((name, i) => {
            const id = `${name}-${i}`; // unique id per item
            return (
              <div key={id} className="flex flex-col gap-2">
                <label htmlFor={id} className={labelClass}>
                  {name}
                </label>
                <input id={id} type="text" className={inputClass} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
