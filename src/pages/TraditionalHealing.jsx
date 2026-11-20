
import { Link } from "react-router-dom";
import {
  Leaf,
  Heart,
  Sparkles,
  HandHeart,
  Flower2,
  Sun,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Compass,
  BookOpen,
} from "lucide-react";

import SEO from "../components/SEO";

import heroImage from "../assets/traditional-healing-wisdom.jpg";
import healingImage from "../assets/african-traditional-healing.jpg";
import herbsImage from "../assets/traditional-healing-herbs.jpg";
import wellnessImage from "../assets/holistic-spiritual-wellbeing.jpg";
import heritageImage from "../assets/african-healing-heritage.jpg";
import natureImage from "../assets/nature-and-healing.jpg";
import healerImage from "../assets/traditional-spiritual-healer.jpg";

import "./TraditionalHealing.css";

const WHATSAPP = "27732335239";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: Leaf,
    title: "Traditional Healing Wisdom",
    description:
      "Explore traditional African healing knowledge, cultural practices and spiritual perspectives passed down through generations.",
  },
  {
    icon: Heart,
    title: "Holistic Wellbeing",
    description:
      "Reflect on the relationship between personal wellbeing, life experiences, spiritual beliefs and the importance of balance.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Healing Guidance",
    description:
      "Personal spiritual conversations for people seeking clarity, reflection, encouragement and a deeper connection with their beliefs.",
  },
  {
    icon: Flower2,
    title: "Traditional Herbal Knowledge",
    description:
      "Explore the cultural history and traditional significance of plants and herbs in African heritage and traditional practices.",
  },
  {
    icon: HandHeart,
    title: "Personal Consultation",
    description:
      "A respectful consultation where you can share your concerns, ask questions and learn about available traditional guidance.",
  },
  {
    icon: Sun,
    title: "Renewal & Reflection",
    description:
      "Explore meaningful personal reflection, spiritual renewal, positive routines and steps toward a more balanced life.",
  },
];

const process = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Reach out through WhatsApp and introduce yourself. Tell us what type of traditional or spiritual guidance you are interested in.",
  },
  {
    number: "02",
    title: "Discuss Your Enquiry",
    description:
      "We listen to your questions and discuss your circumstances and the kind of consultation you are looking for.",
  },
  {
    number: "03",
    title: "Explore Your Options",
    description:
      "We explain available consultations, traditional perspectives and the arrangements involved.",
  },
  {
    number: "04",
    title: "Choose What Is Right",
    description:
      "You decide whether to proceed. Your choices, comfort and personal wellbeing remain important.",
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
    question: "What is traditional healing?",
    answer:
      "Traditional healing refers to culturally rooted knowledge, beliefs and practices relating to wellbeing that have developed within communities over generations. Practices and meanings differ across cultures and traditions.",
  },
  {
    question: "What traditional healing guidance do you offer?",
    answer:
      "Our consultations focus on traditional spiritual guidance, cultural wisdom, spiritual reflection and discussions about traditional practices. We can explain the available consultation options when you contact us.",
  },
  {
    question: "Is traditional healing the same as medical treatment?",
    answer:
      "No. Traditional and spiritual practices are not substitutes for medical diagnosis or treatment. If you have a health concern, please seek advice from a qualified healthcare professional.",
  },
  {
    question: "Can I enquire from another country?",
    answer:
      "You can contact us online through WhatsApp to discuss your enquiry and ask whether remote consultation arrangements are available.",
  },
  {
    question: "Are traditional herbs safe?",
    answer:
      "Herbs and natural products may have side effects, interact with medicines or cause harm. Natural does not automatically mean safe. Always consult a qualified healthcare professional or pharmacist before using herbal products, especially if pregnant, breastfeeding or taking medication.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Send us a WhatsApp message describing your enquiry. We will respond with information about the consultation process and any arrangements that may apply.",
  },
];

function TraditionalHealing() {
  return (
    <>
      <SEO
        title="Traditional Healing & African Wisdom | Ancestral Wisdom"
        description="Explore African traditional healing wisdom, ancestral heritage, spiritual guidance, cultural practices and holistic wellbeing. Contact Ancestral Wisdom for a personal consultation."
        keywords="traditional healing, African traditional healing, traditional healer, African healing wisdom, ancestral wisdom, spiritual healing, traditional healing consultation, traditional herbal knowledge, holistic wellbeing"
      />

      <main className="traditional-page">

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="traditional-hero">
          <div
            className="traditional-hero-image"
            style={{ backgroundImage: `url(${heroImage})` }}
          />

          <div className="traditional-hero-overlay" />

          <div className="traditional-hero-content">
            <span className="traditional-eyebrow">
              <Leaf size={16} />
              TRADITION • HERITAGE • SPIRITUAL WISDOM
            </span>

            <h1>
              Traditional
              <span>Healing</span>
              &amp; Wisdom
            </h1>

            <p className="traditional-hero-subtitle">
              Honouring generations of wisdom.
              Exploring tradition. Finding your own path.
            </p>

            <p className="traditional-hero-description">
              Discover the cultural heritage of traditional
              healing, spiritual guidance and ancestral wisdom
              through respectful personal consultation and
              meaningful reflection.
            </p>

            <div className="traditional-hero-buttons">
              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom, I would like to enquire about traditional healing and spiritual guidance."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="traditional-btn traditional-btn-gold"
              >
                <MessageCircle size={18} />
                Enquire About Consultation
                <ArrowRight size={17} />
              </a>

              <Link
                to="/services"
                className="traditional-btn traditional-btn-outline"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="traditional-hero-features">
              <span>
                <Leaf size={16} />
                Traditional Wisdom
              </span>

              <span>
                <Heart size={16} />
                Respectful Guidance
              </span>

              <span>
                <ShieldCheck size={16} />
                Personal Choice
              </span>
            </div>
          </div>

          <div className="traditional-hero-footer">
            <span>ANCESTRAL WISDOM</span>
            <span>TRADITIONAL &amp; SPIRITUAL GUIDANCE</span>
          </div>
        </section>

        {/* ==================================================
            INTRODUCTION
        ================================================== */}

        <section className="traditional-introduction traditional-section">
          <div className="traditional-intro-image">
            <img
              src={healingImage}
              alt="African traditional healing heritage and cultural wisdom"
              loading="lazy"
            />

            <div className="traditional-image-caption">
              <Leaf size={24} />

              <div>
                <strong>Wisdom Through Generations</strong>
                <span>Heritage • Tradition • Reflection</span>
              </div>
            </div>
          </div>

          <div className="traditional-intro-content">
            <span className="traditional-section-label">
              THE BEAUTY OF TRADITIONAL KNOWLEDGE
            </span>

            <h2>
              A Heritage of
              <span> Wisdom &amp; Tradition</span>
            </h2>

            <p>
              Traditional healing knowledge has been part of
              many African communities for generations.
              It reflects cultural values, relationships
              with nature, community knowledge, spiritual
              beliefs and the experiences of those who
              came before us.
            </p>

            <p>
              These traditions are diverse. Different
              communities have their own practices,
              teachings, ceremonies and ways of
              understanding the world.
            </p>

            <p>
              At Ancestral Wisdom, we welcome enquiries
              from people interested in traditional
              perspectives, spiritual guidance and the
              cultural significance of ancestral teachings.
            </p>

            <a
              href={whatsappLink(
                "Hello, I am interested in learning about traditional healing and ancestral wisdom."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="traditional-text-link"
            >
              Learn More About Our Guidance
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* ==================================================
            SERVICES
        ================================================== */}

        <section className="traditional-services traditional-section">
          <div className="traditional-section-heading">
            <span className="traditional-section-label">
              OUR TRADITIONAL &amp; SPIRITUAL SERVICES
            </span>

            <h2>
              Explore Traditional
              <span> Wisdom &amp; Guidance</span>
            </h2>

            <p>
              Every person's journey is different.
              Explore the areas of guidance that
              interest you and contact us for more information.
            </p>
          </div>

          <div className="traditional-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  className="traditional-service-card"
                  key={service.title}
                >
                  <span className="traditional-card-number">
                    0{index + 1}
                  </span>

                  <div className="traditional-service-icon">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a
                    href={whatsappLink(
                      `Hello, I would like more information about ${service.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="traditional-card-link"
                  >
                    Make an Enquiry
                    <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* ==================================================
            HERBAL KNOWLEDGE
        ================================================== */}

        <section className="traditional-herbs-section">
          <div className="traditional-herbs-image">
            <img
              src={herbsImage}
              alt="Traditional African herbs and plant knowledge"
              loading="lazy"
            />
          </div>

          <div className="traditional-herbs-content">
            <span className="traditional-section-label">
              NATURE • PLANTS • CULTURAL KNOWLEDGE
            </span>

            <h2>
              The Knowledge
              <span> of Nature</span>
            </h2>

            <p>
              Plants and herbs have played important
              roles in cultural traditions around
              the world. Their uses, meanings and
              preparation methods have been
              documented and passed down within
              many communities.
            </p>

            <p>
              Traditional plant knowledge is an
              important part of heritage and
              cultural history. Understanding
              traditional uses also requires
              awareness of safety, responsible
              practice and the difference between
              cultural knowledge and proven medical
              effectiveness.
            </p>

            <div className="traditional-herbs-points">
              <div>
                <CheckCircle2 size={19} />
                Cultural plant knowledge
              </div>

              <div>
                <CheckCircle2 size={19} />
                Traditional practices and heritage
              </div>

              <div>
                <CheckCircle2 size={19} />
                Responsible awareness
              </div>

              <div>
                <CheckCircle2 size={19} />
                Respect for nature
              </div>
            </div>

            <a
              href={whatsappLink(
                "Hello, I would like to enquire about traditional knowledge and spiritual guidance."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="traditional-btn traditional-btn-gold"
            >
              Discuss Your Enquiry
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* ==================================================
            WELLBEING
        ================================================== */}

        <section className="traditional-wellbeing traditional-section">
          <div className="traditional-section-heading">
            <span className="traditional-section-label">
              REFLECTION • BALANCE • PERSONAL WELLBEING
            </span>

            <h2>
              Honour Your Journey.
              <span> Care for Your Wellbeing.</span>
            </h2>

            <p>
              Personal wellbeing is influenced by many
              aspects of life. Spiritual reflection,
              supportive relationships, healthy habits
              and professional support can all play
              important roles.
            </p>
          </div>

          <div className="traditional-wellbeing-grid">
            <article className="traditional-wellbeing-card">
              <img
                src={wellnessImage}
                alt="Holistic wellbeing and peaceful reflection"
                loading="lazy"
              />

              <div className="traditional-wellbeing-overlay">
                <span>01 / WELLBEING</span>

                <h3>Mindful Living</h3>

                <p>
                  Make space for rest, reflection,
                  positive routines and personal care.
                </p>
              </div>
            </article>

            <article className="traditional-wellbeing-card">
              <img
                src={heritageImage}
                alt="African cultural heritage and traditional wisdom"
                loading="lazy"
              />

              <div className="traditional-wellbeing-overlay">
                <span>02 / HERITAGE</span>

                <h3>Reconnect With Tradition</h3>

                <p>
                  Explore cultural teachings,
                  ancestral knowledge and the
                  traditions that hold meaning for you.
                </p>
              </div>
            </article>

            <article className="traditional-wellbeing-card">
              <img
                src={natureImage}
                alt="Peaceful natural environment and spiritual reflection"
                loading="lazy"
              />

              <div className="traditional-wellbeing-overlay">
                <span>03 / RENEWAL</span>

                <h3>Find Time for Reflection</h3>

                <p>
                  Create space to consider your
                  experiences, priorities and
                  the direction you wish to take.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ==================================================
            CULTURAL HERITAGE
        ================================================== */}

        <section className="traditional-heritage">
          <div className="traditional-heritage-inner">
            <div className="traditional-heritage-content">
              <span className="traditional-section-label">
                AFRICAN CULTURAL HERITAGE
              </span>

              <h2>
                Honouring the
                <span> Wisdom of Our Ancestors</span>
              </h2>

              <p>
                Ancestral wisdom is more than history.
                It represents the teachings, values,
                stories and experiences that shape
                cultural identity and the way many
                people understand life.
              </p>

              <p>
                Across African cultures, traditions
                are expressed through storytelling,
                family teachings, ceremonies,
                community relationships and
                spiritual beliefs.
              </p>

              <p>
                Learning about these traditions
                can help people develop a deeper
                appreciation for their heritage
                and the wisdom of previous generations.
              </p>

              <div className="traditional-heritage-quote">
                <BookOpen size={24} />

                <blockquote>
                  "Wisdom is carried through
                  generations, remembered through
                  stories and honoured through living."
                </blockquote>
              </div>
            </div>

            <div className="traditional-heritage-image">
              <img
                src={heritageImage}
                alt="African cultural traditions and ancestral heritage"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ==================================================
            CONSULTATION BANNER
        ================================================== */}

        <section className="traditional-banner">
          <div
            className="traditional-banner-image"
            style={{ backgroundImage: `url(${healerImage})` }}
          />

          <div className="traditional-banner-overlay" />

          <div className="traditional-banner-content">
            <span className="traditional-section-label">
              YOUR STORY DESERVES TO BE HEARD
            </span>

            <h2>
              A Conversation Rooted
              <span> in Respect &amp; Understanding</span>
            </h2>

            <p>
              If you are interested in traditional
              healing wisdom, spiritual guidance
              or cultural heritage, you are welcome
              to contact us.
            </p>

            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom, I would like to enquire about a traditional healing consultation."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="traditional-btn traditional-btn-gold"
            >
              <MessageCircle size={18} />
              Begin Your Enquiry
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* ==================================================
            CONSULTATION PROCESS
        ================================================== */}

        <section className="traditional-process traditional-section">
          <div className="traditional-section-heading">
            <span className="traditional-section-label">
              HOW OUR CONSULTATION WORKS
            </span>

            <h2>
              Simple. Respectful.
              <span> Personal.</span>
            </h2>

            <p>
              We believe every consultation should
              begin with a conversation and an
              understanding of your needs.
            </p>
          </div>

          <div className="traditional-process-grid">
            {process.map((step) => (
              <article
                className="traditional-process-card"
                key={step.number}
              >
                <span className="traditional-process-number">
                  {step.number}
                </span>

                <div className="traditional-process-icon">
                  <HandHeart size={25} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ==================================================
            OUR VALUES
        ================================================== */}

        <section className="traditional-values">
          <div className="traditional-values-inner">
            <div className="traditional-values-heading">
              <span className="traditional-section-label">
                OUR COMMITMENT
              </span>

              <h2>
                Tradition With
                <span> Respect &amp; Integrity</span>
              </h2>

              <p>
                We believe spiritual and traditional
                conversations should be approached
                with dignity, honesty, understanding
                and respect for individual choice.
              </p>
            </div>

            <div className="traditional-values-grid">
              <article>
                <Heart size={30} />

                <h3>Compassion</h3>

                <p>
                  Every enquiry deserves patience,
                  understanding and a respectful response.
                </p>
              </article>

              <article>
                <ShieldCheck size={30} />

                <h3>Respect</h3>

                <p>
                  We respect your personal beliefs,
                  boundaries and decisions.
                </p>
              </article>

              <article>
                <BookOpen size={30} />

                <h3>Heritage</h3>

                <p>
                  We value traditional knowledge,
                  cultural identity and ancestral wisdom.
                </p>
              </article>

              <article>
                <Compass size={30} />

                <h3>Empowerment</h3>

                <p>
                  We encourage personal reflection
                  and thoughtful decision-making.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ==================================================
            INTERNATIONAL
        ================================================== */}

        <section className="traditional-countries traditional-section">
          <div className="traditional-section-heading">
            <span className="traditional-section-label">
              INTERNATIONAL ENQUIRIES
            </span>

            <h2>
              Traditional Guidance
              <span> Across Countries</span>
            </h2>

            <p>
              Discover our country pages and
              enquire about spiritual guidance
              and consultation arrangements.
            </p>
          </div>

          <div className="traditional-countries-grid">
            {countries.map((country) => (
              <Link
                to={country.path}
                className="traditional-country-card"
                key={country.name}
              >
                <span>{country.name}</span>

                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </section>

        {/* ==================================================
            FAQ
        ================================================== */}

        <section className="traditional-faq traditional-section">
          <div className="traditional-faq-layout">
            <div className="traditional-faq-intro">
              <span className="traditional-section-label">
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h2>
                Learn More About
                <span> Traditional Healing</span>
              </h2>

              <p>
                Explore some of the questions
                people commonly ask before
                making an enquiry.
              </p>

              <a
                href={whatsappLink(
                  "Hello, I have some questions about traditional healing and your consultation services."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="traditional-btn traditional-btn-gold"
              >
                Ask Us Directly
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="traditional-faq-list">
              {faqs.map((faq, index) => (
                <details
                  className="traditional-faq-item"
                  key={faq.question}
                  open={index === 0}
                >
                  <summary>
                    {faq.question}

                    <span className="traditional-faq-plus">
                      +
                    </span>
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            RESPONSIBLE PRACTICE NOTICE
        ================================================== */}

        <section className="traditional-disclaimer">
          <div className="traditional-disclaimer-inner">
            <ShieldCheck size={25} />

            <div>
              <h3>Important Health &amp; Wellbeing Notice</h3>

              <p>
                Traditional and spiritual guidance is
                offered for cultural, personal and
                spiritual reflection. It is not medical
                diagnosis, treatment or a replacement
                for professional healthcare. Herbal
                products may carry risks, interact
                with medicines or cause adverse
                reactions. Seek advice from a qualified
                healthcare professional before using
                herbal remedies or changing any
                prescribed treatment. No particular
                health, spiritual or personal outcome
                is guaranteed.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================
            FINAL CTA
        ================================================== */}

        <section className="traditional-final-cta">
          <div className="traditional-final-cta-content">
            <span className="traditional-section-label">
              YOUR JOURNEY • YOUR CHOICE • YOUR STORY
            </span>

            <h2>
              Explore Tradition.
              <span> Discover Wisdom.</span>
            </h2>

            <p>
              Contact Ancestral Wisdom to learn more
              about traditional healing guidance,
              ancestral knowledge and our consultation
              services.
            </p>

            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom, I would like to enquire about traditional healing and spiritual guidance. Please share more information."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="traditional-btn traditional-btn-gold"
            >
              <MessageCircle size={19} />
              WhatsApp Us Today
              <ArrowRight size={18} />
            </a>

            <span className="traditional-final-note">
              TRADITIONAL WISDOM • CULTURAL HERITAGE • PERSONAL GUIDANCE
            </span>
          </div>
        </section>

      </main>
    </>
  );
}

export default TraditionalHealing;
