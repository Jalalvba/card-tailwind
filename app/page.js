'use client';

export default function Page() {
  const labelClass ='border h-10 text-xl rounded-md flex flex-col items-center ';
  const inputClass =
    'h-10 rounded-md border border-white/20 bg-white text-black px-3 text-xl';
  return (
   
      <div className="border m-2 flex flex-col gap-4 max-w-xs w-full  min-h-screen bg-blue-700 p-4 " >

       <label htmlFor="name" className={labelClass}>
        jalal
        </label>
        <input
        id="name"
        type="text"
        className={inputClass}
        
        />
      </div>
  
  );
}
