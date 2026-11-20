
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  Heart,
  Sparkles,
  ShieldCheck,
  Leaf,
  Compass,
  HandHeart,
  Globe2,
  CheckCircle2,
  Clock3,
  CircleHelp,
} from "lucide-react";

import SEO from "../components/SEO";
import "./Germany.css";

import germanyImage from "../assets/spiritual-consultation-germany.jpg";
import healerImage from "../assets/traditional-spiritual-healer.jpg";
import ancestralImage from "../assets/ancestral-spiritual-wisdom.jpg";
import healingImage from "../assets/traditional-african-healing.jpg";
import natureImage from "../assets/spiritual-guidance-in-nature.jpg";

const WHATSAPP = "27732335239";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: Heart,
    title: "Love & Relationship Guidance",
    description:
      "Discuss relationship questions, emotional challenges and matters of the heart through a respectful spiritual guidance conversation.",
    path: "/love-spells",
  },
  {
    icon: Heart,
    title: "Lost Love & Reconciliation",
    description:
      "Explore separation, unresolved feelings and the possibility of rebuilding communication while respecting personal choices.",
    path: "/lost-love",
  },
  {
    icon: Sparkles,
    title: "Money & Prosperity",
    description:
      "Seek spiritual reflection around business ambitions, financial goals, personal growth and new opportunities.",
    path: "/money-spells",
  },
  {
    icon: Compass,
    title: "Luck & Success",
    description:
      "Explore questions about life direction, confidence, fresh beginnings and overcoming personal obstacles.",
    path: "/luck-success",
  },
  {
    icon: Leaf,
    title: "Spiritual Cleansing",
    description:
      "Learn about traditional cleansing beliefs and practices associated with spiritual renewal and personal reflection.",
    path: "/spiritual-cleansing",
  },
  {
    icon: ShieldCheck,
    title: "Spiritual Protection",
    description:
      "Discuss traditional spiritual protection beliefs and practices in a thoughtful and culturally respectful way.",
    path: "/protection",
  },
  {
    icon: HandHeart,
    title: "Traditional Healing",
    description:
      "Discover African traditional healing heritage, ancestral wisdom and different approaches to spiritual wellbeing.",
    path: "/traditional-healing",
  },
];

const faqs = [
  {
    question: "Can I contact Ancestral Wisdom from Germany?",
    answer:
      "Yes. You can send an enquiry from anywhere in Germany to learn about the services and possible consultation arrangements. Availability and the consultation format must be confirmed directly.",
  },
  {
    question: "Do you offer online spiritual consultations in Germany?",
    answer:
      "You can ask about remote consultation options through WhatsApp. The available format, timing and arrangements will need to be discussed and confirmed before proceeding.",
  },
  {
    question: "What spiritual services can I enquire about?",
    answer:
      "You can enquire about love and relationship guidance, lost love and reconciliation, money and prosperity, luck and success, spiritual cleansing, spiritual protection and traditional healing.",
  },
  {
    question: "Do I need to travel to receive guidance?",
    answer:
      "Contact us first to discuss whether a remote consultation may be possible for your circumstances. Do not make travel arrangements unless they have been directly discussed and confirmed.",
  },
  {
    question: "Are spiritual services guaranteed to solve personal problems?",
    answer:
      "No. Spiritual guidance cannot guarantee a particular result or control another person's decisions. Any consultation should be approached as personal and spiritual guidance rather than a promise of a specific outcome.",
  },
  {
    question: "Can traditional healing replace medical treatment?",
    answer:
      "No. Traditional spiritual guidance is not a substitute for qualified medical, mental health, legal or financial advice. Please consult an appropriately qualified professional when needed.",
  },
];

function Germany() {
  return (
    <main className="ger-page">
      <SEO
        title="Traditional Healer in Germany | African Spiritual Guidance"
        description="Looking for a traditional healer or African spiritual guidance in Germany? Contact Ancestral Wisdom to enquire about love guidance, spiritual cleansing, protection, prosperity and traditional healing."
        keywords="traditional healer Germany, African traditional healer Germany, traditional African healing Germany, spiritual guidance Germany, spiritual consultation Germany, ancestral wisdom Germany, spiritual cleansing Germany, spiritual protection Germany"
      />

      {/* HERO */}
      <section className="ger-hero">
        <div
          className="ger-hero-image"
          style={{ backgroundImage: `url(${germanyImage})` }}
        />
        <div className="ger-hero-overlay" />

        <div className="ger-container ger-hero-content">
          <span className="ger-eyebrow">
            <span />
            ANCESTRAL WISDOM · GERMANY
          </span>

          <h1>
            African Traditional
            <em>Spiritual Guidance in Germany</em>
          </h1>

          <p className="ger-hero-description">
            Explore traditional African spiritual wisdom and personal
            guidance wherever you are in Germany. Contact Ancestral Wisdom to
            discuss your concerns and enquire about available consultation
            options.
          </p>

          <div className="ger-hero-actions">
            <a
              className="ger-button ger-button-gold"
              href={whatsappLink(
                "Hello Ancestral Wisdom. I am contacting you from Germany and would like to enquire about your traditional spiritual guidance services."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
              <ArrowRight size={17} />
            </a>

            <Link to="/services" className="ger-button ger-button-outline">
              Explore Our Services
            </Link>
          </div>

          <div className="ger-hero-note">
            <Globe2 size={16} />
            Enquiries welcome from across Germany
          </div>
        </div>

        <div className="ger-hero-bottom">
          <span>TRADITION</span>
          <span className="ger-hero-line" />
          <span>ANCESTRAL WISDOM</span>
          <span className="ger-hero-line" />
          <span>PERSONAL GUIDANCE</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="ger-intro ger-section">
        <div className="ger-container ger-intro-grid">
          <div className="ger-intro-image-wrap">
            <img
              src={healerImage}
              alt="African traditional spiritual healer representing ancestral wisdom"
              className="ger-intro-image"
            />

            <div className="ger-image-caption">
              <span className="ger-caption-icon">
                <Sparkles size={19} />
              </span>
              <div>
                <strong>Wisdom Across Generations</strong>
                <span>Respect for traditional knowledge</span>
              </div>
            </div>
          </div>

          <div className="ger-intro-copy">
            <span className="ger-eyebrow ger-eyebrow-dark">
              CONNECTING WITH TRADITION
            </span>

            <h2>
              Seeking an African Traditional Healer in
              <em>Germany?</em>
            </h2>

            <p>
              Living far from your cultural roots does not necessarily mean
              losing interest in the traditional knowledge and spiritual
              practices that have been passed down through generations.
            </p>

            <p>
              People living in Germany may have questions about relationships,
              personal direction, prosperity, spiritual wellbeing and
              traditional African practices. Ancestral Wisdom welcomes
              enquiries from individuals who would like to discuss these
              matters.
            </p>

            <p>
              Our starting point is a conversation. Tell us what you are
              looking for, ask your questions and learn about the available
              consultation arrangements before making a decision.
            </p>

            <a
              className="ger-text-link"
              href={whatsappLink(
                "Hello Ancestral Wisdom. I live in Germany and would like to learn more about your traditional African spiritual guidance services."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a conversation <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="ger-services ger-section">
        <div className="ger-container">
          <div className="ger-section-heading">
            <span className="ger-eyebrow">OUR AREAS OF GUIDANCE</span>
            <h2>
              Traditional Spiritual Services
              <em>To Explore in Germany</em>
            </h2>
            <p>
              Discover the areas of guidance offered by Ancestral Wisdom.
              Select a service to learn more about its focus.
            </p>
          </div>

          <div className="ger-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="ger-service-card" key={service.path}>
                  <div className="ger-service-top">
                    <span className="ger-service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="ger-service-icon">
                      <Icon size={23} strokeWidth={1.6} />
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <Link to={service.path} className="ger-card-link">
                    Discover this service <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ANCESTRAL HERITAGE */}
      <section className="ger-heritage ger-section">
        <div className="ger-container ger-heritage-grid">
          <div className="ger-heritage-copy">
            <span className="ger-eyebrow">
              AFRICAN CULTURAL HERITAGE
            </span>

            <h2>
              Understanding
              <em>Ancestral Wisdom</em>
            </h2>

            <p>
              African traditional knowledge encompasses a broad range of
              cultural practices, spiritual beliefs, ceremonies and teachings
              that have been preserved and shared across generations.
            </p>

            <p>
              For many people, ancestral traditions remain meaningful
              expressions of cultural identity, family heritage and spiritual
              understanding. These traditions differ across communities and
              should be approached with care and respect.
            </p>

            <p>
              Ancestral Wisdom encourages thoughtful conversations about
              traditional practices and their significance, without making
              promises about supernatural outcomes.
            </p>

            <div className="ger-heritage-points">
              <div>
                <CheckCircle2 size={18} />
                Respect for African cultural traditions
              </div>
              <div>
                <CheckCircle2 size={18} />
                Personal and respectful conversations
              </div>
              <div>
                <CheckCircle2 size={18} />
                Clear information before proceeding
              </div>
            </div>
          </div>

          <div className="ger-heritage-image">
            <img
              src={ancestralImage}
              alt="Ancestral African spiritual wisdom and heritage"
              loading="lazy"
            />
            <div className="ger-heritage-image-label">
              <span>ROOTED IN TRADITION</span>
              <strong>Wisdom. Heritage. Reflection.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ger-process ger-section">
        <div className="ger-container">
          <div className="ger-section-heading">
            <span className="ger-eyebrow">HOW TO GET STARTED</span>
            <h2>
              Four Steps to Begin
              <em>Your Enquiry</em>
            </h2>
            <p>
              Contact us from Germany and discuss the guidance you are
              interested in before deciding how to proceed.
            </p>
          </div>

          <div className="ger-process-grid">
            <div className="ger-process-item">
              <span className="ger-process-number">01</span>
              <MessageCircle size={25} />
              <h3>Contact Us</h3>
              <p>
                Send a WhatsApp message and mention that you are enquiring
                from Germany.
              </p>
            </div>

            <div className="ger-process-item">
              <span className="ger-process-number">02</span>
              <HandHeart size={25} />
              <h3>Share Your Concern</h3>
              <p>
                Explain the area you would like to discuss and what kind of
                guidance you are seeking.
              </p>
            </div>

            <div className="ger-process-item">
              <span className="ger-process-number">03</span>
              <CircleHelp size={25} />
              <h3>Ask Your Questions</h3>
              <p>
                Discuss the consultation format, availability, process and
                any relevant arrangements.
              </p>
            </div>

            <div className="ger-process-item">
              <span className="ger-process-number">04</span>
              <Clock3 size={25} />
              <h3>Confirm the Details</h3>
              <p>
                Proceed only when the arrangements are clear and have been
                agreed directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REMOTE CONSULTATIONS */}
      <section className="ger-remote ger-section">
        <div className="ger-container ger-remote-grid">
          <div className="ger-remote-image">
            <img
              src={natureImage}
              alt="Peaceful natural environment for personal spiritual reflection"
              loading="lazy"
            />
          </div>

          <div className="ger-remote-copy">
            <span className="ger-eyebrow">CONNECT FROM GERMANY</span>

            <h2>
              Enquire From Anywhere
              <em>Across Germany</em>
            </h2>

            <p>
              You can contact Ancestral Wisdom from Berlin, Hamburg, Munich,
              Frankfurt, Cologne, Düsseldorf, Stuttgart and other parts of
              Germany.
            </p>

            <p>
              If you are interested in receiving guidance remotely, contact
              us first to discuss what may be available. Consultation
              arrangements, timing and the format must be confirmed directly.
            </p>

            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom. I am based in Germany and would like to ask about your remote spiritual consultation options."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="ger-button ger-button-gold"
            >
              <MessageCircle size={18} />
              Ask About Consultations
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* TRADITIONAL HEALING */}
      <section className="ger-tradition ger-section">
        <div className="ger-container ger-tradition-grid">
          <div className="ger-tradition-image">
            <img
              src={healingImage}
              alt="African traditional healing heritage and natural elements"
              loading="lazy"
            />
          </div>

          <div className="ger-tradition-copy">
            <span className="ger-eyebrow ger-eyebrow-dark">
              TRADITIONAL KNOWLEDGE
            </span>

            <h2>
              African Traditional Healing
              <em>Across Borders and Generations</em>
            </h2>

            <p>
              Traditional African healing is connected to diverse cultural
              knowledge systems, family traditions, community practices and
              spiritual beliefs.
            </p>

            <p>
              For people living in Germany, learning about these traditions
              can be a way to explore cultural heritage and ask questions
              about spiritual wellbeing.
            </p>

            <p>
              Every person should be able to understand the nature of a
              service, ask questions and make informed decisions without
              pressure or fear.
            </p>

            <Link to="/traditional-healing" className="ger-text-link">
              Explore Traditional Healing <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ger-faq ger-section">
        <div className="ger-container ger-faq-grid">
          <div className="ger-faq-intro">
            <span className="ger-eyebrow">FREQUENTLY ASKED QUESTIONS</span>

            <h2>
              Your Questions
              <em>Answered</em>
            </h2>

            <p>
              Find out more about contacting Ancestral Wisdom from Germany
              and the types of services you can enquire about.
            </p>

            <a
              className="ger-button ger-button-gold"
              href={whatsappLink(
                "Hello Ancestral Wisdom. I am contacting you from Germany and have a question about your services."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Ask Us Directly
            </a>
          </div>

          <div className="ger-faq-list">
            {faqs.map((faq) => (
              <details className="ger-faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="ger-faq-plus">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE PRACTICE */}
      <section className="ger-disclaimer">
        <div className="ger-container ger-disclaimer-inner">
          <ShieldCheck size={22} />
          <p>
            <strong>Important information:</strong> Spiritual guidance and
            traditional practices are offered for personal, cultural and
            spiritual reflection. They cannot guarantee specific outcomes
            and are not a substitute for qualified medical, mental health,
            legal or financial services. All consultation arrangements and
            availability must be confirmed directly.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ger-final-cta">
        <div className="ger-final-cta-bg" />

        <div className="ger-container ger-final-cta-content">
          <span className="ger-eyebrow">ANCESTRAL WISDOM</span>

          <h2>
            Wherever You Are in Germany,
            <em>Start With a Conversation</em>
          </h2>

          <p>
            Have questions about traditional African spiritual guidance?
            Contact Ancestral Wisdom and tell us what you would like to
            discuss.
          </p>

          <a
            href={whatsappLink(
              "Hello Ancestral Wisdom. I am contacting you from Germany and would like to enquire about your traditional spiritual guidance services."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="ger-button ger-button-gold"
          >
            <MessageCircle size={18} />
            Contact Ancestral Wisdom
            <ArrowRight size={17} />
          </a>

          <span className="ger-final-note">
            Personal enquiries · Respectful conversations · Clear arrangements
          </span>
        </div>
      </section>
    </main>
  );
}

export default Germany;
