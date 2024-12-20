

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li> Cookies Preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Givet Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="Service_Code">
          <p>Service Code.</p>
        </div>
        <div className="copy_write">&copy;2024 Netflix, int Beyu.</div>
      </div>
    </div>
  );
};

export default Footer;
