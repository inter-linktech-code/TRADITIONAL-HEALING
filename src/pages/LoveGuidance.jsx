
import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  Compass,
  Flower2,
  HandHeart,
  LockKeyhole,
  CheckCircle2,
  CircleHelp,
  Globe,
} from "lucide-react";

import SEO from "../components/SEO";
import "./LoveGuidance.css";

/* =========================================================
   LOCAL IMAGES
   Place these in src/assets/images/
   ========================================================= */

import heroImage from "../assets/love-and-relationship-spiritual-guidance.jpg";
import relationshipImage from "../assets/love-guidance-relationship-consultation.jpg";
import emotionalImage from "../assets/emotional-healing-love-guidance.jpg";
import reconciliationImage from "../assets/lost-love-reconciliation-guidance.jpg";
import spiritualImage from "../assets/ancestral-spiritual-wisdom.jpg";
import consultationImage from "../assets/traditional-spiritual-healer.jpg";
import natureImage from "../assets/spiritual-guidance-in-nature.jpg";

/* =========================================================
   WHATSAPP
   ========================================================= */

const WHATSAPP_NUMBER = "27732335239";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/* =========================================================
   GUIDANCE SERVICES
   ========================================================= */

const guidanceServices = [
  {
    icon: Heart,
    title: "Love & Relationship Guidance",
    description:
      "Explore matters of the heart through personal consultation and traditional spiritual perspectives. Discuss relationship concerns, emotional connection, uncertainty and the questions surrounding your love life.",
  },
  {
    icon: HeartHandshake,
    title: "Lost Love & Reconciliation",
    description:
      "When a relationship ends, it can leave unanswered questions and difficult emotions. Our consultations provide a space to reflect on separation, reconciliation, healing and the way forward.",
  },
  {
    icon: Flower2,
    title: "Emotional Healing & Renewal",
    description:
      "Explore ways to navigate heartbreak, disappointment, loneliness and difficult relationship experiences while reflecting on your emotional wellbeing and personal growth.",
  },
  {
    icon: Sparkles,
    title: "Traditional Spiritual Guidance",
    description:
      "Learn about traditional spiritual perspectives, cultural practices and symbolic approaches to love, connection, personal reflection and new beginnings.",
  },
];

/* =========================================================
   FAQ
   ========================================================= */

const loveFAQs = [
  {
    question: "What is love and relationship spiritual guidance?",
    answer:
      "Love and relationship spiritual guidance is a consultation that explores relationship concerns, emotional experiences and personal questions through traditional or spiritual perspectives. It provides an opportunity to discuss your situation and reflect on your choices.",
  },
  {
    question: "Can I enquire about getting my ex back?",
    answer:
      "Yes. You can enquire about lost love and reconciliation guidance. Consultations may help you reflect on your relationship, separation, feelings and whether reconciliation is a healthy and realistic option. Another person's feelings and decisions cannot be controlled or guaranteed.",
  },
  {
    question: "Do you offer traditional love spell consultations?",
    answer:
      "You may enquire about traditional love-related spiritual practices and beliefs. We can discuss the nature of your enquiry and any consultation arrangements. We do not promise that spiritual practices will make someone love you, return to you or change their decisions.",
  },
  {
    question: "Can I get guidance if my relationship is experiencing problems?",
    answer:
      "Yes. You can discuss communication difficulties, uncertainty, emotional distance, conflict, trust concerns and other relationship challenges during your enquiry.",
  },
  {
    question: "Can I contact you from Germany, USA or other countries?",
    answer:
      "Yes. We welcome international enquiries, including from South Africa, Germany, the United States, Zimbabwe, Namibia and other countries. Contact us through WhatsApp to discuss consultation arrangements.",
  },
  {
    question: "Is my relationship enquiry confidential?",
    answer:
      "We approach personal enquiries with discretion and respect. Please only share information you feel comfortable sharing and avoid sending highly sensitive personal information in your initial message.",
  },
  {
    question: "How do I book or enquire?",
    answer:
      "Click any WhatsApp enquiry button on this page. You can briefly describe the kind of relationship guidance you are looking for and your country, and we can discuss the next steps.",
  },
  {
    question: "Can you guarantee that someone will return to me?",
    answer:
      "No. We cannot guarantee reconciliation, marriage, commitment, attraction or another person's behaviour. Personal guidance is offered for reflection and spiritual perspectives, not to control another person.",
  },
];

/* =========================================================
   FAQ COMPONENT
   ========================================================= */

function LoveFAQ({ item }) {
  return (
    <details className="love-faq-item">
      <summary>
        <span>{item.question}</span>
        <CircleHelp size={20} />
      </summary>

      <div className="love-faq-answer">
        <p>{item.answer}</p>
      </div>
    </details>
  );
}

/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function LoveGuidance() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Love and Relationship Spiritual Guidance",
    serviceType: "Love and relationship consultation",
    description:
      "Traditional spiritual consultations and personal guidance for love, relationships, emotional connection, separation, reconciliation and relationship reflection.",
    provider: {
      "@type": "Organization",
      name: "Ancestral Wisdom",
    },
    areaServed: [
      { "@type": "Country", name: "South Africa" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Zimbabwe" },
      { "@type": "Country", name: "Namibia" },
    ],
  };

  return (
    <main className="love-page">
      <SEO
        title="Love & Relationship Spiritual Guidance | Ancestral Wisdom"
        description="Seek traditional spiritual guidance for love, relationship problems, lost love, reconciliation, heartbreak and emotional connection. Confidential enquiries via WhatsApp from South Africa, Germany, USA, Zimbabwe and Namibia."
        keywords="love spiritual guidance, love guidance, love consultation, traditional love guidance, love spells enquiry, relationship spiritual guidance, relationship problems consultation, lost love guidance, reconciliation guidance, get ex back guidance, heartbreak spiritual guidance, relationship healing, traditional healer love guidance, love consultation South Africa, love guidance Germany, love guidance USA, love guidance Zimbabwe, love guidance Namibia"
      />

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      {/* =================================================
          HERO
      ================================================= */}

      <section className="love-hero">
        <div className="love-hero-image">
          <img
            src={heroImage}
            alt="Love and relationship spiritual guidance consultation"
          />
        </div>

        <div className="love-hero-overlay" />

        <div className="love-hero-content">
          <span className="love-eyebrow">
            Love • Relationships • Traditional Wisdom
          </span>

          <h1>
            Matters Of The Heart.
            <span>Guidance For Your Journey.</span>
          </h1>

          <p>
            When love brings questions, uncertainty or emotional
            challenges, find a welcoming space to reflect,
            explore traditional spiritual perspectives and
            discuss the path ahead.
          </p>

          <div className="love-hero-actions">
            <a
              href={whatsappLink(
                "Hello, I would like to enquire about Love and Relationship Spiritual Guidance."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="love-btn love-btn-gold"
            >
              <MessageCircle size={18} />
              Enquire About Love Guidance
            </a>

            <a href="#love-services" className="love-btn love-btn-outline">
              Explore Guidance
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="love-hero-trust">
            <span>
              <ShieldCheck size={17} />
              Respectful Guidance
            </span>

            <span>
              <LockKeyhole size={17} />
              Discreet Enquiries
            </span>

            <span>
              <Globe size={17} />
              International Enquiries
            </span>
          </div>
        </div>
      </section>

      {/* =================================================
          INTRODUCTION
      ================================================= */}

      <section className="love-introduction love-section">
        <div className="love-container">
          <div className="love-intro-grid">
            <div className="love-intro-heading">
              <span className="love-eyebrow">
                Understanding Your Heart
              </span>

              <h2>
                Love Can Be Beautiful.
                <span>But It Can Also Be Complicated.</span>
              </h2>
            </div>

            <div className="love-intro-content">
              <p>
                Relationships are among the most meaningful parts
                of life. They can bring happiness, companionship,
                connection and hope. But they can also bring
                uncertainty, misunderstandings, separation and
                difficult decisions.
              </p>

              <p>
                When you are experiencing challenges in your love
                life, you may find yourself searching for
                direction, answers or a different perspective.
              </p>

              <p>
                Ancestral Wisdom offers traditional spiritual
                consultation and personal relationship guidance
                for people who wish to explore their concerns in
                a respectful and welcoming environment.
              </p>

              <a href="#love-services" className="love-text-link">
                Explore Our Love Guidance
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          IMAGE FEATURE
      ================================================= */}

      <section className="love-feature">
        <div className="love-feature-image">
          <img
            src={relationshipImage}
            alt="Personal relationship guidance and spiritual reflection"
            loading="lazy"
          />
        </div>

        <div className="love-feature-content">
          <span className="love-eyebrow">
            A Personal Approach
          </span>

          <h2>
            Your Story Is Unique.
            <span>Your Questions Matter.</span>
          </h2>

          <p>
            No two relationships are exactly the same. Your
            experiences, emotions, hopes and circumstances deserve
            to be approached with care.
          </p>

          <p>
            Whether you are seeking love, trying to understand a
            relationship, navigating a separation or exploring
            traditional spiritual perspectives, you are welcome
            to make an enquiry.
          </p>

          <a
            href={whatsappLink(
              "Hello, I would like to discuss my relationship situation and enquire about spiritual guidance."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="love-btn love-btn-gold"
          >
            Discuss Your Situation
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* =================================================
          GUIDANCE SERVICES
      ================================================= */}

      <section className="love-services love-section" id="love-services">
        <div className="love-container">
          <div className="love-section-heading">
            <span className="love-eyebrow">
              Areas Of Guidance
            </span>

            <h2>
              Relationship & Love
              <span>Consultation Services</span>
            </h2>

            <p>
              Explore the areas of love and relationship guidance
              that may relate to your circumstances.
            </p>
          </div>

          <div className="love-services-grid">
            {guidanceServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="love-service-card" key={service.title}>
                  <div className="love-service-number">
                    0{index + 1}
                  </div>

                  <div className="love-service-icon">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a
                    href={whatsappLink(
                      `Hello, I would like to enquire about ${service.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="love-card-link"
                  >
                    Make An Enquiry
                    <ArrowRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          LOST LOVE
      ================================================= */}

      <section className="love-reconciliation love-section">
        <div className="love-container love-reconciliation-grid">
          <div className="love-reconciliation-image">
            <img
              src={reconciliationImage}
              alt="Lost love and relationship reconciliation consultation"
              loading="lazy"
            />
          </div>

          <div className="love-reconciliation-content">
            <span className="love-eyebrow">
              Lost Love & Reconciliation
            </span>

            <h2>
              When Someone You Love
              <span>Is No Longer Beside You.</span>
            </h2>

            <p>
              Separation can leave you with unanswered questions,
              sadness, uncertainty and a desire to understand what
              happened.
            </p>

            <p>
              If you are thinking about reconciliation or trying
              to find peace after a breakup, a personal consultation
              offers an opportunity to talk about your experience,
              reflect on your feelings and explore your options.
            </p>

            <ul className="love-check-list">
              <li>
                <CheckCircle2 size={17} />
                Guidance following separation
              </li>

              <li>
                <CheckCircle2 size={17} />
                Exploring reconciliation questions
              </li>

              <li>
                <CheckCircle2 size={17} />
                Understanding emotional challenges
              </li>

              <li>
                <CheckCircle2 size={17} />
                Reflection and personal renewal
              </li>
            </ul>

            <a
              href={whatsappLink(
                "Hello, I would like to enquire about Lost Love and Reconciliation Guidance."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="love-btn love-btn-gold"
            >
              Enquire About Reconciliation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =================================================
          EMOTIONAL WELLBEING
      ================================================= */}

      <section className="love-emotional love-section">
        <div className="love-container love-emotional-grid">
          <div className="love-emotional-content">
            <span className="love-eyebrow">
              Heartbreak • Reflection • Renewal
            </span>

            <h2>
              Take Time To Understand
              <span>Your Feelings.</span>
            </h2>

            <p>
              Heartbreak and relationship uncertainty can affect
              how you see yourself, your future and your ability
              to trust again.
            </p>

            <p>
              Emotional healing is personal. It may involve
              reflection, support from trusted people, healthy
              boundaries and finding ways to reconnect with
              yourself.
            </p>

            <p>
              Our spiritual consultations provide space to
              discuss your experience and explore traditional
              perspectives on emotional renewal.
            </p>

            <a
              href={whatsappLink(
                "Hello, I would like to enquire about emotional healing and spiritual guidance concerning my relationship."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="love-text-link"
            >
              Speak With Us
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="love-emotional-image">
            <img
              src={emotionalImage}
              alt="Emotional healing, reflection and personal renewal after relationship challenges"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* =================================================
          TRADITION
      ================================================= */}

      <section className="love-tradition love-section">
        <div className="love-container love-tradition-grid">
          <div className="love-tradition-image">
            <img
              src={spiritualImage}
              alt="Ancestral wisdom and traditional spiritual perspectives on love"
              loading="lazy"
            />
          </div>

          <div className="love-tradition-content">
            <span className="love-eyebrow">
              Traditional Wisdom
            </span>

            <h2>
              Spiritual Perspectives
              <span>On Love & Connection</span>
            </h2>

            <p>
              Traditional spiritual beliefs have long explored
              themes of love, connection, harmony, personal
              purpose and the importance of relationships.
            </p>

            <p>
              Our consultations provide an opportunity to discuss
              these perspectives, understand the nature of your
              enquiry and explore the cultural or spiritual
              practices you are interested in.
            </p>

            <p>
              We approach these conversations with respect for
              your personal beliefs, circumstances and choices.
            </p>

            <a
              href={whatsappLink(
                "Hello, I would like to enquire about traditional spiritual guidance concerning love and relationships."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="love-btn love-btn-gold"
            >
              Enquire About Traditional Guidance
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =================================================
          HOW TO ENQUIRE
      ================================================= */}

      <section className="love-process love-section">
        <div className="love-container">
          <div className="love-section-heading">
            <span className="love-eyebrow">
              Getting Started
            </span>

            <h2>
              Begin With
              <span>A Simple Conversation</span>
            </h2>

            <p>
              You do not need to know exactly what to say.
              Simply begin by telling us what kind of guidance
              you are looking for.
            </p>
          </div>

          <div className="love-process-grid">
            <article className="love-process-card">
              <span className="love-process-step">01</span>

              <MessageCircle size={29} />

              <h3>Send A Message</h3>

              <p>
                Contact us on WhatsApp and introduce yourself.
                You can mention your country and the kind of
                relationship guidance you are seeking.
              </p>
            </article>

            <article className="love-process-card">
              <span className="love-process-step">02</span>

              <HandHeart size={29} />

              <h3>Explain Your Enquiry</h3>

              <p>
                Discuss your relationship concerns, questions
                or interests so we can understand what type of
                consultation you are looking for.
              </p>
            </article>

            <article className="love-process-card">
              <span className="love-process-step">03</span>

              <Compass size={29} />

              <h3>Discuss The Next Steps</h3>

              <p>
                Learn about the available consultation
                arrangements and decide whether you wish to
                proceed.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =================================================
          INTERNATIONAL
      ================================================= */}

      <section className="love-international">
        <div className="love-international-image">
          <img
            src={consultationImage}
            alt="Traditional spiritual love consultation available for international enquiries"
            loading="lazy"
          />
        </div>

        <div className="love-international-content">
          <span className="love-eyebrow">
            International Enquiries Welcome
          </span>

          <h2>
            Wherever You Are.
            <span>Reach Out.</span>
          </h2>

          <p>
            We welcome enquiries from individuals seeking
            traditional spiritual guidance about love and
            relationships from different parts of the world.
          </p>

          <div className="love-country-list">
            <span>
              <Globe size={16} />
              South Africa
            </span>

            <span>
              <Globe size={16} />
              Germany
            </span>

            <span>
              <Globe size={16} />
              United States
            </span>

            <span>
              <Globe size={16} />
              Zimbabwe
            </span>

            <span>
              <Globe size={16} />
              Namibia
            </span>
          </div>

          <a
            href={whatsappLink(
              "Hello, I am contacting you from another country and would like to enquire about love and relationship spiritual guidance."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="love-btn love-btn-gold"
          >
            International Enquiry
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* =================================================
          FAQ
      ================================================= */}

      <section className="love-faq love-section">
        <div className="love-container love-faq-grid">
          <div className="love-faq-heading">
            <span className="love-eyebrow">
              Frequently Asked Questions
            </span>

            <h2>
              Questions About
              <span>Love Guidance?</span>
            </h2>

            <p>
              Find answers to common questions about relationship
              consultations, reconciliation enquiries and
              traditional spiritual guidance.
            </p>

            <a
              href={whatsappLink(
                "Hello, I have a question about your love and relationship guidance services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="love-text-link"
            >
              Ask A Question
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="love-faq-list">
            {loveFAQs.map((faq) => (
              <LoveFAQ key={faq.question} item={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          RESPONSIBLE GUIDANCE
      ================================================= */}

      <section className="love-disclaimer">
        <div className="love-container love-disclaimer-inner">
          <ShieldCheck size={28} />

          <div>
            <h3>Respect, Consent & Personal Wellbeing</h3>

            <p>
              Our consultations are intended for spiritual
              reflection, traditional perspectives and personal
              guidance. We do not guarantee that another person
              will return, fall in love, marry, change their
              behaviour or respond to a spiritual practice.
              Relationships should respect the consent,
              boundaries and choices of everyone involved.
              Spiritual guidance is not a substitute for
              professional counselling or mental health care.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section className="love-final-cta">
        <div className="love-final-image">
          <img
            src={natureImage}
            alt="Peaceful natural environment symbolising reflection and new beginnings"
            loading="lazy"
          />
        </div>

        <div className="love-final-overlay" />

        <div className="love-final-content">
          <span className="love-eyebrow">
            Your Enquiry Is Welcome
          </span>

          <h2>
            When Your Heart
            <span>Is Searching For Guidance.</span>
          </h2>

          <p>
            Take the first step. Reach out and discuss the
            traditional spiritual guidance you are looking for.
          </p>

          <a
            href={whatsappLink(
              "Hello, I would like to enquire about love and relationship spiritual guidance."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="love-btn love-btn-gold"
          >
            <MessageCircle size={18} />
            WhatsApp Us Today
          </a>

          <div className="love-final-note">
            <Sparkles size={15} />
            Traditional Wisdom · Personal Guidance · Reflection
          </div>
        </div>
      </section>
    </main>
  );
}
