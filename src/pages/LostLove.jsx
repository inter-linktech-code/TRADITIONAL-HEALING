
import { Link } from "react-router-dom";
import {
  Heart,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  ArrowUpRight,
  Compass,
  Flower2,
  HandHeart,
  Moon,
  Star,
  Clock,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

import SEO from "../components/SEO";

import heroImage from "../assets/lost-love-reconciliation-guidance.jpg";
import healingImage from "../assets/emotional-healing-love-guidance.jpg";
import relationshipImage from "../assets/love-guidance-relationship-consultation.jpg";
import spiritualImage from "../assets/ancestral-spiritual-wisdom.jpg";
import consultationImage from "../assets/traditional-spiritual-healer.jpg";
import natureImage from "../assets/spiritual-guidance-in-nature.jpg";

import "./LostLove.css";

const WHATSAPP = "27732335239";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const reconciliationServices = [
  {
    icon: Heart,
    title: "Lost Love Guidance",
    description:
      "Explore your feelings and circumstances surrounding a relationship that has ended. Receive personal guidance on finding clarity, healing and navigating the possibility of reconnection.",
  },
  {
    icon: Sparkles,
    title: "Reconciliation Guidance",
    description:
      "Reflect on relationship challenges, emotional distance and unresolved matters while exploring a thoughtful, spiritually meaningful path forward.",
  },
  {
    icon: Flower2,
    title: "Emotional Healing",
    description:
      "Find space to process heartbreak, disappointment, loneliness and the emotional weight of separation while rebuilding peace within yourself.",
  },
  {
    icon: Compass,
    title: "Relationship Direction",
    description:
      "Gain perspective when you are uncertain whether to reconnect, move forward or seek a healthier understanding of your relationship.",
  },
  {
    icon: Moon,
    title: "Spiritual Reflection",
    description:
      "Explore traditional spiritual perspectives, personal reflection and meaningful practices that may help you navigate difficult relationship experiences.",
  },
  {
    icon: HandHeart,
    title: "Personal Consultation",
    description:
      "Discuss your individual circumstances privately and receive compassionate guidance tailored to the questions and concerns you wish to share.",
  },
];

const steps = [
  {
    number: "01",
    title: "Reach Out Privately",
    description:
      "Send a WhatsApp message explaining what you are going through. You only need to share what you feel comfortable discussing.",
  },
  {
    number: "02",
    title: "Explain Your Situation",
    description:
      "Discuss your relationship history, concerns, hopes and the questions you would like guidance with.",
  },
  {
    number: "03",
    title: "Receive Personal Guidance",
    description:
      "Explore your situation through traditional spiritual perspectives, personal reflection and compassionate guidance.",
  },
  {
    number: "04",
    title: "Choose Your Path Forward",
    description:
      "Take time to make decisions that respect your wellbeing, the other person's boundaries and your own future.",
  },
];

const faqs = [
  {
    question: "Can you help me reconnect with someone I love?",
    answer:
      "We offer spiritual and relationship guidance for people hoping to reconnect with someone they care about. Every relationship is different, and reconnection depends on the choices, feelings and circumstances of everyone involved. No outcome can be guaranteed.",
  },
  {
    question: "Can I get guidance after a breakup?",
    answer:
      "Yes. You can discuss the emotional challenges of separation, unresolved questions, reconciliation hopes and ways to find clarity after a breakup.",
  },
  {
    question: "Do you offer lost love spiritual guidance?",
    answer:
      "Yes. We provide private consultations for people seeking traditional spiritual perspectives and guidance regarding lost love, relationship uncertainty and emotional healing.",
  },
  {
    question: "Can I contact you from another country?",
    answer:
      "Yes. Consultations and enquiries can be initiated through WhatsApp from South Africa, Germany, the United States, Zimbabwe, Namibia and other countries.",
  },
  {
    question: "Is my relationship enquiry confidential?",
    answer:
      "We approach personal enquiries with respect, discretion and compassion. Please avoid sending sensitive financial information, passwords or information you do not wish to share.",
  },
  {
    question: "How do I start a consultation?",
    answer:
      "You can contact us directly through WhatsApp. Introduce yourself and briefly explain the type of relationship guidance you are seeking. We can discuss your enquiry and the next steps.",
  },
  {
    question: "Can you guarantee that my ex will return?",
    answer:
      "No responsible spiritual adviser can guarantee another person's feelings, decisions or actions. Our guidance focuses on reflection, spiritual wellbeing and respectful choices rather than guaranteed results or controlling another person.",
  },
  {
    question: "What if I want to move on instead?",
    answer:
      "You are welcome to seek guidance focused on emotional healing, personal clarity, self-confidence and finding peace as you move forward. Reconciliation is not the only path to wellbeing.",
  },
];

function FAQItem({ question, answer }) {
  return (
    <details className="lost-faq-item">
      <summary>
        <span>{question}</span>
        <ChevronDown size={20} />
      </summary>
      <div className="lost-faq-answer">
        <p>{answer}</p>
      </div>
    </details>
  );
}

export default function LostLove() {
  const message =
    "Hello Ancestral Wisdom. I would like private guidance regarding lost love and reconciliation. Please tell me how I can begin.";

  return (
    <>
      <SEO
        title="Lost Love & Reconciliation Spiritual Guidance | Ancestral Wisdom"
        description="Seeking lost love and reconciliation guidance? Explore compassionate traditional spiritual guidance, relationship reflection and emotional healing. Contact us privately on WhatsApp."
        keywords="lost love spiritual guidance, reconciliation guidance, traditional healer for lost love, relationship healing, spiritual relationship guidance, breakup healing, reconnect with lost love, ancestral wisdom"
      />

      <main className="lost-love-page">
        {/* HERO */}
        <section className="lost-hero">
          <div className="lost-hero-image">
            <img
              src={heroImage}
              alt="Peaceful spiritual setting for lost love and reconciliation guidance"
            />
          </div>

          <div className="lost-hero-overlay" />

          <div className="lost-hero-content">
            <span className="lost-eyebrow">
              <Sparkles size={15} />
              LOVE • HEALING • RECONNECTION
            </span>

            <h1>
              Lost Love &amp;
              <span> Reconciliation</span>
            </h1>

            <p className="lost-hero-subtitle">
              When love leaves unanswered questions, find space for healing,
              clarity and guidance on the path ahead.
            </p>

            <p className="lost-hero-description">
              Compassionate traditional spiritual guidance for matters of the
              heart, relationship separation, emotional healing and the hope
              of reconnecting respectfully.
            </p>

            <div className="lost-hero-buttons">
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="lost-btn lost-btn-gold"
              >
                <MessageCircle size={18} />
                Begin a Private Enquiry
                <ArrowUpRight size={17} />
              </a>

              <Link to="/services" className="lost-btn lost-btn-outline">
                Explore Our Services
              </Link>
            </div>

            <div className="lost-hero-trust">
              <span>
                <ShieldCheck size={16} />
                Private Enquiries
              </span>
              <span>
                <Heart size={16} />
                Compassionate Guidance
              </span>
              <span>
                <Sparkles size={16} />
                Traditional Wisdom
              </span>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="lost-intro lost-section">
          <div className="lost-container lost-intro-grid">
            <div className="lost-intro-image-wrap">
              <img
                src={healingImage}
                alt="Emotional healing and reflection after relationship separation"
                className="lost-intro-image"
              />

              <div className="lost-image-caption">
                <Sparkles size={17} />
                <span>Healing begins with understanding.</span>
              </div>
            </div>

            <div className="lost-intro-copy">
              <span className="lost-section-label">
                MATTERS OF THE HEART
              </span>

              <h2>
                Sometimes the hardest part is not losing love,
                <span> but understanding what comes next.</span>
              </h2>

              <p>
                Separation can leave you with unanswered questions, emotional
                pain, memories and the desire to restore a connection that once
                meant so much.
              </p>

              <p>
                Whether you are hoping for reconciliation, trying to
                understand what happened or searching for peace after
                heartbreak, having a compassionate space to talk can help you
                reflect on your circumstances.
              </p>

              <p>
                At Ancestral Wisdom, we welcome relationship enquiries with
                respect and understanding. Our approach brings together
                traditional spiritual perspectives, personal reflection and
                compassionate guidance.
              </p>

              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="lost-text-link"
              >
                Talk to us privately
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="lost-services lost-section">
          <div className="lost-container">
            <div className="lost-section-heading">
              <span className="lost-section-label">
                OUR RELATIONSHIP GUIDANCE
              </span>

              <h2>
                Guidance for the <span>Journey of Love</span>
              </h2>

              <p>
                Every relationship has its own story. Explore guidance
                designed to help you reflect, find clarity and make thoughtful
                decisions about your emotional and spiritual wellbeing.
              </p>
            </div>

            <div className="lost-services-grid">
              {reconciliationServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article className="lost-service-card" key={service.title}>
                    <div className="lost-card-top">
                      <div className="lost-service-icon">
                        <Icon size={24} />
                      </div>

                      <span className="lost-card-number">
                        0{index + 1}
                      </span>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <a
                      href={whatsappLink(
                        `Hello Ancestral Wisdom. I would like to enquire about ${service.title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lost-card-link"
                    >
                      Make an enquiry
                      <ArrowUpRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* RECONCILIATION */}
        <section className="lost-reconciliation lost-section">
          <div className="lost-container lost-reconciliation-grid">
            <div className="lost-reconciliation-copy">
              <span className="lost-section-label">
                RECONNECTION &amp; UNDERSTANDING
              </span>

              <h2>
                Exploring the possibility of
                <span> reconciliation</span>
              </h2>

              <p>
                When a relationship ends, the desire to reconnect can be
                deeply personal. Sometimes there are unresolved feelings,
                misunderstandings, difficult circumstances or conversations
                that never happened.
              </p>

              <p>
                Spiritual guidance can provide a space to reflect on your
                intentions, consider your next steps and approach the
                possibility of reconnection with care and respect.
              </p>

              <ul className="lost-check-list">
                <li>
                  <CheckCircle2 size={18} />
                  Reflect on relationship challenges
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  Explore unresolved emotions
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  Find clarity about your next steps
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  Focus on healthy communication
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  Respect the choices of everyone involved
                </li>
              </ul>

              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I would like to discuss my relationship and explore reconciliation guidance."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="lost-btn lost-btn-gold"
              >
                Discuss My Situation
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="lost-reconciliation-image">
              <img
                src={relationshipImage}
                alt="Relationship reflection and spiritual reconciliation guidance"
              />

              <div className="lost-reconciliation-image-overlay">
                <span>Every story deserves understanding.</span>
              </div>
            </div>
          </div>
        </section>

        {/* HEALING */}
        <section className="lost-healing lost-section">
          <div className="lost-container lost-healing-grid">
            <div className="lost-healing-image">
              <img
                src={spiritualImage}
                alt="Traditional spiritual wisdom and personal reflection"
              />
            </div>

            <div className="lost-healing-copy">
              <span className="lost-section-label">
                HEALING &amp; PERSONAL WELLBEING
              </span>

              <h2>
                Your heart deserves
                <span> peace, too.</span>
              </h2>

              <p>
                It is natural to miss someone, to wish things had turned out
                differently or to feel uncertain about the future after a
                breakup.
              </p>

              <p>
                While you explore the possibility of reconciliation, your own
                wellbeing remains important. Guidance can also help you
                reconnect with your confidence, boundaries, peace and sense of
                direction.
              </p>

              <div className="lost-healing-points">
                <div>
                  <Heart size={20} />
                  <span>Emotional reflection</span>
                </div>

                <div>
                  <Flower2 size={20} />
                  <span>Personal renewal</span>
                </div>

                <div>
                  <Compass size={20} />
                  <span>Finding direction</span>
                </div>

                <div>
                  <Star size={20} />
                  <span>Restoring inner confidence</span>
                </div>
              </div>

              <Link to="/spiritual-cleansing" className="lost-text-link">
                Explore spiritual cleansing
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* TRADITION */}
        <section className="lost-tradition lost-section">
          <div className="lost-tradition-bg">
            <img
              src={natureImage}
              alt="Nature and traditional spiritual reflection"
            />
          </div>

          <div className="lost-tradition-overlay" />

          <div className="lost-container lost-tradition-content">
            <span className="lost-section-label">
              TRADITIONAL SPIRITUAL PERSPECTIVES
            </span>

            <h2>
              Wisdom, reflection
              <br />
              <span>and the matters of the heart.</span>
            </h2>

            <p>
              Across many traditions, relationships, love, personal
              connection and emotional wellbeing are approached with
              reflection, symbolism, prayer and spiritual practices.
            </p>

            <p>
              Our consultations offer a respectful opportunity to discuss
              your personal concerns, explore traditional perspectives and
              consider the choices available to you.
            </p>

            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom. I would like to learn more about your traditional spiritual relationship guidance."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="lost-btn lost-btn-gold"
            >
              Speak With Us
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="lost-process lost-section">
          <div className="lost-container">
            <div className="lost-section-heading">
              <span className="lost-section-label">
                YOUR PRIVATE ENQUIRY
              </span>

              <h2>
                A simple path to <span>personal guidance</span>
              </h2>

              <p>
                Beginning a consultation is straightforward. You can contact
                us privately and take things one step at a time.
              </p>
            </div>

            <div className="lost-process-grid">
              {steps.map((step) => (
                <article className="lost-process-card" key={step.number}>
                  <span className="lost-process-number">{step.number}</span>

                  <div className="lost-process-line" />

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONSULTATION */}
        <section className="lost-consultation lost-section">
          <div className="lost-container lost-consultation-grid">
            <div className="lost-consultation-image">
              <img
                src={consultationImage}
                alt="Private traditional spiritual consultation"
              />
            </div>

            <div className="lost-consultation-copy">
              <span className="lost-section-label">
                A PRIVATE CONVERSATION
              </span>

              <h2>
                Your story matters.
                <span> Start where you are.</span>
              </h2>

              <p>
                You do not have to know exactly what to say. You can begin
                with a simple message explaining what happened, what you are
                feeling and the kind of guidance you are looking for.
              </p>

              <p>
                Our goal is to approach your enquiry with compassion,
                respect and an open mind.
              </p>

              <div className="lost-consultation-features">
                <span>
                  <ShieldCheck size={17} />
                  Respectful enquiries
                </span>

                <span>
                  <MessageCircle size={17} />
                  WhatsApp communication
                </span>

                <span>
                  <Heart size={17} />
                  Compassionate approach
                </span>
              </div>

              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="lost-btn lost-btn-gold"
              >
                <MessageCircle size={18} />
                WhatsApp Us Privately
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* COUNTRIES */}
        <section className="lost-countries lost-section">
          <div className="lost-container">
            <div className="lost-section-heading">
              <span className="lost-section-label">
                INTERNATIONAL ENQUIRIES
              </span>

              <h2>
                Relationship Guidance
                <span> Across Borders</span>
              </h2>

              <p>
                We welcome enquiries from individuals seeking spiritual and
                relationship guidance from different parts of the world.
              </p>
            </div>

            <div className="lost-country-grid">
              <Link to="/traditional-healer-south-africa">
                <span>01</span>
                South Africa
                <ArrowUpRight size={16} />
              </Link>

              <Link to="/traditional-healer-germany">
                <span>02</span>
                Germany
                <ArrowUpRight size={16} />
              </Link>

              <Link to="/traditional-healer-usa">
                <span>03</span>
                United States
                <ArrowUpRight size={16} />
              </Link>

              <Link to="/traditional-healer-zimbabwe">
                <span>04</span>
                Zimbabwe
                <ArrowUpRight size={16} />
              </Link>

              <Link to="/traditional-healer-namibia">
                <span>05</span>
                Namibia
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="lost-faq lost-section">
          <div className="lost-container lost-faq-grid">
            <div className="lost-faq-intro">
              <span className="lost-section-label">
                YOUR QUESTIONS ANSWERED
              </span>

              <h2>
                Frequently Asked
                <span> Questions</span>
              </h2>

              <p>
                Learn more about our lost love, relationship and
                reconciliation guidance before making an enquiry.
              </p>

              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="lost-text-link"
              >
                Have another question?
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="lost-faq-list">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="lost-disclaimer">
          <div className="lost-container">
            <ShieldCheck size={22} />

            <div>
              <h3>Responsible Spiritual Guidance</h3>

              <p>
                Spiritual and relationship guidance is not a guarantee of
                reconciliation, love, marriage or any particular outcome.
                Every individual has the right to make their own choices.
                Our approach respects personal boundaries, consent,
                emotional wellbeing and individual decision-making.
                Spiritual consultations are not a replacement for qualified
                mental health, medical or legal support where needed.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="lost-final-cta">
          <div className="lost-final-cta-image">
            <img
              src={heroImage}
              alt="Spiritual reflection and relationship guidance"
            />
          </div>

          <div className="lost-final-cta-overlay" />

          <div className="lost-container lost-final-cta-content">
            <span className="lost-section-label">
              ANCESTRAL WISDOM
            </span>

            <h2>
              Find clarity.
              <br />
              <span>Make room for healing.</span>
            </h2>

            <p>
              Whatever your relationship story, you deserve to be heard
              with compassion and respect.
            </p>

            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="lost-btn lost-btn-gold"
            >
              <MessageCircle size={19} />
              Start Your Private Enquiry
              <ArrowUpRight size={17} />
            </a>

            <div className="lost-final-contact">
              <Clock size={15} />
              Contact us through WhatsApp to discuss your enquiry.
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
