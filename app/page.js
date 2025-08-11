'use client';

import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    select1: '',
    select2: '',
    select3: '',
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const reset = () =>
    setForm({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      select1: '',
      select2: '',
      select3: '',
    });

  return (
    <main className="h-screen flex items-center justify-center border-4 m-8 ">
      {/* Responsive container: full width on small screens, capped at lg screen width */}
      <section className="w-full lg:max-w-screen-lg rounded-2xl border border-white/20 bg-gray-800/60 backdrop-blur p-6 shadow-lg">
        <header className="flex justify-center">
          <h2 className="text-lg font-semibold tracking-tight border px-3 py-1 rounded hover:bg-blue-500/90 transition">
            Form Jalal sami
          </h2>
        </header>

        <form className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Inputs */}
          {['input1', 'input2', 'input3', 'input4'].map((field) => (
            <label key={field} className="flex flex-col gap-1">
              <span>{field}</span>
              <input
                value={form[field]}
                onChange={handleChange(field)}
                className="h-10 rounded-md border border-white/20 bg-white text-black px-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          ))}

          {/* Selects */}
          {['select1', 'select2', 'select3'].map((field) => (
            <label key={field} className="flex flex-col gap-1">
              <span>{field}</span>
              <select
                value={form[field]}
                onChange={handleChange(field)}
                className="h-10 rounded-md border border-white/20 bg-white text-black px-3 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose</option>
                <option value="option1">Option 1</option>
              </select>
            </label>
          ))}

          {/* Buttons */}
          <div className="col-span-1 lg:col-span-3 mt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => console.log(form)}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 font-medium hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Save
            </button>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center rounded-md bg-gray-500 px-4 py-2 font-medium hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
            >
              Reset
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
