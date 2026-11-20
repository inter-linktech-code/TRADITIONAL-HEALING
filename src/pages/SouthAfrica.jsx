
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
import "./SouthAfrica.css";

import southAfricaImage from "../assets/spiritual-consultation-south-africa.jpg";
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
      "Explore personal relationship concerns, emotional challenges and questions about love through a respectful spiritual guidance conversation.",
    path: "/love-spells",
  },
  {
    icon: Heart,
    title: "Lost Love & Reconciliation",
    description:
      "Discuss separation, unresolved feelings and the possibility of rebuilding communication while respecting everyone's choices.",
    path: "/lost-love",
  },
  {
    icon: Sparkles,
    title: "Money & Prosperity",
    description:
      "Seek spiritual reflection around financial goals, ambition, business direction and opportunities for personal growth.",
    path: "/money-spells",
  },
  {
    icon: Compass,
    title: "Luck & Success",
    description:
      "Explore spiritual perspectives on new beginnings, personal direction, confidence and the challenges standing in your way.",
    path: "/luck-success",
  },
  {
    icon: Leaf,
    title: "Spiritual Cleansing",
    description:
      "Learn about traditional cleansing practices and spiritual renewal intended to support reflection, peace and a fresh outlook.",
    path: "/spiritual-cleansing",
  },
  {
    icon: ShieldCheck,
    title: "Spiritual Protection",
    description:
      "Discuss traditional spiritual protection beliefs and practices in a thoughtful, culturally respectful consultation.",
    path: "/protection",
  },
  {
    icon: HandHeart,
    title: "Traditional Healing",
    description:
      "Discover traditional African healing heritage, ancestral wisdom and holistic approaches to spiritual wellbeing.",
    path: "/traditional-healing",
  },
];

const faqs = [
  {
    question: "Do you offer traditional healer consultations for people in South Africa?",
    answer:
      "You can contact Ancestral Wisdom from anywhere in South Africa to discuss your needs. Remote consultation arrangements, availability and the appropriate format must be confirmed directly before proceeding.",
  },
  {
    question: "How do I contact Ancestral Wisdom?",
    answer:
      "You can send an enquiry through WhatsApp using the contact links on this page. Briefly explain what kind of guidance you are looking for, and the team can respond with information about the next steps.",
  },
  {
    question: "What types of spiritual services can I enquire about?",
    answer:
      "Enquiries can cover love and relationship guidance, lost love and reconciliation, money and prosperity, luck and success, spiritual cleansing, spiritual protection and traditional healing.",
  },
  {
    question: "Can I receive a consultation if I live outside South Africa?",
    answer:
      "Yes, you may send an enquiry from South Africa or another country. Any remote consultation format, availability and arrangements will need to be discussed and confirmed.",
  },
  {
    question: "Are spiritual consultations a replacement for professional services?",
    answer:
      "No. Spiritual guidance is not a substitute for medical, mental health, legal or financial advice. Please consult an appropriately qualified professional when you need support in those areas.",
  },
];

function SouthAfrica() {
  return (
    <main className="sa-page">
      <SEO
        title="Traditional Healer in South Africa | Ancestral Wisdom"
        description="Looking for traditional spiritual guidance in South Africa? Contact Ancestral Wisdom to enquire about love guidance, spiritual cleansing, protection, prosperity and traditional African healing."
        keywords="traditional healer South Africa, African traditional healer South Africa, spiritual consultation South Africa, traditional healing, ancestral wisdom, spiritual cleansing South Africa, spiritual protection, love guidance"
      />

      {/* HERO */}
      <section className="sa-hero">
        <div
          className="sa-hero-image"
          style={{ backgroundImage: `url(${southAfricaImage})` }}
        />
        <div className="sa-hero-overlay" />

        <div className="sa-container sa-hero-content">
          <span className="sa-eyebrow">
            <span />
            ANCESTRAL WISDOM · SOUTH AFRICA
          </span>

          <h1>
            Traditional Spiritual Guidance
            <em>For South Africa</em>
          </h1>

          <p className="sa-hero-description">
            Explore African traditional wisdom, spiritual reflection and
            personal guidance. Connect with Ancestral Wisdom to discuss your
            concerns and enquire about a consultation from anywhere in South
            Africa.
          </p>

          <div className="sa-hero-actions">
            <a
              className="sa-button sa-button-gold"
              href={whatsappLink(
                "Hello Ancestral Wisdom. I am contacting you from South Africa and would like to enquire about your traditional spiritual guidance services."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
              <ArrowRight size={17} />
            </a>

            <Link to="/services" className="sa-button sa-button-outline">
              Explore Our Services
            </Link>
          </div>

          <div className="sa-hero-note">
            <Globe2 size={16} />
            Enquiries welcome from across South Africa
          </div>
        </div>

        <div className="sa-hero-bottom">
          <span>TRADITION</span>
          <span className="sa-hero-line" />
          <span>WISDOM</span>
          <span className="sa-hero-line" />
          <span>PERSONAL GUIDANCE</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="sa-intro sa-section">
        <div className="sa-container sa-intro-grid">
          <div className="sa-intro-image-wrap">
            <img
              src={healerImage}
              alt="Traditional African spiritual healer representing ancestral wisdom"
              className="sa-intro-image"
            />
            <div className="sa-image-caption">
              <span className="sa-caption-icon">
                <Sparkles size={19} />
              </span>
              <div>
                <strong>Wisdom Across Generations</strong>
                <span>Respect for African traditions</span>
              </div>
            </div>
          </div>

          <div className="sa-intro-copy">
            <span className="sa-eyebrow sa-eyebrow-dark">
              A CONNECTION TO TRADITION
            </span>
            <h2>
              Seeking a Traditional Healer in
              <em>South Africa?</em>
            </h2>

            <p>
              Questions about love, relationships, personal direction,
              prosperity and spiritual wellbeing can sometimes leave you
              searching for a different perspective. African traditional
              wisdom offers a cultural and spiritual heritage that many people
              continue to value.
            </p>

            <p>
              Ancestral Wisdom welcomes enquiries from individuals in South
              Africa who wish to learn more about traditional spiritual
              guidance. Our approach begins with listening to your concerns,
              understanding what you are looking for and discussing suitable
              next steps.
            </p>

            <p>
              Whether you are interested in relationship guidance, spiritual
              cleansing, traditional healing or personal reflection, you can
              start by reaching out to us directly.
            </p>

            <a
              className="sa-text-link"
              href={whatsappLink(
                "Hello Ancestral Wisdom. I would like to learn more about your spiritual guidance services for people in South Africa."
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
      <section className="sa-services sa-section">
        <div className="sa-container">
          <div className="sa-section-heading">
            <span className="sa-eyebrow">HOW WE CAN HELP</span>
            <h2>
              Spiritual Services Available
              <em>To Enquire About</em>
            </h2>
            <p>
              Explore the areas of traditional spiritual guidance offered by
              Ancestral Wisdom. Select a service to learn more about its focus.
            </p>
          </div>

          <div className="sa-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="sa-service-card" key={service.path}>
                  <div className="sa-service-top">
                    <span className="sa-service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="sa-service-icon">
                      <Icon size={23} strokeWidth={1.6} />
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <Link to={service.path} className="sa-card-link">
                    Discover this service <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="sa-heritage sa-section">
        <div className="sa-container sa-heritage-grid">
          <div className="sa-heritage-copy">
            <span className="sa-eyebrow">AFRICAN TRADITIONAL HERITAGE</span>
            <h2>
              The Meaning of
              <em>Ancestral Wisdom</em>
            </h2>

            <p>
              Across African communities, traditional knowledge has been
              passed down through generations. It includes cultural practices,
              spiritual beliefs, ceremonies, storytelling and ways of
              understanding the relationship between people, community and
              the natural world.
            </p>

            <p>
              South Africa has a rich diversity of cultural and traditional
              healing traditions. These traditions are not all the same, and
              their meanings and practices can vary between communities and
              families.
            </p>

            <p>
              Ancestral Wisdom approaches this heritage with respect,
              encouraging thoughtful conversations and an appreciation of
              the cultural significance of traditional knowledge.
            </p>

            <div className="sa-heritage-points">
              <div>
                <CheckCircle2 size={18} />
                Respect for African cultural heritage
              </div>
              <div>
                <CheckCircle2 size={18} />
                Personal and respectful conversations
              </div>
              <div>
                <CheckCircle2 size={18} />
                Clear information before any consultation
              </div>
            </div>
          </div>

          <div className="sa-heritage-image">
            <img
              src={ancestralImage}
              alt="Ancestral African wisdom and traditional spiritual heritage"
              loading="lazy"
            />
            <div className="sa-heritage-image-label">
              <span>ROOTED IN TRADITION</span>
              <strong>Wisdom. Heritage. Reflection.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sa-process sa-section">
        <div className="sa-container">
          <div className="sa-section-heading">
            <span className="sa-eyebrow">GETTING STARTED</span>
            <h2>
              Begin With a
              <em>Simple Conversation</em>
            </h2>
            <p>
              You do not need to know exactly what to ask. Start by explaining
              what is on your mind.
            </p>
          </div>

          <div className="sa-process-grid">
            <div className="sa-process-item">
              <span className="sa-process-number">01</span>
              <MessageCircle size={25} />
              <h3>Send Your Enquiry</h3>
              <p>
                Contact us on WhatsApp and mention that you are enquiring from
                South Africa.
              </p>
            </div>

            <div className="sa-process-item">
              <span className="sa-process-number">02</span>
              <HandHeart size={25} />
              <h3>Explain Your Concern</h3>
              <p>
                Tell us which area you would like to discuss, whether personal,
                relationship or spiritual.
              </p>
            </div>

            <div className="sa-process-item">
              <span className="sa-process-number">03</span>
              <CircleHelp size={25} />
              <h3>Discuss Your Options</h3>
              <p>
                Ask about the consultation format, availability, process and
                any relevant arrangements.
              </p>
            </div>

            <div className="sa-process-item">
              <span className="sa-process-number">04</span>
              <Clock3 size={25} />
              <h3>Confirm the Next Step</h3>
              <p>
                Proceed only after you understand the arrangements and have
                agreed on how to continue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REMOTE ENQUIRIES */}
      <section className="sa-remote sa-section">
        <div className="sa-container sa-remote-grid">
          <div className="sa-remote-image">
            <img
              src={natureImage}
              alt="Peaceful natural setting for spiritual reflection"
              loading="lazy"
            />
          </div>

          <div className="sa-remote-copy">
            <span className="sa-eyebrow">CONNECT FROM SOUTH AFRICA</span>
            <h2>
              Start Your Enquiry
              <em>From Wherever You Are</em>
            </h2>

            <p>
              You can contact Ancestral Wisdom from Johannesburg, Cape Town,
              Durban, Pretoria, Gqeberha, Bloemfontein and other parts of South
              Africa.
            </p>

            <p>
              If you are interested in a remote consultation, contact us first
              to discuss availability and the format that may be possible.
              Remote arrangements are not automatic and must be confirmed
              directly.
            </p>

            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom. I am based in South Africa and would like to ask about remote spiritual consultation options."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="sa-button sa-button-gold"
            >
              <MessageCircle size={18} />
              Ask About Consultations
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* HEALING TRADITION */}
      <section className="sa-tradition sa-section">
        <div className="sa-container sa-tradition-grid">
          <div className="sa-tradition-image">
            <img
              src={healingImage}
              alt="African traditional healing heritage and natural elements"
              loading="lazy"
            />
          </div>

          <div className="sa-tradition-copy">
            <span className="sa-eyebrow sa-eyebrow-dark">
              HONOURING TRADITION
            </span>
            <h2>
              Traditional African Healing
              <em>With Respect and Understanding</em>
            </h2>
            <p>
              Traditional healing is an important part of the cultural
              heritage of many African communities. It may involve different
              customs, knowledge systems and spiritual beliefs.
            </p>
            <p>
              We encourage every person to ask questions, understand the nature
              of any service being discussed and make informed personal
              decisions. No spiritual practice should require fear,
              intimidation or pressure.
            </p>
            <Link to="/traditional-healing" className="sa-text-link">
              Explore Traditional Healing <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sa-faq sa-section">
        <div className="sa-container sa-faq-grid">
          <div className="sa-faq-intro">
            <span className="sa-eyebrow">COMMON QUESTIONS</span>
            <h2>
              Questions About
              <em>Our South Africa Services</em>
            </h2>
            <p>
              Here are answers to some common questions before making an
              enquiry.
            </p>

            <a
              className="sa-button sa-button-gold"
              href={whatsappLink(
                "Hello Ancestral Wisdom. I have a question about your services for people in South Africa."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Ask Us Directly
            </a>
          </div>

          <div className="sa-faq-list">
            {faqs.map((faq, index) => (
              <details className="sa-faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="sa-faq-plus">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="sa-disclaimer">
        <div className="sa-container sa-disclaimer-inner">
          <ShieldCheck size={22} />
          <p>
            <strong>Important information:</strong> Spiritual guidance and
            traditional practices are offered for personal, cultural and
            spiritual reflection. They do not guarantee specific outcomes and
            are not a substitute for qualified medical, mental health, legal
            or financial services. All enquiries and consultation arrangements
            are subject to direct confirmation.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sa-final-cta">
        <div className="sa-final-cta-bg" />
        <div className="sa-container sa-final-cta-content">
          <span className="sa-eyebrow">ANCESTRAL WISDOM</span>
          <h2>
            Your Conversation
            <em>Can Begin Today</em>
          </h2>
          <p>
            If you are in South Africa and would like to enquire about
            traditional spiritual guidance, reach out to us. Tell us what you
            are looking for and let us discuss the next step.
          </p>

          <a
            href={whatsappLink(
              "Hello Ancestral Wisdom. I am contacting you from South Africa. I would like to enquire about your services and consultation options."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="sa-button sa-button-gold"
          >
            <MessageCircle size={18} />
            Contact Ancestral Wisdom
            <ArrowRight size={17} />
          </a>

          <span className="sa-final-note">
            Personal enquiries · Respectful conversations · Clear arrangements
          </span>
        </div>
      </section>
    </main>
  );
}

export default SouthAfrica;
