export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md px-4 py-5">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="font-bold text-xl tracking-tight">
          <span className="font-mono text-white/80">DRY</span>
          <span className="text-white">MODE</span>
        </div>
      </div>
    </nav>
  );
} 