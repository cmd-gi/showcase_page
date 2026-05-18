import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "Photos" | "Videos" | "Webpages";
const TABS: Tab[] = ["Photos", "Videos", "Webpages"];

const MOCK_VIDEOS = [
  { id: 1, title: "Sanchi Video", tags: ["Cinematic", "Motion"], url: "https://res.cloudinary.com/drjczsj9l/video/upload/q_auto/f_auto/v1779079788/Sanchi_2_nc_jqberd.mp4", size: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Promo Reel", tags: ["Commercial"], url: "https://res.cloudinary.com/drjczsj9l/video/upload/q_auto/f_auto/v1779079702/e_tpkvuf.mp4", size: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "GPS Campaign", tags: ["Advertising"], url: "https://res.cloudinary.com/drjczsj9l/video/upload/q_auto/f_auto/v1779079647/GPS_wzaate.mp4", size: "md:col-span-1 md:row-span-1" },
  { id: 4, title: "Elixra In", tags: ["Showcase", "VFX"], url: "https://res.cloudinary.com/drjczsj9l/video/upload/q_auto/f_auto/v1779079391/elixra_in_vqrrrs.mp4", size: "md:col-span-3 md:row-span-2" },
];

const MOCK_PHOTOS = [
  { id: 1, title: "Poster 0", src: "/posters/0.png" },
  { id: 2, title: "Poster 01", src: "/posters/01.png" },
  { id: 3, title: "Poster 1", src: "/posters/1.png" },
  { id: 4, title: "Poster 2", src: "/posters/2.png" },
  { id: 5, title: "Poster 3", src: "/posters/3.png" },
  { id: 6, title: "Poster 4", src: "/posters/4.png" },
  { id: 7, title: "Poster 10", src: "/posters/10.png" },
  { id: 8, title: "ABC APl", src: "/posters/ABC APl.png" },
  { id: 9, title: "Anjani Boys Circle", src: "/posters/Anjani Boys Circle (2).png" },
  { id: 10, title: "Breaking Bad", src: "/posters/Breaking Bad.png" },
  { id: 11, title: "Invitation poster", src: "/posters/Invitation_poster _F1.png" },
  { id: 12, title: "Modeste BLR", src: "/posters/Modeste BLR.png" },
  { id: 13, title: "NAMO KEREJAL APL", src: "/posters/NAMO KEREJAL APL.png" },
  { id: 14, title: "Namma Arasinamakki", src: "/posters/Namma Arasinamakki.png" },
  { id: 15, title: "Namo Kerejal JT26", src: "/posters/Namo Kerejal JT26.png" },
  { id: 16, title: "Nawchethana", src: "/posters/Nawchethana.png" },
  { id: 17, title: "Nikki Brotehrs APL", src: "/posters/Nikki Brotehrs APL.png" },
  { id: 18, title: "Owners", src: "/posters/Owners.png" },
  { id: 19, title: "Poster2", src: "/posters/Poster2.png" },
  { id: 20, title: "Sarathi Friends", src: "/posters/Sarathi Friends.png" },
  { id: 21, title: "Shetty Brother's", src: "/posters/Shetty Brother's (3).png" },
  { id: 22, title: "Shetty Brother's", src: "/posters/Shetty Brother's (4).png" },
  { id: 23, title: "Shivagiri Strikers", src: "/posters/Shivagiri Strikers.png" },
  { id: 24, title: "TEAM US Nidle", src: "/posters/TEAM US Nidle (1).png" },
  { id: 25, title: "Team Anjani", src: "/posters/Team Anjani.png" },
  { id: 26, title: "Team Sarathi", src: "/posters/Team Sarathi.png" },
  { id: 27, title: "Untitled design", src: "/posters/Untitled design (51).png" },
  { id: 28, title: "Wedding Invitation", src: "/posters/Wedding Invitation.png" },
  { id: 29, title: "Charan", src: "/posters/charan 8951448408.png" },
  { id: 30, title: "h2", src: "/posters/h2.png" }
];

const MOCK_WEB = [
  { id: 1, title: "Phoenix Marketing", stack: ["React", "Next.js"], url: "https://phoenix-marketing.vercel.app/" },
  { id: 2, title: "A1 v2 Portfolio", stack: ["Next.js", "Framer"], url: "https://a1-v2.vercel.app/" },
  { id: 3, title: "Agency Landing Page", stack: ["React", "Tailwind"], url: "https://agency-landing-page-tan-mu.vercel.app/" },
  { id: 4, title: "A1 Decorators", stack: ["Web", "UI/UX"], url: "https://a1decorators.vercel.app/" },
];

export default function Works() {
  const [activeTab, setActiveTab] = useState<Tab>("Photos");

  return (
    <section id="works" className="py-32 bg-[#111111] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold">Selected Works</h2>
          
          <div className="flex gap-2 p-1 bg-black/50 rounded-full border border-white/10 w-fit">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab ? "text-white" : "text-muted-foreground hover:text-white"
                }`}
                data-testid={`tab-${tab.toLowerCase()}`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/20 rounded-full border border-primary/50"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === "Videos" && <VideosGrid />}
              {activeTab === "Photos" && <PhotosGrid />}
              {activeTab === "Webpages" && <WebGrid />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function VideosGrid() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [loadingIds, setLoadingIds] = useState<Record<number, boolean>>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handlePlay = (id: number) => {
    Object.entries(videoRefs.current).forEach(([key, videoEl]) => {
      if (videoEl && parseInt(key) !== id) {
        videoEl.pause();
      }
    });
    setPlayingId(id);
  };

  const handleWaiting = (id: number) => {
    setLoadingIds(prev => ({ ...prev, [id]: true }));
  };

  const handleCanPlay = (id: number) => {
    setLoadingIds(prev => ({ ...prev, [id]: false }));
  };

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 w-full">
      {MOCK_VIDEOS.map((video) => (
        <motion.div
          key={video.id}
          className="group relative rounded-2xl overflow-hidden bg-black border border-white/5 w-full break-inside-avoid"
        >
          {loadingIds[video.id] && (
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black/40 backdrop-blur-sm">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          
          <video 
            ref={el => {
              if (el) videoRefs.current[video.id] = el;
            }}
            src={video.url}
            controls
            preload="none"
            poster={video.url.replace('.mp4', '.jpg')}
            className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-500 relative z-20"
            onPlay={() => handlePlay(video.id)}
            onWaiting={() => handleWaiting(video.id)}
            onPlaying={() => handleCanPlay(video.id)}
            onCanPlay={() => handleCanPlay(video.id)}
            loop={false}
          />
          
          <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-30">
            <h3 className="font-display text-xl font-bold text-white mb-2">{video.title}</h3>
            <div className="flex gap-2">
              {video.tags.map((tag) => (
                <span key={tag} className="text-xs text-primary font-medium bg-black/40 px-2 py-1 rounded border border-white/10 backdrop-blur-sm">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function PhotosGrid() {
  const [showAll, setShowAll] = useState(false);
  const displayedPhotos = showAll ? MOCK_PHOTOS : MOCK_PHOTOS.slice(0, 6);

  const handleToggle = () => {
    if (showAll) {
      document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
      // Small delay to allow scroll to start before collapsing the grid
      setTimeout(() => setShowAll(false), 400);
    } else {
      setShowAll(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 w-full">
        {displayedPhotos.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 0.98 }}
            className="group relative rounded-2xl overflow-hidden bg-card border border-white/5 cursor-pointer w-full break-inside-avoid"
          >
            <img 
              src={photo.src} 
              alt={photo.title} 
              className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="font-display text-lg font-bold text-white">{photo.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      
      {MOCK_PHOTOS.length > 6 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleToggle}
          className={
            showAll 
              ? "fixed bottom-12 left-1/2 -translate-x-1/2 z-50 px-8 py-3 rounded-full bg-primary text-primary-foreground shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:shadow-[0_0_30px_rgba(255,106,0,0.6)] hover:scale-105 transition-all duration-300 font-medium text-sm flex items-center gap-2"
              : "mt-12 px-8 py-3 rounded-full border border-white/10 text-white/80 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm flex items-center gap-2"
          }
        >
          {showAll ? "Show Less" : "View More Posters"}
        </motion.button>
      )}
    </div>
  );
}

function WebGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {MOCK_WEB.map((web) => (
        <motion.div
          key={web.id}
          whileHover={{ y: -5 }}
          className="rounded-xl overflow-hidden bg-card border border-white/10 group"
        >
          {/* Browser Frame */}
          <div className="h-8 bg-black/50 border-b border-white/10 flex items-center px-4 gap-2 relative z-20">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          
          {/* Iframe Preview Container */}
          <div className="h-64 relative overflow-hidden bg-black z-10">
            <div className="absolute inset-0 z-20 pointer-events-none" /> {/* Prevents scrolling the iframe directly */}
            <iframe 
              src={web.url}
              className="w-[250%] h-[250%] border-0 transform scale-[0.4] origin-top-left pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              tabIndex={-1}
              loading="lazy"
            />
          </div>

          <div className="p-6 relative z-30">
            <h3 className="font-display text-xl font-bold text-white mb-3">{web.title}</h3>
            <div className="flex gap-2 mb-6">
              {web.stack.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-white/70 border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a 
                href={web.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium bg-white text-black px-4 py-2 rounded hover:bg-white/90 transition-colors inline-block"
              >
                Live Preview
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
