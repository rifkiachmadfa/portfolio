import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Sparkles, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);

  // Ganti VIDEO_ID dengan ID video YouTube showreels kamu
  // Contoh: jika URL-nya https://www.youtube.com/watch?v=dQw4w9WgXcQ, maka VIDEO_ID = "dQw4w9WgXcQ"
  const VIDEO_ID = "tBtuKGG6diE";

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "500K+", label: "Followers Managed" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "150%", label: "Avg. Growth Rate" },
    { icon: <Sparkles className="w-5 h-5" />, value: "50+", label: "Brands Worked With" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── YouTube Video Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1`}
          title="Showreel Background"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute w-full h-full"
          style={{
            // Trick agar video selalu cover viewport (16:9 → pilih dimensi terbesar)
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "calc(100vh * 16 / 9)",
            minWidth: "100%",
            height: "calc(100vw * 9 / 16)",
            minHeight: "100%",
            border: "none",
          }}
        />
      </div>

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* ── Gradient overlay bawah untuk fade keluar ── */}
      <div className="absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-black/80 to-transparent" />

      {/* ── Mute / Unmute Button ── */}
      <button
        onClick={() => setIsMuted((prev) => !prev)}
        className="absolute bottom-8 right-8 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm hover:bg-white/20 transition"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        {isMuted ? "Unmute" : "Mute"}
      </button>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white"
            >
              <Sparkles className="w-4 h-4 mr-2 text-white/80" />
              Available for Fulltime work
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
                style={{ backgroundSize: "200% auto" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Rifki Achmad Fachrezy
              </motion.span>

              <motion.span
                className="block text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-4 animate-gradient"
                style={{ backgroundSize: "200% auto", animationDelay: "0.5s" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                Creative Social Media Strategist
              </motion.span>
            </h1>

            <motion.p
              className="max-w-2xl mx-auto text-lg sm:text-xl text-white/70 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              Bandung, Indonesia
            </motion.p>
          </motion.div>

          <style>{`
            @keyframes gradient {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            .animate-gradient {
              animation: gradient 3s ease infinite;
            }
          `}</style>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-white/90 px-8 py-6 text-lg rounded-full shadow-lg font-semibold"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="default"
              className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white px-8 py-6 text-lg rounded-full backdrop-blur-sm"
            >
              Let's Collaborate
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1, ease: "easeOut" }}
              >
                <div className="flex justify-center mb-3 text-white/80">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}