
/* =========================================================
   ANCESTRAL WISDOM
   PREMIUM HOMEPAGE
========================================================= */

import { Link } from "react-router-dom";

import {
  ArrowRight,
  Heart,
  Sparkles,
  Coins,
  ShieldCheck,
  Compass,
  Globe,
  Star,
  CheckCircle,
  MessageCircle,
  Eye,
  Flower2,
  HandHeart,
} from "lucide-react";

import SEO from "../components/SEO";
import "./Home.css";

/* =========================================================
   LOCAL IMAGE IMPORTS
========================================================= */

import heroImage from "../assets/traditional-spiritual-healer.jpg";

import ancestralWisdomImage from "../assets/ancestral-spiritual-wisdom.jpg";

import loveImage from "../assets/love-and-relationship-spiritual-guidance.jpg";

import lostLoveImage from "../assets/lost-love-reconciliation-guidance.jpg";

import prosperityImage from "../assets/money-prosperity-spiritual-guidance.jpg";

import successImage from "../assets/luck-success-spiritual-guidance.jpg";

import traditionalHealingImage from "../assets/traditional-african-healing.jpg";

import cleansingImage from "../assets/spiritual-cleansing-and-renewal.jpg";

import guidanceImage from "../assets/spiritual-guidance-in-nature.jpg";

import southAfricaImage from "../assets/spiritual-consultation-south-africa.jpg";

import germanyImage from "../assets/spiritual-consultation-germany.jpg";

import usaImage from "../assets/spiritual-consultation-usa.jpg";

import zimbabweImage from "../assets/spiritual-consultation-zimbabwe.jpg";

import namibiaImage from "../assets/spiritual-consultation-namibia.jpg";

/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_NUMBER = "27732335239";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/* =========================================================
   IMAGE COLLECTION
========================================================= */

const images = {
  hero: heroImage,
  spiritual: ancestralWisdomImage,
  love: loveImage,
  lostLove: lostLoveImage,
  prosperity: prosperityImage,
  success: successImage,
  healing: traditionalHealingImage,
  cleansing: cleansingImage,
  guidance: guidanceImage,

  southAfrica: southAfricaImage,
  germany: germanyImage,
  usa: usaImage,
  zimbabwe: zimbabweImage,
  namibia: namibiaImage,
};

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Love & Relationship Guidance",
    description:
      "Guidance for people experiencing relationship challenges, emotional distance, heartbreak, or seeking clarity in matters of the heart.",
    image: images.love,
    icon: Heart,
    message:
      "Hello, I would like to enquire about love and relationship guidance.",
  },
  {
    title: "Lost Love & Reconciliation",
    description:
      "Spiritual guidance for people hoping to understand relationship separation, emotional connections, and reconciliation possibilities.",
    image: images.lostLove,
    icon: Sparkles,
    message:
      "Hello, I would like to enquire about lost love and reconciliation.",
  },
  {
    title: "Money & Prosperity",
    description:
      "Spiritual consultations focused on prosperity, financial direction, opportunities, abundance, and personal growth.",
    image: images.prosperity,
    icon: Coins,
    message:
      "Hello, I would like to enquire about money and prosperity guidance.",
  },
  {
    title: "Luck & Success",
    description:
      "Seek guidance regarding opportunities, personal progress, career direction, business ambitions, and success.",
    image: images.success,
    icon: Star,
    message:
      "Hello, I would like to enquire about luck and success guidance.",
  },
  {
    title: "Traditional Healing",
    description:
      "Traditional spiritual consultations drawing upon ancestral wisdom, cultural practices, and personal spiritual understanding.",
    image: images.healing,
    icon: HandHeart,
    message:
      "Hello, I would like to enquire about traditional healing.",
  },
  {
    title: "Spiritual Cleansing",
    description:
      "Spiritual guidance for those seeking renewal, inner peace, positive energy, and a fresh beginning in life.",
    image: images.cleansing,
    icon: Flower2,
    message:
      "Hello, I would like to enquire about spiritual cleansing.",
  },
];

/* =========================================================
   INTERNATIONAL COUNTRIES
========================================================= */

const countries = [
  {
    name: "South Africa",
    image: images.southAfrica,
    description:
      "Traditional spiritual consultations and guidance for clients throughout South Africa.",
  },
  {
    name: "Germany",
    image: images.germany,
    description:
      "Confidential spiritual consultations for individuals seeking guidance while living in Germany.",
  },
  {
    name: "United States",
    image: images.usa,
    description:
      "Connect with us from the United States for spiritual consultations and traditional guidance.",
  },
  {
    name: "Zimbabwe",
    image: images.zimbabwe,
    description:
      "Traditional spiritual guidance for individuals and families in Zimbabwe.",
  },
  {
    name: "Namibia",
    image: images.namibia,
    description:
      "Spiritual consultations and guidance for people seeking ancestral wisdom in Namibia.",
  },
];

/* =========================================================
   WHY CHOOSE US
========================================================= */

const benefits = [
  {
    icon: ShieldCheck,
    title: "Private & Confidential",
    text: "Your enquiries and personal matters are treated with respect and discretion.",
  },
  {
    icon: HandHeart,
    title: "Personal Attention",
    text: "Every consultation is approached with care, respect, and individual attention.",
  },
  {
    icon: Globe,
    title: "International Enquiries",
    text: "We welcome enquiries from South Africa, Germany, the USA, Zimbabwe, Namibia, and beyond.",
  },
  {
    icon: Compass,
    title: "Spiritual Guidance",
    text: "We provide guidance for people looking for direction, clarity, and spiritual understanding.",
  },
];

/* =========================================================
   FREQUENTLY ASKED QUESTIONS
========================================================= */

const faqs = [
  {
    question: "What spiritual services do you offer?",
    answer:
      "We offer spiritual consultations, traditional healing enquiries, love and relationship guidance, prosperity guidance, spiritual cleansing enquiries, and personal spiritual direction.",
  },
  {
    question: "Can I contact you from another country?",
    answer:
      "Yes. We welcome enquiries from South Africa, Germany, the United States, Zimbabwe, Namibia, and other countries. You can contact us through WhatsApp.",
  },
  {
    question: "How do I begin a consultation?",
    answer:
      "You can begin by sending us a WhatsApp message explaining what type of guidance you are seeking. We will respond and explain the next steps.",
  },
  {
    question: "Are my enquiries confidential?",
    answer:
      "We approach enquiries with discretion and respect for your privacy. You are encouraged to share only information you are comfortable discussing.",
  },
];

/* =========================================================
   HOME PAGE
========================================================= */

function Home() {
  return (
    <>
      <SEO
        title="Traditional Healing & Spiritual Guidance | Ancestral Wisdom"
        description="Seek traditional healing, spiritual guidance, love and relationship consultations, prosperity guidance, spiritual cleansing, and ancestral wisdom. Contact us privately on WhatsApp."
        keywords="traditional healer, spiritual healer, traditional healing, spiritual guidance, love consultation, relationship guidance, money and prosperity, spiritual cleansing, ancestral wisdom, South Africa, Germany, USA, Zimbabwe, Namibia"
      />

      {/* HERO SECTION */}
      <section className="home-hero">
        <div
          className="home-hero-background"
          style={{ backgroundImage: `url(${images.hero})` }}
        />

        <div className="home-hero-overlay" />

        <div className="home-hero-content">
          <span className="home-eyebrow">
            <Sparkles size={16} />
            TRADITIONAL WISDOM · SPIRITUAL GUIDANCE
          </span>

          <h1>
            Find Your Path
            <span> Through Ancestral Wisdom</span>
          </h1>

          <p>
            When life feels uncertain, seek understanding, spiritual
            direction, and guidance rooted in traditional wisdom.
          </p>

          <div className="home-hero-buttons">
            <a
              href={whatsappLink(
                "Hello, I would like to speak with you about spiritual guidance."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn home-btn-gold"
            >
              Begin Your Consultation
              <ArrowRight size={18} />
            </a>

            <Link to="/services" className="home-btn home-btn-outline">
              Explore Our Services
            </Link>
          </div>

          <div className="home-hero-trust">
            <span>
              <ShieldCheck size={17} />
              Private Enquiries
            </span>

            <span>
              <Globe size={17} />
              International Clients
            </span>

            <span>
              <Heart size={17} />
              Personal Guidance
            </span>
          </div>
        </div>

        <div className="home-hero-bottom">
          <span>ANCESTRAL WISDOM</span>
          <span>SPIRITUAL GUIDANCE & TRADITIONAL CONSULTATIONS</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="home-introduction section-padding">
        <div className="home-intro-image">
          <img
            src={images.spiritual}
            alt="Ancestral spiritual wisdom and traditional spiritual guidance"
            loading="lazy"
          />

          <div className="home-intro-image-label">
            <Sparkles size={20} />
            <span>Wisdom · Guidance · Understanding</span>
          </div>
        </div>

        <div className="home-intro-content">
          <span className="home-section-label">
            A JOURNEY OF UNDERSTANDING
          </span>

          <h2>
            Sometimes the Answers We Seek
            <span> Begin Within</span>
          </h2>

          <p>
            Life can bring challenges that leave us searching for direction,
            peace, clarity, and understanding. Matters of love, family,
            finances, personal growth, and spiritual wellbeing can affect the
            journey we take.
          </p>

          <p>
            Ancestral Wisdom offers traditional spiritual consultations and
            guidance for individuals seeking to understand their circumstances
            and explore their personal spiritual journey.
          </p>

          <p>
            We believe every person deserves to be heard with compassion,
            dignity, respect, and confidentiality.
          </p>

          <Link to="/about" className="home-text-link">
            Discover Our Approach
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services section-padding">
        <div className="home-section-heading">
          <span className="home-section-label">OUR SERVICES</span>

          <h2>
            Guidance For Different
            <span> Areas Of Your Life</span>
          </h2>

          <p>
            Explore our spiritual consultation services and find the
            guidance relevant to your personal circumstances.
          </p>
        </div>

        <div className="home-services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article className="home-service-card" key={service.title}>
                <div className="home-service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />

                  <span className="home-service-number">
                    0{index + 1}
                  </span>
                </div>

                <div className="home-service-content">
                  <div className="home-service-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a
                    href={whatsappLink(service.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-service-link"
                  >
                    Enquire Privately
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="home-services-bottom">
          <Link to="/services" className="home-btn home-btn-gold">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* LOVE & RELATIONSHIPS */}
      <section className="home-love-section">
        <div className="home-love-image">
          <img
            src={images.love}
            alt="Love and relationship spiritual consultation"
            loading="lazy"
          />
        </div>

        <div className="home-love-content">
          <span className="home-section-label">
            LOVE · RELATIONSHIPS · EMOTIONAL GUIDANCE
          </span>

          <h2>
            Matters Of The Heart
            <span> Deserve Understanding</span>
          </h2>

          <p>
            Relationships can sometimes bring confusion, emotional pain,
            distance, separation, and unanswered questions.
          </p>

          <p>
            If you are experiencing heartbreak, relationship challenges,
            or uncertainty about your love life, you may seek a private
            spiritual consultation to discuss your circumstances.
          </p>

          <ul className="home-check-list">
            <li>
              <CheckCircle size={17} />
              Love and relationship consultations
            </li>

            <li>
              <CheckCircle size={17} />
              Emotional and spiritual guidance
            </li>

            <li>
              <CheckCircle size={17} />
              Relationship reconciliation enquiries
            </li>

            <li>
              <CheckCircle size={17} />
              Private personal consultations
            </li>
          </ul>

          <a
            href={whatsappLink(
              "Hello, I would like to have a private consultation regarding my relationship."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn home-btn-gold"
          >
            Discuss Your Situation
            <MessageCircle size={18} />
          </a>
        </div>
      </section>

      {/* PROSPERITY */}
      <section className="home-prosperity section-padding">
        <div className="home-prosperity-content">
          <span className="home-section-label">
            PROSPERITY · OPPORTUNITIES · SUCCESS
          </span>

          <h2>
            Open Yourself To
            <span> New Possibilities</span>
          </h2>

          <p>
            Whether you are navigating financial challenges, seeking career
            direction, pursuing business ambitions, or hoping for a new
            beginning, spiritual consultations can provide a space for
            reflection and guidance.
          </p>

          <p>
            Discuss your goals, challenges, and aspirations through a
            confidential consultation.
          </p>

          <a
            href={whatsappLink(
              "Hello, I would like to enquire about prosperity, money, business, and success guidance."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn home-btn-gold"
          >
            Seek Prosperity Guidance
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="home-prosperity-image">
          <img
            src={images.prosperity}
            alt="Money prosperity and spiritual guidance"
            loading="lazy"
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="home-benefits section-padding">
        <div className="home-section-heading">
          <span className="home-section-label">OUR APPROACH</span>

          <h2>
            A Consultation Built On
            <span> Respect & Understanding</span>
          </h2>

          <p>
            We understand that discussing personal challenges requires trust.
            Our approach places respect, confidentiality, and individual
            attention at the centre of every enquiry.
          </p>
        </div>

        <div className="home-benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div className="home-benefit-card" key={benefit.title}>
                <div className="home-benefit-icon">
                  <Icon size={25} />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SPIRITUAL CLEANSING */}
      <section className="home-cleansing-section">
        <div
          className="home-cleansing-background"
          style={{ backgroundImage: `url(${images.cleansing})` }}
        />

        <div className="home-cleansing-overlay" />

        <div className="home-cleansing-content">
          <span className="home-section-label">
            SPIRITUAL RENEWAL
          </span>

          <h2>
            Make Space For
            <span> Peace, Renewal & Reflection</span>
          </h2>

          <p>
            Explore spiritual guidance relating to renewal, cleansing,
            emotional wellbeing, personal reflection, and positive direction.
          </p>

          <a
            href={whatsappLink(
              "Hello, I would like to enquire about spiritual cleansing and renewal."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn home-btn-gold"
          >
            Enquire About Spiritual Cleansing
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* INTERNATIONAL CLIENTS */}
      <section className="home-international section-padding">
        <div className="home-section-heading">
          <span className="home-section-label">
            INTERNATIONAL CONSULTATIONS
          </span>

          <h2>
            Traditional Guidance
            <span> Across Borders</span>
          </h2>

          <p>
            Distance should not prevent you from making an enquiry. We
            welcome individuals seeking spiritual guidance from different
            parts of the world.
          </p>
        </div>

        <div className="home-countries-grid">
          {countries.map((country) => (
            <article className="home-country-card" key={country.name}>
              <div className="home-country-image">
                <img
                  src={country.image}
                  alt={`Spiritual consultation for clients in ${country.name}`}
                  loading="lazy"
                />

                <div className="home-country-image-overlay" />
              </div>

              <div className="home-country-content">
                <h3>{country.name}</h3>

                <p>{country.description}</p>

                <a
                  href={whatsappLink(
                    `Hello, I am contacting you from ${country.name} and would like to enquire about your spiritual services.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-country-link"
                >
                  Contact Us
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONSULTATION PROCESS */}
      <section className="home-process section-padding">
        <div className="home-section-heading">
          <span className="home-section-label">HOW TO BEGIN</span>

          <h2>
            Your Consultation
            <span> Begins With A Conversation</span>
          </h2>
        </div>

        <div className="home-process-grid">
          <div className="home-process-card">
            <span className="home-process-number">01</span>

            <MessageCircle size={30} />

            <h3>Contact Us</h3>

            <p>
              Send us a private WhatsApp message explaining the kind of
              guidance you are looking for.
            </p>
          </div>

          <div className="home-process-card">
            <span className="home-process-number">02</span>

            <Eye size={30} />

            <h3>Explain Your Situation</h3>

            <p>
              Share your questions or circumstances so we can understand
              your enquiry.
            </p>
          </div>

          <div className="home-process-card">
            <span className="home-process-number">03</span>

            <Sparkles size={30} />

            <h3>Receive Guidance</h3>

            <p>
              Learn about the consultation process and discuss the
              appropriate next steps.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="home-faq section-padding">
        <div className="home-faq-heading">
          <span className="home-section-label">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>
            Questions Before
            <span> You Begin?</span>
          </h2>

          <p>
            Here are some answers to help you understand our consultation
            process.
          </p>
        </div>

        <div className="home-faq-list">
          {faqs.map((faq) => (
            <details className="home-faq-item" key={faq.question}>
              <summary>{faq.question}</summary>

              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-final-cta">
        <div className="home-final-cta-content">
          <span className="home-section-label">
            YOUR JOURNEY · YOUR QUESTIONS · YOUR NEXT STEP
          </span>

          <h2>
            Every Journey Begins
            <span> With A Single Conversation</span>
          </h2>

          <p>
            When you are ready to seek guidance, we are here to listen.
            Contact us privately and begin your consultation.
          </p>

          <a
            href={whatsappLink(
              "Hello, I would like to begin a private spiritual consultation."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn home-btn-gold"
          >
            <MessageCircle size={19} />
            Contact Us On WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
