import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Preview from './components/Preview';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Preview />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
