import React from "react";

export default function QuickActions() {
  return (
    <section className="w-full rounded-2xl border border-gray-200 bg-white p-4">
      <h2 className="mb-2 text-xs font-semibold text-[#161C36]">
        Quick Actions
      </h2>

      <div className="flex flex-col gap-1.5">
        <button
          type="button"
          className="flex h-7 items-center cursor-pointer justify-center gap-1 rounded-lg bg-[#161C36] text-[10px] font-medium text-white transition hover:bg-[#252d4c]"
        >
          <span aria-hidden="true">↩</span>
          Reply
        </button>

        <button
          type="button"
          className="flex h-6 items-center cursor-pointer justify-center gap-1 rounded-lg border border-[#9297a8] text-[10px] font-medium text-[#161C36] transition hover:bg-gray-50"
        >
          Change Status
      
        </button>

        <button
          type="button"
          className="flex cursor-pointer h-6 items-center justify-center
           gap-1 rounded-lg border border-[#9297a8] text-[10px] font-medium
            text-[#161C36] transition hover:bg-gray-50"
        >
          <span aria-hidden="true">♟</span>
          Assign to
        </button>

        <button
          type="button"

          className="flex cursor-pointer h-6 items-center  justify-center gap-1 rounded-lg border border-[#9297a8] text-[10px] font-medium text-[#161C36] transition hover:bg-gray-50"
        >
          <span aria-hidden="true">●</span>
          Close Ticket
        </button>
      </div>
    </section>
  );
}