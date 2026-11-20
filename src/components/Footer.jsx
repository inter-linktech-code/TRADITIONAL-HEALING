import { Link } from "react-router-dom";
import {
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import "./Footer.css";

const WHATSAPP = "27732335239";

const footerServices = [
  { name: "Love & Relationship Guidance", path: "/love-spells" },
  { name: "Lost Love & Reconciliation", path: "/lost-love" },
  { name: "Money & Prosperity", path: "/money-spells" },
  { name: "Spiritual Cleansing", path: "/spiritual-cleansing" },
  { name: "Traditional Healing", path: "/traditional-healing" },
];

const footerCountries = [
  { name: "South Africa", path: "/traditional-healer-south-africa" },
  { name: "Germany", path: "/traditional-healer-germany" },
  { name: "United States", path: "/traditional-healer-usa" },
  { name: "Zimbabwe", path: "/traditional-healer-zimbabwe" },
  { name: "Namibia", path: "/traditional-healer-namibia" },
];

function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hello, I would like to enquire about your traditional spiritual services."
  )}`;

  return (
    <footer className="aw-footer">

      {/* TOP CTA */}
      <section className="aw-footer-cta">
        <div className="container">
          <Sparkles className="aw-footer-sparkle" size={25} />

          <h2>
            Your Journey Towards
            <span> Clarity Begins Here</span>
          </h2>

          <p>
            Take the first step. Reach out for a personal spiritual
            consultation and guidance.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <MessageCircle size={18} />
            Begin Your Consultation
          </a>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <div className="aw-footer-main">
        <div className="container aw-footer-grid">

          {/* BRAND */}
          <div className="aw-footer-brand">
            <Link to="/" className="aw-footer-logo">
              <span>✧</span>
              <div>
                <strong>ANCESTRAL WISDOM</strong>
                <small>SPIRITUAL GUIDANCE</small>
              </div>
            </Link>

            <p>
              Rooted in traditional wisdom, offering spiritual
              consultations and guidance on love, relationships,
              prosperity and personal wellbeing.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="aw-footer-whatsapp"
            >
              <MessageCircle size={17} />
              +27 73 233 5239
            </a>
          </div>

          {/* SERVICES */}
          <div className="aw-footer-column">
            <h3>Our Services</h3>

            {footerServices.map((service) => (
              <Link key={service.path} to={service.path}>
                {service.name}
              </Link>
            ))}
          </div>

          {/* COUNTRIES */}
          <div className="aw-footer-column">
            <h3>International Reach</h3>

            {footerCountries.map((country) => (
              <Link key={country.path} to={country.path}>
                {country.name}
              </Link>
            ))}
          </div>

          {/* CONTACT */}
          <div className="aw-footer-column aw-footer-contact">
            <h3>Connect With Us</h3>

            <p>
              <MessageCircle size={17} />
              International WhatsApp Consultations
            </p>

            <p>
              <MapPin size={17} />
              Serving clients internationally
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="aw-footer-contact-link"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="aw-footer-bottom">
        <div className="container aw-footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Ancestral Wisdom.
            All rights reserved.
          </p>

          <div className="aw-footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;