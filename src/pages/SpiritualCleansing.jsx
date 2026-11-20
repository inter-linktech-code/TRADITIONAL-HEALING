
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Leaf,
  Heart,
  Sun,
  RefreshCw,
  MessageCircle,
  CheckCircle2,
  Compass,
  Flower2,
  HandHeart,
} from "lucide-react";

import SEO from "../components/SEO";

import cleansingHero from "../assets/spiritual-cleansing-and-renewal.jpg";
import cleansingRitual from "../assets/traditional-spiritual-cleansing-ritual.jpg";
import renewalImage from "../assets/spiritual-renewal-and-inner-peace.jpg";
import herbsImage from "../assets/cleansing-herbs-and-traditional-wisdom.jpg";
import natureImage from "../assets/peaceful-nature-spiritual-reflection.jpg";
import healerImage from "../assets/traditional-spiritual-healer.jpg";
import guidanceImage from "../assets/spiritual-guidance-in-nature.jpg";

import "./SpiritualCleansing.css";

const WHATSAPP = "27732335239";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const cleansingServices = [
  {
    icon: Sparkles,
    title: "Spiritual Cleansing",
    description:
      "Explore traditional cleansing practices intended to support reflection, renewal and a sense of spiritual clarity.",
  },
  {
    icon: RefreshCw,
    title: "Life Renewal & Fresh Beginnings",
    description:
      "Guidance for people navigating transitions, seeking a fresh start or wanting to reconnect with their personal direction.",
  },
  {
    icon: ShieldCheck,
    title: "Spiritual Protection & Guidance",
    description:
      "Traditional spiritual guidance focused on personal boundaries, peace of mind, reflection and feeling grounded.",
  },
  {
    icon: Heart,
    title: "Emotional Release & Inner Peace",
    description:
      "A compassionate space to reflect on difficult experiences, emotional burdens and the importance of finding peace.",
  },
  {
    icon: Leaf,
    title: "Traditional Herbal Wisdom",
    description:
      "Learn about traditional cultural practices and spiritual symbolism associated with natural elements and herbs.",
  },
  {
    icon: Compass,
    title: "Spiritual Direction",
    description:
      "Personal consultation for those looking for guidance, clarity, purpose and a renewed sense of direction.",
  },
];

const process = [
  {
    number: "01",
    title: "Begin With Your Story",
    description:
      "Share what has been happening in your life and what you hope to explore through spiritual guidance.",
  },
  {
    number: "02",
    title: "Personal Consultation",
    description:
      "Discuss your concerns, beliefs, personal circumstances and the type of traditional guidance you are seeking.",
  },
  {
    number: "03",
    title: "Explore Your Options",
    description:
      "Receive information about relevant traditional practices, reflection and spiritual approaches that may be appropriate.",
  },
  {
    number: "04",
    title: "Move Forward With Clarity",
    description:
      "Take time to reflect on your experience and make personal decisions with confidence, awareness and freedom.",
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
    question: "What is spiritual cleansing?",
    answer:
      "Spiritual cleansing refers to traditional and personal practices that people use symbolically or spiritually to reflect, seek renewal, reconnect with their beliefs and establish a sense of inner peace. Traditions and meanings differ between cultures and individuals.",
  },
  {
    question: "What is the purpose of spiritual cleansing?",
    answer:
      "Some people seek spiritual cleansing during difficult periods, personal transitions or times when they wish to reconnect with their values, beliefs and sense of purpose. It can be approached as a cultural, spiritual or reflective experience.",
  },
  {
    question: "Can I receive spiritual guidance if I live overseas?",
    answer:
      "Yes. You can contact us through WhatsApp to discuss your enquiry and find out whether remote consultation is available for your location.",
  },
  {
    question: "Do I need to explain my personal situation?",
    answer:
      "You may share as much or as little as you feel comfortable sharing. A consultation should be respectful of your privacy, personal boundaries and decisions.",
  },
  {
    question: "Does spiritual cleansing guarantee that my problems will disappear?",
    answer:
      "No. Spiritual practices cannot guarantee specific outcomes or replace practical solutions. We encourage realistic expectations, personal responsibility and informed decision-making.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Send us a message through WhatsApp. You can introduce yourself, explain the type of guidance you are interested in and ask about consultation arrangements.",
  },
];

function SpiritualCleansing() {
  return (
    <>
      <SEO
        title="Spiritual Cleansing & Renewal | Traditional Spiritual Guidance"
        description="Explore traditional spiritual cleansing, renewal, personal guidance, inner peace and spiritual reflection. Contact Ancestral Wisdom for a respectful private consultation."
        keywords="spiritual cleansing, traditional spiritual cleansing, spiritual renewal, spiritual guidance, inner peace, traditional healer, ancestral wisdom, spiritual protection, emotional healing guidance"
      />

      <main className="cleansing-page">
        {/* HERO */}
        <section className="cleansing-hero">
          <div
            className="cleansing-hero-background"
            style={{ backgroundImage: `url(${cleansingHero})` }}
          />

          <div className="cleansing-hero-overlay" />

          <div className="cleansing-hero-content">
            <span className="cleansing-eyebrow">
              <Sparkles size={15} />
              TRADITION • REFLECTION • RENEWAL
            </span>

            <h1>
              Spiritual Cleansing
              <span>&amp; Renewal</span>
            </h1>

            <p className="cleansing-hero-subtitle">
              Find a moment of peace. Reconnect with your spiritual path.
              Embrace a new beginning.
            </p>

            <p className="cleansing-hero-description">
              Explore traditional spiritual practices and personal guidance
              designed to encourage reflection, clarity, emotional
              well-being and a renewed sense of purpose.
            </p>

            <div className="cleansing-hero-buttons">
              <a
                href={whatsappLink(
                  "Hello, I would like to enquire about spiritual cleansing and renewal guidance."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="cleansing-btn cleansing-btn-gold"
              >
                <MessageCircle size={18} />
                Request a Consultation
                <ArrowRight size={17} />
              </a>

              <Link
                to="/services"
                className="cleansing-btn cleansing-btn-outline"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="cleansing-hero-trust">
              <span>
                <ShieldCheck size={16} />
                Respectful Guidance
              </span>
              <span>
                <Heart size={16} />
                Personal Consultation
              </span>
            </div>
          </div>

          <div className="cleansing-hero-bottom">
            <span>ANCESTRAL WISDOM</span>
            <span>SPIRITUAL WELLNESS &amp; TRADITION</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="cleansing-introduction cleansing-section">
          <div className="cleansing-intro-image">
            <img
              src={renewalImage}
              alt="Peaceful spiritual renewal and reflection in nature"
              loading="lazy"
            />

            <div className="cleansing-image-label">
              <Flower2 size={22} />
              <div>
                <strong>A Moment to Renew</strong>
                <span>Reconnect with yourself</span>
              </div>
            </div>
          </div>

          <div className="cleansing-intro-content">
            <span className="cleansing-section-label">
              YOUR JOURNEY TOWARD RENEWAL
            </span>

            <h2>
              Sometimes the greatest
              <span> beginning is within.</span>
            </h2>

            <p>
              Life can bring periods of uncertainty, disappointment,
              emotional exhaustion and change. During these moments,
              many people turn toward spirituality, cultural traditions
              and personal reflection to reconnect with what matters.
            </p>

            <p>
              Spiritual cleansing is understood differently across
              traditions. For some, it represents letting go of the past.
              For others, it is a symbolic way to welcome peace,
              renewal and a more positive outlook.
            </p>

            <p>
              At Ancestral Wisdom, we offer respectful spiritual
              conversations and traditional guidance for people who
              wish to explore their beliefs and personal journeys.
            </p>

            <a
              href={whatsappLink(
                "Hello, I would like to learn more about your spiritual cleansing and renewal consultations."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="cleansing-text-link"
            >
              Speak With Us
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section className="cleansing-services-section cleansing-section">
          <div className="cleansing-section-heading">
            <span className="cleansing-section-label">
              TRADITIONAL SPIRITUAL GUIDANCE
            </span>

            <h2>
              Explore Our <span>Spiritual Services</span>
            </h2>

            <p>
              Personal guidance and traditional approaches for reflection,
              renewal and reconnecting with your spiritual beliefs.
            </p>
          </div>

          <div className="cleansing-services-grid">
            {cleansingServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  className="cleansing-service-card"
                  key={service.title}
                >
                  <div className="cleansing-service-number">
                    0{index + 1}
                  </div>

                  <div className="cleansing-service-icon">
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
                    className="cleansing-card-link"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* TRADITION */}
        <section className="cleansing-tradition-section">
          <div className="cleansing-tradition-image">
            <img
              src={cleansingRitual}
              alt="Traditional spiritual cleansing and cultural spiritual practices"
              loading="lazy"
            />
          </div>

          <div className="cleansing-tradition-content">
            <span className="cleansing-section-label">
              CULTURE &amp; ANCESTRAL WISDOM
            </span>

            <h2>
              The Meaning Behind
              <span> Traditional Practices</span>
            </h2>

            <p>
              Across different cultures, cleansing rituals, prayers,
              symbolic ceremonies and traditional customs are used to
              express hope, gratitude, transition and spiritual connection.
            </p>

            <p>
              These practices often hold personal meaning shaped by
              family traditions, community, history and individual belief.
            </p>

            <div className="cleansing-tradition-points">
              <div>
                <CheckCircle2 size={19} />
                <span>Respect for cultural traditions</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Personal reflection and renewal</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Spiritual awareness and connection</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Individual choice and personal boundaries</span>
              </div>
            </div>

            <a
              href={whatsappLink(
                "Hello, I would like to ask about your traditional spiritual guidance and cleansing practices."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="cleansing-btn cleansing-btn-gold"
            >
              Start a Conversation
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* RENEWAL */}
        <section className="cleansing-renewal-section cleansing-section">
          <div className="cleansing-section-heading">
            <span className="cleansing-section-label">
              RECONNECT • REFLECT • RENEW
            </span>

            <h2>
              Creating Space for
              <span> Positive Change</span>
            </h2>

            <p>
              Spiritual renewal can be an opportunity to pause,
              reflect and consider the changes you want to make in
              your life.
            </p>
          </div>

          <div className="cleansing-renewal-grid">
            <article className="cleansing-renewal-card">
              <img
                src={herbsImage}
                alt="Traditional herbs and natural elements used in cultural traditions"
                loading="lazy"
              />

              <div className="cleansing-renewal-card-content">
                <span>01 / TRADITION</span>
                <h3>Reconnect With Your Roots</h3>
                <p>
                  Explore the traditions, teachings and cultural
                  values that give meaning to your spiritual journey.
                </p>
              </div>
            </article>

            <article className="cleansing-renewal-card">
              <img
                src={natureImage}
                alt="Peaceful natural landscape for contemplation and reflection"
                loading="lazy"
              />

              <div className="cleansing-renewal-card-content">
                <span>02 / PEACE</span>
                <h3>Make Time for Reflection</h3>
                <p>
                  Create space to pause, understand your emotions
                  and consider what brings peace and balance into
                  your daily life.
                </p>
              </div>
            </article>

            <article className="cleansing-renewal-card">
              <img
                src={guidanceImage}
                alt="Spiritual guidance and personal reflection outdoors"
                loading="lazy"
              />

              <div className="cleansing-renewal-card-content">
                <span>03 / DIRECTION</span>
                <h3>Embrace New Possibilities</h3>
                <p>
                  Reflect on your goals, personal decisions and
                  opportunities for a more meaningful future.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* GUIDANCE BANNER */}
        <section className="cleansing-guidance-banner">
          <div
            className="cleansing-guidance-background"
            style={{ backgroundImage: `url(${healerImage})` }}
          />

          <div className="cleansing-guidance-overlay" />

          <div className="cleansing-guidance-content">
            <span className="cleansing-section-label">
              A PERSONAL &amp; RESPECTFUL APPROACH
            </span>

            <h2>
              Your story deserves
              <span> to be heard.</span>
            </h2>

            <p>
              Whether you are seeking a fresh beginning, spiritual
              reflection or guidance during a difficult period,
              we welcome your enquiry.
            </p>

            <a
              href={whatsappLink(
                "Hello, I would like a private spiritual consultation. I would appreciate guidance regarding my personal situation."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="cleansing-btn cleansing-btn-gold"
            >
              <MessageCircle size={18} />
              Enquire Privately
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* PROCESS */}
        <section className="cleansing-process-section cleansing-section">
          <div className="cleansing-section-heading">
            <span className="cleansing-section-label">
              HOW IT WORKS
            </span>

            <h2>
              A Simple &amp; Personal
              <span> Consultation Process</span>
            </h2>

            <p>
              Every enquiry begins with a conversation. We believe
              guidance should be respectful, transparent and
              centred around your personal circumstances.
            </p>
          </div>

          <div className="cleansing-process-grid">
            {process.map((step) => (
              <article
                className="cleansing-process-card"
                key={step.number}
              >
                <span className="cleansing-process-number">
                  {step.number}
                </span>

                <div className="cleansing-process-icon">
                  <HandHeart size={24} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* VALUES */}
        <section className="cleansing-values-section">
          <div className="cleansing-values-inner">
            <div className="cleansing-values-heading">
              <span className="cleansing-section-label">
                OUR APPROACH
              </span>

              <h2>
                Guidance Built Around
                <span> Respect &amp; Understanding</span>
              </h2>
            </div>

            <div className="cleansing-values-grid">
              <div className="cleansing-value-item">
                <ShieldCheck size={27} />
                <h3>Respect</h3>
                <p>
                  Your personal beliefs, values and decisions
                  deserve respect.
                </p>
              </div>

              <div className="cleansing-value-item">
                <Heart size={27} />
                <h3>Compassion</h3>
                <p>
                  We approach personal concerns with empathy
                  and understanding.
                </p>
              </div>

              <div className="cleansing-value-item">
                <Sun size={27} />
                <h3>Clarity</h3>
                <p>
                  Encouraging reflection, realistic expectations
                  and positive personal direction.
                </p>
              </div>

              <div className="cleansing-value-item">
                <Leaf size={27} />
                <h3>Tradition</h3>
                <p>
                  Honouring cultural wisdom and the importance
                  of spiritual identity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COUNTRIES */}
        <section className="cleansing-countries-section cleansing-section">
          <div className="cleansing-section-heading">
            <span className="cleansing-section-label">
              INTERNATIONAL ENQUIRIES
            </span>

            <h2>
              Spiritual Guidance
              <span> Across Countries</span>
            </h2>

            <p>
              Explore our location-focused spiritual guidance pages
              or contact us to ask about consultation availability
              for your country.
            </p>
          </div>

          <div className="cleansing-countries-grid">
            {countries.map((country) => (
              <Link
                to={country.path}
                className="cleansing-country-card"
                key={country.name}
              >
                <span>{country.name}</span>
                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="cleansing-faq-section cleansing-section">
          <div className="cleansing-faq-layout">
            <div className="cleansing-faq-intro">
              <span className="cleansing-section-label">
                QUESTIONS &amp; ANSWERS
              </span>

              <h2>
                Frequently Asked
                <span> Questions</span>
              </h2>

              <p>
                Learn more about spiritual cleansing, traditional
                guidance and how to begin a consultation.
              </p>

              <a
                href={whatsappLink(
                  "Hello, I have some questions about spiritual cleansing and renewal."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="cleansing-btn cleansing-btn-gold"
              >
                Ask Us Directly
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="cleansing-faq-list">
              {faqs.map((faq, index) => (
                <details
                  className="cleansing-faq-item"
                  key={faq.question}
                  open={index === 0}
                >
                  <summary>
                    {faq.question}
                    <span className="cleansing-faq-toggle">+</span>
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="cleansing-disclaimer">
          <div className="cleansing-disclaimer-inner">
            <ShieldCheck size={23} />

            <div>
              <h3>Important Information</h3>

              <p>
                Spiritual guidance and traditional cleansing practices
                are offered for personal, cultural and spiritual
                reflection. They are not a substitute for medical,
                psychological, legal or financial professional services.
                No specific spiritual, financial, relationship or
                personal outcome is guaranteed. All consultations
                should be voluntary and respect your personal choices.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cleansing-final-cta">
          <div className="cleansing-final-cta-content">
            <span className="cleansing-section-label">
              YOUR NEXT CHAPTER STARTS WITH A CONVERSATION
            </span>

            <h2>
              Find Your Path Toward
              <span> Peace &amp; Renewal</span>
            </h2>

            <p>
              Reach out today to discuss your personal concerns
              and explore traditional spiritual guidance.
            </p>

            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom, I would like to enquire about spiritual cleansing and renewal. Please guide me on how to begin."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="cleansing-btn cleansing-btn-gold"
            >
              <MessageCircle size={19} />
              Contact Us on WhatsApp
              <ArrowRight size={18} />
            </a>

            <span className="cleansing-final-note">
              Private Enquiries • Respectful Guidance • Personal Consultation
            </span>
          </div>
        </section>
      </main>
    </>
  );
}

export default SpiritualCleansing;
