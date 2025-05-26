import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="py-24 px-4 bg-gradient-to-b from-black to-zinc-950">
      {/* Main CTA Section */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="relative overflow-hidden bg-zinc-900/50 rounded-lg p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/0 via-white/5 to-zinc-900/0 animate-pulse"></div>
          
          <div className="relative bg-black rounded-lg p-12 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">Break free from digital noise</span>
              </h2>
              
              <p className="text-xl md:text-2xl mb-12 font-mono opacity-70 max-w-2xl mx-auto leading-relaxed">
                Ready to take back control of your attention and reclaim your mental clarity?
              </p>
              
              <form onSubmit={handleSubmit} className="relative max-w-md mx-auto mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-zinc-900/70 border border-white/10 px-6 py-4 font-mono text-white rounded-lg focus:outline-none focus:border-white/40 pr-36"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-white text-black px-6 font-bold hover:bg-gray-200 transition-colors rounded-lg"
                >
                  JOIN WAITLIST
                </button>
              </form>
              
              {submitted && (
                <p className="text-green-400 font-mono animate-fadeIn">
                  You're in! We'll be in touch soon.
                </p>
              )}
              
              {!submitted && (
                <p className="text-white/50 text-sm font-mono">
                  Be the first to know when we launch. No spam, ever.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Links & Copyright */}
      <div className="max-w-4xl mx-auto">
        <div className="pt-10 border-t border-white/10 text-white/40 text-sm font-mono flex flex-col md:flex-row justify-between items-center">
          <div>&copy; {new Date().getFullYear()} DryMode</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 