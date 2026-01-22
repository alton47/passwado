"use client";

import { useEffect, useState } from "react";
import { generatePassword } from "@/lib/generatePassword";
import { getPasswordStrength } from "@/lib/passwordStrength";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [length, setLength] = useState(9);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const [password, setPassword] = useState("P4$5W0rD!");
  const [copied, setCopied] = useState(false);
  
  const min = 4;
  const max = 25;

  function regenerate() {
    const pwd = generatePassword({
      length,
      uppercase,
      lowercase,
      numbers,
      symbols,
    });
    setPassword(pwd || "P4$5W0rD!");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hasInteracted) {
      regenerate();
    }
  }, [length, uppercase, lowercase, numbers, symbols]);

  function toggle(value: boolean, setter: (v: boolean) => void) {
    setHasInteracted(true);
    const enabledCount = [uppercase, lowercase, numbers, symbols].filter(Boolean).length;
    if (value === true && enabledCount === 1) return;
    setter(!value);
  }

  const strength = getPasswordStrength({ length, uppercase, lowercase, numbers, symbols });
  const strengthStyles = {
    red: "bg-red-100 text-red-900",
    yellow: "bg-yellow-100 text-yellow-900",
    green: "bg-green-100 text-green-900",
    purple: "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/40 animate-pulse",
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f2efe8] via-[#ece6db] to-[#e6dfd3]" />
      
      <div className="relative z-10 w-full max-w-[520px] px-4">
        {loading ? (
          /* MODERN SKELETON LOADING STATE */
          <div className="glass p-6 md:p-7 rounded-3xl bg-white/60 backdrop-blur-md border border-white/20 shadow-xl animate-pulse">
            <div className="h-7 w-48 bg-black/10 rounded-lg mx-auto mb-2" />
            <div className="h-4 w-64 bg-black/5 rounded-md mx-auto mb-6" />
            <div className="rounded-xl overflow-hidden border border-black/5 mb-6">
              <div className="bg-white/40 px-4 py-5 flex justify-between items-center">
                <div className="h-6 w-40 bg-black/10 rounded" />
                <div className="flex gap-2"><div className="h-8 w-14 bg-black/10 rounded-lg" /><div className="h-8 w-10 bg-black/10 rounded-lg" /></div>
              </div>
              <div className="border-t border-black/5 bg-black/5 px-4 py-3"><div className="h-4 w-3/4 bg-black/10 rounded" /></div>
            </div>
            <div className="space-y-6">
              <div><div className="flex justify-between mb-3"><div className="h-4 w-24 bg-black/10 rounded" /><div className="h-4 w-8 bg-black/10 rounded" /></div><div className="h-2 w-full bg-black/10 rounded-full" /></div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="h-4 w-40 bg-black/10 rounded" /><div className="h-6 w-11 bg-black/10 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ACTUAL UI CONTENT */
          <div className={`glass p-6 md:p-7 transition-all duration-500 rounded-3xl bg-white/60 backdrop-blur-md border border-white/20 shadow-xl ${strength.isFire ? "ring-2 ring-purple-500/60" : ""}`}>
            
            <h1 className="text-center text-xl font-semibold tracking-tight mb-1">Password generator</h1>
            <p className="text-center text-sm mb-4 text-gray-700">Generate strong unique passwords</p>

            <div className="rounded-xl overflow-hidden border border-black/10">
              <div className="bg-gradient-to-b from-white/80 to-white/40 px-4 py-4 flex items-center justify-between gap-3">
                <div className={`font-mono text-lg md:text-xl tracking-wider select-all break-all ${strength.isFire ? "text-purple-700 drop-shadow" : ""}`}>
                  {password}
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => { navigator.clipboard.writeText(password); setCopied(true); setTimeout(() => setCopied(false), 1200); }} className="px-3 py-1.5 rounded-lg bg-black text-white text-sm hover:bg-black/80 transition-colors">
                    {copied ? "Copied" : "Copy"}
                  </button>
                  <button onClick={() => { setHasInteracted(true); regenerate(); }} className="px-3 py-1.5 rounded-lg border border-black/20 hover:bg-black/5 transition-colors">↻</button>
                </div>
              </div>
              <div className={`border-t border-black/10 px-4 py-2 text-sm transition-colors duration-300 ${copied ? "bg-green-100 text-green-900" : strengthStyles[strength.color as keyof typeof strengthStyles]}`}>
                {copied ? "Copied!" : <><span className="font-semibold">{strength.label}:</span> {strength.message}</>}
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">Password length</span>
                  <span className="text-sm font-medium">{length} {length === 25 && uppercase && lowercase && numbers && symbols ? "🔥" : ""}</span>
                </div>
                
                <div className="relative flex items-center h-6">
                  <input
                    type="range"
                    min={min}
                    max={max}
                    value={length}
                    onChange={(e) => { setHasInteracted(true); setLength(Number(e.target.value)); }}
                    className="slider-input w-full appearance-none bg-transparent cursor-pointer z-20"
                    style={{ 
                      background: `linear-gradient(to right, black 0%, black ${((length - min) / (max - min)) * 100}%, rgba(0,0,0,0.1) ${((length - min) / (max - min)) * 100}%, rgba(0,0,0,0.1) 100%)`,
                      height: '6px',
                      borderRadius: '10px'
                    }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Include Uppercase Letters", value: uppercase, setter: setUppercase },
                  { label: "Include Lowercase Letters", value: lowercase, setter: setLowercase },
                  { label: "Include Numbers", value: numbers, setter: setNumbers },
                  { label: "Include Symbols", value: symbols, setter: setSymbols },
                ].map((opt) => (
                  <div key={opt.label} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{opt.label}</span>
                    <button
                      onClick={() => toggle(opt.value, opt.setter)}
                      className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${opt.value ? "bg-black" : "bg-black/10"}`}
                    >
                      <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${opt.value ? "translate-x-5" : "translate-x-0"}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        /* The slider-input class itself is the "track" in many browser eyes */
        .slider-input::-webkit-slider-runnable-track {
          width: 100%;
          height: 6px;
          cursor: pointer;
          border-radius: 10px;
        }

        .slider-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
          /* Perfect centering math: (TrackHeight / 2) - (ThumbHeight / 2) */
          margin-top: -6px; 
        }

        .slider-input::-moz-range-track {
          width: 100%;
          height: 6px;
          cursor: pointer;
          border-radius: 10px;
        }

        .slider-input::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }
      `}</style>
    </main>
  );
}