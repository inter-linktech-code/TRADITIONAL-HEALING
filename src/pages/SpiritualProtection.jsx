
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Heart,
  Sparkles,
  Leaf,
  Sun,
  Compass,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  HandHeart,
  Eye,
  Flame,
} from "lucide-react";

import SEO from "../components/SEO";

import heroImage from "../assets/spiritual-protection-guidance.jpg";
import protectionImage from "../assets/traditional-spiritual-protection.jpg";
import peaceImage from "../assets/peace-of-mind-spiritual-guidance.jpg";
import ancestralImage from "../assets/ancestral-protection-wisdom.jpg";
import natureImage from "../assets/spiritual-protection-nature.jpg";
import healerImage from "../assets/traditional-spiritual-healer.jpg";
import guidanceImage from "../assets/spiritual-guidance-in-nature.jpg";

import "./SpiritualProtection.css";

const WHATSAPP = "27732335239";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: ShieldCheck,
    title: "Traditional Spiritual Protection",
    description:
      "Explore traditional spiritual beliefs and practices associated with protection, safety, personal boundaries and peace.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Guidance",
    description:
      "Personal conversations for those seeking clarity, direction and a better understanding of their spiritual journey.",
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    description:
      "Supportive spiritual reflection for people navigating uncertainty, emotional pressure or challenging life circumstances.",
  },
  {
    icon: Leaf,
    title: "Ancestral Wisdom",
    description:
      "Explore cultural traditions, ancestral teachings and the spiritual values that have been passed down through generations.",
  },
  {
    icon: Sun,
    title: "Positive Energy & Renewal",
    description:
      "Reflect on personal wellbeing, positive habits, hope and creating a more balanced outlook on life.",
  },
  {
    icon: Compass,
    title: "Personal Direction",
    description:
      "Discuss personal concerns, decisions, life transitions and the direction you hope to take moving forward.",
  },
];

const steps = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Contact us through WhatsApp and introduce yourself. You can share the kind of spiritual guidance you are seeking.",
  },
  {
    number: "02",
    title: "Share Your Concerns",
    description:
      "Discuss your questions or personal circumstances at a level you feel comfortable with.",
  },
  {
    number: "03",
    title: "Receive Guidance",
    description:
      "Explore traditional perspectives, spiritual reflection and available consultation options.",
  },
  {
    number: "04",
    title: "Make Your Own Decisions",
    description:
      "Take time to reflect, consider practical steps and decide what is right for you.",
  },
];

const countries = [
  { name: "South Africa", path: "/traditional-healer-south-africa" },
  { name: "Germany", path: "/traditional-healer-germany" },
  { name: "United States", path: "/traditional-healer-usa" },
  { name: "Zimbabwe", path: "/traditional-healer-zimbabwe" },
  { name: "Namibia", path: "/traditional-healer-namibia" },
];

const faqs = [
  {
    question: "What is spiritual protection?",
    answer:
      "Spiritual protection is a concept found in many cultures and belief systems. It may involve prayer, traditional customs, spiritual reflection, symbolic practices and personal beliefs intended to help someone feel grounded, reassured and spiritually connected.",
  },
  {
    question: "What type of spiritual protection guidance do you offer?",
    answer:
      "We offer conversations about traditional spiritual beliefs, personal guidance, ancestral wisdom, reflection and spiritual practices. Consultation options depend on your needs and circumstances.",
  },
  {
    question: "Can I enquire about spiritual protection online?",
    answer:
      "Yes. You can contact us through WhatsApp to discuss your enquiry and ask about remote consultation options.",
  },
  {
    question: "Can spiritual guidance help me feel more peaceful?",
    answer:
      "Some people find spiritual reflection, prayer, cultural traditions and supportive conversations meaningful. Experiences differ from person to person, and no specific emotional or life outcome can be guaranteed.",
  },
  {
    question: "Do you guarantee protection from harm?",
    answer:
      "No spiritual service can guarantee protection from physical danger, harm or specific events. If you face an immediate safety threat, seek practical assistance from emergency services or trusted people nearby.",
  },
  {
    question: "How can I contact Ancestral Wisdom?",
    answer:
      "You can send us a WhatsApp message explaining your enquiry. We will discuss your consultation needs and the available arrangements.",
  },
];

function SpiritualProtection() {
  return (
    <>
      <SEO
        title="Spiritual Protection & Guidance | Ancestral Wisdom"
        description="Explore traditional spiritual protection, ancestral wisdom, personal guidance, peace of mind and spiritual reflection. Contact Ancestral Wisdom for a respectful consultation."
        keywords="spiritual protection, traditional spiritual protection, spiritual guidance, ancestral protection, ancestral wisdom, spiritual consultation, peace of mind, traditional healer, spiritual support"
      />

      <main className="protection-page">

        {/* HERO */}
        <section className="protection-hero">
          <div
            className="protection-hero-image"
            style={{ backgroundImage: `url(${heroImage})` }}
          />

          <div className="protection-hero-overlay" />

          <div className="protection-hero-content">
            <span className="protection-eyebrow">
              <ShieldCheck size={16} />
              SPIRITUAL GUIDANCE • TRADITION • INNER STRENGTH
            </span>

            <h1>
              Spiritual
              <span>Protection</span>
              &amp; Guidance
            </h1>

            <p className="protection-hero-subtitle">
              Find reassurance. Strengthen your spirit.
              Reconnect with the wisdom that guides you.
            </p>

            <p className="protection-hero-description">
              Explore traditional spiritual beliefs, ancestral wisdom
              and personal guidance for reflection, peace of mind,
              spiritual connection and a greater sense of direction.
            </p>

            <div className="protection-hero-buttons">
              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom, I would like to enquire about spiritual protection and guidance."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="protection-btn protection-btn-gold"
              >
                <MessageCircle size={18} />
                Private Consultation
                <ArrowRight size={17} />
              </a>

              <Link
                to="/services"
                className="protection-btn protection-btn-outline"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="protection-hero-features">
              <span>
                <ShieldCheck size={16} />
                Respectful Guidance
              </span>

              <span>
                <Heart size={16} />
                Personal Consultation
              </span>

              <span>
                <Sparkles size={16} />
                Traditional Wisdom
              </span>
            </div>
          </div>

          <div className="protection-hero-footer">
            <span>ANCESTRAL WISDOM</span>
            <span>PERSONAL SPIRITUAL GUIDANCE</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="protection-introduction protection-section">
          <div className="protection-intro-image">
            <img
              src={peaceImage}
              alt="Peaceful spiritual reflection and inner strength"
              loading="lazy"
            />

            <div className="protection-image-caption">
              <ShieldCheck size={23} />

              <div>
                <strong>Strength Within</strong>
                <span>Peace • Reflection • Direction</span>
              </div>
            </div>
          </div>

          <div className="protection-intro-content">
            <span className="protection-section-label">
              A JOURNEY OF SPIRITUAL AWARENESS
            </span>

            <h2>
              Protection Begins
              <span> With Awareness</span>
            </h2>

            <p>
              Throughout history, people have turned to spiritual
              beliefs, prayer, ancestral traditions and cultural
              practices to find reassurance during uncertain times.
            </p>

            <p>
              Spiritual protection can hold different meanings for
              different people. It may represent faith, hope,
              resilience, personal boundaries, connection with
              tradition or the desire to feel grounded.
            </p>

            <p>
              We provide a respectful space for you to discuss your
              concerns, explore traditional spiritual perspectives
              and reflect on the things that matter most in your life.
            </p>

            <a
              href={whatsappLink(
                "Hello, I would like to speak with you about spiritual protection and guidance."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="protection-text-link"
            >
              Speak With Us
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section className="protection-services protection-section">
          <div className="protection-section-heading">
            <span className="protection-section-label">
              OUR SPIRITUAL SERVICES
            </span>

            <h2>
              Guidance for Your
              <span> Spiritual Journey</span>
            </h2>

            <p>
              Explore different areas of spiritual guidance
              according to your personal beliefs, interests
              and circumstances.
            </p>
          </div>

          <div className="protection-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  className="protection-service-card"
                  key={service.title}
                >
                  <span className="protection-card-number">
                    0{index + 1}
                  </span>

                  <div className="protection-service-icon">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a
                    href={whatsappLink(
                      `Hello, I am interested in ${service.title}. Please share more information.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="protection-card-link"
                  >
                    Make an Enquiry
                    <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* ANCESTRAL WISDOM */}
        <section className="protection-ancestral-section">
          <div className="protection-ancestral-image">
            <img
              src={ancestralImage}
              alt="African ancestral wisdom and traditional spiritual beliefs"
              loading="lazy"
            />
          </div>

          <div className="protection-ancestral-content">
            <span className="protection-section-label">
              CULTURE • HERITAGE • TRADITION
            </span>

            <h2>
              The Wisdom of
              <span> Generations</span>
            </h2>

            <p>
              Ancestral traditions are an important part of
              cultural identity, history and spirituality.
              For many communities, teachings passed down
              through generations offer perspectives on
              responsibility, respect, community and life.
            </p>

            <p>
              Exploring these traditions can be a meaningful
              opportunity to understand your beliefs, reflect
              on your personal values and reconnect with
              cultural heritage.
            </p>

            <div className="protection-ancestral-points">
              <div>
                <CheckCircle2 size={19} />
                Cultural understanding
              </div>

              <div>
                <CheckCircle2 size={19} />
                Respect for ancestral traditions
              </div>

              <div>
                <CheckCircle2 size={19} />
                Personal spiritual reflection
              </div>

              <div>
                <CheckCircle2 size={19} />
                Individual choice and empowerment
              </div>
            </div>

            <a
              href={whatsappLink(
                "Hello, I would like to learn more about ancestral wisdom and traditional spiritual guidance."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="protection-btn protection-btn-gold"
            >
              Explore Traditional Guidance
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* PERSONAL WELLBEING */}
        <section className="protection-wellbeing protection-section">
          <div className="protection-section-heading">
            <span className="protection-section-label">
              PEACE • BALANCE • PERSONAL STRENGTH
            </span>

            <h2>
              Protect Your Peace.
              <span> Honour Your Journey.</span>
            </h2>

            <p>
              Personal wellbeing includes the decisions you make,
              the relationships you maintain, the boundaries you
              establish and the support you seek.
            </p>
          </div>

          <div className="protection-wellbeing-grid">
            <article className="protection-wellbeing-card">
              <img
                src={natureImage}
                alt="Nature and spiritual reflection"
                loading="lazy"
              />

              <div className="protection-wellbeing-overlay">
                <span>01 / REFLECTION</span>
                <h3>Reconnect With Yourself</h3>
                <p>
                  Make time to understand your feelings,
                  values and personal needs.
                </p>
              </div>
            </article>

            <article className="protection-wellbeing-card">
              <img
                src={protectionImage}
                alt="Traditional spiritual protection practices"
                loading="lazy"
              />

              <div className="protection-wellbeing-overlay">
                <span>02 / TRADITION</span>
                <h3>Explore Your Beliefs</h3>
                <p>
                  Discover the meaning of cultural traditions
                  and spiritual practices within your life.
                </p>
              </div>
            </article>

            <article className="protection-wellbeing-card">
              <img
                src={guidanceImage}
                alt="Personal spiritual guidance and peaceful surroundings"
                loading="lazy"
              />

              <div className="protection-wellbeing-overlay">
                <span>03 / DIRECTION</span>
                <h3>Move Forward With Clarity</h3>
                <p>
                  Reflect on your circumstances and make
                  thoughtful decisions about your future.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* BANNER */}
        <section className="protection-banner">
          <div
            className="protection-banner-image"
            style={{ backgroundImage: `url(${healerImage})` }}
          />

          <div className="protection-banner-overlay" />

          <div className="protection-banner-content">
            <span className="protection-section-label">
              YOUR CONCERNS MATTER
            </span>

            <h2>
              You Don't Have to
              <span> Navigate Everything Alone.</span>
            </h2>

            <p>
              If you are looking for spiritual guidance,
              traditional wisdom or someone to discuss
              your concerns with, we welcome your enquiry.
            </p>

            <a
              href={whatsappLink(
                "Hello, I would like a private consultation regarding spiritual guidance and protection."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="protection-btn protection-btn-gold"
            >
              <MessageCircle size={18} />
              Start a Private Conversation
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* PROCESS */}
        <section className="protection-process protection-section">
          <div className="protection-section-heading">
            <span className="protection-section-label">
              OUR CONSULTATION PROCESS
            </span>

            <h2>
              A Respectful Approach
              <span> to Spiritual Guidance</span>
            </h2>

            <p>
              Every consultation begins with listening.
              We aim to understand your enquiry and
              provide information about the options available.
            </p>
          </div>

          <div className="protection-process-grid">
            {steps.map((step) => (
              <article
                className="protection-process-card"
                key={step.number}
              >
                <span className="protection-process-number">
                  {step.number}
                </span>

                <div className="protection-process-icon">
                  <HandHeart size={25} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="protection-values">
          <div className="protection-values-inner">
            <div className="protection-values-heading">
              <span className="protection-section-label">
                WHAT MATTERS TO US
              </span>

              <h2>
                Spiritual Guidance
                <span> With Integrity</span>
              </h2>

              <p>
                Your wellbeing, dignity, personal freedom
                and understanding matter throughout
                every consultation.
              </p>
            </div>

            <div className="protection-values-grid">
              <article>
                <ShieldCheck size={30} />
                <h3>Respect</h3>
                <p>
                  We respect your beliefs, boundaries
                  and personal decisions.
                </p>
              </article>

              <article>
                <Heart size={30} />
                <h3>Compassion</h3>
                <p>
                  We approach personal enquiries
                  with understanding and empathy.
                </p>
              </article>

              <article>
                <Eye size={30} />
                <h3>Transparency</h3>
                <p>
                  We encourage honest conversations
                  and realistic expectations.
                </p>
              </article>

              <article>
                <Flame size={30} />
                <h3>Tradition</h3>
                <p>
                  We value cultural heritage,
                  spiritual identity and wisdom.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* COUNTRIES */}
        <section className="protection-countries protection-section">
          <div className="protection-section-heading">
            <span className="protection-section-label">
              INTERNATIONAL CONSULTATION ENQUIRIES
            </span>

            <h2>
              Spiritual Guidance
              <span> Around the World</span>
            </h2>

            <p>
              Explore our country-specific pages to learn more
              about our spiritual guidance services and
              consultation enquiries.
            </p>
          </div>

          <div className="protection-countries-grid">
            {countries.map((country) => (
              <Link
                to={country.path}
                key={country.name}
                className="protection-country-card"
              >
                <span>{country.name}</span>
                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="protection-faq protection-section">
          <div className="protection-faq-layout">
            <div className="protection-faq-intro">
              <span className="protection-section-label">
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h2>
                Your Questions.
                <span> Our Guidance.</span>
              </h2>

              <p>
                Find answers to common questions about
                spiritual protection and consultation.
              </p>

              <a
                href={whatsappLink(
                  "Hello, I have a question about spiritual protection and guidance."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="protection-btn protection-btn-gold"
              >
                Ask a Question
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="protection-faq-list">
              {faqs.map((faq, index) => (
                <details
                  className="protection-faq-item"
                  key={faq.question}
                  open={index === 0}
                >
                  <summary>
                    {faq.question}
                    <span className="protection-faq-plus">+</span>
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="protection-disclaimer">
          <div className="protection-disclaimer-inner">
            <ShieldCheck size={24} />

            <div>
              <h3>Important Notice</h3>

              <p>
                Spiritual guidance and traditional practices
                are intended for personal, cultural and
                spiritual reflection. They cannot guarantee
                protection from harm or specific outcomes
                and are not a substitute for medical,
                psychological, legal or other professional
                assistance. If you are in immediate danger,
                contact local emergency services or a trusted
                person. Consultations are voluntary and
                should respect your personal choices.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="protection-final-cta">
          <div className="protection-final-cta-content">
            <span className="protection-section-label">
              BEGIN WITH A CONVERSATION
            </span>

            <h2>
              Find Strength.
              <span> Find Clarity. Find Your Way.</span>
            </h2>

            <p>
              Contact Ancestral Wisdom today to enquire
              about personal spiritual guidance and
              traditional consultation.
            </p>

            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom, I would like to enquire about spiritual protection and guidance. Please tell me how I can begin."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="protection-btn protection-btn-gold"
            >
              <MessageCircle size={19} />
              WhatsApp Us Today
              <ArrowRight size={18} />
            </a>

            <span className="protection-final-note">
              PERSONAL CONSULTATIONS • RESPECTFUL GUIDANCE • TRADITIONAL WISDOM
            </span>
          </div>
        </section>

      </main>
    </>
  );
}

export default SpiritualProtection;
