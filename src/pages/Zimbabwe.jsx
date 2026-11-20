
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

import consultationImage from "../assets/spiritual-consultation-zimbabwe.jpg";
import healerImage from "../assets/traditional-spiritual-healer.jpg";
import wisdomImage from "../assets/ancestral-spiritual-wisdom.jpg";
import healingImage from "../assets/traditional-african-healing.jpg";
import natureImage from "../assets/spiritual-guidance-in-nature.jpg";

import "./Zimbabwe.css";

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
    question: "Can people in Zimbabwe contact Ancestral Wisdom?",
    answer:
      "Yes. People in Zimbabwe can contact us through WhatsApp to make an enquiry, explain what kind of guidance they are looking for and ask about the available consultation arrangements.",
  },
  {
    question: "Do you offer traditional spiritual guidance in Harare and Bulawayo?",
    answer:
      "People from Harare, Bulawayo and other parts of Zimbabwe are welcome to enquire. Contact us first to discuss your needs and confirm whether a suitable consultation arrangement is available.",
  },
  {
    question: "Can I enquire from Mutare, Gweru or Masvingo?",
    answer:
      "Yes. You can send an enquiry from Mutare, Gweru, Masvingo, Chitungwiza, Kwekwe, Marondera or elsewhere in Zimbabwe using our WhatsApp contact.",
  },
  {
    question: "Can I have a remote consultation?",
    answer:
      "Please contact us to ask whether remote consultation is available for your particular enquiry. We will explain the arrangements before you make a decision.",
  },
  {
    question: "What should I include in my first message?",
    answer:
      "Briefly explain what you need guidance with, whether it concerns relationships, personal direction, prosperity or traditional spiritual wellbeing. Share only information you are comfortable discussing.",
  },
  {
    question: "Are spiritual guidance outcomes guaranteed?",
    answer:
      "No. Spiritual guidance cannot guarantee a particular result or control another person's choices. We encourage thoughtful decisions, realistic expectations and personal responsibility.",
  },
];

function Zimbabwe() {
  return (
    <>
      <SEO
        title="Traditional Healer Zimbabwe | African Spiritual Guidance"
        description="Explore traditional African spiritual guidance and ancestral wisdom in Zimbabwe. Enquire about love and relationship guidance, prosperity, spiritual cleansing and traditional healing from Harare, Bulawayo and across Zimbabwe."
        keywords="traditional healer Zimbabwe, African traditional healer Zimbabwe, traditional African healing Zimbabwe, spiritual guidance Zimbabwe, spiritual consultation Zimbabwe, ancestral wisdom Zimbabwe, traditional healing Harare, spiritual guidance Bulawayo"
      />

      <main className="zim-page">
        {/* HERO */}
        <section className="zim-hero">
          <div className="zim-hero-overlay" />

          <div className="zim-container zim-hero-content">
            <div className="zim-eyebrow">
              <Sparkles size={15} />
              ANCESTRAL WISDOM · ZIMBABWE
            </div>

            <h1>
              Traditional Healer &amp; African Spiritual Guidance in
              <span> Zimbabwe</span>
            </h1>

            <p className="zim-hero-subtitle">
              Discover traditional wisdom, personal reflection and spiritual
              guidance rooted in African heritage. Ancestral Wisdom welcomes
              enquiries from individuals seeking guidance on relationships,
              prosperity, personal direction and traditional healing.
            </p>

            <div className="zim-hero-actions">
              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I am contacting you from Zimbabwe and would like to enquire about your traditional spiritual guidance services."
                )}
                target="_blank"
                rel="noreferrer"
                className="zim-btn zim-btn-gold"
              >
                <MessageCircle size={18} />
                Enquire on WhatsApp
                <ArrowRight size={17} />
              </a>

              <Link to="/services" className="zim-btn zim-btn-outline">
                Explore Our Services
              </Link>
            </div>

            <div className="zim-hero-trust">
              <span><CheckCircle2 size={16} /> Personal enquiries welcome</span>
              <span><CheckCircle2 size={16} /> Respect for African heritage</span>
              <span><CheckCircle2 size={16} /> Thoughtful guidance</span>
            </div>
          </div>

          <div className="zim-hero-bottom">
            <span>WISDOM</span>
            <span className="zim-hero-bottom-line" />
            <span>TRADITION</span>
            <span className="zim-hero-bottom-line" />
            <span>PERSONAL GROWTH</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="zim-section zim-intro">
          <div className="zim-container zim-two-column">
            <div className="zim-image-frame">
              <img
                src={consultationImage}
                alt="Traditional spiritual consultation and guidance for people in Zimbabwe"
              />
              <div className="zim-image-caption">
                <Sparkles size={19} />
                <span>Wisdom rooted in tradition</span>
              </div>
            </div>

            <div className="zim-section-copy">
              <span className="zim-kicker">WELCOME TO ANCESTRAL WISDOM</span>
              <h2>
                Exploring Traditional African Wisdom in Zimbabwe
              </h2>
              <p>
                Across Zimbabwe, traditional knowledge and ancestral heritage
                remain important parts of many communities' cultural identity.
                People may seek guidance when navigating relationships,
                difficult decisions, personal challenges and important life
                transitions.
              </p>
              <p>
                Ancestral Wisdom provides a point of contact for individuals
                interested in traditional African spiritual perspectives,
                personal reflection and guidance. Whether you are in Harare,
                Bulawayo, Mutare, Gweru or another part of Zimbabwe, you can
                contact us to discuss your enquiry.
              </p>
              <p>
                Every person's circumstances are different. We believe in
                respectful conversations, realistic expectations and allowing
                people to make informed decisions about their own lives.
              </p>

              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I would like to learn more about your spiritual guidance services for people in Zimbabwe."
                )}
                target="_blank"
                rel="noreferrer"
                className="zim-text-link"
              >
                Speak with us <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* HERITAGE */}
        <section className="zim-section zim-heritage">
          <div className="zim-container zim-two-column zim-heritage-grid">
            <div className="zim-section-copy">
              <span className="zim-kicker">AFRICAN HERITAGE &amp; WISDOM</span>
              <h2>
                Respecting the Place of Traditional Healing and Ancestral
                Knowledge
              </h2>
              <p>
                Zimbabwe has a rich cultural heritage shaped by generations of
                traditional knowledge, community practices and spiritual
                beliefs. These traditions have influenced how many people
                understand identity, family, wellbeing and their connection
                with the past.
              </p>
              <p>
                Traditional African healing and spiritual guidance can mean
                different things to different individuals and communities.
                Our approach recognises the importance of cultural respect,
                personal choice and open communication.
              </p>

              <div className="zim-feature-list">
                <div>
                  <CheckCircle2 />
                  <span>Respect for traditional African heritage</span>
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

            <div className="zim-image-frame zim-image-frame-tall">
              <img
                src={wisdomImage}
                alt="African ancestral wisdom and traditional spiritual heritage"
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="zim-section zim-services">
          <div className="zim-container">
            <div className="zim-section-heading">
              <span className="zim-kicker">HOW WE CAN HELP</span>
              <h2>Spiritual Guidance Services for Zimbabwe</h2>
              <p>
                Explore the areas of guidance available through Ancestral
                Wisdom. Choose a service to learn more or contact us directly
                with your enquiry.
              </p>
            </div>

            <div className="zim-services-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="zim-service-card" key={service.path}>
                    <div className="zim-service-icon">
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
        <section className="zim-section zim-healing">
          <div className="zim-container zim-two-column">
            <div className="zim-image-frame">
              <img
                src={healingImage}
                alt="Traditional African healing knowledge and cultural practices"
              />
            </div>

            <div className="zim-section-copy">
              <span className="zim-kicker">TRADITIONAL HEALING</span>
              <h2>
                Traditional African Healing and Spiritual Wellbeing
              </h2>
              <p>
                Traditional healing is understood in different ways across
                African cultures. It may involve cultural knowledge, spiritual
                beliefs, community traditions and practices passed down through
                generations.
              </p>
              <p>
                If you are interested in traditional healing perspectives,
                spiritual wellbeing or learning more about ancestral wisdom,
                you are welcome to make an enquiry.
              </p>
              <p>
                Spiritual guidance should not replace qualified medical,
                psychological, legal or financial support. For health concerns,
                please consult an appropriately qualified healthcare
                professional.
              </p>

              <Link to="/traditional-healing" className="zim-text-link">
                Discover traditional healing <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="zim-section zim-locations">
          <div className="zim-container">
            <div className="zim-section-heading">
              <span className="zim-kicker">ACROSS ZIMBABWE</span>
              <h2>Enquiries from Cities and Communities Across Zimbabwe</h2>
              <p>
                You can contact Ancestral Wisdom from different parts of
                Zimbabwe to discuss your needs and ask about consultation
                arrangements.
              </p>
            </div>

            <div className="zim-location-grid">
              {[
                "Harare",
                "Bulawayo",
                "Mutare",
                "Gweru",
                "Masvingo",
                "Chitungwiza",
                "Kwekwe",
                "Marondera",
                "Victoria Falls",
                "Kadoma",
                "Bindura",
                "Chinhoyi",
              ].map((city) => (
                <div className="zim-location-item" key={city}>
                  <Compass size={17} />
                  {city}
                </div>
              ))}
            </div>

            <p className="zim-location-note">
              These are locations from which people may enquire. They are not
              a representation of confirmed physical offices or in-person
              service locations.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="zim-section zim-process">
          <div className="zim-container">
            <div className="zim-section-heading">
              <span className="zim-kicker">GETTING STARTED</span>
              <h2>How to Make an Enquiry</h2>
              <p>
                Starting a conversation is simple. Tell us what kind of
                guidance you are looking for and ask any questions you may
                have.
              </p>
            </div>

            <div className="zim-process-grid">
              <div className="zim-process-card">
                <span className="zim-step-number">01</span>
                <MessageCircle size={27} />
                <h3>Send a Message</h3>
                <p>
                  Contact us on WhatsApp and let us know that you are
                  enquiring from Zimbabwe.
                </p>
              </div>

              <div className="zim-process-card">
                <span className="zim-step-number">02</span>
                <Users size={27} />
                <h3>Explain Your Needs</h3>
                <p>
                  Briefly describe the area where you would like guidance,
                  without sharing anything you are uncomfortable disclosing.
                </p>
              </div>

              <div className="zim-process-card">
                <span className="zim-step-number">03</span>
                <ShieldCheck size={27} />
                <h3>Discuss Arrangements</h3>
                <p>
                  Ask about the available consultation options, details and
                  any applicable costs before deciding how to proceed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NATURE / REFLECTION */}
        <section className="zim-reflection">
          <div className="zim-reflection-image">
            <img
              src={natureImage}
              alt="Peaceful natural setting for spiritual reflection and personal growth"
            />
          </div>
          <div className="zim-reflection-content">
            <span className="zim-kicker">FIND CLARITY AND DIRECTION</span>
            <h2>
              Every Journey Begins with a Conversation
            </h2>
            <p>
              Whatever has brought you here, take time to understand your
              circumstances, consider your options and decide what feels
              appropriate for your journey.
            </p>
            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom. I am from Zimbabwe and would like to start a conversation about spiritual guidance."
              )}
              target="_blank"
              rel="noreferrer"
              className="zim-btn zim-btn-gold"
            >
              <MessageCircle size={18} />
              Start Your Enquiry
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="zim-section zim-faq">
          <div className="zim-container">
            <div className="zim-section-heading">
              <span className="zim-kicker">FREQUENTLY ASKED QUESTIONS</span>
              <h2>Traditional Healer Zimbabwe – FAQs</h2>
              <p>
                Helpful information for people interested in traditional
                spiritual guidance and healing enquiries in Zimbabwe.
              </p>
            </div>

            <div className="zim-faq-grid">
              {faqs.map((faq, index) => (
                <article className="zim-faq-item" key={faq.question}>
                  <span className="zim-faq-number">
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

        {/* TESTIMONIALS LINK */}
        <section className="zim-section zim-testimonial-link">
          <div className="zim-container zim-testimonial-inner">
            <div className="zim-stars">
              <Star /><Star /><Star /><Star /><Star />
            </div>
            <h2>Discover More About Ancestral Wisdom</h2>
            <p>
              Learn about our approach, explore our guidance services and
              contact us if you have questions.
            </p>
            <div className="zim-bottom-links">
              <Link to="/about" className="zim-btn zim-btn-outline">
                About Ancestral Wisdom
              </Link>
              <Link to="/contact" className="zim-btn zim-btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="zim-disclaimer">
          <div className="zim-container">
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
        <section className="zim-final-cta">
          <div className="zim-container">
            <span className="zim-kicker">ANCESTRAL WISDOM</span>
            <h2>Looking for Traditional Spiritual Guidance in Zimbabwe?</h2>
            <p>
              Get in touch to discuss your enquiry and learn about the
              consultation arrangements that may be available to you.
            </p>
            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom. I am contacting you from Zimbabwe. I would like to enquire about your services and consultation arrangements."
              )}
              target="_blank"
              rel="noreferrer"
              className="zim-btn zim-btn-gold"
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

export default Zimbabwe;
