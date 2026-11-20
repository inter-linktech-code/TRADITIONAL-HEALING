
import { Link } from "react-router-dom";
import {
  Coins,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  ArrowUpRight,
  BriefcaseBusiness,
  TrendingUp,
  HandCoins,
  Flower2,
  Compass,
  Star,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
  Heart,
} from "lucide-react";

import SEO from "../components/SEO";

import heroImage from "../assets/money-prosperity-spiritual-guidance.jpg";
import prosperityImage from "../assets/abundance-prosperity-spiritual-wisdom.jpg";
import businessImage from "../assets/business-success-spiritual-guidance.jpg";
import opportunityImage from "../assets/financial-opportunities-and-growth.jpg";
import healingImage from "../assets/financial-stress-and-inner-peace.jpg";
import consultationImage from "../assets/traditional-spiritual-healer.jpg";
import natureImage from "../assets/spiritual-guidance-in-nature.jpg";

import "./MoneyProsperity.css";

const WHATSAPP = "27732335239";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: Coins,
    title: "Money & Prosperity Guidance",
    description:
      "Explore traditional spiritual perspectives on abundance, financial aspirations, prosperity and developing a positive relationship with money.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Prosperity",
    description:
      "Seek guidance when navigating business challenges, new ventures, entrepreneurial ambitions and the desire to grow your business.",
  },
  {
    icon: TrendingUp,
    title: "Career & Advancement",
    description:
      "Explore personal ambitions, career direction, new opportunities and spiritual reflection as you work towards professional growth.",
  },
  {
    icon: HandCoins,
    title: "Financial Obstacles",
    description:
      "Discuss worries about financial difficulties, setbacks, uncertainty and the desire to find a more positive direction.",
  },
  {
    icon: Sparkles,
    title: "Abundance & Opportunity",
    description:
      "Explore spiritual reflection focused on hope, abundance, positive intentions, personal development and recognising opportunities.",
  },
  {
    icon: Compass,
    title: "Personal Prosperity Consultation",
    description:
      "Discuss your personal circumstances privately and explore traditional guidance relevant to your financial, career or business aspirations.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Send us a private WhatsApp message and briefly explain the kind of prosperity, financial or business guidance you are seeking.",
  },
  {
    number: "02",
    title: "Share Your Goals",
    description:
      "Tell us about your aspirations, challenges, business plans or financial concerns. Share only the information you feel comfortable discussing.",
  },
  {
    number: "03",
    title: "Explore Your Guidance",
    description:
      "Discuss your circumstances and explore traditional spiritual perspectives, reflection and positive personal intentions.",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "Use your consultation as an opportunity for reflection while taking practical, informed steps towards your personal and financial goals.",
  },
];

const faqs = [
  {
    question: "Do you offer money and prosperity spiritual guidance?",
    answer:
      "Yes. We welcome enquiries from individuals seeking traditional spiritual guidance relating to prosperity, abundance, financial aspirations, business growth and career opportunities.",
  },
  {
    question: "Can spiritual guidance help with business success?",
    answer:
      "We provide traditional spiritual perspectives and personal reflection for people navigating business challenges and growth ambitions. Business outcomes also depend on planning, market conditions, skills, decisions and other practical factors.",
  },
  {
    question: "Can I seek guidance when I am experiencing financial difficulties?",
    answer:
      "Yes. You can discuss financial worries, setbacks, uncertainty and your desire to find a more positive direction. We approach personal enquiries with respect and compassion.",
  },
  {
    question: "Do you offer prosperity guidance for people overseas?",
    answer:
      "Yes. We welcome WhatsApp enquiries from South Africa, Germany, the United States, Zimbabwe, Namibia and other countries.",
  },
  {
    question: "Can you guarantee that I will become rich?",
    answer:
      "No. We cannot guarantee wealth, financial returns, business success, employment, lottery winnings or any specific outcome. Spiritual guidance should not be treated as a substitute for sound financial planning or professional advice.",
  },
  {
    question: "How do I begin a prosperity consultation?",
    answer:
      "Contact us on WhatsApp and briefly explain your financial, career or business aspirations. We can discuss your enquiry and the guidance you are seeking.",
  },
  {
    question: "Is my enquiry private?",
    answer:
      "We approach personal enquiries with discretion, respect and compassion. Avoid sharing passwords, banking PINs, financial account credentials or unnecessary sensitive information.",
  },
  {
    question: "What services can I enquire about?",
    answer:
      "You may enquire about prosperity guidance, business ambitions, career growth, financial obstacles, abundance, spiritual reflection and personal direction.",
  },
];

function FAQItem({ question, answer }) {
  return (
    <details className="prosperity-faq-item">
      <summary>
        <span>{question}</span>
        <ChevronDown size={19} />
      </summary>

      <div className="prosperity-faq-answer">
        <p>{answer}</p>
      </div>
    </details>
  );
}

export default function MoneyProsperity() {
  const generalMessage =
    "Hello Ancestral Wisdom. I would like to enquire about money, prosperity and financial guidance. Please tell me how I can begin.";

  return (
    <>
      <SEO
        title="Money & Prosperity Spiritual Guidance | Ancestral Wisdom"
        description="Explore traditional spiritual guidance for money, prosperity, abundance, business success, career growth and financial aspirations. Contact Ancestral Wisdom privately on WhatsApp."
        keywords="money spiritual guidance, prosperity spiritual guidance, traditional healer for money, abundance guidance, business prosperity spiritual guidance, financial spiritual consultation, career success guidance, prosperity healer, money and abundance"
      />

      <main className="prosperity-page">

        {/* HERO */}
        <section className="prosperity-hero">
          <div className="prosperity-hero-image">
            <img
              src={heroImage}
              alt="Money, prosperity and traditional spiritual guidance"
            />
          </div>

          <div className="prosperity-hero-overlay" />

          <div className="prosperity-hero-content">
            <span className="prosperity-eyebrow">
              <Sparkles size={15} />
              ABUNDANCE • OPPORTUNITY • PROSPERITY
            </span>

            <h1>
              Money &amp;
              <span> Prosperity</span>
            </h1>

            <p className="prosperity-hero-subtitle">
              Cultivate hope. Explore opportunity. Find direction on your
              journey towards abundance.
            </p>

            <p className="prosperity-hero-description">
              Traditional spiritual guidance for financial aspirations,
              business ambitions, career growth, prosperity and personal
              direction.
            </p>

            <div className="prosperity-hero-buttons">
              <a
                href={whatsappLink(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="prosperity-btn prosperity-btn-gold"
              >
                <MessageCircle size={18} />
                Begin a Private Enquiry
                <ArrowUpRight size={17} />
              </a>

              <Link
                to="/services"
                className="prosperity-btn prosperity-btn-outline"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="prosperity-hero-trust">
              <span>
                <ShieldCheck size={16} />
                Private Enquiries
              </span>

              <span>
                <Coins size={16} />
                Prosperity Guidance
              </span>

              <span>
                <Sparkles size={16} />
                Traditional Wisdom
              </span>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="prosperity-intro prosperity-section">
          <div className="prosperity-container prosperity-intro-grid">
            <div className="prosperity-intro-image-wrap">
              <img
                src={prosperityImage}
                alt="Abundance and prosperity through spiritual reflection"
                className="prosperity-intro-image"
              />

              <div className="prosperity-image-caption">
                <Sparkles size={17} />
                <span>Growth begins with intention.</span>
              </div>
            </div>

            <div className="prosperity-intro-copy">
              <span className="prosperity-section-label">
                YOUR JOURNEY TOWARDS ABUNDANCE
              </span>

              <h2>
                Prosperity is more than money.
                <span> It is opportunity, purpose and direction.</span>
              </h2>

              <p>
                Financial aspirations are deeply personal. Whether you are
                hoping to improve your circumstances, grow a business, find
                employment, pursue new opportunities or overcome difficult
                times, the journey can sometimes feel uncertain.
              </p>

              <p>
                Many people turn to traditional spiritual perspectives for
                encouragement, reflection, hope and a deeper sense of
                direction when navigating life's financial challenges.
              </p>

              <p>
                Ancestral Wisdom welcomes enquiries from people seeking
                compassionate spiritual guidance concerning prosperity,
                abundance, career ambitions and business growth.
              </p>

              <a
                href={whatsappLink(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="prosperity-text-link"
              >
                Discuss your aspirations
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="prosperity-services prosperity-section">
          <div className="prosperity-container">
            <div className="prosperity-section-heading">
              <span className="prosperity-section-label">
                OUR PROSPERITY GUIDANCE
              </span>

              <h2>
                Guidance for Your
                <span> Financial Journey</span>
              </h2>

              <p>
                Explore spiritual consultation for financial aspirations,
                personal growth, business ambitions and the opportunities
                you hope to pursue.
              </p>
            </div>

            <div className="prosperity-services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    className="prosperity-service-card"
                    key={service.title}
                  >
                    <div className="prosperity-card-top">
                      <div className="prosperity-service-icon">
                        <Icon size={24} />
                      </div>

                      <span className="prosperity-card-number">
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
                      className="prosperity-card-link"
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

        {/* BUSINESS */}
        <section className="prosperity-business prosperity-section">
          <div className="prosperity-container prosperity-business-grid">
            <div className="prosperity-business-copy">
              <span className="prosperity-section-label">
                BUSINESS &amp; ENTREPRENEURSHIP
              </span>

              <h2>
                Building a business.
                <span> Pursuing new possibilities.</span>
              </h2>

              <p>
                Running a business requires determination, patience,
                creativity and the courage to navigate uncertainty.
                Entrepreneurs and business owners often face difficult
                decisions, changing markets and periods of financial
                pressure.
              </p>

              <p>
                Our traditional spiritual guidance offers a space to reflect
                on your business journey, aspirations, personal intentions
                and the direction you hope to take.
              </p>

              <ul className="prosperity-check-list">
                <li>
                  <CheckCircle2 size={18} />
                  Business ambitions and new ventures
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Personal reflection during business challenges
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Growth aspirations and opportunities
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Confidence and positive intentions
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Direction when making important decisions
                </li>
              </ul>

              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I am a business owner and would like to enquire about spiritual guidance for my business and prosperity."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="prosperity-btn prosperity-btn-gold"
              >
                Enquire About Business Guidance
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="prosperity-business-image">
              <img
                src={businessImage}
                alt="Business prosperity and entrepreneurship spiritual guidance"
              />

              <div className="prosperity-business-image-overlay">
                <span>Every new beginning carries possibility.</span>
              </div>
            </div>
          </div>
        </section>

        {/* OPPORTUNITIES */}
        <section className="prosperity-opportunity prosperity-section">
          <div className="prosperity-container prosperity-opportunity-grid">
            <div className="prosperity-opportunity-image">
              <img
                src={opportunityImage}
                alt="New opportunities and financial growth"
              />
            </div>

            <div className="prosperity-opportunity-copy">
              <span className="prosperity-section-label">
                OPPORTUNITY &amp; PERSONAL GROWTH
              </span>

              <h2>
                Recognising opportunities.
                <span> Moving forward with purpose.</span>
              </h2>

              <p>
                Sometimes the next step in life is not immediately clear.
                You may be looking for a new job, planning a business,
                pursuing a personal ambition or hoping to change your
                financial circumstances.
              </p>

              <p>
                Spiritual reflection can be part of a personal journey
                towards renewed motivation, clearer intentions and a more
                hopeful outlook.
              </p>

              <div className="prosperity-opportunity-points">
                <div>
                  <Lightbulb size={20} />
                  <span>New ideas</span>
                </div>

                <div>
                  <TrendingUp size={20} />
                  <span>Growth ambitions</span>
                </div>

                <div>
                  <Compass size={20} />
                  <span>Personal direction</span>
                </div>

                <div>
                  <Star size={20} />
                  <span>Positive intentions</span>
                </div>
              </div>

              <Link to="/luck-success" className="prosperity-text-link">
                Explore luck &amp; success guidance
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* FINANCIAL WELLBEING */}
        <section className="prosperity-wellbeing prosperity-section">
          <div className="prosperity-container prosperity-wellbeing-grid">
            <div className="prosperity-wellbeing-image">
              <img
                src={healingImage}
                alt="Financial stress, reflection and inner peace"
              />
            </div>

            <div className="prosperity-wellbeing-copy">
              <span className="prosperity-section-label">
                REFLECTION DURING DIFFICULT TIMES
              </span>

              <h2>
                When financial challenges feel overwhelming,
                <span> find space to breathe.</span>
              </h2>

              <p>
                Financial pressure can affect confidence, relationships,
                sleep and peace of mind. Difficult circumstances can make
                the future seem uncertain.
              </p>

              <p>
                You are welcome to seek compassionate spiritual guidance
                when navigating personal financial difficulties, setbacks
                and uncertainty.
              </p>

              <p>
                We encourage practical steps alongside spiritual reflection,
                including seeking qualified financial advice, developing
                realistic plans and exploring available opportunities.
              </p>

              <div className="prosperity-wellbeing-points">
                <div>
                  <Heart size={20} />
                  <span>Compassionate guidance</span>
                </div>

                <div>
                  <Flower2 size={20} />
                  <span>Peace and reflection</span>
                </div>

                <div>
                  <Compass size={20} />
                  <span>Finding direction</span>
                </div>

                <div>
                  <ShieldCheck size={20} />
                  <span>Responsible guidance</span>
                </div>
              </div>

              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I am experiencing financial challenges and would like to enquire about spiritual guidance."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="prosperity-text-link"
              >
                Discuss your circumstances privately
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* TRADITION */}
        <section className="prosperity-tradition prosperity-section">
          <div className="prosperity-tradition-bg">
            <img
              src={natureImage}
              alt="Nature representing spiritual wisdom and abundance"
            />
          </div>

          <div className="prosperity-tradition-overlay" />

          <div className="prosperity-container prosperity-tradition-content">
            <span className="prosperity-section-label">
              TRADITIONAL SPIRITUAL PERSPECTIVES
            </span>

            <h2>
              Wisdom, intention
              <br />
              <span>and the journey towards abundance.</span>
            </h2>

            <p>
              In many traditional cultures, prosperity is viewed through
              different dimensions of life, including wellbeing, opportunity,
              purpose, community, gratitude and personal responsibility.
            </p>

            <p>
              Our consultations offer an opportunity to explore traditional
              spiritual perspectives and reflect on the intentions and
              aspirations that matter to you.
            </p>

            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom. I would like to learn more about your traditional prosperity and abundance guidance."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="prosperity-btn prosperity-btn-gold"
            >
              Speak With Us
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        {/* PROCESS */}
        <section className="prosperity-process prosperity-section">
          <div className="prosperity-container">
            <div className="prosperity-section-heading">
              <span className="prosperity-section-label">
                YOUR PRIVATE ENQUIRY
              </span>

              <h2>
                Begin Your Journey
                <span> in Four Simple Steps</span>
              </h2>

              <p>
                Contact us to discuss your aspirations and explore the
                guidance you are looking for.
              </p>
            </div>

            <div className="prosperity-process-grid">
              {processSteps.map((step) => (
                <article
                  className="prosperity-process-card"
                  key={step.number}
                >
                  <span className="prosperity-process-number">
                    {step.number}
                  </span>

                  <div className="prosperity-process-line" />

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONSULTATION */}
        <section className="prosperity-consultation prosperity-section">
          <div className="prosperity-container prosperity-consultation-grid">
            <div className="prosperity-consultation-image">
              <img
                src={consultationImage}
                alt="Private traditional spiritual prosperity consultation"
              />
            </div>

            <div className="prosperity-consultation-copy">
              <span className="prosperity-section-label">
                PRIVATE SPIRITUAL CONSULTATION
              </span>

              <h2>
                Your aspirations.
                <span> Your journey. Your conversation.</span>
              </h2>

              <p>
                Whether your enquiry concerns money, business, employment,
                personal success or financial uncertainty, you can begin
                with a simple private message.
              </p>

              <p>
                Explain what you are hoping for and the type of guidance
                you would like to explore. We approach enquiries with
                respect and compassion.
              </p>

              <div className="prosperity-consultation-features">
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
                href={whatsappLink(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="prosperity-btn prosperity-btn-gold"
              >
                <MessageCircle size={18} />
                WhatsApp Us Privately
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* COUNTRIES */}
        <section className="prosperity-countries prosperity-section">
          <div className="prosperity-container">
            <div className="prosperity-section-heading">
              <span className="prosperity-section-label">
                INTERNATIONAL ENQUIRIES
              </span>

              <h2>
                Prosperity Guidance
                <span> Across Borders</span>
              </h2>

              <p>
                We welcome enquiries from individuals seeking traditional
                spiritual guidance from different parts of the world.
              </p>
            </div>

            <div className="prosperity-country-grid">
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
        <section className="prosperity-faq prosperity-section">
          <div className="prosperity-container prosperity-faq-grid">
            <div className="prosperity-faq-intro">
              <span className="prosperity-section-label">
                YOUR QUESTIONS ANSWERED
              </span>

              <h2>
                Frequently Asked
                <span> Questions</span>
              </h2>

              <p>
                Find answers to common questions about prosperity,
                financial, business and traditional spiritual guidance.
              </p>

              <a
                href={whatsappLink(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="prosperity-text-link"
              >
                Have another question?
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="prosperity-faq-list">
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

        {/* RESPONSIBLE GUIDANCE */}
        <section className="prosperity-disclaimer">
          <div className="prosperity-container">
            <ShieldCheck size={23} />

            <div>
              <h3>Responsible Spiritual &amp; Financial Guidance</h3>

              <p>
                Spiritual guidance is not a guarantee of money, wealth,
                employment, business success, investment returns or any
                particular financial outcome. Please make financial
                decisions carefully and independently. Do not borrow money,
                gamble, invest or make financial commitments based solely
                on spiritual promises. Consult qualified financial
                professionals when appropriate. Our consultations are
                intended for spiritual reflection and personal guidance.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="prosperity-final-cta">
          <div className="prosperity-final-cta-image">
            <img
              src={heroImage}
              alt="Abundance, prosperity and spiritual reflection"
            />
          </div>

          <div className="prosperity-final-cta-overlay" />

          <div className="prosperity-container prosperity-final-cta-content">
            <span className="prosperity-section-label">
              ANCESTRAL WISDOM
            </span>

            <h2>
              Your future holds possibilities.
              <br />
              <span>Begin with intention.</span>
            </h2>

            <p>
              Take the first step towards reflection, renewed hope and
              personal direction. We welcome your enquiry.
            </p>

            <a
              href={whatsappLink(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="prosperity-btn prosperity-btn-gold"
            >
              <MessageCircle size={19} />
              Begin Your Private Enquiry
              <ArrowUpRight size={17} />
            </a>

            <div className="prosperity-final-contact">
              <ShieldCheck size={15} />
              Private enquiries through WhatsApp
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
