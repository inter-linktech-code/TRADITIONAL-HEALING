
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Heart,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Users,
} from "lucide-react";

import SEO from "../components/SEO";

import consultationImage from "../assets/spiritual-consultation-namibia.jpg";
import healerImage from "../assets/traditional-spiritual-healer.jpg";
import wisdomImage from "../assets/ancestral-spiritual-wisdom.jpg";
import healingImage from "../assets/traditional-african-healing.jpg";
import natureImage from "../assets/spiritual-guidance-in-nature.jpg";

import "./Namibia.css";

const WHATSAPP = "27732335239";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: Heart,
    title: "Love & Relationship Guidance",
    description:
      "Explore relationship concerns, emotional understanding, communication and healthier connections.",
    path: "/love-spells",
  },
  {
    icon: Users,
    title: "Lost Love & Reconciliation",
    description:
      "Discuss separation, unresolved feelings and thoughtful ways to approach relationship challenges.",
    path: "/lost-love",
  },
  {
    icon: Sparkles,
    title: "Money & Prosperity",
    description:
      "Seek guidance around personal ambition, financial goals, business decisions and opportunities.",
    path: "/money-spells",
  },
  {
    icon: Sun,
    title: "Luck & Success",
    description:
      "Reflect on new beginnings, personal direction, confidence and the goals you want to pursue.",
    path: "/luck-success",
  },
  {
    icon: Leaf,
    title: "Spiritual Cleansing",
    description:
      "Explore traditional perspectives on renewal, reflection and restoring a sense of inner balance.",
    path: "/spiritual-cleansing",
  },
  {
    icon: ShieldCheck,
    title: "Spiritual Protection",
    description:
      "Discuss traditional spiritual beliefs, personal boundaries and practices associated with protection.",
    path: "/protection",
  },
  {
    icon: Compass,
    title: "Traditional Healing",
    description:
      "Learn about traditional African healing perspectives and culturally rooted approaches to wellbeing.",
    path: "/traditional-healing",
  },
];

const faqs = [
  {
    question: "Can people in Namibia contact Ancestral Wisdom?",
    answer:
      "Yes. People in Namibia can contact us through WhatsApp to make an enquiry, explain the type of guidance they are looking for and ask about available consultation arrangements.",
  },
  {
    question: "Can I enquire from Windhoek or Swakopmund?",
    answer:
      "Yes. Enquiries are welcome from Windhoek, Swakopmund, Walvis Bay and other parts of Namibia. Please contact us to discuss your needs and confirm the available arrangements.",
  },
  {
    question: "Can I enquire from Oshakati, Rundu or Keetmanshoop?",
    answer:
      "Yes. You can send an enquiry from Oshakati, Rundu, Keetmanshoop, Ondangwa, Otjiwarongo or elsewhere in Namibia using our WhatsApp contact.",
  },
  {
    question: "Are remote consultations available in Namibia?",
    answer:
      "Contact us to ask whether remote consultation is available for your particular enquiry. We will explain the arrangements before you make a decision.",
  },
  {
    question: "What services can I ask about?",
    answer:
      "You can enquire about love and relationship guidance, lost love, prosperity, personal success, spiritual cleansing, spiritual protection and traditional healing.",
  },
  {
    question: "Are specific spiritual results guaranteed?",
    answer:
      "No. Spiritual guidance cannot guarantee a particular outcome or control another person's choices. We encourage realistic expectations, personal responsibility and informed decisions.",
  },
];

function Namibia() {
  return (
    <>
      <SEO
        title="Traditional Healer Namibia | African Spiritual Guidance"
        description="Explore traditional African spiritual guidance and ancestral wisdom in Namibia. Enquire about relationship guidance, prosperity, spiritual cleansing, spiritual protection and traditional healing from Windhoek, Swakopmund, Walvis Bay and across Namibia."
        keywords="traditional healer Namibia, African traditional healer Namibia, traditional African healing Namibia, spiritual guidance Namibia, spiritual consultation Namibia, ancestral wisdom Namibia, traditional healer Windhoek, spiritual guidance Swakopmund, traditional healing Walvis Bay"
      />

      <main className="nam-page">
        {/* HERO */}
        <section className="nam-hero">
          <div className="nam-hero-overlay" />

          <div className="nam-container nam-hero-content">
            <div className="nam-eyebrow">
              <Sparkles size={15} />
              ANCESTRAL WISDOM · NAMIBIA
            </div>

            <h1>
              Traditional Healer &amp; African Spiritual Guidance in
              <span> Namibia</span>
            </h1>

            <p className="nam-hero-subtitle">
              Explore traditional African wisdom, personal reflection and
              spiritual guidance. Ancestral Wisdom welcomes enquiries from
              individuals in Namibia seeking guidance on relationships,
              prosperity, personal direction and traditional healing.
            </p>

            <div className="nam-hero-actions">
              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I am contacting you from Namibia and would like to enquire about your traditional spiritual guidance services."
                )}
                target="_blank"
                rel="noreferrer"
                className="nam-btn nam-btn-gold"
              >
                <MessageCircle size={18} />
                Enquire on WhatsApp
                <ArrowRight size={17} />
              </a>

              <Link to="/services" className="nam-btn nam-btn-outline">
                Explore Our Services
              </Link>
            </div>

            <div className="nam-hero-trust">
              <span><CheckCircle2 size={16} /> Personal enquiries welcome</span>
              <span><CheckCircle2 size={16} /> Respect for African heritage</span>
              <span><CheckCircle2 size={16} /> Thoughtful guidance</span>
            </div>
          </div>

          <div className="nam-hero-bottom">
            <span>WISDOM</span>
            <span className="nam-hero-bottom-line" />
            <span>TRADITION</span>
            <span className="nam-hero-bottom-line" />
            <span>PERSONAL GROWTH</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="nam-section nam-intro">
          <div className="nam-container nam-two-column">
            <div className="nam-image-frame">
              <img
                src={consultationImage}
                alt="Traditional spiritual consultation and guidance for people in Namibia"
              />
              <div className="nam-image-caption">
                <Sparkles size={19} />
                <span>Wisdom rooted in tradition</span>
              </div>
            </div>

            <div className="nam-section-copy">
              <span className="nam-kicker">WELCOME TO ANCESTRAL WISDOM</span>
              <h2>
                Traditional African Wisdom and Spiritual Guidance in Namibia
              </h2>
              <p>
                Namibia is home to diverse communities, cultures and
                generations of traditional knowledge. Cultural heritage,
                family traditions and spiritual beliefs continue to shape how
                many people understand identity, personal wellbeing and their
                connection with the past.
              </p>
              <p>
                Ancestral Wisdom provides a point of contact for people
                interested in traditional African spiritual perspectives,
                personal reflection and guidance. Whether you are in Windhoek,
                Swakopmund, Walvis Bay, Oshakati or another part of Namibia,
                you can contact us to discuss your enquiry.
              </p>
              <p>
                We believe that every conversation should be approached with
                respect, care and honesty. Our aim is to help people explore
                their concerns and make informed personal decisions.
              </p>

              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I would like to learn more about your spiritual guidance services for people in Namibia."
                )}
                target="_blank"
                rel="noreferrer"
                className="nam-text-link"
              >
                Speak with us <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* HERITAGE */}
        <section className="nam-section nam-heritage">
          <div className="nam-container nam-two-column nam-heritage-grid">
            <div className="nam-section-copy">
              <span className="nam-kicker">AFRICAN HERITAGE &amp; WISDOM</span>
              <h2>
                Honouring Traditional Knowledge and Ancestral Heritage
              </h2>
              <p>
                Traditional knowledge has an important place in many African
                communities. Across Namibia, different cultural traditions
                reflect generations of knowledge, beliefs and ways of
                understanding family, community and the natural world.
              </p>
              <p>
                Traditional healing and spiritual guidance are not understood
                in exactly the same way by everyone. We recognise the
                importance of cultural diversity, individual beliefs and
                personal choice.
              </p>

              <div className="nam-feature-list">
                <div>
                  <CheckCircle2 />
                  <span>Respect for African cultural heritage</span>
                </div>
                <div>
                  <CheckCircle2 />
                  <span>Personal conversations and individual enquiries</span>
                </div>
                <div>
                  <CheckCircle2 />
                  <span>Guidance approached with care and honesty</span>
                </div>
                <div>
                  <CheckCircle2 />
                  <span>Encouragement of informed personal decisions</span>
                </div>
              </div>
            </div>

            <div className="nam-image-frame nam-image-frame-tall">
              <img
                src={wisdomImage}
                alt="African ancestral wisdom and traditional spiritual heritage"
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="nam-section nam-services">
          <div className="nam-container">
            <div className="nam-section-heading">
              <span className="nam-kicker">HOW WE CAN HELP</span>
              <h2>Spiritual Guidance Services for Namibia</h2>
              <p>
                Explore the areas of guidance available through Ancestral
                Wisdom. Choose a service to learn more or contact us directly
                with your enquiry.
              </p>
            </div>

            <div className="nam-services-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="nam-service-card" key={service.path}>
                    <div className="nam-service-icon">
                      <Icon size={25} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to={service.path}>
                      Explore service <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* HEALING */}
        <section className="nam-section nam-healing">
          <div className="nam-container nam-two-column">
            <div className="nam-image-frame">
              <img
                src={healingImage}
                alt="Traditional African healing knowledge and cultural practices"
              />
            </div>

            <div className="nam-section-copy">
              <span className="nam-kicker">TRADITIONAL HEALING</span>
              <h2>
                Traditional African Healing and Spiritual Wellbeing
              </h2>
              <p>
                Traditional healing can involve cultural knowledge, spiritual
                beliefs and practices passed down through generations. Its
                meaning and expression can vary between communities and
                individuals.
              </p>
              <p>
                If you are interested in traditional healing perspectives,
                ancestral wisdom or spiritual wellbeing, you are welcome to
                make an enquiry and discuss the kind of guidance you are
                seeking.
              </p>
              <p>
                Spiritual guidance should not replace qualified medical,
                psychological, legal or financial support. For health concerns,
                please consult an appropriately qualified healthcare
                professional.
              </p>

              <Link to="/traditional-healing" className="nam-text-link">
                Discover traditional healing <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="nam-section nam-locations">
          <div className="nam-container">
            <div className="nam-section-heading">
              <span className="nam-kicker">ACROSS NAMIBIA</span>
              <h2>Enquiries from Cities and Communities Across Namibia</h2>
              <p>
                You can contact Ancestral Wisdom from different parts of
                Namibia to discuss your needs and ask about consultation
                arrangements.
              </p>
            </div>

            <div className="nam-location-grid">
              {[
                "Windhoek",
                "Swakopmund",
                "Walvis Bay",
                "Oshakati",
                "Rundu",
                "Keetmanshoop",
                "Ondangwa",
                "Otjiwarongo",
                "Gobabis",
                "Katima Mulilo",
                "Tsumeb",
                "Mariental",
              ].map((city) => (
                <div className="nam-location-item" key={city}>
                  <Compass size={17} />
                  {city}
                </div>
              ))}
            </div>

            <p className="nam-location-note">
              These are locations from which people may enquire. They are not
              a representation of confirmed physical offices or in-person
              service locations.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="nam-section nam-process">
          <div className="nam-container">
            <div className="nam-section-heading">
              <span className="nam-kicker">GETTING STARTED</span>
              <h2>How to Make an Enquiry</h2>
              <p>
                Starting a conversation is simple. Tell us what kind of
                guidance you are looking for and ask any questions you may
                have.
              </p>
            </div>

            <div className="nam-process-grid">
              <div className="nam-process-card">
                <span className="nam-step-number">01</span>
                <MessageCircle size={27} />
                <h3>Send a Message</h3>
                <p>
                  Contact us on WhatsApp and let us know that you are
                  enquiring from Namibia.
                </p>
              </div>

              <div className="nam-process-card">
                <span className="nam-step-number">02</span>
                <Users size={27} />
                <h3>Explain Your Needs</h3>
                <p>
                  Briefly describe the area where you would like guidance.
                  Share only information you are comfortable discussing.
                </p>
              </div>

              <div className="nam-process-card">
                <span className="nam-step-number">03</span>
                <ShieldCheck size={27} />
                <h3>Discuss Arrangements</h3>
                <p>
                  Ask about available consultation options, details and any
                  applicable costs before deciding how to proceed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REFLECTION */}
        <section className="nam-reflection">
          <div className="nam-reflection-image">
            <img
              src={natureImage}
              alt="Peaceful natural setting for spiritual reflection and personal growth"
            />
          </div>
          <div className="nam-reflection-content">
            <span className="nam-kicker">FIND CLARITY AND DIRECTION</span>
            <h2>
              Your Journey Begins with a Conversation
            </h2>
            <p>
              Take time to understand your circumstances, consider your
              options and decide what feels appropriate for your personal
              journey. We welcome your questions.
            </p>
            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom. I am from Namibia and would like to start a conversation about spiritual guidance."
              )}
              target="_blank"
              rel="noreferrer"
              className="nam-btn nam-btn-gold"
            >
              <MessageCircle size={18} />
              Start Your Enquiry
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="nam-section nam-faq">
          <div className="nam-container">
            <div className="nam-section-heading">
              <span className="nam-kicker">FREQUENTLY ASKED QUESTIONS</span>
              <h2>Traditional Healer Namibia – FAQs</h2>
              <p>
                Helpful information for people interested in traditional
                spiritual guidance and healing enquiries in Namibia.
              </p>
            </div>

            <div className="nam-faq-grid">
              {faqs.map((faq, index) => (
                <article className="nam-faq-item" key={faq.question}>
                  <span className="nam-faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT AND CONTACT LINKS */}
        <section className="nam-section nam-testimonial-link">
          <div className="nam-container nam-testimonial-inner">
            <div className="nam-stars">
              <Star /><Star /><Star /><Star /><Star />
            </div>
            <h2>Discover More About Ancestral Wisdom</h2>
            <p>
              Learn about our approach, explore our guidance services and
              contact us if you have questions.
            </p>
            <div className="nam-bottom-links">
              <Link to="/about" className="nam-btn nam-btn-outline">
                About Ancestral Wisdom
              </Link>
              <Link to="/contact" className="nam-btn nam-btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="nam-disclaimer">
          <div className="nam-container">
            <ShieldCheck size={20} />
            <p>
              <strong>Important notice:</strong> Spiritual and traditional
              guidance is offered for personal, cultural and reflective
              purposes. No particular spiritual, relationship, financial or
              personal outcome is guaranteed. We do not claim to control
              another person's decisions. Our services are not a substitute
              for professional medical, mental health, legal or financial
              advice. Please make informed decisions and seek qualified
              professional support where appropriate.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="nam-final-cta">
          <div className="nam-container">
            <span className="nam-kicker">ANCESTRAL WISDOM</span>
            <h2>
              Looking for Traditional Spiritual Guidance in Namibia?
            </h2>
            <p>
              Get in touch to discuss your enquiry and learn about the
              consultation arrangements that may be available to you.
            </p>
            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom. I am contacting you from Namibia. I would like to enquire about your services and consultation arrangements."
              )}
              target="_blank"
              rel="noreferrer"
              className="nam-btn nam-btn-gold"
            >
              <MessageCircle size={18} />
              Contact Us on WhatsApp
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Namibia;
