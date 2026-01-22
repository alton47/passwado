"use client";

import { useEffect, useState } from "react";
import { generatePassword } from "@/lib/generatePassword";

export default function Home() {
  const [length, setLength] = useState(9);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const [password, setPassword] = useState("P4$5W0rD!");

  function regenerate() {
    const pwd = generatePassword({
      length,
      uppercase,
      lowercase,
      numbers,
      symbols,
    });
    setPassword(pwd || "");
  }



  useEffect(() => {
    regenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, uppercase, lowercase, numbers, symbols]);

  function toggle(
    value: boolean,
    setter: (v: boolean) => void
  ) {
    const enabledCount = [uppercase, lowercase, numbers, symbols].filter(
      Boolean
    ).length;

    if (value === true && enabledCount === 1) return; // don't allow disabling last one

    setter(!value);
  }



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
                className="font-mono text-lg md:text-xl tracking-wider select-all break-all"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {password}
              </div>

              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(password);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-black text-white text-sm hover:bg-black/80 transition"
                >
                  Copy
                </button>
                <button
                  onClick={regenerate}
                  className="px-3 py-1.5 rounded-lg border border-black/20 hover:bg-black/5 transition"
                >
                  ↻
                </button>
              </div>
            </div>

            {/* Strength Placeholder */}
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
                <span className="text-sm font-medium">{length}</span>
              </div>

              <input
                type="range"
                min={4}
                max={25}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-black"
              />
            </div>

            {/* Toggles */}
            <div className="space-y-3">
              {[
                {
                  label: "Include Uppercase Letters",
                  value: uppercase,
                  setter: setUppercase,
                },
                {
                  label: "Include Lowercase Letters",
                  value: lowercase,
                  setter: setLowercase,
                },
                {
                  label: "Include Numbers",
                  value: numbers,
                  setter: setNumbers,
                },
                {
                  label: "Include Symbols",
                  value: symbols,
                  setter: setSymbols,
                },
              ].map((opt) => (
                <div
                  key={opt.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm">{opt.label}</span>
                  <button
                    onClick={() => toggle(opt.value, opt.setter)}
                    className={`w-11 h-6 rounded-full relative transition ${
                      opt.value ? "bg-black" : "bg-black/20"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition ${
                        opt.value ? "right-1" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}