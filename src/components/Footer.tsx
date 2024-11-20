import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react";
import { footerData } from "@/constants/footer";
import Logo from "./Logo";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const foterDataJsx = footerData.map((item, index) => {
    return (
      <div key={index}>
        <div>
          <p className="font-bold text-slate-200 capitalize mb-4">
            {item.title}
          </p>
          <ul className="list-none space-y-1">
            {item.links.map((l, index) => {
              return <li key={index}>{l}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  });
  return (
    <section id="footer" className="pb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center md:text-start justify-items-stretch">
        <div className="flex flex-col gap-y-4 items-center md:items-start">
          <Logo />
          <p>
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <div className="flex gap-4 items-center">
            <Facebook className="social-link" />
            <Instagram className="social-link" />
            <Twitter className="social-link" />
            <Github className="social-link" />
            <Youtube className="social-link" />
          </div>
        </div>
        {foterDataJsx}
      </div>
      {/* Copyrights */}
      <div className="border-t mt-4 border-slate-700 flex justify-center ">
        <p className="capitalize pt-4 lg:text-start text-center">
          {`© ${currentYear} Omar Rahal. all rights reserved.`}
        </p>
      </div>
      {/* Copyrights */}
    </section>
  );
};

export default Footer;
