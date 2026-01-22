export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f2efe8] via-[#ece6db] to-[#e6dfd3]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[520px] px-4">
        <div className="glass p-6 md:p-7">
          {/* Title */}
          <h1 className="text-center text-xl font-semibold tracking-tight mb-4">
            Password generator
          </h1>




          {/* Password Display */}
          <div className="rounded-xl overflow-hidden border border-black/10">
            <div className="bg-gradient-to-b from-white/80 to-white/40 px-4 py-4 flex items-center justify-between gap-3">
              <div
                className="font-mono text-lg md:text-xl tracking-wider select-all"
                style={{ fontFamily: "var(--font-mono)" }} 
              >
                P4$5W0rD!
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-black text-white text-sm hover:bg-black/80 transition">
                  Copy
                </button>
                <button className="px-3 py-1.5 rounded-lg border border-black/20 hover:bg-black/5 transition">
                  ↻
                </button>
              </div>
            </div>

            {/* Strength Bar */}
            <div className="border-t border-black/10 bg-yellow-100/70 px-4 py-2 text-sm">
              <span className="font-medium">Moderate:</span>{" "}
              Not bad, but not Fort Knox either.
            </div>
          </div>



          {/* Controls */}
          <div className="mt-6 space-y-5">
            {/* Length */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Password length</span>
                <span className="text-sm font-medium">9</span>
              </div>
              <div className="h-2 rounded-full bg-black/20 relative">
                <div className="absolute left-0 top-0 h-2 w-[40%] rounded-full bg-black" />
              </div>
            </div>




            {/* Toggles */}
            <div className="space-y-3">
              {[
                "Include Uppercase Letters",
                "Include Lowercase Letters",
                "Include Numbers",
                "Include Symbols",
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm">{label}</span>
                  <div className="w-11 h-6 rounded-full bg-black relative">
                    <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}