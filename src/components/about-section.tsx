import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LineChart, 
  Target, 
  Lightbulb, 
  Calendar, 
  TrendingUp, 
  BookOpen,
  BarChart3,
  Users,
  Zap,
  Sparkles,
  Award,
  CheckCircle2
} from "lucide-react";

export default function AboutSection() {
  const skills = [
    { icon: <Target className="w-6 h-6" />, title: "Social Media Strategy", color: "from-cyan-400 to-cyan-600" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Campaign Ideation", color: "from-purple-400 to-purple-600" },
    { icon: <Calendar className="w-6 h-6" />, title: "Content Planning", color: "from-pink-400 to-pink-600" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Paid Ads Optimization", color: "from-cyan-400 to-cyan-600" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Brand Storytelling", color: "from-purple-400 to-purple-600" },
    { icon: <LineChart className="w-6 h-6" />, title: "Analytics & Insights", color: "from-pink-400 to-pink-600" },
  ];

  const tools = [
    { name: "Meta Business Suite", category: "Social Media", gradient: "from-blue-500 to-blue-600", icon: <Users className="w-6 h-6" /> },
    { name: "TikTok Ads", category: "Advertising", gradient: "from-slate-700 to-slate-900", icon: <Target className="w-6 h-6" /> },
    { name: "Google Analytics", category: "Analytics", gradient: "from-orange-500 to-red-500", icon: <BarChart3 className="w-6 h-6" /> },
    { name: "Adobe Photoshop", category: "Design", gradient: "from-blue-600 to-blue-800", icon: <Sparkles className="w-6 h-6" /> },
    { name: "Adobe Illustrator", category: "Design", gradient: "from-orange-500 to-orange-700", icon: <Lightbulb className="w-6 h-6" /> },
    { name: "Adobe Premiere", category: "Video", gradient: "from-purple-600 to-purple-800", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "Adobe After Effects", category: "Motion", gradient: "from-indigo-600 to-purple-700", icon: <Zap className="w-6 h-6" /> },
    { name: "Notion", category: "Productivity", gradient: "from-slate-800 to-slate-900", icon: <BookOpen className="w-6 h-6" /> },
    { name: "Monday", category: "Project Management", gradient: "from-red-500 to-pink-600", icon: <Calendar className="w-6 h-6" /> },
  ];

  const strengths = [
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Data-Driven Approach",
      description: "Setiap campaign dimulai dari analisis data mendalam untuk memastikan strategi yang tepat sasaran.",
      gradient: "from-cyan-500 to-blue-500",
      highlights: [
        "Deep dive analytics & audience insights",
        "Competitor analysis & market research",
        "Performance tracking & optimization"
      ]
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Performance-Focused",
      description: "Mengoptimalkan setiap metric dengan insight yang actionable untuk hasil maksimal.",
      gradient: "from-purple-500 to-pink-500",
      highlights: [
        "ROI & ROAS optimization",
        "A/B testing & experimentation",
        "Conversion rate improvement"
      ]
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Strategic Thinking",
      description: "Menggabungkan kreativitas dengan data analytics untuk menciptakan campaign yang resonan.",
      gradient: "from-pink-500 to-orange-500",
      highlights: [
        "Brand positioning & messaging",
        "Multi-channel campaign strategy",
        "Creative storytelling with data"
      ]
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium border border-slate-200">
            <Sparkles className="w-4 h-4 mr-2 text-slate-600" />
            Get to Know Me
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Transforming data into creative strategies that drive real business results
          </p>
        </div>

        {/* Story Section with Photo - Enhanced */}
        <div className="mb-16 max-w-6xl mx-auto">
          <Card className="border border-slate-200 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-slate-50">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Photo Side */}
                <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-1">
                  <div className="relative h-full min-h-[400px] md:min-h-[600px] bg-slate-100 overflow-hidden group">
                    {/* Placeholder for photo - replace src with actual photo URL */}
                    <img 
                      src="/images/profil.JPG" 
                      alt="Profile"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                    
                    {/* Floating badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-xl">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-sm">Social Media Strategist</p>
                            <p className="text-xs text-slate-600">Data-Driven Campaign Expert</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 sm:p-12 lg:p-14 relative flex flex-col justify-center">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-3xl"></div>
                  
                  <div className="prose prose-lg max-w-none text-slate-700 relative space-y-6">
                    <p className="text-xl leading-relaxed font-light">
                      Perjalanan saya di dunia social media dimulai dari ketertarikan mendalam terhadap 
                      bagaimana data dapat menceritakan kisah sebuah brand. Dari awal karier, saya percaya 
                      bahwa <span className="font-bold text-slate-900 relative inline-block">
                        campaign yang sukses bukan hanya soal konten menarik, 
                        tetapi juga pemahaman mendalam tentang behavior dan preferensi audience
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></span>
                      </span>.
                    </p>
                    <p className="text-xl leading-relaxed font-light">
                      Dengan pengalaman mengelola berbagai brand dan campaign, saya telah mengembangkan 
                      pendekatan unik yang menggabungkan <span className="font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      kreativitas storytelling dengan presisi data analytics</span>. Setiap strategi yang 
                      saya buat selalu dimulai dengan riset mendalam, analisis kompetitor, dan insight 
                      dari data—memastikan setiap keputusan kreatif didukung oleh angka yang solid.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid - Enhanced */}
        <div className="mb-16">
          <div className="text-center mb-8 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Core Expertise</h3>
            <p className="text-lg text-slate-600">Keahlian yang saya kuasai untuk memaksimalkan hasil campaign</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 group overflow-hidden relative bg-white"
              >
                <CardContent className="pt-8 pb-8 px-8 relative z-10">
                  <div className="flex items-center gap-5">
                    <div className={`bg-gradient-to-br ${skill.color} p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {skill.title}
                    </h4>
                  </div>
                </CardContent>
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Data-Driven Strengths - SUPER ENHANCED */}
        <div className="mb-16">
          <div className="text-center mb-12 max-w-6xl mx-auto">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium border border-slate-200 mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-slate-600" />
              What Sets Me Apart
            </Badge>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">My Data-Driven Edge</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Keunggulan utama saya adalah kemampuan menganalisis data untuk menciptakan 
              campaign yang tidak hanya kreatif, tetapi juga terukur dan efektif
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {strengths.map((strength, index) => (
              <Card 
                key={index} 
                className="border-2 border-slate-200 hover:border-transparent bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${strength.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${strength.gradient}`}></div>
                
                <CardContent className="pt-10 pb-10 px-8 relative z-10">
                  {/* Icon with enhanced styling */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${strength.gradient} text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {strength.icon}
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${strength.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {strength.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-base text-center mb-6">
                    {strength.description}
                  </p>
                  
                  {/* Highlights with checkmarks */}
                  <div className="space-y-3 mt-6 pt-6 border-t border-slate-200">
                    {strength.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${strength.gradient} flex items-center justify-center mt-0.5`}>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-sm text-slate-700 font-medium group-hover/item:text-slate-900 transition-colors">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${strength.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-tl-full`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools Section - Enhanced */}
        <div>
          <div className="text-center mb-8 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Tools & Platforms</h3>
            <p className="text-lg text-slate-600">Software dan platform yang saya gunakan sehari-hari</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card className="border border-slate-200 shadow-2xl bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="group relative"
                    >
                      <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300 relative overflow-hidden min-h-[140px]">
                        {/* Icon with gradient background */}
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex items-center justify-center text-white`}>
                          {tool.icon}
                        </div>
                        
                        <div className="text-center relative z-10">
                          <p className="font-bold text-slate-900 text-sm mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                            {tool.name}
                          </p>
                          <p className="text-xs text-slate-500">{tool.category}</p>
                        </div>
                        
                        {/* Gradient overlay on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}