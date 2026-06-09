import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full px-6 pb-6">

      <div className="w-full bg-[#fff5f7]/80 backdrop-blur-md border border-[#ffc1cc] rounded-full px-8 py-4 flex items-center justify-center gap-10 shadow-md">

        {/* EMAIL */}
        <a
          href="mailto:selmazanoun9@gmail.com"
          className="hover:scale-110 transition flex items-center gap-2 text-[#ac3156]"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/mistyduchess"
          target="_blank"
          className="hover:scale-110 transition flex items-center gap-2 text-[#ac3156]"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/selma-zanoun-868197315/"
          target="_blank"
          className="hover:scale-110 transition flex items-center gap-2 text-[#ac3156]"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

      </div>

    </div>
  );
}

export default Footer;