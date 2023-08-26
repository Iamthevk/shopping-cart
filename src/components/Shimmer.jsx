function Shimmer() {
  return (
    <div className="flex flex-wrap mx-auto w-full  gap-5 pt-5 mb-10 animate-pulse">
      {[...Array(15).keys()].map((key) => {
        return (
          <div key={key} className="w-96 h-96 border-4 rounded-xl p-2 ">
            <div className="h-56 w-full bg-slate-400"></div>
            <div className="flex justify-between pt-4">
              <div className="text-lg font-semibold bg-slate-400 w-20 h-4"></div>
              <div className="w-6 h-6 bg-slate-400"></div>
            </div>
            <div className="flex justify-between pb-4">
              <div className="flex justify-between items-center w-40 mb-3">
                <div className="text-lg font-semibold bg-slate-400 w-20 h-10 rounded-md"></div>
                <div className="text-lg font-semibold bg-slate-400 w-16 h-4"></div>
              </div>
              <div className="border focus:ring-2 rounded-full py-0.5 px-4 mr-8 font-bold mx-4 w-20 h-10 bg-slate-400"></div>
            </div>
            <div className="text-lg font-semibold bg-slate-400 w-full h-4 rounded-md"></div>
          </div>
        );
      })}
    </div>
  );
}

export default Shimmer;
