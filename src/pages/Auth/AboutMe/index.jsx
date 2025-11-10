import React from "react";
import { Code2, Mail, Coffee, Globe } from "lucide-react";
import ImageMarquee from "../../../components/ui/Marquee/LanguageMarquee";
import {
  FaReact,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import DonateHistory from "../../Public/HistoryDonate";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-12 animate-fade-in">
        <div className="relative">
          <img
            src="https://dkhaidev.vercel.app/me.png"
            alt="Dio Avatar"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-6 tracking-tight">
          Phan Duy Khải
        </h1>
        <p className="text-lg md:text-xl text-cyan-400 mt-2 italic">
          @khaicybers
        </p>
        <p className="text-base md:text-lg text-gray-400 mt-2 max-w-md text-center">
          Web Developer | Đam mê sáng tạo, xây dựng sản phẩm thực tế và học hỏi không ngừng
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-3xl w-full bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 mb-12 transform hover:-translate-y-1 transition-transform duration-300">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-cyan-400" /> Về mình
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Mình là sinh viên năm 3 ngành Công nghệ Thông tin, đam mê lập trình web và phát triển các dự án thực tế. Mình thích khám phá công nghệ mới, tối ưu hóa trải nghiệm người dùng và tạo ra các sản phẩm đẹp mắt, hiệu quả.
        </p>
      </div>

      {/* Skills Section */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8 flex justify-center items-center gap-2">
          <Code2 className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" /> Công nghệ mình dùng
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: <FaReact className="w-6 h-6 text-cyan-400" />, name: "React.js" },
            { icon: <img src="/svg/vite.svg" className="w-6 h-6" alt="Vite" />, name: "Vite" },
            { icon: <FaNodeJs className="w-6 h-6 text-green-400" />, name: "Node.js" },
            { icon: <img src="/svg/firebase.svg" className="w-6 h-6" alt="Firebase" />, name: "Firebase" },
            { icon: <FaGithub className="w-6 h-6 text-white" />, name: "GitHub" },
            { icon: <RiTailwindCssFill className="w-6 h-6 text-cyan-400" />, name: "TailwindCSS" },
            { icon: <RiVercelFill className="w-6 h-6 text-white" />, name: "Vercel" },
            { icon: <img src="/svg/lucide.svg" className="w-6 h-6" alt="Lucide" />, name: "Lucide Icons" },
            { icon: <img src="/svg/daisyui.svg" className="w-8 h-8" alt="DaisyUI" />, name: "DaisyUI" },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {skill.icon}
              <span className="text-sm md:text-base text-gray-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-full max-w-5xl mb-12">
        <ImageMarquee />
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 flex items-center gap-2">
          <Mail className="w-6 h-6 text-cyan-400" /> Liên hệ với mình
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: <FaGithub className="w-8 h-8 text-white" />, link: "https://github.com/khaicybers", label: "GitHub" },
            { icon: <FaFacebook className="w-8 h-8 text-blue-400" />, link: "#", label: "Facebook" },
            { icon: <FaInstagram className="w-8 h-8 text-pink-400" />, link: "#", label: "Instagram" },
            { icon: <FaTiktok className="w-8 h-8 text-white" />, link: "#", label: "TikTok" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-200 hover:text-cyan-400 transition-colors duration-200"
            >
              {social.icon}
              <span className="text-sm md:text-base">{social.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Donate History */}
      <div className="w-full max-w-4xl">
        <DonateHistory />
      </div>
    </div>
  );
};

export default AboutMe;