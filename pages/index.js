import React, { useState, useEffect } from 'react';
import { Crosshair, Trophy, Zap, Calendar, ArrowRight, Menu, X, Youtube, Twitter, Twitch } from 'lucide-react';

export default function BattleRoyaleHub() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGame, setActiveGame] = useState('all');
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    setAnimateHero(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const games = [
    { id: 'all', name: 'All Games', color: 'from-purple-500 to-pink-500' },
    { id: 'fortnite', name: 'Fortnite', color: 'from-blue-500 to-purple-500' },
    { id: 'apex', name: 'Apex Legends', color: 'from-red-500 to-orange-500' },
    { id: 'warzone', name: 'Warzone', color: 'from-green-500 to-teal-500' },
    { id: 'pubg', name: 'PUBG', color: 'from-yellow-500 to-red-500' }
  ];

  const news = [
    {
      game: 'fortnite',
      title: 'New Season Launch: Zero Point Collides',
      excerpt: 'Experience the biggest map changes yet with reality-bending mechanics and exclusive skins.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
      date: '2 hours ago',
      category: 'Update'
    },
    {
      game: 'apex',
      title: 'New Legend "Phantom" Revealed',
      excerpt: 'Meet the stealth-focused legend changing the meta with teleportation abilities.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
      date: '5 hours ago',
      category: 'Character'
    },
    {
      game: 'warzone',
      title: 'Verdansk Returns in Season 7',
      excerpt: 'Fan-favorite map makes a comeback with new POIs and enhanced graphics.',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80',
      date: '1 day ago',
      category: 'Map'
    },
    {
      game: 'pubg',
      title: 'Competitive Tournament: $2M Prize Pool',
      excerpt: 'Global championship begins next month featuring top 64 teams worldwide.',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80',
      date: '2 days ago',
      category: 'Esports'
    },
    {
      game: 'fortnite',
      title: 'Collaboration Event Announced',
      excerpt: 'Major entertainment franchise crossover coming this weekend with exclusive rewards.',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80',
      date: '3 days ago',
      category: 'Event'
    },
    {
      game: 'apex',
      title: 'Balance Patch 15.2 Live Now',
      excerpt: 'Major weapon adjustments and legend buffs shake up the competitive scene.',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80',
      date: '4 days ago',
      category: 'Patch'
    }
  ];

  const filteredNews = activeGame === 'all' ? news : news.filter(n => n.game === activeGame);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 0, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(0, 150, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(255, 0, 150, 0.1) 0%, transparent 50%)`,
          animation: 'pulse 8s ease-in-out infinite'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <Crosshair className="w-10 h-10 text-purple-500 transition-transform duration-500 group-hover:rotate-180" />
                <div className="absolute inset-0 blur-xl bg-purple-500/50 group-hover:bg-purple-500/70 transition-all"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                BR NEXUS
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['News', 'Games', 'Esports', 'Guides'].map((item) => (
                <a key={item} href="#" className="relative group text-gray-300 hover:text-white transition-colors">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button className="relative px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden group">
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20">
            <div className="px-4 py-6 space-y-4">
              {['News', 'Games', 'Esports', 'Guides'].map((item) => (
                <a key={item} href="#" className="block text-gray-300 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm text-purple-300">Live Updates • Breaking News</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Your Battle Royale Command Center
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Stay ahead of the competition with real-time news, updates, and exclusive content from all major battle royale games.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold overflow-hidden">
              <span className="relative z-10 flex items-center">
                Explore Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-purple-500/50 rounded-full font-semibold hover:bg-purple-500/10 transition-all backdrop-blur-sm">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>

      {/* Game Filter */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setActiveGame(game.id)}
                className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeGame === game.id
                    ? `bg-gradient-to-r ${game.color} scale-110 shadow-2xl`
                    : 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white'
                }`}
              >
                {game.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600/90 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>

                  <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-3xl p-12 border border-purple-500/30 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  500K+
                </div>
                <div className="text-gray-400">Active Readers</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  10K+
                </div>
                <div className="text-gray-400">Daily Updates</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-gray-400">Live Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Crosshair className="w-8 h-8 text-purple-500" />
                <span className="text-xl font-bold">BR NEXUS</span>
              </div>
              <p className="text-gray-400 text-sm">
                The ultimate destination for battle royale gaming news and updates.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Games</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Fortnite</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apex Legends</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warzone</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PUBG</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Esports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Twitch className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 BR Nexus. All rights reserved. Built for gamers, by gamers.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
