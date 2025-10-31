import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  Eye,
  Heart,
  Share2,
  Target,
  ArrowUpRight,
  Sparkles,
  BarChart3,
  Zap,
  Instagram,
  Youtube,
  Download,
  MessageCircle
} from "lucide-react";

export default function PortfolioGrid() {
  const [isDownloading, setIsDownloading] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Neatline Eyewear",
      subtitle: "Instagram Campaign",
      category: "Brand Awareness",
      thumbnail: "/images/portfolio/serenity.jpg",
      description: "Kampanye Instagram yang menghadirkan konsep 'simplicity that shines' dengan product photography dan landscape cinematography.",
      metrics: [
        { icon: <Users className="w-4 h-4" />, value: "+245%", label: "Follower", color: "text-cyan-500" },
        { icon: <Eye className="w-4 h-4" />, value: "32k", label: "Reach", color: "text-purple-500" },
        { icon: <Heart className="w-4 h-4" />, value: "12.5%", label: "Engagement", color: "text-pink-500" },
        { icon: <Share2 className="w-4 h-4" />, value: "600++", label: "Shares", color: "text-cyan-500" }
      ],
      results: "meningkatkan brand awareness",
      platform: "Instagram",
      icon: <Instagram className="w-4 h-4" />,
      gradient: "from-purple-500 via-pink-500 to-orange-500"
    },
    {
      id: 2,
      title: "Mount Pilip Roblox",
      subtitle: "Tiktok Campaign",
      category: "Digital Product Launch",
      thumbnail: "/images/portfolio/mtpilip.png",
      description: "Launching server/ map Roblox",
      metrics: [
        { icon: <Eye className="w-4 h-4" />, value: "145k", label: "Views", color: "text-violet-500" },
        { icon: <Heart className="w-4 h-4" />, value: "23.2%", label: "Engagement", color: "text-pink-500" },
        { icon: <Users className="w-4 h-4" />, value: "300k+", label: "Participants", color: "text-purple-500" },
        { icon: <Users className="w-4 h-4" />, value: "1,552", label: "Peak Active Player", color: "text-cyan-500" }
      ],
      results: "meningkatkan kunjungan game lebih dari 500% dalam waktu 1 bulan, yang semula hanya 50k visitors, menjadi 300k visitors",
      platform: "TikTok",
      icon: <Zap className="w-4 h-4" />,
      gradient: "from-cyan-400 via-violet-500 to-purple-600"
    },
    {
      id: 3,
      title: "Prenatal Yoga",
      subtitle: "YouTube Content Series",
      category: "Content Series",
      thumbnail: "/images/portfolio/prenatalyoga.png",
      description: "Series YouTube tutorial, tips, dan trik seputar prenatal yoga untuk ibu hamil.",
      metrics: [
        { icon: <Users className="w-4 h-4" />, value: "+1k", label: "Subscribers", color: "text-red-500" },
        { icon: <Eye className="w-4 h-4" />, value: "120k", label: "Views", color: "text-orange-500" },
        { icon: <BarChart3 className="w-4 h-4" />, value: "3.5min", label: "Watch Time", color: "text-yellow-500" },
        { icon: <Heart className="w-4 h-4" />, value: "15.8%", label: "Engagement", color: "text-pink-500" }
      ],
      results: "180K subscriber baru dengan 89% audience retention rate",
      platform: "YouTube",
      icon: <Youtube className="w-4 h-4" />,
      gradient: "from-red-500 via-orange-500 to-pink-500"
    },
    {
      id: 4,
      title: "Jembatan Pendidikan",
      subtitle: "CroudFunding Campaign",
      category: "Social Impact",
      thumbnail: "/images/portfolio/jembatan.jpg",
      description: "Kampanye sustainability awareness multi-platform dengan data-driven storytelling dan call-to-action yang jelas.",
      metrics: [
        { icon: <Eye className="w-4 h-4" />, value: "12M+", label: "Reach", color: "text-green-500" },
        { icon: <Users className="w-4 h-4" />, value: "85K+", label: "Participants", color: "text-emerald-500" },
        { icon: <Heart className="w-4 h-4" />, value: "22%", label: "Engagement", color: "text-teal-500" },
        { icon: <Target className="w-4 h-4" />, value: "340%", label: "Action Rate", color: "text-cyan-500" }
      ],
      results: "Campaign viral dengan 12M+ reach dan featured di 3 major media outlets",
      platform: "Multi-Platform",
      icon: <Sparkles className="w-4 h-4" />,
      gradient: "from-green-400 via-emerald-500 to-teal-600"
    }
  ];

  // Handler untuk download PDF
  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    
    try {
      // OPSI 1: Jika file PDF sudah ada di folder public
      const link = document.createElement('a');
      link.href = '/documents/portfolio.pdf'; // Ganti dengan path PDF Anda
      link.download = 'Portfolio-Social-Media-Strategist.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // OPSI 2: Jika ingin fetch dari API/server
      // const response = await fetch('/api/download-portfolio');
      // const blob = await response.blob();
      // const url = window.URL.createObjectURL(blob);
      // const link = document.createElement('a');
      // link.href = url;
      // link.download = 'Portfolio-Social-Media-Strategist.pdf';
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
      // window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Maaf, terjadi kesalahan saat mendownload portfolio. Silakan coba lagi.');
    } finally {
      setIsDownloading(false);
    }
  };

  // Handler untuk start project
  const handleStartProject = () => {
  const phoneNumber = '6285159230002'; // Ganti dengan nomor WA Anda (dengan kode negara)
  const message = encodeURIComponent(
    'Hi! Saya tertarik untuk memulai project social media campaign. Bisa kita diskusikan lebih lanjut?'
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-8 px-2 sm:px-4">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium border border-slate-200">
            <Sparkles className="w-4 h-4 mr-2 text-slate-600" />
            Featured Work
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio & Case Studies
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Dive into my campaign stories — where data meets creativity and strategy drives real results
          </p>
        </div>

        {/* Projects Grid 2x2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16 px-2 sm:px-4 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="group overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <CardContent className="p-0">
                {/* Visual Thumbnail */}
                <div className="relative">
                  <div className="h-64 relative overflow-hidden">
                    {/* Background Image or Gradient */}
                    {project.thumbnail.startsWith('/') ? (
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`${project.thumbnail} w-full h-full`}></div>
                    )}
                    
                    {/* Overlay Pattern */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                    
                    {/* Platform Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-white/90 backdrop-blur-sm text-slate-900 border-0 px-3 py-1.5 text-xs font-semibold">
                        <span className="mr-1.5">{project.icon}</span>
                        {project.platform}
                      </Badge>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 px-3 py-1.5 text-xs font-semibold`}>
                        {project.category}
                      </Badge>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Mock Visual Elements - hanya untuk gradient */}
                    {!project.thumbnail.startsWith('/') && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-40 transition-opacity">
                        <div className="text-white text-7xl">📊</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-700 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((metric, idx) => (
                        <div 
                          key={idx}
                          className="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:bg-white hover:shadow-md transition-all"
                        >
                          <div className={`${metric.color} mb-1.5`}>
                            {metric.icon}
                          </div>
                          <div className="text-xl font-bold text-slate-900 mb-0.5">
                            {metric.value}
                          </div>
                          <div className="text-xs text-slate-600">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results Summary */}
                  <div className="mb-4 p-3 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 rounded-lg">
                    <p className="text-xs font-semibold text-slate-900 mb-1 flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1.5 text-cyan-600" />
                      Key Achievements
                    </p>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      {project.results}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold rounded-full px-6 py-5 text-sm group-hover:shadow-xl transition-all"
                  >
                    View Full Case Study
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center px-2 sm:px-4 max-w-6xl mx-auto">
          <Card className="border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-8 sm:p-12 shadow-xl">
            <CardContent className="p-0">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white mb-6">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Let's Create Your Next Success Story
                </h3>
                <p className="text-base sm:text-lg text-slate-600 mb-8">
                  Ready to transform your social media presence with data-driven strategies? 
                  Let's discuss how we can achieve your goals together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={handleStartProject}
                    className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-base sm:text-lg rounded-full group"
                  >
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Start a Project
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={handleDownloadPDF}
                    disabled={isDownloading}
                    className="border-2 border-slate-300 hover:border-slate-900 px-8 py-6 text-base sm:text-lg rounded-full group"
                  >
                    {isDownloading ? (
                      <>
                        <div className="w-5 h-5 mr-2 border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin"></div>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Download Portfolio PDF
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}