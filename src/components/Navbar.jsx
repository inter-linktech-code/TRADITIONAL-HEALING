
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

import "./Navbar.css";

const WHATSAPP = "27732335239";

const services = [
  { name: "All Services", path: "/services" },
  { name: "Love & Relationship Guidance", path: "/love-spells" },
  { name: "Lost Love & Reconciliation", path: "/lost-love" },
  { name: "Money & Prosperity", path: "/money-spells" },
  { name: "Luck & Success", path: "/luck-success" },
  { name: "Spiritual Cleansing", path: "/spiritual-cleansing" },
  { name: "Spiritual Protection", path: "/protection" },
  { name: "Traditional Healing", path: "/traditional-healing" },
];

const countries = [
  { name: "South Africa", path: "/traditional-healer-south-africa" },
  { name: "Germany", path: "/traditional-healer-germany" },
  { name: "United States", path: "/traditional-healer-usa" },
  { name: "Zimbabwe", path: "/traditional-healer-zimbabwe" },
  { name: "Namibia", path: "/traditional-healer-namibia" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setCountriesOpen(false);
  };

  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hello, I would like to enquire about your spiritual consultation services."
  )}`;

  return (
    <header className="aw-navbar">
      <div className="aw-navbar-container">

        {/* LOGO */}
        <Link to="/" className="aw-logo" onClick={closeMenu}>
          <span className="aw-logo-symbol">✧</span>

          <span className="aw-logo-text">
            <strong>ANCESTRAL</strong>
            <small>WISDOM & SPIRITUAL GUIDANCE</small>
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className={`aw-nav ${menuOpen ? "aw-nav-active" : ""}`}>

          {/* HOME */}
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "aw-nav-link aw-nav-link-active" : "aw-nav-link"
            }
          >
            Home
          </NavLink>

          {/* ABOUT */}
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "aw-nav-link aw-nav-link-active" : "aw-nav-link"
            }
          >
            About
          </NavLink>

          {/* SERVICES */}
          <div
            className={`aw-nav-dropdown ${
              servicesOpen ? "aw-dropdown-open" : ""
            }`}
          >
            <div className="aw-dropdown-heading">

              {/* CLICKING SERVICES OPENS THE MAIN SERVICES PAGE */}
              <NavLink
                to="/services"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "aw-nav-link aw-services-main-link aw-nav-link-active"
                    : "aw-nav-link aw-services-main-link"
                }
              >
                Services
              </NavLink>

              {/* ARROW OPENS THE DROPDOWN */}
              <button
                type="button"
                className="aw-dropdown-arrow"
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setCountriesOpen(false);
                }}
                aria-label="Open services menu"
                aria-expanded={servicesOpen}
              >
                <ChevronDown size={15} />
              </button>
            </div>

            <div className="aw-dropdown-menu">
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={closeMenu}
                  className={
                    service.path === "/services"
                      ? "aw-dropdown-featured"
                      : ""
                  }
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* COUNTRIES */}
          <div
            className={`aw-nav-dropdown ${
              countriesOpen ? "aw-dropdown-open" : ""
            }`}
          >
            <div className="aw-dropdown-heading">
              <button
                type="button"
                className="aw-dropdown-trigger"
                onClick={() => {
                  setCountriesOpen(!countriesOpen);
                  setServicesOpen(false);
                }}
                aria-expanded={countriesOpen}
              >
                Countries
              </button>

              <button
                type="button"
                className="aw-dropdown-arrow"
                onClick={() => {
                  setCountriesOpen(!countriesOpen);
                  setServicesOpen(false);
                }}
                aria-label="Open countries menu"
                aria-expanded={countriesOpen}
              >
                <ChevronDown size={15} />
              </button>
            </div>

            <div className="aw-dropdown-menu">
              {countries.map((country) => (
                <Link
                  key={country.path}
                  to={country.path}
                  onClick={closeMenu}
                >
                  {country.name}
                </Link>
              ))}
            </div>
          </div>

          {/* TESTIMONIALS */}
          <NavLink
            to="/testimonials"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "aw-nav-link aw-nav-link-active" : "aw-nav-link"
            }
          >
            Testimonials
          </NavLink>

          {/* CONTACT */}
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "aw-nav-link aw-nav-link-active" : "aw-nav-link"
            }
          >
            Contact
          </NavLink>

          {/* MOBILE WHATSAPP */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="aw-mobile-contact"
          >
            <MessageCircle size={17} />
            WhatsApp Us
          </a>
        </nav>

        {/* DESKTOP WHATSAPP */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="aw-nav-cta"
        >
          <MessageCircle size={17} />
          <span>Consultation</span>
        </a>

        {/* MOBILE MENU */}
        <button
          type="button"
          className="aw-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
