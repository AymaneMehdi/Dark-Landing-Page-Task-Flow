import XIcon from "../assets/icons/x.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import InstaIcon from "../assets/icons/insta.svg";
export const Footer = () => {
  return (
    <div className="bg-black text-white/60 border border-white/20 py-8">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            © 2026 Aymane Mehdi. All rights reserved.
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <XIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
            <li>
              <InstaIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
