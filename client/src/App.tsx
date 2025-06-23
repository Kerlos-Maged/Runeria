
// Elder Futhark runes for 'Runeria': ᚱᚢᚾᛖᚱᛁᚨconst runeriaRunes = "ᚱᚢᚾᛖᚱᛁᚨ";

const floatingRunes = [
  { symbol: "ᚠ", style: "left-10 top-20 animate-float1 text-4xl text-[#bfa76f]/60" },
  { symbol: "ᚢ", style: "right-16 top-32 animate-float2 text-5xl text-[#e7d7b6]/50" },
  { symbol: "ᚦ", style: "left-1/3 bottom-16 animate-float3 text-3xl text-[#bfa76f]/40" },
  { symbol: "ᚨ", style: "right-1/4 bottom-24 animate-float4 text-6xl text-[#e7d7b6]/40" },
  { symbol: "ᚱ", style: "left-1/2 top-10 animate-float5 text-4xl text-[#bfa76f]/30" },
  { symbol: "ᚲ", style: "right-1/3 top-1/2 animate-float6 text-5xl text-[#e7d7b6]/30" },
  { symbol: "ᚷ", style: "left-24 bottom-1/3 animate-float7 text-3xl text-[#bfa76f]/50" },
  { symbol: "ᚹ", style: "right-10 bottom-10 animate-float8 text-4xl text-[#e7d7b6]/60" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#23201a] via-[#2d2a26] to-[#1a1813] flex flex-col items-center justify-center font-sans relative overflow-hidden">
      {/* Animated floating runes */}
      {floatingRunes.map((r, i) => (
        <span
          key={i}
          className={`pointer-events-none select-none z-0 fixed ${r.style}`}
          style={{
            filter: 'blur(0.5px)',
            textShadow: '0 0 16px #bfa76f44, 0 0 32px #e7d7b644',
            fontFamily: 'serif',
          }}
        >
          {r.symbol}
        </span>
      ))}
      {/* Glowing rune background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-1/4 w-72 h-72 bg-yellow/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-[#bfa76f]/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute left-1/2 top-1/2 w-40 h-40 bg-[#6e5c3a]/30 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="max-w-2xl w-full flex flex-col items-center p-10 rounded-2xl shadow-2xl bg-[#23201a]/80 border border-[#bfa76f]/60 z-10">
        <h1 className="text-6xl font-extrabold text-[#bfa76f] mb-2 drop-shadow-lg tracking-widest font-serif text-center select-none" title="Runeria">
          {runeriaRunes}
        </h1>
        <h2 className="text-xl text-[#e7d7b6] mb-6 italic text-center font-serif drop-shadow-[0_0_8px_#bfa76f66]">
          <span className="tracking-widest text-[#bfa76f] font-bold">Runeria</span> — The Ancient Rune Arena
        </h2>
        <div className="flex flex-row gap-8 mb-8">
          <span className="text-5xl text-[#bfa76f] drop-shadow-[0_0_12px_#bfa76f99] animate-pulse font-serif">ᚠ</span>
          <span className="text-5xl text-[#bfa76f] drop-shadow-[0_0_12px_#bfa76f99] animate-pulse font-serif">ᚢ</span>
          <span className="text-5xl text-[#bfa76f] drop-shadow-[0_0_12px_#bfa76f99] animate-pulse font-serif">ᚦ</span>
          <span className="text-5xl text-[#bfa76f] drop-shadow-[0_0_12px_#bfa76f99] animate-pulse font-serif">ᚨ</span>
        </div>
        <p className="text-lg text-[#e7d7b6] text-center mb-8 font-medium">
          Step into <span className="text-[#bfa76f] font-bold">Runeria</span>, a world where ancient runes hold the secrets of power, wisdom, and adventure.<br/>
          Discover the magic, learn the lore, and prepare for a journey unlike any other.<br/>
          <span className="text-[#bfa76f]/80">The runes are calling. Will you answer?</span>
        </p>
        <div className="w-full flex justify-center">
          <div className="rounded-full bg-gradient-to-tr from-[#bfa76f]/30 via-[#e7d7b6]/10 to-[#23201a]/40 p-1 shadow-lg">
            <div className="rounded-full bg-[#23201a]/90 p-8 flex flex-col items-center border-2 border-[#bfa76f]/40 shadow-inner">
              <span className="text-7xl text-[#bfa76f] drop-shadow-[0_0_18px_#bfa76f99] mb-2 font-serif">ᚱ</span>
              <span className="text-lg text-[#e7d7b6] font-bold tracking-widest">Rune of Destiny</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-12 text-[#bfa76f]/70 text-xs opacity-80 z-10">&copy; {new Date().getFullYear()} Runeria - A Magical Rune World</footer>
      {/* Custom floating rune animations */}
      <style>{`
        @keyframes float1 { 0%{transform:translateY(0)} 50%{transform:translateY(-30px) rotate(-8deg)} 100%{transform:translateY(0)} }
        @keyframes float2 { 0%{transform:translateY(0)} 50%{transform:translateY(40px) rotate(6deg)} 100%{transform:translateY(0)} }
        @keyframes float3 { 0%{transform:translateX(0)} 50%{transform:translateX(-30px) rotate(-12deg)} 100%{transform:translateX(0)} }
        @keyframes float4 { 0%{transform:translateX(0)} 50%{transform:translateX(30px) rotate(10deg)} 100%{transform:translateX(0)} }
        @keyframes float5 { 0%{transform:translateY(0)} 50%{transform:translateY(-20px) rotate(4deg)} 100%{transform:translateY(0)} }
        @keyframes float6 { 0%{transform:translateY(0)} 50%{transform:translateY(25px) rotate(-6deg)} 100%{transform:translateY(0)} }
        @keyframes float7 { 0%{transform:translateX(0)} 50%{transform:translateX(20px) rotate(8deg)} 100%{transform:translateX(0)} }
        @keyframes float8 { 0%{transform:translateY(0)} 50%{transform:translateY(-25px) rotate(-8deg)} 100%{transform:translateY(0)} }
        .animate-float1 { animation: float1 7s ease-in-out infinite; }
        .animate-float2 { animation: float2 8s ease-in-out infinite; }
        .animate-float3 { animation: float3 9s ease-in-out infinite; }
        .animate-float4 { animation: float4 7.5s ease-in-out infinite; }
        .animate-float5 { animation: float5 6.5s ease-in-out infinite; }
        .animate-float6 { animation: float6 8.5s ease-in-out infinite; }
        .animate-float7 { animation: float7 10s ease-in-out infinite; }
        .animate-float8 { animation: float8 9.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
