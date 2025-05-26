export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center bg-gradient-to-b from-black to-zinc-900">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
        Reclaim <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Your Mind.</span>
      </h1>
      <p className="text-xl md:text-2xl mb-10 max-w-2xl opacity-70 font-mono leading-relaxed">
        Enter DryMode. Fast from social media. Use your phone intentionally.
      </p>
      <button className="bg-white text-black px-10 py-4 text-lg font-bold tracking-wide hover:bg-gray-200 transition-colors rounded-sm">
        ENTER THE WAITLIST
      </button>
    </section>
  );
} 