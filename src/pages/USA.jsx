
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
import "./USA.css";

import usaImage from "../assets/spiritual-consultation-usa.jpg";
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
      "Explore separation, unresolved feelings and the possibility of rebuilding communication while respecting everyone's choices.",
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
    question: "Can I contact Ancestral Wisdom from the United States?",
    answer:
      "Yes. You can send an enquiry from anywhere in the United States to learn about the services and possible consultation arrangements. Availability and the consultation format must be confirmed directly.",
  },
  {
    question: "Can I enquire about remote spiritual consultations?",
    answer:
      "You can ask about remote consultation options through WhatsApp. The available format, timing and arrangements will need to be discussed and confirmed before proceeding.",
  },
  {
    question: "What types of spiritual services can I ask about?",
    answer:
      "You can enquire about love and relationship guidance, lost love and reconciliation, money and prosperity, luck and success, spiritual cleansing, spiritual protection and traditional healing.",
  },
  {
    question: "Do I need to travel for a consultation?",
    answer:
      "Contact us first to discuss whether remote arrangements may be possible. Do not make travel plans unless the details have been discussed and confirmed directly.",
  },
  {
    question: "Can spiritual guidance guarantee a particular result?",
    answer:
      "No. Spiritual guidance cannot guarantee specific outcomes or control another person's decisions. Any consultation should be approached as personal and spiritual guidance rather than a promise of a particular result.",
  },
  {
    question: "Does traditional healing replace professional healthcare?",
    answer:
      "No. Spiritual guidance is not a substitute for qualified medical, mental health, legal or financial services. Please consult an appropriately qualified professional when needed.",
  },
];

function USA() {
  return (
    <main className="usa-page">
      <SEO
        title="African Traditional Healer in USA | Ancestral Wisdom"
        description="Looking for an African traditional healer or spiritual guidance in the USA? Contact Ancestral Wisdom to enquire about love guidance, spiritual cleansing, protection, prosperity and traditional healing."
        keywords="traditional healer USA, African traditional healer in USA, traditional healer United States, African spiritual guidance USA, spiritual consultation USA, ancestral wisdom, spiritual cleansing USA, spiritual protection USA, traditional African healing"
      />

      {/* HERO */}
      <section className="usa-hero">
        <div
          className="usa-hero-image"
          style={{ backgroundImage: `url(${usaImage})` }}
        />
        <div className="usa-hero-overlay" />

        <div className="usa-container usa-hero-content">
          <span className="usa-eyebrow">
            <span />
            ANCESTRAL WISDOM · UNITED STATES
          </span>

          <h1>
            African Traditional
            <em>Spiritual Guidance in the USA</em>
          </h1>

          <p className="usa-hero-description">
            Explore African traditional wisdom, spiritual reflection and
            personal guidance from wherever you are in the United States.
            Contact Ancestral Wisdom to discuss your concerns and enquire
            about consultation options.
          </p>

          <div className="usa-hero-actions">
            <a
              className="usa-button usa-button-gold"
              href={whatsappLink(
                "Hello Ancestral Wisdom. I am contacting you from the United States and would like to enquire about your traditional spiritual guidance services."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
              <ArrowRight size={17} />
            </a>

            <Link to="/services" className="usa-button usa-button-outline">
              Explore Our Services
            </Link>
          </div>

          <div className="usa-hero-note">
            <Globe2 size={16} />
            Enquiries welcome from across the United States
          </div>
        </div>

        <div className="usa-hero-bottom">
          <span>TRADITION</span>
          <span className="usa-hero-line" />
          <span>ANCESTRAL WISDOM</span>
          <span className="usa-hero-line" />
          <span>PERSONAL GUIDANCE</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="usa-intro usa-section">
        <div className="usa-container usa-intro-grid">
          <div className="usa-intro-image-wrap">
            <img
              src={healerImage}
              alt="African traditional spiritual healer representing ancestral wisdom"
              className="usa-intro-image"
            />

            <div className="usa-image-caption">
              <span className="usa-caption-icon">
                <Sparkles size={19} />
              </span>
              <div>
                <strong>Wisdom Across Generations</strong>
                <span>Respect for traditional knowledge</span>
              </div>
            </div>
          </div>

          <div className="usa-intro-copy">
            <span className="usa-eyebrow usa-eyebrow-dark">
              CONNECTING WITH TRADITION
            </span>

            <h2>
              Looking for an African Traditional Healer in
              <em>the USA?</em>
            </h2>

            <p>
              People living in the United States come from many different
              cultural backgrounds and traditions. For individuals with an
              interest in African heritage, traditional spiritual knowledge
              can remain an important part of personal identity and reflection.
            </p>

            <p>
              You may have questions about relationships, personal direction,
              prosperity, spiritual wellbeing or traditional African healing.
              Ancestral Wisdom welcomes enquiries from people who wish to
              explore these areas through a respectful conversation.
            </p>

            <p>
              Whether you live in New York, Los Angeles, Houston, Chicago,
              Atlanta, Washington, D.C. or elsewhere in the United States,
              you can contact us to ask about available services and possible
              remote consultation arrangements.
            </p>

            <a
              className="usa-text-link"
              href={whatsappLink(
                "Hello Ancestral Wisdom. I live in the United States and would like to learn more about your traditional African spiritual guidance services."
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
      <section className="usa-services usa-section">
        <div className="usa-container">
          <div className="usa-section-heading">
            <span className="usa-eyebrow">OUR AREAS OF GUIDANCE</span>
            <h2>
              Traditional Spiritual Services
              <em>Available to Enquire About</em>
            </h2>
            <p>
              Explore the areas of spiritual guidance offered by Ancestral
              Wisdom. Select a service to understand its focus.
            </p>
          </div>

          <div className="usa-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="usa-service-card" key={service.path}>
                  <div className="usa-service-top">
                    <span className="usa-service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="usa-service-icon">
                      <Icon size={23} strokeWidth={1.6} />
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <Link to={service.path} className="usa-card-link">
                    Discover this service <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="usa-heritage usa-section">
        <div className="usa-container usa-heritage-grid">
          <div className="usa-heritage-copy">
            <span className="usa-eyebrow">
              AFRICAN CULTURAL HERITAGE
            </span>

            <h2>
              The Importance of
              <em>Ancestral Wisdom</em>
            </h2>

            <p>
              African traditional knowledge includes diverse cultural
              practices, spiritual beliefs, ceremonies and teachings that
              have been shared across generations.
            </p>

            <p>
              For many people living far from their countries of origin,
              learning about traditional heritage can provide a meaningful
              connection to family history, culture and spiritual identity.
            </p>

            <p>
              African traditions are diverse and are not identical across
              communities. Ancestral Wisdom encourages respectful discussion,
              cultural understanding and informed personal decisions.
            </p>

            <div className="usa-heritage-points">
              <div>
                <CheckCircle2 size={18} />
                Respect for African cultural heritage
              </div>
              <div>
                <CheckCircle2 size={18} />
                Thoughtful personal conversations
              </div>
              <div>
                <CheckCircle2 size={18} />
                Clear information before proceeding
              </div>
            </div>
          </div>

          <div className="usa-heritage-image">
            <img
              src={ancestralImage}
              alt="Ancestral African spiritual wisdom and traditional heritage"
              loading="lazy"
            />
            <div className="usa-heritage-image-label">
              <span>ROOTED IN TRADITION</span>
              <strong>Wisdom. Heritage. Reflection.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="usa-process usa-section">
        <div className="usa-container">
          <div className="usa-section-heading">
            <span className="usa-eyebrow">HOW TO GET STARTED</span>
            <h2>
              Begin With a Simple
              <em>Personal Enquiry</em>
            </h2>
            <p>
              A conversation helps you understand the services and determine
              whether the available arrangements are suitable.
            </p>
          </div>

          <div className="usa-process-grid">
            <div className="usa-process-item">
              <span className="usa-process-number">01</span>
              <MessageCircle size={25} />
              <h3>Send Your Message</h3>
              <p>
                Contact us through WhatsApp and mention that you are enquiring
                from the United States.
              </p>
            </div>

            <div className="usa-process-item">
              <span className="usa-process-number">02</span>
              <HandHeart size={25} />
              <h3>Explain Your Concern</h3>
              <p>
                Share the area you would like to discuss and the type of
                guidance you are looking for.
              </p>
            </div>

            <div className="usa-process-item">
              <span className="usa-process-number">03</span>
              <CircleHelp size={25} />
              <h3>Discuss the Options</h3>
              <p>
                Ask about the consultation format, availability, process and
                any relevant arrangements.
              </p>
            </div>

            <div className="usa-process-item">
              <span className="usa-process-number">04</span>
              <Clock3 size={25} />
              <h3>Confirm the Details</h3>
              <p>
                Proceed only after the arrangements are clear and have been
                agreed directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REMOTE CONSULTATION */}
      <section className="usa-remote usa-section">
        <div className="usa-container usa-remote-grid">
          <div className="usa-remote-image">
            <img
              src={natureImage}
              alt="Peaceful natural environment for personal spiritual reflection"
              loading="lazy"
            />
          </div>

          <div className="usa-remote-copy">
            <span className="usa-eyebrow">CONNECT FROM THE USA</span>

            <h2>
              Enquire From Anywhere
              <em>Across the United States</em>
            </h2>

            <p>
              You can contact Ancestral Wisdom from New York, California,
              Texas, Florida, Georgia, Illinois, Arizona, Pennsylvania and
              other states.
            </p>

            <p>
              If you are interested in a remote consultation, contact us first
              to discuss what may be possible. Availability, timing and the
              consultation format must be confirmed directly.
            </p>

            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom. I am based in the United States and would like to ask about your remote spiritual consultation options."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="usa-button usa-button-gold"
            >
              <MessageCircle size={18} />
              Ask About Consultations
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* TRADITIONAL HEALING */}
      <section className="usa-tradition usa-section">
        <div className="usa-container usa-tradition-grid">
          <div className="usa-tradition-image">
            <img
              src={healingImage}
              alt="African traditional healing heritage and natural elements"
              loading="lazy"
            />
          </div>

          <div className="usa-tradition-copy">
            <span className="usa-eyebrow usa-eyebrow-dark">
              TRADITIONAL KNOWLEDGE
            </span>

            <h2>
              African Traditional Healing
              <em>Across Generations</em>
            </h2>

            <p>
              Traditional African healing is connected to a wide range of
              cultural knowledge systems, community practices, family
              traditions and spiritual beliefs.
            </p>

            <p>
              For people living in the United States, learning about these
              traditions can be an opportunity to explore cultural heritage
              and ask questions about spiritual wellbeing.
            </p>

            <p>
              We encourage everyone to understand the nature of any service
              being discussed, ask questions and make informed decisions
              without pressure or fear.
            </p>

            <Link to="/traditional-healing" className="usa-text-link">
              Explore Traditional Healing <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="usa-faq usa-section">
        <div className="usa-container usa-faq-grid">
          <div className="usa-faq-intro">
            <span className="usa-eyebrow">FREQUENTLY ASKED QUESTIONS</span>

            <h2>
              Questions About
              <em>Our USA Enquiries</em>
            </h2>

            <p>
              Find answers to common questions about contacting Ancestral
              Wisdom from the United States.
            </p>

            <a
              className="usa-button usa-button-gold"
              href={whatsappLink(
                "Hello Ancestral Wisdom. I am contacting you from the United States and have a question about your services."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Ask Us Directly
            </a>
          </div>

          <div className="usa-faq-list">
            {faqs.map((faq) => (
              <details className="usa-faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="usa-faq-plus">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="usa-disclaimer">
        <div className="usa-container usa-disclaimer-inner">
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
      <section className="usa-final-cta">
        <div className="usa-final-cta-bg" />

        <div className="usa-container usa-final-cta-content">
          <span className="usa-eyebrow">ANCESTRAL WISDOM</span>

          <h2>
            Wherever You Are in the USA,
            <em>Start With a Conversation</em>
          </h2>

          <p>
            If you are interested in African traditional spiritual guidance,
            contact Ancestral Wisdom to discuss your questions and enquire
            about available consultation options.
          </p>

          <a
            href={whatsappLink(
              "Hello Ancestral Wisdom. I am contacting you from the United States and would like to enquire about your traditional spiritual guidance services."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="usa-button usa-button-gold"
          >
            <MessageCircle size={18} />
            Contact Ancestral Wisdom
            <ArrowRight size={17} />
          </a>

          <span className="usa-final-note">
            Personal enquiries · Respectful conversations · Clear arrangements
          </span>
        </div>
      </section>
    </main>
  );
}

export default USA;
