
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Compass,
  Heart,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import SEO from "../components/SEO";
import "./Contact.css";

import consultationImage from "../assets/spiritual-guidance-consultation.jpg";
import natureImage from "../assets/spiritual-guidance-in-nature.jpg";

const WHATSAPP = "27732335239";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const topics = [
  "Love & Relationship Guidance",
  "Lost Love & Reconciliation",
  "Money & Prosperity",
  "Luck & Success",
  "Spiritual Cleansing",
  "Spiritual Protection",
  "Traditional Healing",
  "General Spiritual Enquiry",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [error, setError] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.topic || !form.message.trim()) {
      setError("Please complete your name, enquiry topic and message.");
      return;
    }

    const message = `
Hello Ancestral Wisdom,

I would like to make an enquiry.

Name: ${form.name}
Email: ${form.email || "Not provided"}
Enquiry Topic: ${form.topic}

My Message:
${form.message}

I look forward to hearing from you.

Thank you.
    `.trim();

    window.open(
      whatsappLink(message),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <SEO
        title="Contact Ancestral Wisdom | Spiritual Guidance Enquiries"
        description="Contact Ancestral Wisdom for enquiries about traditional healing, spiritual guidance, relationship guidance, prosperity, spiritual cleansing and protection."
        keywords="contact traditional healer, spiritual guidance contact, spiritual consultation enquiry, Ancestral Wisdom contact, traditional African healing enquiries"
      />

      <main className="aw-contact">
        {/* HERO */}
        <section className="aw-contact-hero">
          <div className="aw-contact-hero-overlay" />

          <div className="aw-contact-container aw-contact-hero-content">
            <span className="aw-contact-eyebrow">
              <Sparkles size={15} />
              BEGIN A CONVERSATION
            </span>

            <h1>
              We Are Here to
              <span> Listen and Guide</span>
            </h1>

            <p>
              Every journey begins with a conversation. Reach out to Ancestral
              Wisdom to make an enquiry, discuss your concerns and learn about
              the guidance options available to you.
            </p>

            <div className="aw-contact-hero-actions">
              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom, I would like to make an enquiry about your spiritual guidance services."
                )}
                target="_blank"
                rel="noreferrer"
                className="aw-contact-primary-btn"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              <a
                href="#contact-form"
                className="aw-contact-outline-btn"
              >
                Send an Enquiry
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="aw-contact-hero-note">
              <ShieldCheck size={17} />
              Respectful conversations. Clear information. No pressure.
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="aw-contact-intro">
          <div className="aw-contact-container aw-contact-intro-grid">
            <div className="aw-contact-intro-copy">
              <span className="aw-contact-eyebrow">
                <span className="aw-contact-eyebrow-line" />
                CONNECT WITH US
              </span>

              <h2>
                A Thoughtful First Step
                <span> Towards Clarity</span>
              </h2>

              <p>
                Whether you are exploring traditional healing, seeking
                spiritual direction or simply have questions about our
                services, you are welcome to get in touch.
              </p>

              <p>
                Tell us a little about what you are looking for. We will use
                your enquiry to understand the nature of your request and
                respond with relevant information about the next steps.
              </p>

              <div className="aw-contact-promise">
                <div className="aw-contact-promise-icon">
                  <Heart size={21} />
                </div>

                <div>
                  <h3>Your concerns deserve respect</h3>
                  <p>
                    Every enquiry should be approached with patience,
                    understanding and respect for personal choices.
                  </p>
                </div>
              </div>
            </div>

            <div className="aw-contact-intro-image">
              <img
                src={consultationImage}
                alt="A peaceful setting for a traditional spiritual guidance conversation"
              />

              <div className="aw-contact-image-caption">
                <Sparkles size={18} />

                <div>
                  <strong>ANCESTRAL WISDOM</strong>
                  <span>Wisdom & Spiritual Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT OPTIONS */}
        <section className="aw-contact-options">
          <div className="aw-contact-container">
            <div className="aw-contact-section-heading">
              <span className="aw-contact-eyebrow">GET IN TOUCH</span>
              <h2>Choose How You Would Like to Connect</h2>
              <p>
                Start with a direct WhatsApp conversation or send us an
                enquiry using the form below.
              </p>
            </div>

            <div className="aw-contact-option-grid">
              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom, I would like to speak with you about your services."
                )}
                target="_blank"
                rel="noreferrer"
                className="aw-contact-option-card"
              >
                <div className="aw-contact-option-icon">
                  <MessageCircle size={25} />
                </div>

                <span className="aw-contact-card-label">
                  DIRECT ENQUIRIES
                </span>

                <h3>WhatsApp</h3>

                <p>
                  Send a message to introduce yourself and explain what you
                  would like to enquire about.
                </p>

                <strong>
                  Start a conversation <ArrowRight size={16} />
                </strong>
              </a>

              <a
                href="#contact-form"
                className="aw-contact-option-card"
              >
                <div className="aw-contact-option-icon">
                  <Send size={24} />
                </div>

                <span className="aw-contact-card-label">
                  DETAILED MESSAGE
                </span>

                <h3>Enquiry Form</h3>

                <p>
                  Share your enquiry topic and a little more detail using our
                  simple message form.
                </p>

                <strong>
                  Complete the form <ArrowRight size={16} />
                </strong>
              </a>

              <div className="aw-contact-option-card aw-contact-option-static">
                <div className="aw-contact-option-icon">
                  <Clock size={25} />
                </div>

                <span className="aw-contact-card-label">
                  RESPONSE INFORMATION
                </span>

                <h3>Response Times</h3>

                <p>
                  We aim to respond to enquiries as soon as reasonably
                  possible. Response times may vary.
                </p>

                <strong>Thank you for your patience</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ENQUIRY FORM */}
        <section
          className="aw-contact-form-section"
          id="contact-form"
        >
          <div className="aw-contact-container aw-contact-form-layout">
            <div className="aw-contact-form-copy">
              <span className="aw-contact-eyebrow">
                <span className="aw-contact-eyebrow-line" />
                SEND YOUR ENQUIRY
              </span>

              <h2>
                Tell Us What
                <span> You Are Looking For</span>
              </h2>

              <p>
                Complete the details below. When you submit the form, WhatsApp
                will open with your enquiry prepared as a message for you to
                send.
              </p>

              <div className="aw-contact-form-benefit">
                <ShieldCheck size={22} />

                <div>
                  <h3>Share only what you are comfortable sharing</h3>
                  <p>
                    You do not need to include sensitive personal information
                    in your first enquiry.
                  </p>
                </div>
              </div>

              <div className="aw-contact-form-benefit">
                <Compass size={22} />

                <div>
                  <h3>Know what to expect</h3>
                  <p>
                    You can ask questions about services, consultation
                    arrangements and available options before making a
                    decision.
                  </p>
                </div>
              </div>

              <img
                className="aw-contact-form-image"
                src={natureImage}
                alt="Peaceful natural surroundings representing reflection and spiritual guidance"
              />
            </div>

            <div className="aw-contact-form-card">
              <div className="aw-contact-form-card-heading">
                <span>YOUR MESSAGE</span>
                <h3>Make an Enquiry</h3>
                <p>Fields marked with * are required.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="aw-contact-field">
                  <label htmlFor="contact-name">
                    Your Name *
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={updateField}
                    required
                  />
                </div>

                <div className="aw-contact-field">
                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address (optional)"
                    value={form.email}
                    onChange={updateField}
                  />
                </div>

                <div className="aw-contact-field">
                  <label htmlFor="contact-topic">
                    What Is Your Enquiry About? *
                  </label>

                  <div className="aw-contact-select-wrap">
                    <select
                      id="contact-topic"
                      name="topic"
                      value={form.topic}
                      onChange={updateField}
                      required
                    >
                      <option value="">
                        Select an enquiry topic
                      </option>

                      {topics.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>

                    <ChevronDown size={17} />
                  </div>
                </div>

                <div className="aw-contact-field">
                  <label htmlFor="contact-message">
                    Your Message *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Briefly tell us what you would like to enquire about..."
                    value={form.message}
                    onChange={updateField}
                    required
                  />
                </div>

                {error && (
                  <div
                    className="aw-contact-error"
                    role="alert"
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="aw-contact-submit"
                >
                  <MessageCircle size={19} />
                  Continue to WhatsApp
                  <ArrowRight size={17} />
                </button>

                <p className="aw-contact-form-privacy">
                  By submitting, you choose to open WhatsApp with the
                  information you entered. You can review the message before
                  sending it.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="aw-contact-services">
          <div className="aw-contact-container">
            <div className="aw-contact-section-heading">
              <span className="aw-contact-eyebrow">
                EXPLORE OUR SERVICES
              </span>

              <h2>What Would You Like to Discuss?</h2>

              <p>
                Explore our existing service pages before sending your
                enquiry.
              </p>
            </div>

            <div className="aw-contact-service-links">
              <Link to="/love-spells">
                Love & Relationship Guidance <ArrowRight size={16} />
              </Link>

              <Link to="/lost-love">
                Lost Love & Reconciliation <ArrowRight size={16} />
              </Link>

              <Link to="/money-spells">
                Money & Prosperity <ArrowRight size={16} />
              </Link>

              <Link to="/luck-success">
                Luck & Success <ArrowRight size={16} />
              </Link>

              <Link to="/spiritual-cleansing">
                Spiritual Cleansing <ArrowRight size={16} />
              </Link>

              <Link to="/protection">
                Spiritual Protection <ArrowRight size={16} />
              </Link>

              <Link to="/traditional-healing">
                Traditional Healing <ArrowRight size={16} />
              </Link>

              <Link to="/services">
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="aw-contact-faq">
          <div className="aw-contact-container aw-contact-faq-layout">
            <div className="aw-contact-faq-heading">
              <span className="aw-contact-eyebrow">
                HELPFUL INFORMATION
              </span>

              <h2>
                Before You
                <span> Get in Touch</span>
              </h2>

              <p>
                Here are a few answers to common questions about making an
                enquiry.
              </p>
            </div>

            <div className="aw-contact-faq-list">
              <details>
                <summary>
                  How do I make an enquiry?
                  <ChevronDown size={19} />
                </summary>

                <p>
                  You can contact Ancestral Wisdom through WhatsApp or
                  complete the enquiry form on this page. The form prepares a
                  WhatsApp message for you to review and send.
                </p>
              </details>

              <details>
                <summary>
                  Do I need to know which service I need?
                  <ChevronDown size={19} />
                </summary>

                <p>
                  No. You can select general spiritual enquiry if you are
                  unsure. Briefly explain what you would like to discuss and
                  ask questions before deciding on any service.
                </p>
              </details>

              <details>
                <summary>
                  Can I enquire from another country?
                  <ChevronDown size={19} />
                </summary>

                <p>
                  You are welcome to send an enquiry from South Africa,
                  Germany, the United States, Zimbabwe, Namibia or elsewhere.
                  Ask about consultation arrangements and availability for
                  your location before making plans.
                </p>
              </details>

              <details>
                <summary>
                  Do I have to proceed after making an enquiry?
                  <ChevronDown size={19} />
                </summary>

                <p>
                  No. An enquiry does not obligate you to purchase or proceed
                  with a service. You should have the opportunity to ask
                  questions and make your own informed decision.
                </p>
              </details>

              <details>
                <summary>
                  Is my enquiry a substitute for medical or professional help?
                  <ChevronDown size={19} />
                </summary>

                <p>
                  No. Spiritual guidance is not a substitute for medical,
                  mental health, legal or financial advice. Please consult
                  appropriately qualified professionals for those needs.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="aw-contact-final">
          <div className="aw-contact-final-overlay" />

          <div className="aw-contact-container aw-contact-final-content">
            <Sparkles size={28} />

            <span className="aw-contact-eyebrow">
              ANCESTRAL WISDOM
            </span>

            <h2>
              Every Conversation
              <span> Begins With a First Step</span>
            </h2>

            <p>
              If you have questions or would like to learn more, start a
              respectful conversation with us today.
            </p>

            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom, I would like to begin a conversation and learn more about your services."
              )}
              target="_blank"
              rel="noreferrer"
              className="aw-contact-primary-btn"
            >
              <MessageCircle size={19} />
              Contact Us on WhatsApp
            </a>

            <div className="aw-contact-final-links">
              <Link to="/about">About Ancestral Wisdom</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/services">Explore Services</Link>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <div className="aw-contact-disclaimer">
          <div className="aw-contact-container">
            <ShieldCheck size={17} />

            <p>
              Spiritual guidance and traditional practices are matters of
              personal belief and cultural tradition. No specific outcome is
              guaranteed. Our services do not replace qualified medical,
              psychological, legal or financial support.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
