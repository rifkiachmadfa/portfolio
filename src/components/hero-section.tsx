import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function HeroSection() {
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "500K+", label: "Followers Managed" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "150%", label: "Avg. Growth Rate" },
    { icon: <Sparkles className="w-5 h-5" />, value: "50+", label: "Brands Worked With" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 via-slate-50 to-gray-100">
      {/* Content */}
      <BackgroundRippleEffect 
        rows={8} 
        cols={27} 
        cellSize={56}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border border-slate-200">
              <Sparkles className="w-4 h-4 mr-2 text-slate-600" />
              Available for Freelance Projects
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
                className="block bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Rifki Achmad Fachrezy
              </motion.span>
              <motion.span 
                className="block text-2xl sm:text-3xl lg:text-4xl font-semibold bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent mt-4 animate-gradient bg-size-[200%_auto] [animation-delay:0.5s]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                Creative Social Media Strategist
              </motion.span>
            </h1>
            <motion.p 
              className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              Crafting engaging content strategies that drive growth, 
              boost engagement, and build authentic communities across all platforms.
            </motion.p>
          </motion.div>

          <style>{`
            @keyframes gradient {
              0%, 100% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
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
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg rounded-full shadow-lg">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:border-slate-900 px-8 py-6 text-lg rounded-full">
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
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + (index * 0.1), ease: "easeOut" }}
              >
                <div className="flex justify-center mb-3 text-slate-700">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
}