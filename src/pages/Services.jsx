
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Heart,
  HeartHandshake,
  Coins,
  Sun,
  ShieldCheck,
  Leaf,
  Compass,
  HandHeart,
  MessageCircle,
  Globe,
  Star,
  CircleHelp,
  CheckCircle2,
  Clock,
  LockKeyhole,
} from "lucide-react";

import SEO from "../components/SEO";
import "./Services.css";

/* =========================================================
   LOCAL IMAGES
   All images must exist inside src/assets/images/
   ========================================================= */

import heroImage from "../assets/traditional-spiritual-healer.jpg";

import healingImage from "../assets/traditional-healing.jpg";

import loveImage from "../assets/love-and-relationship-spiritual-guidance.jpg";

import lostLoveImage from "../assets/lost-love-reconciliation-guidance.jpg";

import prosperityImage from "../assets/money-prosperity-spiritual-guidance.jpg";

import successImage from "../assets/uck-success-spiritual-guidance.jpg";

import cleansingImage from "../assets/spiritual-cleansing-and-renewal.jpg";

import consultationImage from "../assets/spiritual-consultation.jpg";

import ancestralImage from "../assets/ancestral-spiritual-wisdom.jpg";

import internationalImage from "../assets/spiritual-consultation-international.jpg";

import natureImage from "../assets/spiritual-guidance-in-nature.jpg";

/* =========================================================
   CONTACT
   ========================================================= */

const WHATSAPP_NUMBER = "27732335239";

const createWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/* =========================================================
   SERVICES
   ========================================================= */

const services = [
  {
    id: "traditional-healing",
    number: "01",
    title: "Traditional Healing & Spiritual Guidance",
    subtitle: "Reconnect With Your Spiritual Path",
    description:
      "Explore traditional wisdom, spiritual reflection and personal guidance through a culturally rooted approach to healing and wellbeing. Our consultations provide a space to discuss personal concerns, spiritual questions and life experiences with care and understanding.",
    image: healingImage,
    icon: Sparkles,
    features: [
      "Traditional spiritual consultation",
      "Personal guidance and reflection",
      "Cultural and ancestral wisdom",
      "Support during difficult life transitions",
    ],
    message:
      "Hello, I would like to enquire about Traditional Healing and Spiritual Guidance.",
  },

  {
    id: "love-relationships",
    number: "02",
    title: "Love & Relationship Guidance",
    subtitle: "Understanding Matters Of The Heart",
    description:
      "Relationships can bring happiness, uncertainty and emotional challenges. Our love and relationship consultations offer a confidential space to discuss relationship concerns, communication difficulties, emotional connection and personal choices.",
    image: loveImage,
    icon: Heart,
    features: [
      "Relationship guidance",
      "Love and emotional reflection",
      "Communication and connection",
      "Guidance through relationship uncertainty",
    ],
    message:
      "Hello, I would like to enquire about Love and Relationship Guidance.",
  },

  {
    id: "lost-love",
    number: "03",
    title: "Lost Love & Reconciliation Guidance",
    subtitle: "Finding Clarity After Separation",
    description:
      "Separation, heartbreak and unresolved feelings can be difficult to navigate. We offer compassionate consultations for people seeking perspective, emotional clarity and guidance concerning past relationships and the possibility of reconciliation.",
    image: lostLoveImage,
    icon: HeartHandshake,
    features: [
      "Guidance after a breakup",
      "Emotional support during separation",
      "Reflection on reconciliation",
      "Understanding relationship challenges",
    ],
    message:
      "Hello, I would like to enquire about Lost Love and Reconciliation Guidance.",
  },

  {
    id: "money-prosperity",
    number: "04",
    title: "Money, Prosperity & Abundance Guidance",
    subtitle: "A Mindset Of Opportunity And Growth",
    description:
      "Financial uncertainty and career challenges can affect many areas of life. Our prosperity consultations explore personal aspirations, spiritual perspectives, motivation, decision-making and positive approaches to pursuing opportunities.",
    image: prosperityImage,
    icon: Coins,
    features: [
      "Prosperity-focused spiritual consultation",
      "Career and personal ambition reflection",
      "Guidance through financial uncertainty",
      "Positive mindset and opportunity awareness",
    ],
    message:
      "Hello, I would like to enquire about Money, Prosperity and Abundance Guidance.",
  },

  {
    id: "luck-success",
    number: "05",
    title: "Luck, Success & Opportunities",
    subtitle: "Preparing Yourself For New Possibilities",
    description:
      "When pursuing a new chapter in life, many people seek encouragement, direction and a deeper sense of purpose. Our consultations explore personal goals, confidence, opportunity, motivation and spiritual perspectives on success.",
    image: successImage,
    icon: Sun,
    features: [
      "Personal success guidance",
      "Career and business aspirations",
      "New opportunities and life direction",
      "Confidence and motivation",
    ],
    message:
      "Hello, I would like to enquire about Luck, Success and Opportunities Guidance.",
  },

  {
    id: "spiritual-cleansing",
    number: "06",
    title: "Spiritual Cleansing & Renewal",
    subtitle: "A Symbolic Journey Of Renewal",
    description:
      "Spiritual cleansing practices are part of many cultural and traditional belief systems. Our consultations discuss traditional cleansing approaches, spiritual symbolism, reflection and the personal meaning of renewal.",
    image: cleansingImage,
    icon: Leaf,
    features: [
      "Traditional cleansing consultations",
      "Spiritual renewal and reflection",
      "Personal rituals and cultural practices",
      "Guidance for new beginnings",
    ],
    message:
      "Hello, I would like to enquire about Spiritual Cleansing and Renewal.",
  },

  {
    id: "personal-consultation",
    number: "07",
    title: "Personal Spiritual Consultation",
    subtitle: "Guidance For Your Unique Circumstances",
    description:
      "Every person's journey is different. A personal consultation allows you to discuss your circumstances, concerns, goals and questions in a respectful environment and explore traditional perspectives relevant to your situation.",
    image: consultationImage,
    icon: Compass,
    features: [
      "One-to-one consultations",
      "Personal spiritual questions",
      "Life direction and reflection",
      "Confidential discussion",
    ],
    message:
      "Hello, I would like to arrange a Personal Spiritual Consultation.",
  },

  {
    id: "ancestral-wisdom",
    number: "08",
    title: "Ancestral Wisdom & Cultural Guidance",
    subtitle: "Honouring Traditional Knowledge",
    description:
      "Ancestral traditions carry stories, values, cultural knowledge and spiritual perspectives passed through generations. Our consultations explore the meaning of ancestral wisdom and its place in personal reflection and cultural understanding.",
    image: ancestralImage,
    icon: Star,
    features: [
      "Traditional cultural perspectives",
      "Ancestral wisdom discussions",
      "Spiritual identity and reflection",
      "Understanding traditional beliefs",
    ],
    message:
      "Hello, I would like to enquire about Ancestral Wisdom and Cultural Guidance.",
  },
];

/* =========================================================
   CONSULTATION BENEFITS
   ========================================================= */

const consultationBenefits = [
  {
    icon: ShieldCheck,
    title: "Respectful & Confidential",
    text: "Your questions and personal experiences are approached with discretion, respect and understanding.",
  },
  {
    icon: HandHeart,
    title: "Compassionate Guidance",
    text: "We provide a welcoming environment for people seeking spiritual reflection, guidance and perspective.",
  },
  {
    icon: Globe,
    title: "International Enquiries",
    text: "You can contact us from South Africa, Germany, the USA, Zimbabwe, Namibia and other locations.",
  },
  {
    icon: Clock,
    title: "Consultations By Arrangement",
    text: "Contact us to discuss your enquiry, the available consultation arrangements and the next steps.",
  },
];

/* =========================================================
   COUNTRIES
   ========================================================= */

const countries = [
  "South Africa",
  "Germany",
  "United States",
  "Zimbabwe",
  "Namibia",
];

/* =========================================================
   FAQ
   ========================================================= */

const faqs = [
  {
    question: "What traditional spiritual services do you offer?",
    answer:
      "We offer consultations covering traditional healing and spiritual guidance, love and relationship matters, lost love and reconciliation, prosperity and success, spiritual cleansing, ancestral wisdom and personal spiritual consultations.",
  },

  {
    question: "How do I enquire about a spiritual consultation?",
    answer:
      "You can contact us through WhatsApp using any of the enquiry buttons on this page. Tell us briefly what type of guidance you are looking for, and we can discuss your enquiry and available consultation arrangements.",
  },

  {
    question: "Can I contact you from another country?",
    answer:
      "Yes. We welcome enquiries from South Africa, Germany, the United States, Zimbabwe, Namibia and other countries. Contact us through WhatsApp to discuss whether a remote consultation is available for your circumstances.",
  },

  {
    question: "Are consultations private?",
    answer:
      "We approach enquiries with discretion and respect. Please avoid sending unnecessary sensitive personal information when making your initial enquiry.",
  },

  {
    question:
      "Can spiritual guidance guarantee that my relationship will return?",
    answer:
      "No spiritual consultation can guarantee another person's feelings, choices or actions. Relationship guidance is intended to help you reflect on your situation, explore your feelings and consider your choices respectfully.",
  },

  {
    question:
      "Can spiritual guidance guarantee money, employment or success?",
    answer:
      "No consultation or spiritual practice can guarantee financial results, employment, business success or winning outcomes. Prosperity and success consultations focus on reflection, encouragement, personal goals and traditional perspectives.",
  },

  {
    question: "What should I include in my first WhatsApp message?",
    answer:
      "You can simply introduce yourself, mention your country and describe the type of service you are interested in. You do not need to disclose private details in your first message.",
  },

  {
    question: "Do you provide medical or mental health treatment?",
    answer:
      "Traditional spiritual consultations are not a substitute for professional medical, psychological, legal or financial advice. If you have a medical or mental health concern, please seek support from a qualified professional.",
  },
];

/* =========================================================
   SERVICE CARD
   ========================================================= */

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="services-card" id={service.id}>
      <div className="services-card-image">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
        />

        <div className="services-card-image-overlay" />

        <span className="services-card-number">
          {service.number}
        </span>

        <div className="services-card-icon">
          <Icon size={25} strokeWidth={1.5} />
        </div>
      </div>

      <div className="services-card-content">
        <span className="services-card-subtitle">
          {service.subtitle}
        </span>

        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <ul className="services-card-features">
          {service.features.map((feature) => (
            <li key={feature}>
              <CheckCircle2 size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={createWhatsAppLink(service.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="services-card-link"
        >
          Enquire About This Service
          <ArrowRight size={17} />
        </a>
      </div>
    </article>
  );
}

/* =========================================================
   FAQ ITEM
   ========================================================= */

function ServicesFAQ({ faq }) {
  return (
    <details className="services-faq-item">
      <summary>
        <span>{faq.question}</span>
        <CircleHelp size={20} />
      </summary>

      <div className="services-faq-answer">
        <p>{faq.answer}</p>
      </div>
    </details>
  );
}

/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function Services() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Traditional Spiritual Guidance and Consultation Services",
    serviceType: "Traditional spiritual guidance and consultations",
    description:
      "Traditional spiritual consultations covering ancestral wisdom, love and relationships, reconciliation guidance, prosperity, success, spiritual cleansing and personal spiritual reflection.",
    provider: {
      "@type": "Organization",
      name: "Ancestral Wisdom",
    },
    areaServed: countries.map((country) => ({
      "@type": "Country",
      name: country,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
      serviceType: "WhatsApp enquiries",
    },
  };

  return (
    <main className="services-page">
      <SEO
        title="Traditional Healing & Spiritual Guidance Services | Ancestral Wisdom"
        description="Explore traditional healing, spiritual guidance, love and relationship consultations, lost love guidance, prosperity, luck, success, spiritual cleansing and ancestral wisdom. Enquire via WhatsApp from South Africa, Germany, USA, Zimbabwe or Namibia."
        keywords="traditional healing services, spiritual guidance, traditional healer consultation, ancestral wisdom, love spiritual guidance, relationship guidance, lost love guidance, reconciliation consultation, money prosperity guidance, luck and success guidance, spiritual cleansing, traditional African healing, spiritual consultation South Africa, spiritual consultation Germany, spiritual consultation USA, spiritual consultation Zimbabwe, spiritual consultation Namibia"
      />

      <script type="application/ld+json">
        {JSON.stringify(servicesSchema)}
      </script>

      {/* HERO */}

      <section className="services-hero">
        <div className="services-hero-background">
          <img
            src={heroImage}
            alt="Traditional spiritual guidance and ancestral wisdom"
          />
        </div>

        <div className="services-hero-overlay" />

        <div className="services-hero-content">
          <span className="services-eyebrow">
            Traditional Wisdom • Personal Guidance
          </span>

          <h1>
            Spiritual Guidance
            <span>For Your Journey</span>
          </h1>

          <p>
            Explore traditional wisdom, personal spiritual
            consultations and guidance for the questions,
            challenges and new beginnings that matter to you.
          </p>

          <div className="services-hero-buttons">
            <a
              href={createWhatsAppLink(
                "Hello, I would like to enquire about your spiritual guidance services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="services-btn services-btn-gold"
            >
              <MessageCircle size={18} />
              Make An Enquiry
            </a>

            <a
              href="#our-services"
              className="services-btn services-btn-outline"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="services-hero-trust">
            <div>
              <ShieldCheck size={19} />
              <span>Respectful Consultations</span>
            </div>

            <div>
              <LockKeyhole size={19} />
              <span>Discreet Enquiries</span>
            </div>

            <div>
              <Globe size={19} />
              <span>International Enquiries</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="services-introduction section-padding">
        <div className="services-container">
          <div className="services-introduction-grid">
            <div className="services-introduction-heading">
              <span className="services-eyebrow">
                Our Areas Of Guidance
              </span>

              <h2>
                Every Journey Is Different.
                <span>Every Question Matters.</span>
              </h2>
            </div>

            <div className="services-introduction-text">
              <p>
                Life can bring moments of uncertainty, relationship
                challenges, personal ambitions and questions about
                your spiritual journey. Across cultures and
                generations, people have turned to traditional wisdom
                for reflection, perspective and guidance.
              </p>

              <p>
                At Ancestral Wisdom, our consultations are centred
                around listening, understanding your concerns and
                exploring traditional spiritual perspectives in a
                respectful environment.
              </p>

              <p>
                Discover our areas of guidance below and contact us
                to discuss the service that best reflects your
                enquiry.
              </p>

              <a href="#our-services" className="services-text-link">
                Discover Our Services
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section
        className="services-listing section-padding"
        id="our-services"
      >
        <div className="services-container">
          <div className="services-section-header">
            <span className="services-eyebrow">
              Traditional & Spiritual Consultations
            </span>

            <h2>
              Explore Our
              <span>Services</span>
            </h2>

            <p>
              A range of traditional spiritual consultation
              services designed around personal reflection,
              cultural wisdom and compassionate guidance.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION BENEFITS */}

      <section className="services-benefits section-padding">
        <div className="services-container">
          <div className="services-benefits-header">
            <span className="services-eyebrow">
              The Consultation Experience
            </span>

            <h2>
              A Welcoming Space
              <span>For Your Questions</span>
            </h2>

            <p>
              We believe that spiritual guidance should begin with
              listening, respect and understanding.
            </p>
          </div>

          <div className="services-benefits-grid">
            {consultationBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  className="services-benefit-card"
                  key={benefit.title}
                >
                  <span className="services-benefit-number">
                    0{index + 1}
                  </span>

                  <div className="services-benefit-icon">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL */}

      <section className="services-international section-padding">
        <div className="services-international-image">
          <img
            src={internationalImage}
            alt="International spiritual guidance enquiries and consultations"
            loading="lazy"
          />
        </div>

        <div className="services-international-content">
          <span className="services-eyebrow">
            International Enquiries Welcome
          </span>

          <h2>
            Guidance Across
            <span>Different Countries</span>
          </h2>

          <p>
            Wherever you are in the world, you can reach out to
            enquire about our traditional spiritual consultation
            services.
          </p>

          <p>
            We welcome enquiries from people living in different
            countries and cultural backgrounds. Contact us through
            WhatsApp to discuss your questions and available
            consultation arrangements.
          </p>

          <div className="services-country-grid">
            {countries.map((country) => (
              <div className="services-country" key={country}>
                <Globe size={16} />
                {country}
              </div>
            ))}
          </div>

          <a
            href={createWhatsAppLink(
              "Hello, I am contacting you from outside your country and would like to enquire about your spiritual consultation services."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="services-btn services-btn-gold"
          >
            International Enquiry
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* PROCESS */}

      <section className="services-process section-padding">
        <div className="services-container">
          <div className="services-section-header">
            <span className="services-eyebrow">
              Begin Your Enquiry
            </span>

            <h2>
              Simple Steps.
              <span>A Personal Approach.</span>
            </h2>

            <p>
              Getting started is simple. Contact us, explain what
              you are looking for and discuss the next steps.
            </p>
          </div>

          <div className="services-process-grid">
            <article className="services-process-card">
              <span className="services-process-number">01</span>

              <div className="services-process-icon">
                <MessageCircle size={26} />
              </div>

              <h3>Contact Us</h3>

              <p>
                Send us a WhatsApp message and let us know which
                spiritual guidance service you are interested in.
              </p>
            </article>

            <article className="services-process-card">
              <span className="services-process-number">02</span>

              <div className="services-process-icon">
                <HandHeart size={26} />
              </div>

              <h3>Discuss Your Enquiry</h3>

              <p>
                We can discuss your questions, circumstances and
                the consultation arrangements available.
              </p>
            </article>

            <article className="services-process-card">
              <span className="services-process-number">03</span>

              <div className="services-process-icon">
                <Compass size={26} />
              </div>

              <h3>Explore Your Guidance</h3>

              <p>
                If appropriate, proceed with the consultation
                arrangement and explore your concerns in a
                respectful environment.
              </p>
            </article>
          </div>

          <div className="services-process-cta">
            <a
              href={createWhatsAppLink(
                "Hello, I would like to begin an enquiry about your spiritual consultation services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="services-btn services-btn-gold"
            >
              Start Your Enquiry
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="services-faq section-padding">
        <div className="services-container services-faq-container">
          <div className="services-faq-heading">
            <span className="services-eyebrow">
              Helpful Information
            </span>

            <h2>
              Frequently Asked
              <span>Questions</span>
            </h2>

            <p>
              Learn more about our traditional spiritual services,
              consultations and how to contact us.
            </p>

            <a
              href={createWhatsAppLink(
                "Hello, I have a question about your spiritual guidance services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="services-text-link"
            >
              Ask Us Directly
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="services-faq-list">
            {faqs.map((faq) => (
              <ServicesFAQ key={faq.question} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE GUIDANCE */}

      <section className="services-disclaimer">
        <div className="services-container">
          <div className="services-disclaimer-inner">
            <ShieldCheck size={28} />

            <div>
              <h3>Respectful & Responsible Guidance</h3>

              <p>
                Spiritual guidance is offered for reflection,
                cultural and traditional perspectives and personal
                support. We do not guarantee specific outcomes or
                control another person's decisions. Consultations
                are not substitutes for professional medical,
                psychological, legal or financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="services-final-cta section-padding">
        <div className="services-final-cta-background">
          <img
            src={natureImage}
            alt="Peaceful natural setting for spiritual reflection"
            loading="lazy"
          />
        </div>

        <div className="services-final-cta-overlay" />

        <div className="services-final-cta-content">
          <span className="services-eyebrow">
            Your Journey Begins With A Conversation
          </span>

          <h2>
            Are You Seeking
            <span>Guidance & Clarity?</span>
          </h2>

          <p>
            Whatever questions you may be carrying, you are welcome
            to reach out and enquire about our traditional
            spiritual guidance services.
          </p>

          <div className="services-final-cta-buttons">
            <a
              href={createWhatsAppLink(
                "Hello, I would like to speak with you about your spiritual guidance services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="services-btn services-btn-gold"
            >
              <MessageCircle size={18} />
              Contact Us On WhatsApp
            </a>

            <Link
              to="/about"
              className="services-btn services-btn-outline"
            >
              Learn About Us
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="services-final-cta-small">
            <Sparkles size={15} />

            <span>
              Traditional Wisdom • Personal Reflection • Guidance
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
