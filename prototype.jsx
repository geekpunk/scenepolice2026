import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Disc, ChevronLeft, ChevronRight, ExternalLink, ArrowRight, Play, Mail, MapPin } from 'lucide-react';

// --- MOCK DATA ---
const RELEASES = [
  {
    id: 1,
    artist: "The Silent Hearts",
    title: "Echoes in the Void",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800",
    link: "https://scenepolice.bandcamp.com/",
    type: "LP / Digital",
    date: "New Release"
  },
  {
    id: 2,
    artist: "Midnight Syndicate",
    title: "Neon Dreams",
    cover: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=800",
    link: "https://scenepolice.bandcamp.com/",
    type: "EP / Digital",
    date: "Available Now"
  },
  {
    id: 3,
    artist: "Urban Decay",
    title: "Concrete Jungle",
    cover: "https://images.unsplash.com/photo-1605722243979-fc0e5f21287c?auto=format&fit=crop&q=80&w=800",
    link: "https://scenepolice.bandcamp.com/",
    type: "Cassette / Digital",
    date: "Available Now"
  },
  {
    id: 4,
    artist: "Aurora",
    title: "Fading Light",
    cover: "https://images.unsplash.com/photo-1493225457124-a1a2a5f57a4b?auto=format&fit=crop&q=80&w=800",
    link: "https://scenepolice.bandcamp.com/",
    type: "7\" Vinyl",
    date: "Sold Out"
  },
  {
    id: 5,
    artist: "Static Age",
    title: "White Noise",
    cover: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=800",
    link: "https://scenepolice.bandcamp.com/",
    type: "Digital",
    date: "Available Now"
  },
  {
    id: 6,
    artist: "The Voids",
    title: "Nothing Left",
    cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    link: "https://scenepolice.bandcamp.com/",
    type: "12\" Vinyl",
    date: "Available Now"
  }
];

const NEWS = [
  {
    id: 1,
    date: "October 24, 2026",
    title: "The Silent Hearts - Pre-orders are live!",
    excerpt: "We are beyond stoked to announce that pre-orders for the debut LP from The Silent Hearts are now live on our Bandcamp. Limited to 300 copies on transparent seafoam green vinyl."
  },
  {
    id: 2,
    date: "September 12, 2026",
    title: "Welcome Midnight Syndicate to the family",
    excerpt: "Please give a warm welcome to our newest signees, Midnight Syndicate. We'll be dropping their phenomenal new synth-wave EP 'Neon Dreams' early next month."
  },
  {
    id: 3,
    date: "August 05, 2026",
    title: "Summer Tour Dates Announced",
    excerpt: "Urban Decay and Aurora will be hitting the road together this summer across the Midwest and East Coast. Check the tour section for dates and ticket links."
  }
];

// --- COMPONENTS ---

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] bg-zinc-900 overflow-hidden group">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={item.cover} 
              alt={item.title} 
              className="w-full h-full object-cover opacity-50 blur-sm scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-8 max-w-6xl mx-auto z-10">
            <div className="w-48 h-48 md:w-80 md:h-80 shadow-2xl shrink-0 overflow-hidden rounded-sm group-hover:scale-[1.02] transition-transform duration-500">
              <img src={item.cover} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left text-white max-w-lg">
              <span className="uppercase tracking-widest text-xs font-bold text-indigo-400 mb-2 block">
                {item.date}
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter leading-tight">
                {item.title}
              </h2>
              <p className="text-xl md:text-3xl font-light text-zinc-300 mb-8">
                {item.artist}
              </p>
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold text-sm tracking-wide uppercase hover:bg-indigo-600 hover:text-white transition-colors rounded-full"
              >
                Listen / Buy <Play className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      ))}
      
      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// --- PAGES ---

const Home = () => (
  <div className="animate-in fade-in duration-500">
    <Carousel items={RELEASES.slice(0, 3)} />
    
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex items-baseline justify-between mb-12">
        <h3 className="text-3xl font-black tracking-tighter text-zinc-900 uppercase">Latest News</h3>
        <span className="w-full max-w-[200px] md:max-w-md h-px bg-zinc-200 ml-4 hidden sm:block"></span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {NEWS.map((item) => (
          <article key={item.id} className="group cursor-pointer">
            <time className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3 block">
              {item.date}
            </time>
            <h4 className="text-xl font-bold mb-3 text-zinc-900 group-hover:text-indigo-600 transition-colors leading-snug">
              {item.title}
            </h4>
            <p className="text-zinc-600 leading-relaxed">
              {item.excerpt}
            </p>
            <div className="mt-4 flex items-center text-sm font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
              Read More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </article>
        ))}
      </div>
    </section>
  </div>
);

const Releases = () => (
  <div className="py-20 px-4 md:px-8 max-w-6xl mx-auto animate-in fade-in duration-500">
    <div className="mb-16 text-center">
      <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 uppercase mb-4">Releases</h2>
      <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Browse our catalog. Every purchase directly supports the artists and helps keep the label running.</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {RELEASES.map((release) => (
        <a 
          key={release.id} 
          href={release.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative aspect-square overflow-hidden bg-zinc-100 mb-6 rounded-sm">
            <img 
              src={release.cover} 
              alt={release.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-indigo-600 text-white p-4 rounded-full">
                <Play className="w-8 h-8 ml-1" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                {release.title}
              </h3>
            </div>
            <p className="text-lg text-zinc-500 mb-2">{release.artist}</p>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-2 py-1 bg-zinc-100 text-zinc-600 rounded">
                {release.type}
              </span>
              <span className="text-xs font-medium text-zinc-400">
                {release.date}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const About = () => (
  <div className="py-20 px-4 md:px-8 max-w-4xl mx-auto animate-in fade-in duration-500">
    <div className="mb-16">
      <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 uppercase mb-4">About Us</h2>
    </div>
    
    <div className="prose prose-lg prose-zinc max-w-none">
      <p className="text-2xl text-zinc-800 leading-relaxed font-light mb-8">
        Scene Police is an independent record label dedicated to releasing music that matters. Founded on DIY ethics and a passion for community, we strive to amplify voices that deserve to be heard.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-zinc-600 mb-6">
            We operate with complete transparency and a focus on artist-friendly deals. Whether it's a small cassette run or a worldwide vinyl release, we treat every project with the exact same care and dedication.
          </p>
          <p className="text-zinc-600">
            Based nowhere and everywhere, our roster spans across genres—from ethereal synth-pop to abrasive post-hardcore. Good music is good music.
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800" 
            alt="Record Collection" 
            className="w-full h-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
      
      <div className="mt-16 p-8 bg-zinc-100 rounded-sm border border-zinc-200">
        <h3 className="text-xl font-bold mb-2">Demo Policy</h3>
        <p className="text-zinc-600 mb-0">
          We are currently accepting demos. Please send a streaming link (Soundcloud, Bandcamp private link, etc.) to our contact email. Do not attach large audio files directly. We try to listen to everything, but due to volume, we may not reply unless we are interested.
        </p>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! We will get back to you soon.');
    e.target.reset();
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="py-20 px-4 md:px-8 max-w-6xl mx-auto animate-in fade-in duration-500">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 uppercase mb-6">Get in Touch</h2>
          <p className="text-xl text-zinc-600 mb-12 font-light">
            Questions about an order? Want to submit a demo? Just want to say hi? Drop us a line.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900">Email Us</h4>
                <a href="mailto:info@scenepolice.com" className="text-zinc-600 hover:text-indigo-600 transition-colors">info@scenepolice.com</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900">Mailing Address</h4>
                <p className="text-zinc-600">
                  Scene Police Records<br />
                  PO Box 12345<br />
                  Nowhere City, NC 00000
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 md:p-10 shadow-xl shadow-zinc-200/50 rounded-xl border border-zinc-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-zinc-900">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-zinc-900">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-bold text-zinc-900">Subject</label>
              <select 
                id="subject"
                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
              >
                <option>General Inquiry</option>
                <option>Store / Order Issue</option>
                <option>Demo Submission</option>
                <option>Press / Media</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-zinc-900">Message</label>
              <textarea 
                id="message" 
                rows="5"
                required
                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-zinc-900 hover:bg-indigo-600 text-white font-bold py-4 rounded transition-colors"
            >
              Send Message
            </button>
            {status && (
              <p className="text-sm font-medium text-emerald-600 text-center bg-emerald-50 py-3 rounded">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};


// --- MAIN APP ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'releases', label: 'Releases' },
    { id: 'merch', label: 'Merch', isExternal: true, link: 'https://scenepolice.bandcamp.com/merch' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (item) => {
    if (item.isExternal) {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    } else {
      setCurrentPage(item.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'releases': return <Releases />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-indigo-200 selection:text-indigo-900 flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-zinc-50/90 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo area */}
            <div 
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => handleNavClick({ id: 'home' })}
            >
              {/* Using the provided dark logo. 
                'invert' flips black to white and white to black.
                'mix-blend-multiply' makes the new white background transparent on the light UI.
              */}
              <img 
                src="sp-logo-dark.png" 
                alt="Scene Police Logo" 
                className="h-14 md:h-16 invert mix-blend-multiply transition-transform group-hover:scale-105"
              />
              <span className="text-xl md:text-2xl font-black tracking-tighter uppercase hidden sm:block mt-2">
                Scene Police
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-1 ${
                    currentPage === item.id && !item.isExternal 
                      ? 'text-indigo-600' 
                      : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  {item.label}
                  {item.isExternal && <ExternalLink className="w-3 h-3 mb-1" />}
                </button>
              ))}
              
              <div className="w-px h-6 bg-zinc-300 mx-2"></div>
              
              <div className="flex items-center gap-4 text-zinc-400">
                <a href="https://instagram.com/scenepolice" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://scenepolice.bandcamp.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                  <Disc className="w-5 h-5" />
                </a>
              </div>
            </nav>

            {/* Mobile Nav Toggle */}
            <button 
              className="md:hidden p-2 text-zinc-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-zinc-200 shadow-xl py-4 px-4 animate-in slide-in-from-top-4">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`text-left text-lg font-bold uppercase tracking-wider py-2 flex items-center justify-between border-b border-zinc-100 ${
                    currentPage === item.id && !item.isExternal ? 'text-indigo-600' : 'text-zinc-600'
                  }`}
                >
                  {item.label}
                  {item.isExternal && <ExternalLink className="w-4 h-4 text-zinc-400" />}
                </button>
              ))}
              <div className="flex gap-6 mt-4 pt-4 text-zinc-400">
                <a href="https://instagram.com/scenepolice" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-900">
                  <Instagram className="w-6 h-6" /> <span className="font-medium text-sm">Instagram</span>
                </a>
                <a href="https://scenepolice.bandcamp.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-900">
                  <Disc className="w-6 h-6" /> <span className="font-medium text-sm">Bandcamp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-12 items-center">
          
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="sp-logo-dark.png" 
              alt="Scene Police" 
              className="h-16 mb-6 opacity-50 hover:opacity-100 transition-opacity"
            />
            <p className="text-sm text-center md:text-left">
              Fiercely independent.<br/>
              Supporting the underground since day one.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Connect</h4>
            <div className="flex gap-6">
              <a href="https://instagram.com/scenepolice" className="hover:text-white transition-colors p-2 bg-zinc-800 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://scenepolice.bandcamp.com" className="hover:text-white transition-colors p-2 bg-zinc-800 rounded-full">
                <Disc className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end text-sm">
            <div className="flex gap-4 mb-4 font-bold uppercase tracking-wider text-xs">
              <button onClick={() => { setCurrentPage('about'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">About</button>
              <button onClick={() => { setCurrentPage('contact'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Contact</button>
              <a href="https://scenepolice.bandcamp.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Store</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Scene Police Records.</p>
            <p className="mt-1 text-zinc-600">All rights reserved.</p>
          </div>
          
        </div>
      </footer>
    </div>
  );
}