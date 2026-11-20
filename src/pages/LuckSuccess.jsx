
import { Link } from "react-router-dom";
import {
  Sparkles,
  Compass,
  Star,
  Target,
  ShieldCheck,
  MessageCircle,
  ArrowUpRight,
  Sunrise,
  Mountain,
  Lightbulb,
  Heart,
  CheckCircle2,
  ChevronDown,
  Leaf,
  Flower2,
  Trophy,
} from "lucide-react";

import SEO from "../components/SEO";

import heroImage from "../assets/luck-success-spiritual-guidance.jpg";
import successImage from "../assets/personal-success-and-positive-direction.jpg";
import opportunityImage from "../assets/luck-and-new-opportunities.jpg";
import obstaclesImage from "../assets/overcoming-life-obstacles-spiritual-guidance.jpg";
import confidenceImage from "../assets/confidence-and-inner-strength.jpg";
import healerImage from "../assets/traditional-spiritual-healer.jpg";
import natureImage from "../assets/spiritual-guidance-in-nature.jpg";

import "./LuckSuccess.css";

const WHATSAPP = "27732335239";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: Star,
    title: "Good Luck & Positive Energy",
    description:
      "Traditional spiritual guidance for those seeking renewed hope, positive intentions and a more optimistic outlook as they navigate life's opportunities.",
  },
  {
    icon: Trophy,
    title: "Success & Achievement",
    description:
      "Explore spiritual reflection surrounding personal ambitions, goals, achievement, motivation and the desire to make progress in life.",
  },
  {
    icon: Compass,
    title: "Life Direction & Guidance",
    description:
      "Seek a reflective space when you feel uncertain about your direction, future plans, important decisions or the next chapter of your life.",
  },
  {
    icon: Sunrise,
    title: "New Beginnings",
    description:
      "Guidance for people entering a new chapter, starting a project, pursuing opportunities or seeking renewed confidence after setbacks.",
  },
  {
    icon: Target,
    title: "Career & Personal Ambitions",
    description:
      "Discuss career aspirations, personal goals, ambitions and your desire to develop yourself and pursue meaningful opportunities.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Encouragement",
    description:
      "Explore traditional spiritual perspectives that may help you reflect on hope, gratitude, resilience, intention and personal growth.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Send us a WhatsApp message explaining the kind of luck, success or spiritual guidance you are interested in.",
  },
  {
    number: "02",
    title: "Explain Your Situation",
    description:
      "Share your goals, ambitions, concerns or circumstances in a way that feels comfortable to you.",
  },
  {
    number: "03",
    title: "Receive Guidance",
    description:
      "Explore traditional spiritual perspectives and personal reflection relevant to your circumstances.",
  },
  {
    number: "04",
    title: "Take Positive Steps",
    description:
      "Move forward with thoughtful decisions, realistic goals, practical action and a renewed sense of purpose.",
  },
];

const faqs = [
  {
    question: "Do you offer spiritual guidance for good luck?",
    answer:
      "Yes. We welcome enquiries from people seeking traditional spiritual guidance relating to luck, positive intentions, hope, personal direction and opportunities.",
  },
  {
    question: "Can I seek spiritual guidance for success?",
    answer:
      "Yes. You may enquire about personal ambitions, career goals, business aspirations, achievement and spiritual reflection as you work towards success.",
  },
  {
    question: "Can you help me overcome obstacles in life?",
    answer:
      "We offer traditional spiritual guidance and a compassionate space to discuss challenges, uncertainty and personal circumstances. We also encourage practical action and appropriate professional support where needed.",
  },
  {
    question: "Can I enquire about career opportunities?",
    answer:
      "Yes. You may discuss career aspirations, job searches, professional growth, new opportunities and the direction you hope to pursue.",
  },
  {
    question: "Do you guarantee luck or success?",
    answer:
      "No. We cannot guarantee luck, employment, business success, wealth, relationships, winning competitions or any particular outcome. Guidance is intended for spiritual reflection and personal support.",
  },
  {
    question: "Can people outside South Africa contact you?",
    answer:
      "Yes. We welcome WhatsApp enquiries from South Africa, Germany, the United States, Zimbabwe, Namibia and other countries.",
  },
  {
    question: "How do I begin?",
    answer:
      "You can begin by contacting us through WhatsApp. Briefly explain what you are seeking guidance about, and we can discuss your enquiry.",
  },
  {
    question: "Are consultations private?",
    answer:
      "We approach personal enquiries with respect, discretion and compassion. You should only share information that you are comfortable discussing.",
  },
];

function FAQItem({ question, answer }) {
  return (
    <details className="luck-faq-item">
      <summary>
        <span>{question}</span>
        <ChevronDown size={19} />
      </summary>

      <div className="luck-faq-answer">
        <p>{answer}</p>
      </div>
    </details>
  );
}

export default function LuckSuccess() {
  const enquiryMessage =
    "Hello Ancestral Wisdom. I would like to enquire about spiritual guidance for luck, success, opportunities and positive direction. Please tell me how I can begin.";

  return (
    <>
      <SEO
        title="Luck & Success Spiritual Guidance | Ancestral Wisdom"
        description="Seek traditional spiritual guidance for good luck, success, personal achievement, career opportunities, new beginnings and positive direction. Contact Ancestral Wisdom privately on WhatsApp."
        keywords="luck spiritual guidance, good luck spiritual guidance, spiritual guidance for success, traditional healer for luck, success guidance, career opportunities spiritual guidance, overcoming obstacles, positive direction in life, spiritual consultation for success"
      />

      <main className="luck-page">

        {/* HERO */}
        <section className="luck-hero">
          <div className="luck-hero-image">
            <img
              src={heroImage}
              alt="Golden sunrise symbolising new beginnings, hope and success"
            />
          </div>

          <div className="luck-hero-overlay" />

          <div className="luck-hero-content">
            <span className="luck-eyebrow">
              <Sparkles size={15} />
              LUCK • SUCCESS • NEW BEGINNINGS
            </span>

            <h1>
              Luck &amp;
              <span> Success</span>
            </h1>

            <h2 className="luck-hero-subtitle">
              Every new chapter begins with possibility.
            </h2>

            <p className="luck-hero-description">
              Traditional spiritual guidance for personal ambitions,
              opportunities, positive direction, achievement and the
              journey towards a more purposeful future.
            </p>

            <div className="luck-hero-buttons">
              <a
                href={whatsappLink(enquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="luck-btn luck-btn-gold"
              >
                <MessageCircle size={18} />
                Begin a Private Enquiry
                <ArrowUpRight size={17} />
              </a>

              <Link
                to="/services"
                className="luck-btn luck-btn-outline"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="luck-hero-trust">
              <span>
                <ShieldCheck size={16} />
                Private Enquiries
              </span>

              <span>
                <Star size={16} />
                Traditional Wisdom
              </span>

              <span>
                <Compass size={16} />
                Personal Direction
              </span>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="luck-intro luck-section">
          <div className="luck-container luck-intro-grid">
            <div className="luck-intro-image-wrap">
              <img
                src={successImage}
                alt="Personal achievement, confidence and positive direction"
                className="luck-intro-image"
              />

              <div className="luck-image-caption">
                <Star size={17} />
                <span>Your journey. Your aspirations.</span>
              </div>
            </div>

            <div className="luck-intro-copy">
              <span className="luck-section-label">
                A NEW CHAPTER OF POSSIBILITY
              </span>

              <h2>
                Your ambitions matter.
                <span> Your journey deserves direction.</span>
              </h2>

              <p>
                Life can bring moments when opportunities seem uncertain,
                progress feels slow or the direction ahead is difficult
                to understand.
              </p>

              <p>
                Whether you are pursuing a personal dream, looking for
                career advancement, starting a new business, seeking
                opportunities or navigating a difficult chapter,
                traditional spiritual guidance may be a meaningful part
                of your personal reflection.
              </p>

              <p>
                At Ancestral Wisdom, we welcome people seeking
                encouragement, traditional spiritual perspectives and
                thoughtful guidance as they pursue their ambitions.
              </p>

              <a
                href={whatsappLink(enquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="luck-text-link"
              >
                Discuss your aspirations
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="luck-services luck-section">
          <div className="luck-container">
            <div className="luck-section-heading">
              <span className="luck-section-label">
                OUR SPIRITUAL GUIDANCE
              </span>

              <h2>
                Explore Guidance for
                <span> Luck, Success &amp; Growth</span>
              </h2>

              <p>
                Discover the different areas of traditional spiritual
                consultation available for your personal journey.
              </p>
            </div>

            <div className="luck-services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    className="luck-service-card"
                    key={service.title}
                  >
                    <div className="luck-card-top">
                      <div className="luck-service-icon">
                        <Icon size={24} />
                      </div>

                      <span className="luck-card-number">
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
                      className="luck-card-link"
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

        {/* OPPORTUNITIES */}
        <section className="luck-opportunities luck-section">
          <div className="luck-container luck-opportunities-grid">
            <div className="luck-opportunities-copy">
              <span className="luck-section-label">
                OPPORTUNITIES &amp; NEW BEGINNINGS
              </span>

              <h2>
                The next opportunity
                <span> may begin with a new perspective.</span>
              </h2>

              <p>
                New opportunities can appear in many areas of life:
                employment, business, education, personal relationships,
                creative pursuits or individual ambitions.
              </p>

              <p>
                Sometimes we need encouragement to explore possibilities,
                build confidence and remain open to the next chapter.
              </p>

              <p>
                Our traditional spiritual guidance offers a space for
                reflection about your intentions, aspirations and the
                opportunities you hope to pursue.
              </p>

              <div className="luck-opportunity-points">
                <div>
                  <Lightbulb size={20} />
                  <span>New possibilities</span>
                </div>

                <div>
                  <Sunrise size={20} />
                  <span>Fresh beginnings</span>
                </div>

                <div>
                  <Target size={20} />
                  <span>Personal ambitions</span>
                </div>

                <div>
                  <Compass size={20} />
                  <span>Finding direction</span>
                </div>
              </div>

              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I am seeking spiritual guidance concerning new opportunities and positive direction in my life."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="luck-btn luck-btn-gold"
              >
                Enquire About Opportunities
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="luck-opportunities-image">
              <img
                src={opportunityImage}
                alt="Sunrise representing new opportunities and fresh beginnings"
              />
            </div>
          </div>
        </section>

        {/* OBSTACLES */}
        <section className="luck-obstacles luck-section">
          <div className="luck-container luck-obstacles-grid">
            <div className="luck-obstacles-image">
              <img
                src={obstaclesImage}
                alt="A path through the mountains representing perseverance and overcoming obstacles"
              />
            </div>

            <div className="luck-obstacles-copy">
              <span className="luck-section-label">
                WHEN LIFE FEELS DIFFICULT
              </span>

              <h2>
                Challenges do not define your future.
                <span> There is always room to grow.</span>
              </h2>

              <p>
                Personal setbacks, disappointment, uncertainty and
                unexpected challenges can make it difficult to maintain
                hope or confidence.
              </p>

              <p>
                If you feel that progress has been difficult or that you
                are facing repeated challenges, you are welcome to seek
                spiritual guidance and discuss your circumstances.
              </p>

              <p>
                We encourage you to combine personal reflection with
                practical solutions, support from trusted people and
                professional assistance where appropriate.
              </p>

              <div className="luck-obstacles-features">
                <span>
                  <Heart size={18} />
                  Compassion
                </span>

                <span>
                  <Leaf size={18} />
                  Reflection
                </span>

                <span>
                  <Mountain size={18} />
                  Resilience
                </span>

                <span>
                  <Sparkles size={18} />
                  Hope
                </span>
              </div>

              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I would like to discuss some personal challenges and enquire about spiritual guidance."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="luck-text-link"
              >
                Speak with us privately
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* CAREER AND SUCCESS */}
        <section className="luck-career luck-section">
          <div className="luck-container luck-career-grid">
            <div className="luck-career-copy">
              <span className="luck-section-label">
                CAREER • AMBITION • ACHIEVEMENT
              </span>

              <h2>
                Pursue your ambitions.
                <span> Build your own path to success.</span>
              </h2>

              <p>
                Career and personal achievement are important parts of
                many people's lives. You may be looking for employment,
                planning a promotion, changing careers, developing
                professional skills or pursuing a long-term dream.
              </p>

              <p>
                Traditional spiritual consultation provides an
                opportunity to reflect on your aspirations, personal
                motivation, direction and the future you wish to build.
              </p>

              <ul className="luck-check-list">
                <li>
                  <CheckCircle2 size={18} />
                  Career aspirations and professional development
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Employment opportunities and job searches
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Personal achievement and motivation
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Business and entrepreneurial ambitions
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  Confidence during periods of change
                </li>
              </ul>

              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I would like to enquire about spiritual guidance concerning career success, employment or my personal ambitions."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="luck-btn luck-btn-gold"
              >
                Enquire About Success Guidance
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="luck-career-image">
              <img
                src={confidenceImage}
                alt="Confidence, strength and personal achievement"
              />

              <div className="luck-career-image-caption">
                <span>Stay focused on the journey.</span>
              </div>
            </div>
          </div>
        </section>

        {/* TRADITION */}
        <section className="luck-tradition luck-section">
          <div className="luck-tradition-bg">
            <img
              src={natureImage}
              alt="Natural landscape symbolising traditional wisdom and personal growth"
            />
          </div>

          <div className="luck-tradition-overlay" />

          <div className="luck-container luck-tradition-content">
            <span className="luck-section-label">
              TRADITIONAL WISDOM &amp; SPIRITUAL REFLECTION
            </span>

            <h2>
              Hope for tomorrow.
              <br />
              <span>Wisdom for the journey.</span>
            </h2>

            <p>
              Across different cultures, spiritual traditions have
              encouraged reflection, gratitude, perseverance, personal
              purpose and a deeper connection with the values that guide
              our lives.
            </p>

            <p>
              We welcome those who wish to explore traditional spiritual
              perspectives while pursuing their own goals, making
              thoughtful decisions and building a meaningful future.
            </p>

            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom. I would like to enquire about your traditional spiritual guidance for luck, success and personal growth."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="luck-btn luck-btn-gold"
            >
              Explore Spiritual Guidance
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        {/* PROCESS */}
        <section className="luck-process luck-section">
          <div className="luck-container">
            <div className="luck-section-heading">
              <span className="luck-section-label">
                BEGIN YOUR ENQUIRY
              </span>

              <h2>
                Four Simple Steps
                <span> to Begin</span>
              </h2>

              <p>
                Getting started is simple. Contact us and explain what
                kind of spiritual guidance you are looking for.
              </p>
            </div>

            <div className="luck-process-grid">
              {processSteps.map((step) => (
                <article
                  className="luck-process-card"
                  key={step.number}
                >
                  <span className="luck-process-number">
                    {step.number}
                  </span>

                  <div className="luck-process-line" />

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONSULTATION */}
        <section className="luck-consultation luck-section">
          <div className="luck-container luck-consultation-grid">
            <div className="luck-consultation-image">
              <img
                src={healerImage}
                alt="Traditional spiritual guidance and private consultation"
              />
            </div>

            <div className="luck-consultation-copy">
              <span className="luck-section-label">
                PRIVATE SPIRITUAL CONSULTATION
              </span>

              <h2>
                A conversation about your future.
                <span> A space to explore your hopes.</span>
              </h2>

              <p>
                Every person has their own journey, aspirations and
                circumstances. We welcome enquiries from people seeking
                spiritual guidance for luck, success, personal growth,
                career opportunities and life direction.
              </p>

              <p>
                Begin with a simple WhatsApp message. Share what you are
                hoping to achieve and the guidance you wish to explore.
              </p>

              <div className="luck-consultation-features">
                <span>
                  <ShieldCheck size={17} />
                  Respectful communication
                </span>

                <span>
                  <MessageCircle size={17} />
                  Private WhatsApp enquiries
                </span>

                <span>
                  <Heart size={17} />
                  Compassionate approach
                </span>
              </div>

              <a
                href={whatsappLink(enquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="luck-btn luck-btn-gold"
              >
                <MessageCircle size={18} />
                WhatsApp Us Privately
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* COUNTRIES */}
        <section className="luck-countries luck-section">
          <div className="luck-container">
            <div className="luck-section-heading">
              <span className="luck-section-label">
                INTERNATIONAL ENQUIRIES
              </span>

              <h2>
                Guidance Across
                <span> Different Countries</span>
              </h2>

              <p>
                We welcome enquiries from people around the world
                seeking traditional spiritual guidance.
              </p>
            </div>

            <div className="luck-country-grid">
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
        <section className="luck-faq luck-section">
          <div className="luck-container luck-faq-grid">
            <div className="luck-faq-intro">
              <span className="luck-section-label">
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h2>
                Questions About
                <span> Luck &amp; Success</span>
              </h2>

              <p>
                Learn more about our traditional spiritual guidance,
                consultations and how to begin your enquiry.
              </p>

              <a
                href={whatsappLink(enquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="luck-text-link"
              >
                Ask us a question
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="luck-faq-list">
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
        <section className="luck-disclaimer">
          <div className="luck-container">
            <ShieldCheck size={23} />

            <div>
              <h3>Responsible Spiritual Guidance</h3>

              <p>
                Spiritual guidance does not guarantee luck, success,
                employment, promotions, business outcomes, financial
                returns, winning competitions or any particular result.
                Personal success is influenced by many factors,
                including practical decisions, preparation, skills,
                circumstances and opportunities. Our consultations are
                intended for spiritual reflection and personal guidance.
                We do not encourage anyone to make important life,
                financial, legal or medical decisions based solely on
                spiritual promises.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="luck-final-cta">
          <div className="luck-final-cta-image">
            <img
              src={heroImage}
              alt="A new beginning and a path towards personal success"
            />
          </div>

          <div className="luck-final-cta-overlay" />

          <div className="luck-container luck-final-cta-content">
            <span className="luck-section-label">
              ANCESTRAL WISDOM
            </span>

            <h2>
              Embrace possibility.
              <br />
              <span>Take the next step.</span>
            </h2>

            <p>
              Whatever your aspirations, your next chapter begins with
              a conversation. Contact us to explore traditional spiritual
              guidance for luck, success and personal direction.
            </p>

            <a
              href={whatsappLink(enquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="luck-btn luck-btn-gold"
            >
              <MessageCircle size={19} />
              Begin Your Private Enquiry
              <ArrowUpRight size={17} />
            </a>

            <div className="luck-final-contact">
              <ShieldCheck size={15} />
              Respectful and private WhatsApp enquiries
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
