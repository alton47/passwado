export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="glass p-6 md:p-7 w-full max-w-[520px] animate-pulse">
        <div className="h-8 bg-black/20 rounded mb-4"></div>
        <div className="h-14 bg-black/10 rounded mb-2"></div>
        <div className="h-6 bg-black/20 rounded mb-1 w-3/4"></div>
        <div className="h-6 bg-black/20 rounded mb-1 w-1/2"></div>
        <div className="h-6 bg-black/20 rounded w-1/3"></div>
      </div>
    </main>
  );
}



// export default function Loading() {
//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f2efe8] via-[#ece6db] to-[#e6dfd3]">
//       <div className="w-full max-w-[520px] px-4">
//         <div className="glass p-6 md:p-7 animate-pulse">
//           <div className="h-6 w-40 mx-auto bg-black/10 rounded mb-6" />

//           <div className="rounded-xl overflow-hidden border border-black/10">
//             <div className="bg-white/60 px-4 py-5 space-y-3">
//               <div className="h-6 w-3/4 bg-black/10 rounded" />
//               <div className="h-4 w-1/3 bg-black/10 rounded" />
//             </div>
//             <div className="border-t border-black/10 bg-black/5 px-4 py-3">
//               <div className="h-4 w-1/2 bg-black/10 rounded" />
//             </div>
//           </div>

//           <div className="mt-6 space-y-4">
//             <div className="h-4 w-full bg-black/10 rounded" />
//             <div className="h-4 w-full bg-black/10 rounded" />
//             <div className="h-4 w-full bg-black/10 rounded" />
//             <div className="h-4 w-full bg-black/10 rounded" />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }