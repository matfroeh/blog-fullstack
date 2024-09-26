export default function PostDetailLoading() {
  return (
    <div role="status" className="py-5 animate-pulse space-y-3">
    <div className="flex justify-end gap-3">
      <div className="bg-slate-500 rounded-lg dark:bg-slate-600 size-7"></div>
      <div className="bg-slate-500 rounded-lg dark:bg-slate-600 size-7"></div>
    </div>
    <div className="h-6 bg-slate-500 rounded-lg dark:bg-slate-600 w-48 "></div>
    <div className="h-3 bg-slate-500 rounded-full dark:bg-slate-600 max-w-[360px] "></div>
    <div className="flex items-center justify-center w-full h-72 bg-slate-500 dark:text-slate-600 rounded ">
      <svg
        className="w-10 h-10 bg-slate-500 dark:text-slate-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </div>
    <div className="h-3 bg-slate-500 rounded-full dark:bg-slate-600 w-40"></div>
    <div className="flex gap-3">
      <div className="bg-slate-500 rounded-lg dark:bg-slate-600 size-6"></div>
      <div className="bg-slate-500 rounded-lg dark:bg-slate-600 size-6"></div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
  )
}
