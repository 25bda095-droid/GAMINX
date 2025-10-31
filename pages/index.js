import React, { useState, useEffect } from 'react';
import { Crosshair, Trophy, Zap, Calendar, ArrowRight, Menu, X, Youtube, Twitter, Twitch, Search, Bell, User } from 'lucide-react';

export default function BattleRoyaleHub() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGame, setActiveGame] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
      category: 'Update',
      trending: true
    },
    {
      game: 'apex',
      title: 'New Legend "Phantom" Revealed',
      excerpt: 'Meet the stealth-focused legend changing the meta with teleportation abilities.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
      date: '5 hours ago',
      category: 'Character',
      trending: true
    },
    {
      game: 'warzone',
      title: 'Verdansk Returns in Season 7',
      excerpt: 'Fan-favorite map makes a comeback with new POIs and enhanced graphics.',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80',
      date: '1 day ago',
      category: 'Map',
      trending: false
    },
    {
      game: 'pubg',
      title: 'Competitive Tournament: $2M Prize Pool',
      excerpt: 'Global championship begins next month featuring top 64 teams worldwide.',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80',
      date: '2 days ago',
      category: 'Esports',
      trending: true
    },
    {
      game: 'fortnite',
      title: 'Collaboration Event Announced',
      excerpt: 'Major entertainment franchise crossover coming this weekend with exclusive rewards.',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80',
      date: '3 days ago',
      category: 'Event',
      trending: false
    },
    {
      game: 'apex',
      title: 'Balance Patch 15.2 Live Now',
      excerpt: 'Major weapon adjustments and legend buffs shake up the competitive scene.',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80',
      date: '4 days ago',
      category: 'Patch',
      trending: false
    }
  ];

  const filteredNews = activeGame === 'all' ? news : news.filter(n => n.game === activeGame);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Dynamic Mouse Follower */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 blur-3xl opacity-20 transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-2xl border-b border-purple-500/20 shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg">
                  <Crosshair className="w-8 h-8 text-white transition-transform duration-500 group-hover:rotate-180" />
                </div>
              </div>
              <div>
                <span className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
                  BR NEXUS
                </span>
                <div className="text-xs text-purple-400 font-semibold tracking-widest">COMMAND CENTER</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-12">
              {['News', 'Games', 'Esports', 'Guides'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="relative group text-gray-300 hover:text-white transition-all duration-300 text-lg font-medium"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="p-3 hover:bg-purple-500/10 rounded-xl transition-all duration-300 relative group">
                <Search className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </button>
              <button className="p-3 hover:bg-purple-500/10 rounded-xl transition-all duration-300 relative group">
                <Bell className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <button className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold overflow-hidden group shadow-xl shadow-purple-500/50">
                <span className="relative z-10 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Sign In
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="lg:hidden p-3 hover:bg-purple-500/10 rounded-xl transition-all"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-40 pb-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Live Badge */}
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full backdrop-blur-xl shadow-2xl shadow-purple-500/20">
              <div className="relative">
                <Zap className="w-5 h-5 text-yellow-400" />
                <div className="absolute inset-0 blur-md bg-yellow-400"></div>
              </div>
              <span className="text-sm font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                LIVE UPDATES • BREAKING NEWS
              </span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl lg:text-8xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% 200%' }}>
                Your Battle Royale
              </span>
              <span className="block mt-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-reverse" style={{ backgroundSize: '200% 200%' }}>
                Command Center
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Stay ahead of the competition with <span className="text-purple-400 font-semibold">real-time news</span>, 
              <span className="text-pink-400 font-semibold"> exclusive updates</span>, and 
              <span className="text-blue-400 font-semibold"> premium content</span> from all major battle royale games.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-lg overflow-hidden shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Explore Latest News
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </button>
              
              <button className="px-10 py-5 border-2 border-purple-500/50 rounded-2xl font-bold text-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 backdrop-blur-xl flex items-center shadow-xl">
                <Trophy className="w-6 h-6 mr-3 text-yellow-400" />
                View Tournaments
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Game Filter */}
      <div className="relative z-10 px-8 lg:px-16 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-2xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
            <div className="flex flex-wrap justify-center gap-4">
              {games.map((game) => (
                <button
                  key={game.id}
                  onClick={() => setActiveGame(game.id)}
                  className={`relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 overflow-hidden group ${
                    activeGame === game.id
                      ? 'scale-110 shadow-2xl'
                      : 'hover:scale-105'
                  }`}
                >
                  {activeGame === game.id ? (
                    <>
                      <span className={`relative z-10 bg-gradient-to-r ${game.color} bg-clip-text text-transparent`}>
                        {game.name}
                      </span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${game.color} opacity-20`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${game.color} blur-xl opacity-50`}></div>
                    </>
                  ) : (
                    <span className="relative z-10 text-gray-400 group-hover:text-white transition-colors">
                      {game.name}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="relative z-10 px-8 lg:px-16 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-700 hover:scale-105 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/20"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-6 left-6 flex gap-3">
                    <div className="px-4 py-2 bg-purple-600/90 rounded-full text-sm font-bold backdrop-blur-md shadow-lg">
                      {item.category}
                    </div>
                    {item.trending && (
                      <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-sm font-bold backdrop-blur-md shadow-lg flex items-center">
                        <Zap className="w-4 h-4 mr-1" />
                        Trending
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                    {item.date}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors font-bold group/btn">
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:via-pink-600/10 group-hover:to-blue-600/10 transition-all duration-700 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 px-8 lg:px-16 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-blue-900/40 rounded-[3rem] p-16 border border-purple-500/30 backdrop-blur-2xl overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { value: '500K+', label: 'Active Readers', icon: User, color: 'from-purple-400 to-pink-400' },
                { value: '10K+', label: 'Daily Updates', icon: Zap, color: 'from-blue-400 to-purple-400' },
                { value: '24/7', label: 'Live Coverage', icon: Trophy, color: 'from-pink-400 to-orange-400' }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 border border-purple-500/30">
                    <stat.icon className="w-10 h-10 text-purple-400" />
                  </div>
                  <div className={`text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    {stat.value}
                  </div>
                  <div className="text-xl text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-black/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-xl">
                  <Crosshair className="w-8 h-8 text-white" />
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  BR NEXUS
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The ultimate destination for battle royale gaming news, esports coverage, and exclusive content.
              </p>
            </div>

            {[
              { title: 'Games', links: ['Fortnite', 'Apex Legends', 'Warzone', 'PUBG'] },
              { title: 'Resources', links: ['Guides', 'Esports', 'Community', 'About Us'] },
              { title: 'Company', links: ['Privacy', 'Terms', 'Contact', 'Careers'] }
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-bold text-lg mb-6 text-white">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-800">
            <p className="text-gray-400 text-sm mb-6 md:mb-0">
              &copy; 2024 BR Nexus. All rights reserved. Built for gamers, by gamers.
            </p>
            
            <div className="flex space-x-4">
              {[Twitter, Youtube, Twitch].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-reverse {
          animation: gradient-reverse 3s ease infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }

        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </div>
  );
}
