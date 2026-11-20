
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Sparkles,
  Compass,
  HandHeart,
  Globe,
  MessageCircle,
} from "lucide-react";

import SEO from "../components/SEO";
import "./About.css";

/* =========================================================
   LOCAL IMAGE IMPORTS
========================================================= */

import aboutHeroImage from "../assets/traditional-spiritual-healer.jpg";

import ancestralImage from "../assets/ancestral-spiritual-wisdom.jpg";

import traditionalImage from "../assets/traditional-african-healing.jpg";

import natureImage from "../assets/spiritual-guidance-in-nature.jpg";

const WHATSAPP_NUMBER = "27732335239";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function About() {
  return (
    <>
      <SEO
        title="About Us | Traditional Healing & Ancestral Spiritual Guidance"
        description="Learn about Ancestral Wisdom, our approach to traditional healing, spiritual consultations, ancestral wisdom, personal guidance, love, prosperity, and spiritual wellbeing."
        keywords="about traditional healer, ancestral wisdom, traditional African healing, spiritual guidance, spiritual consultation, traditional spiritual healing"
      />

      {/* HERO */}
      <section className="about-hero">
        <div
          className="about-hero-background"
          style={{ backgroundImage: `url(${aboutHeroImage})` }}
        />

        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <span className="about-eyebrow">
            OUR STORY · OUR VALUES · OUR PURPOSE
          </span>

          <h1>
            Rooted In Wisdom.
            <span> Guided By Tradition.</span>
          </h1>

          <p>
            Discover the values, traditional wisdom, and spiritual
            understanding behind Ancestral Wisdom.
          </p>

          <Link to="/services" className="about-btn about-btn-gold">
            Explore Our Services
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="about-hero-bottom">
          <span>ANCESTRAL WISDOM</span>
          <span>TRADITION · SPIRITUALITY · GUIDANCE</span>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story section-padding">
        <div className="about-story-image">
          <img
            src={ancestralImage}
            alt="Ancestral wisdom and traditional spiritual practices"
            loading="lazy"
          />

          <div className="about-image-caption">
            Wisdom passed through generations
          </div>
        </div>

        <div className="about-story-content">
          <span className="about-section-label">
            WHO WE ARE
          </span>

          <h2>
            A Connection To
            <span> Traditional Wisdom</span>
          </h2>

          <p>
            Ancestral Wisdom is dedicated to traditional spiritual
            consultations and guidance for individuals seeking
            understanding, direction, and clarity in different areas
            of their lives.
          </p>

          <p>
            Our approach is inspired by the importance of traditional
            knowledge, spiritual reflection, personal understanding,
            and the values passed down through generations.
          </p>

          <p>
            We recognise that every individual has a unique journey.
            Personal challenges, relationships, family matters,
            financial aspirations, and life decisions can lead people
            to seek guidance and a deeper understanding of themselves.
          </p>

          <p>
            Our aim is to provide a respectful environment where
            people can openly discuss their concerns and enquiries.
          </p>

          <a
            href={whatsappLink(
              "Hello, I would like to learn more about Ancestral Wisdom and your consultations."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="about-text-link"
          >
            Speak With Us
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="about-philosophy section-padding">
        <div className="about-section-heading">
          <span className="about-section-label">
            OUR PHILOSOPHY
          </span>

          <h2>
            Wisdom, Respect &
            <span> Understanding</span>
          </h2>

          <p>
            We believe meaningful consultations begin with listening,
            understanding, compassion, and respect for each person's
            individual circumstances.
          </p>
        </div>

        <div className="about-philosophy-grid">
          <article className="about-philosophy-card">
            <div className="about-philosophy-icon">
              <Sparkles size={26} />
            </div>

            <h3>Traditional Wisdom</h3>

            <p>
              We value traditional knowledge, ancestral teachings,
              cultural understanding, and spiritual reflection.
            </p>
          </article>

          <article className="about-philosophy-card">
            <div className="about-philosophy-icon">
              <Heart size={26} />
            </div>

            <h3>Compassion</h3>

            <p>
              Every enquiry deserves patience, understanding,
              consideration, and an approach that recognises
              individual circumstances.
            </p>
          </article>

          <article className="about-philosophy-card">
            <div className="about-philosophy-icon">
              <ShieldCheck size={26} />
            </div>

            <h3>Confidentiality</h3>

            <p>
              We value discretion and respect the privacy of people
              seeking personal and spiritual consultations.
            </p>
          </article>

          <article className="about-philosophy-card">
            <div className="about-philosophy-icon">
              <Compass size={26} />
            </div>

            <h3>Guidance</h3>

            <p>
              Our consultations provide an opportunity to discuss
              questions, concerns, personal circumstances, and
              spiritual direction.
            </p>
          </article>
        </div>
      </section>

      {/* TRADITION */}
      <section className="about-tradition">
        <div className="about-tradition-image">
          <img
            src={traditionalImage}
            alt="Traditional African healing and cultural spiritual wisdom"
            loading="lazy"
          />
        </div>

        <div className="about-tradition-content">
          <span className="about-section-label">
            HONOURING TRADITION
          </span>

          <h2>
            The Importance Of
            <span> Ancestral Connection</span>
          </h2>

          <p>
            Across many cultures, ancestral traditions represent
            identity, heritage, values, wisdom, and the connection
            between generations.
          </p>

          <p>
            Traditional spiritual practices have long been part of
            how individuals and communities understand life's
            challenges, celebrate important moments, and seek
            direction.
          </p>

          <p>
            We appreciate the importance of approaching traditional
            practices with humility, cultural respect, and a genuine
            appreciation for their significance.
          </p>

          <Link to="/services" className="about-btn about-btn-gold">
            Discover Our Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="about-commitment section-padding">
        <div className="about-commitment-image">
          <img
            src={natureImage}
            alt="Peaceful natural environment symbolising spiritual reflection and inner peace"
            loading="lazy"
          />
        </div>

        <div className="about-commitment-content">
          <span className="about-section-label">
            OUR COMMITMENT TO YOU
          </span>

          <h2>
            Every Person Deserves
            <span> To Be Heard</span>
          </h2>

          <p>
            Seeking spiritual guidance can be a deeply personal
            experience. We understand that people may reach out
            during moments of uncertainty, emotional difficulty,
            change, or personal reflection.
          </p>

          <p>
            We are committed to approaching enquiries with
            consideration, respect, discretion, and an open mind.
          </p>

          <div className="about-commitment-points">
            <div>
              <HandHeart size={21} />
              <span>Respectful personal consultations</span>
            </div>

            <div>
              <ShieldCheck size={21} />
              <span>Privacy and discretion</span>
            </div>

            <div>
              <Globe size={21} />
              <span>International enquiries welcomed</span>
            </div>

            <div>
              <Heart size={21} />
              <span>Compassionate understanding</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL */}
      <section className="about-international section-padding">
        <div className="about-international-content">
          <span className="about-section-label">
            CONNECT WITH US
          </span>

          <h2>
            Wherever Life Takes You,
            <span> Guidance Is A Conversation Away</span>
          </h2>

          <p>
            We welcome enquiries from South Africa, Germany, the
            United States, Zimbabwe, Namibia, and individuals
            around the world.
          </p>

          <p>
            You can begin your enquiry through WhatsApp and let us
            know the kind of consultation you are seeking.
          </p>

          <a
            href={whatsappLink(
              "Hello, I would like to enquire about your traditional spiritual consultation services."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn about-btn-gold"
          >
            <MessageCircle size={18} />
            Begin Your Enquiry
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-final-cta">
        <div className="about-final-cta-content">
          <span className="about-section-label">
            ANCESTRAL WISDOM
          </span>

          <h2>
            Your Journey.
            <span> Your Questions. Your Understanding.</span>
          </h2>

          <p>
            If you are looking for spiritual guidance or wish to
            learn more about our traditional consultations, we
            welcome you to reach out.
          </p>

          <a
            href={whatsappLink(
              "Hello, I would like to speak with you regarding a spiritual consultation."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn about-btn-gold"
          >
            Contact Us On WhatsApp
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

export default About;
