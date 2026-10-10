


// import { Link } from "react-router-dom";
// import { toast } from "sonner";

// type PropsRefund = {
//   data: string;
//   fileUrl: string;
//   fileFormat: string;
//   fileSize: string;
// };

// export default function RefundSettings({
//   data,
//   fileUrl,
//   fileFormat,
//   fileSize,
// }: PropsRefund) {
//   function handleDownload() {

//     toast.custom(
//       (id) => (
//         <div className="flex  items-center gap-3 rounded-lg bg-white p-3 shadow-lg">
      


// <div className="w-[60.5px] flex justify-center h-[60.9px] rounded-[13.55px]

// pt-[14.94px]
// pr-[15.25px]
// pb-[14-94px]
// pl-[15.25px]
// gap-[14.94px]
// bg-popover-foreground
// text-popover

// ">



//         <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
//          stroke="currentColor" className="w-[40px] h-[40px]  ">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
// </svg>

// </div>


//           <div className="min-w-0 flex-1">
//             <p className="truncate text-sm font-semibold">{data}</p>
//             <p className="text-xs text-gray-500">
//               File Format: {fileFormat} &nbsp; File Size: {fileSize}
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={() => toast.dismiss(id)}
//             className="rounded-full border px-1 text-gray-500"
//             aria-label="Close"
//           >
//             ×
//           </button>



//           <div className="absolute bottom-[1px] left-3 right-3   h-1 rounded-full bg-blue-100">
//             <div className="h-full w-3/4 rounded-full bg-[#f48b72]" />
//           </div>
//         </div>
//       ),
//       { duration: 4000, position: "top-right" }
//     );
//   }

//   return (
//     <div className="flex items-center justify-between border-b-2">
//       <span>{data}</span>

      
//       <a href={fileUrl}  onClick={handleDownload}>
//         <img
//           className="my-3 h-[50px] w-[50px]"
//           src="/download.png"
//           alt={` ${data}`}
//         />
//       </a>
//     </div>
//   );
// }






import { toast } from "sonner";

type PropsRefund = {
  data: string;
  fileUrl: string;
  fileFormat: string;
  fileSize: string;
  fileName?: string;
};

export default function RefundSettings({
  data,
  fileUrl,
  fileFormat,
  fileSize,
  fileName,
}: PropsRefund) {
  function handleDownload() {
    toast.custom(
      (id) => (
        <div className="relative flex items-center gap-3 rounded-lg bg-white p-3 pb-4 shadow-lg">
          <div className="flex h-[60.9px] w-[60.5px] shrink-0 items-center justify-center rounded-[13.55px] bg-popover-foreground p-[15px] text-popover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-[40px] w-[40px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{data}</p>
            <p className="text-xs text-gray-500">
              File Format: {fileFormat} &nbsp; File Size: {fileSize}
            </p>
          </div>

          <button
            type="button"
            onClick={() => toast.dismiss(id)}
            className="rounded-full border px-1 text-gray-500"
            aria-label="Close"
          >
            ×
          </button>

          <div className="absolute bottom-1 left-3 right-3 h-1 rounded-full bg-blue-100">
            <div className="h-full w-3/4 rounded-full bg-[#f48b72]" />
          </div>
        </div>
      ),
      { duration: 4000, position: "top-right" }
    );
  }

  return (
    <div className="flex items-center justify-between border-b-2">
      <span>{data}</span>

      <a
        href={fileUrl}
        download={fileName ?? true}
        onClick={handleDownload}
      >
        <img
          className="my-3 h-[50px] w-[50px]"
          src="/download.png"
          alt={data}
        />
      </a>
    </div>
  );
}