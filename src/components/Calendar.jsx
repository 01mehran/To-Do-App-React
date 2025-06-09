export const Calendar = () => {
  return (
    <div className="w-full">
      <header className="flex w-full items-center justify-between">
        <div>
          <h1 className="font-Oswald text-4xl font-normal tracking-wider">
            17 October 2023
          </h1>
          <article className="bg-dark-gray mt-6 flex w-full max-w-[180px] flex-wrap items-center justify-around gap-2 rounded-[7px] p-[4px]">
            <span className="bg-dark font-Notosans font- cursor-pointer rounded-[5px] px-2 py-1 text-xs">
              Day
            </span>
            <span className="font-Notosans cursor-pointer rounded-[5px] bg-white px-2 py-1 text-xs font-semibold">
              Week
            </span>
            <span className="font-Notosans cursor-pointer rounded-[5px] bg-white px-2 py-1 text-xs font-semibold">
              Month
            </span>
          </article>
        </div>
        <button className="font-Notosans font-400 cursor-pointer rounded-[5px] border-[1px] border-light-gray px-3 py-1 text-[12px] text-black/40">
          Add Event
        </button>
      </header>
      <main className="mt-8 border-[1px] border-light-gray h-[75vh] rounded-[30px]">
      </main>
    </div>
  );
};





