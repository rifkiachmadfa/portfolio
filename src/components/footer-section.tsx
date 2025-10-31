import React from "react";
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone,
  Twitter,
  Youtube
} from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ReactElement;
  href: string;
  color: string;
}

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    { 
      name: "Instagram", 
      icon: <Instagram className="w-5 h-5" />, 
      href: "#",
      color: "hover:text-pink-500"
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "#",
      color: "hover:text-blue-500"
    },
    { 
      name: "Twitter", 
      icon: <Twitter className="w-5 h-5" />, 
      href: "#",
      color: "hover:text-sky-500"
    },
    { 
      name: "YouTube", 
      icon: <Youtube className="w-5 h-5" />, 
      href: "#",
      color: "hover:text-red-500"
    }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-slate-300">
            <a 
              href="mailto:hello@example.com" 
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>rifkiachmadfachrezy@gmail.com</span>
            </a>
            <span className="hidden sm:inline text-slate-700">•</span>
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+62 851 5923 0002</span>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            {socialLinks.map((social: SocialLink) => (
              <a
                key={social.name}
                href={social.href}
                className={`w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 ${social.color} transition-all hover:scale-110`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-slate-500 text-sm text-center">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 mt-8"></div>
    </footer>
  );
}