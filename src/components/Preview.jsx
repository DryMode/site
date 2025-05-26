import { useState } from 'react';

export default function Preview() {
  const [isActive, setIsActive] = useState(false);
  
  // Toggle switch handler
  const toggleSwitch = () => {
    setIsActive(!isActive);
  };
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">See it in action</span>
        </h2>
        <p className="text-white/60 font-mono mb-12 max-w-2xl mx-auto">
          A minimalist interface that keeps you accountable.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          <div className="relative mx-auto max-w-[280px]">
            {/* iPhone frame */}
            <div className="relative mx-auto bg-zinc-800 rounded-[42px] h-[580px] w-[280px] shadow-xl border border-zinc-700 overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-40 bg-black rounded-b-3xl z-20"></div>
              
              {/* Speaker */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-zinc-700 rounded-full z-20"></div>
              
              {/* Screen */}
              <div className="absolute inset-0 bg-black rounded-[38px] m-[4px] overflow-hidden">
                {/* Status bar */}
                <div className="h-10 px-6 flex justify-between items-center text-[10px] font-mono text-white/70 pt-1">
                  <div>9:41</div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-white/70 rounded-sm"></div>
                    <div className="w-3 h-3 bg-white/70 rounded-full"></div>
                    <div>100%</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="px-5 pt-6 flex flex-col h-[calc(100%-40px)]">
                  {/* Giant Switch */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-sm font-mono text-white/50">DRYMODE</div>
                      <div className={`text-sm font-mono ${isActive ? 'text-green-500' : 'text-white/50'}`}>
                        {isActive ? 'ACTIVE' : 'INACTIVE'}
                      </div>
                    </div>
                    
                    <button 
                      onClick={toggleSwitch}
                      className="relative w-full h-16 rounded-2xl bg-zinc-900 p-2 flex items-center transition-colors duration-300 overflow-hidden"
                    >
                      {/* Track with background color */}
                      <div className={`absolute inset-0 transition-opacity duration-300 ${isActive ? 'opacity-100 bg-green-800/30' : 'opacity-0'}`}></div>
                      
                      {/* Thumb */}
                      <div 
                        className={`relative z-10 w-[105px] h-12 rounded-xl flex items-center justify-center font-bold bg-white transition-transform duration-300 shadow-lg ${isActive ? 'transform translate-x-[118px] text-green-600' : 'text-black'}`}
                      >
                        {isActive ? 'ON' : 'OFF'}
                      </div>
                    </button>
                  </div>
                  
                  {isActive ? (
                    // Active state
                    <>
                      {/* Timer */}
                      <div className="relative mx-auto w-48 h-48 mb-8">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="46" 
                            fill="none" 
                            stroke="#262626" 
                            strokeWidth="8"
                          />
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="46" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="8" 
                            strokeDasharray="289.02652413026095" 
                            strokeDashoffset="72.25663103256524"
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="text-3xl font-bold">03:42</div>
                          <div className="text-xs font-mono text-white/50">REMAINING</div>
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        <div className="bg-zinc-900 rounded-xl p-4 text-left">
                          <div className="text-sm font-mono text-white/50 mb-1">STREAK</div>
                          <div className="text-2xl font-bold">5 DAYS</div>
                        </div>
                        <div className="bg-zinc-900 rounded-xl p-4 text-left">
                          <div className="text-sm font-mono text-white/50 mb-1">SUCCESS</div>
                          <div className="text-2xl font-bold">78%</div>
                        </div>
                      </div>
                      
                      {/* Apps blocked */}
                      <div className="mb-8">
                        <div className="text-sm font-mono text-white/70 text-left mb-3">APPS BLOCKED</div>
                        <div className="grid grid-cols-4 gap-3">
                          {[
                            { icon: 'X', color: 'bg-zinc-800' },
                            { icon: 'IG', color: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' },
                            { icon: 'FB', color: 'bg-blue-500/20' },
                            { icon: 'YT', color: 'bg-red-500/20' }
                          ].map((app, index) => (
                            <div 
                              key={index} 
                              className={`aspect-square rounded-xl flex items-center justify-center ${app.color}`}
                            >
                              <span className="font-mono text-white/70">{app.icon}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    // Inactive state
                    <>
                      {/* Duration picker */}
                      <div className="bg-zinc-900/50 rounded-xl p-5 mb-8">
                        <div className="flex justify-between items-center mb-5">
                          <div className="text-sm font-mono text-white/70">DURATION</div>
                          <div className="text-xl font-bold">4 HOURS</div>
                        </div>
                        <input 
                          type="range" 
                          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white" 
                          min="1" 
                          max="12" 
                          defaultValue="4"
                        />
                        <div className="flex justify-between text-[10px] font-mono text-white/40 mt-2">
                          <span>1H</span>
                          <span>6H</span>
                          <span>12H</span>
                        </div>
                      </div>
                      
                      {/* Apps to block */}
                      <div className="mb-8">
                        <div className="text-sm font-mono text-white/70 text-left mb-3">APPS TO BLOCK</div>
                        <div className="grid grid-cols-4 gap-3">
                          {[
                            { icon: 'X', color: 'bg-zinc-800' },
                            { icon: 'IG', color: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' },
                            { icon: 'FB', color: 'bg-blue-500/20' },
                            { icon: 'YT', color: 'bg-red-500/20' }
                          ].map((app, index) => (
                            <div 
                              key={index} 
                              className={`aspect-square rounded-xl flex items-center justify-center ${app.color}`}
                            >
                              <span className="font-mono text-white/70">{app.icon}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Instructions */}
                      <div className="text-center mb-6">
                        <p className="text-white/60 font-mono text-sm">
                          Flip the switch to enter DryMode and start your focus session.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Home indicator */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-32 bg-zinc-700 rounded-full"></div>
            </div>
            
            {/* Phone shadow */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[70%] h-4 bg-black/60 blur-xl rounded-full"></div>
          </div>
          
          <div className="md:max-w-sm text-left">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">All or nothing</h3>
                <p className="text-white/60 font-mono">
                  No percentages, no partial success. Either you stayed dry or you didn't.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">Build your streak</h3>
                <p className="text-white/60 font-mono">
                  Track your progress and build momentum with each successful day.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">Simple by design</h3>
                <p className="text-white/60 font-mono">
                  No complicated metrics or gamification - just pure discipline.
                </p>
              </div>
              
              <div className="mt-4">
                <button className="border border-white/20 px-6 py-3 font-mono text-sm hover:bg-white/5 transition-colors">
                  Try It Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* State toggle */}
        <div className="flex justify-center items-center space-x-6 mt-12">
          <button 
            onClick={() => setIsActive(false)}
            className={`px-4 py-1 font-mono text-sm border-b-2 transition-colors ${!isActive ? 'border-white text-white' : 'border-transparent text-white/40 hover:text-white/70'}`}
          >
            OFF
          </button>
          <button 
            onClick={() => setIsActive(true)}
            className={`px-4 py-1 font-mono text-sm border-b-2 transition-colors ${isActive ? 'border-white text-white' : 'border-transparent text-white/40 hover:text-white/70'}`}
          >
            ON
          </button>
        </div>
      </div>
    </section>
  );
} 