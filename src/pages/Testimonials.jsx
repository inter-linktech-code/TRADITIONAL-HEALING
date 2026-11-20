
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import SEO from "../components/SEO";

import consultationImage from "../assets/spiritual-guidance-consultation.jpg";
import wisdomImage from "../assets/ancestral-spiritual-wisdom.jpg";
import natureImage from "../assets/spiritual-guidance-in-nature.jpg";

import "./Testimonials.css";

const WHATSAPP = "27732335239";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const feedbackGuidelines = [
  "Share your genuine experience in your own words.",
  "Avoid including private information about yourself or another person.",
  "Only share feedback you are comfortable making public.",
  "Do not include claims of guaranteed spiritual, medical or financial outcomes.",
];

function Testimonials() {
  return (
    <>
      <SEO
        title="Client Testimonials | Ancestral Wisdom"
        description="Discover the values behind Ancestral Wisdom. Learn how to share genuine feedback about your experience with traditional spiritual guidance, personal consultations and our services."
        keywords="Ancestral Wisdom testimonials, traditional healer reviews, spiritual guidance feedback, African traditional healing experiences, spiritual consultation reviews"
      />

      <main className="testimonials-page">
        {/* HERO */}
        <section className="testimonials-hero">
          <div className="testimonials-hero-overlay" />

          <div className="testimonials-container testimonials-hero-content">
            <div className="testimonials-eyebrow">
              <Sparkles size={15} />
              ANCESTRAL WISDOM · CLIENT EXPERIENCES
            </div>

            <h1>
              Every Journey Has a
              <span> Story to Tell</span>
            </h1>

            <p>
              We value every conversation and every individual who takes the
              time to connect with Ancestral Wisdom. This page is dedicated
              to honest feedback, personal experiences and respectful
              communication.
            </p>

            <div className="testimonials-hero-actions">
              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I would like to share feedback about my experience."
                )}
                target="_blank"
                rel="noreferrer"
                className="testimonials-btn testimonials-btn-gold"
              >
                <MessageCircle size={18} />
                Share Your Feedback
                <ArrowRight size={17} />
              </a>

              <Link
                to="/services"
                className="testimonials-btn testimonials-btn-outline"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="testimonials-hero-points">
              <span><CheckCircle2 size={16} /> Honest feedback</span>
              <span><CheckCircle2 size={16} /> Respect and privacy</span>
              <span><CheckCircle2 size={16} /> Personal experiences</span>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="testimonials-section testimonials-intro">
          <div className="testimonials-container testimonials-two-column">
            <div className="testimonials-image-frame">
              <img
                src={consultationImage}
                alt="A welcoming setting for spiritual guidance and personal consultation"
              />
            </div>

            <div className="testimonials-copy">
              <span className="testimonials-kicker">YOUR VOICE MATTERS</span>
              <h2>
                We Appreciate Every Person Who Shares Their Experience
              </h2>

              <p>
                Every person comes to a conversation with different
                circumstances, questions and expectations. We recognise the
                importance of listening, understanding individual concerns
                and treating every enquiry with respect.
              </p>

              <p>
                Feedback helps us understand how people experience our
                communication, consultation arrangements and approach to
                traditional spiritual guidance.
              </p>

              <p>
                We welcome honest comments, whether they are positive or
                suggestions about how we can improve.
              </p>

              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I would like to share some feedback with your team."
                )}
                target="_blank"
                rel="noreferrer"
                className="testimonials-text-link"
              >
                Send us your feedback <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* FEEDBACK VALUES */}
        <section className="testimonials-section testimonials-values">
          <div className="testimonials-container">
            <div className="testimonials-heading">
              <span className="testimonials-kicker">WHAT MATTERS TO US</span>
              <h2>Our Approach to Every Experience</h2>
              <p>
                We believe that respectful communication and realistic
                expectations are important parts of every interaction.
              </p>
            </div>

            <div className="testimonials-values-grid">
              <article className="testimonials-value-card">
                <div className="testimonials-value-icon">
                  <Heart size={25} />
                </div>
                <h3>Respect</h3>
                <p>
                  Every individual deserves to be treated with dignity,
                  patience and understanding.
                </p>
              </article>

              <article className="testimonials-value-card">
                <div className="testimonials-value-icon">
                  <ShieldCheck size={25} />
                </div>
                <h3>Honesty</h3>
                <p>
                  We encourage open communication and realistic expectations
                  in every conversation.
                </p>
              </article>

              <article className="testimonials-value-card">
                <div className="testimonials-value-icon">
                  <Users size={25} />
                </div>
                <h3>Individual Attention</h3>
                <p>
                  Every enquiry is different. We value taking time to
                  understand each person's concerns.
                </p>
              </article>

              <article className="testimonials-value-card">
                <div className="testimonials-value-icon">
                  <Sparkles size={25} />
                </div>
                <h3>Personal Growth</h3>
                <p>
                  We encourage reflection, informed choices and personal
                  responsibility throughout life's journey.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CLIENT FEEDBACK */}
        <section className="testimonials-section testimonials-feedback">
          <div className="testimonials-container">
            <div className="testimonials-heading">
              <span className="testimonials-kicker">CLIENT FEEDBACK</span>
              <h2>Real Experiences Matter</h2>
              <p>
                We believe testimonials should reflect genuine experiences.
                We are building this collection with feedback shared by
                people who have chosen to contribute.
              </p>
            </div>

            <div className="testimonials-empty-state">
              <div className="testimonials-empty-icon">
                <MessageCircle size={34} />
              </div>

              <span className="testimonials-empty-label">
                YOUR EXPERIENCE CAN BE SHARED HERE
              </span>

              <h3>
                Help Others Understand the Experience
              </h3>

              <p>
                If you have interacted with Ancestral Wisdom and would like
                to share your genuine feedback, we welcome you to get in
                touch. With your permission, suitable feedback may be
                considered for publication on this page.
              </p>

              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I would like to submit genuine feedback about my experience and ask how it can be shared on your website."
                )}
                target="_blank"
                rel="noreferrer"
                className="testimonials-btn testimonials-btn-gold"
              >
                <MessageCircle size={18} />
                Submit Your Experience
                <ArrowRight size={17} />
              </a>

              <span className="testimonials-empty-note">
                No fictional reviews or unverified customer claims are
                displayed.
              </span>
            </div>
          </div>
        </section>

        {/* REVIEW GUIDELINES */}
        <section className="testimonials-section testimonials-guidelines">
          <div className="testimonials-container testimonials-two-column">
            <div className="testimonials-copy">
              <span className="testimonials-kicker">SHARE YOUR STORY</span>
              <h2>
                Your Feedback Should Always Be Your Own
              </h2>

              <p>
                If you decide to share your experience, we encourage you to
                write honestly and only include details you are comfortable
                making public.
              </p>

              <div className="testimonials-guideline-list">
                {feedbackGuidelines.map((guideline) => (
                  <div key={guideline}>
                    <CheckCircle2 size={19} />
                    <span>{guideline}</span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink(
                  "Hello Ancestral Wisdom. I would like to share feedback and understand the process for submitting it."
                )}
                target="_blank"
                rel="noreferrer"
                className="testimonials-text-link"
              >
                Ask how to submit feedback <ArrowRight size={17} />
              </a>
            </div>

            <div className="testimonials-image-frame testimonials-guidelines-image">
              <img
                src={wisdomImage}
                alt="Traditional wisdom and personal reflection"
              />
            </div>
          </div>
        </section>

        {/* PRIVACY */}
        <section className="testimonials-privacy">
          <div className="testimonials-container testimonials-privacy-inner">
            <ShieldCheck size={32} />
            <div>
              <span className="testimonials-kicker">PRIVACY &amp; PERMISSION</span>
              <h2>Your Privacy Deserves Respect</h2>
              <p>
                We will not knowingly publish someone's personal feedback as
                a public testimonial without their permission. Please avoid
                sharing sensitive personal details, private conversations or
                another person's confidential information.
              </p>
              <Link to="/privacy-policy">
                Read our Privacy Policy <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* REFLECTION */}
        <section className="testimonials-reflection">
          <div className="testimonials-reflection-image">
            <img
              src={natureImage}
              alt="A peaceful natural setting representing reflection and personal growth"
            />
          </div>

          <div className="testimonials-container testimonials-reflection-content">
            <span className="testimonials-kicker">THANK YOU FOR CONNECTING</span>
            <h2>
              Every Conversation Deserves Respect
            </h2>
            <p>
              Whether you are sharing feedback, exploring our services or
              making an initial enquiry, we appreciate your interest in
              Ancestral Wisdom.
            </p>

            <a
              href={whatsappLink(
                "Hello Ancestral Wisdom. I would like to get in touch with your team."
              )}
              target="_blank"
              rel="noreferrer"
              className="testimonials-btn testimonials-btn-gold"
            >
              <MessageCircle size={18} />
              Contact Ancestral Wisdom
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="testimonials-final">
          <div className="testimonials-container">
            <span className="testimonials-kicker">ANCESTRAL WISDOM</span>
            <h2>Would You Like to Know More About Our Services?</h2>
            <p>
              Explore our traditional spiritual guidance services or contact
              us to discuss your questions and enquiries.
            </p>

            <div className="testimonials-final-actions">
              <Link
                to="/services"
                className="testimonials-btn testimonials-btn-outline"
              >
                Explore All Services
              </Link>

              <Link
                to="/contact"
                className="testimonials-btn testimonials-btn-gold"
              >
                Contact Us <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Testimonials;
