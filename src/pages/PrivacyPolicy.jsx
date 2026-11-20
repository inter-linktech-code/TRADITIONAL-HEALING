
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  FileText,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import SEO from "../components/SEO";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const lastUpdated = "20 November 2026";

  return (
    <>
      <SEO
        title="Privacy Policy | Ancestral Wisdom"
        description="Read the Ancestral Wisdom Privacy Policy to understand how website visitor information, enquiries, WhatsApp communications and personal data are handled."
        keywords="Ancestral Wisdom privacy policy, traditional healer privacy, spiritual consultation privacy, personal information policy, website data protection"
      />

      <main className="aw-privacy">
        {/* HERO */}
        <section className="aw-privacy-hero">
          <div className="aw-privacy-hero-overlay" />

          <div className="aw-privacy-container aw-privacy-hero-content">
            <span className="aw-privacy-eyebrow">
              <ShieldCheck size={16} />
              YOUR PRIVACY MATTERS
            </span>

            <h1>
              Privacy
              <span> Policy</span>
            </h1>

            <p>
              Transparency, respect and responsible handling of personal
              information are important to Ancestral Wisdom. This policy
              explains how information may be collected, used and protected
              when you visit our website or contact us.
            </p>

            <div className="aw-privacy-updated">
              <FileText size={16} />
              Last updated: {lastUpdated}
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="aw-privacy-intro">
          <div className="aw-privacy-container">
            <div className="aw-privacy-intro-card">
              <div className="aw-privacy-intro-icon">
                <LockKeyhole size={27} />
              </div>

              <div>
                <h2>Our Commitment to Privacy</h2>
                <p>
                  Ancestral Wisdom respects the privacy of people who visit
                  this website and make enquiries about its services. We aim
                  to handle personal information carefully, use it only for
                  appropriate purposes and avoid requesting information that
                  is not necessary for an enquiry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* POLICY CONTENT */}
        <section className="aw-privacy-content-section">
          <div className="aw-privacy-container aw-privacy-layout">
            <aside className="aw-privacy-sidebar">
              <div className="aw-privacy-sidebar-inner">
                <span>ON THIS PAGE</span>

                <a href="#information">1. Information We Collect</a>
                <a href="#use">2. How We Use Information</a>
                <a href="#whatsapp">3. WhatsApp Communication</a>
                <a href="#sharing">4. Information Sharing</a>
                <a href="#cookies">5. Cookies and Website Data</a>
                <a href="#security">6. Information Security</a>
                <a href="#retention">7. Data Retention</a>
                <a href="#rights">8. Your Privacy Choices</a>
                <a href="#third-party">9. Third-Party Websites</a>
                <a href="#children">10. Children's Privacy</a>
                <a href="#changes">11. Policy Updates</a>
                <a href="#contact">12. Contact Us</a>
              </div>
            </aside>

            <article className="aw-privacy-document">
              <div className="aw-privacy-document-heading">
                <span className="aw-privacy-eyebrow">
                  ANCESTRAL WISDOM
                </span>
                <h2>How We Handle Your Information</h2>
                <p>
                  Please read this policy carefully so that you understand
                  the choices available to you when interacting with our
                  website and services.
                </p>
              </div>

              <section id="information" className="aw-privacy-section">
                <span className="aw-privacy-section-number">01</span>
                <h3>Information We Collect</h3>

                <p>
                  The information we may receive depends on how you use this
                  website and how you choose to contact us.
                </p>

                <h4>Information you provide voluntarily</h4>
                <p>This may include:</p>

                <ul>
                  <li>Your name or preferred name.</li>
                  <li>Your email address, if you choose to provide it.</li>
                  <li>
                    Your enquiry topic, such as relationship guidance,
                    traditional healing or spiritual consultation.
                  </li>
                  <li>
                    The contents of messages you voluntarily send through
                    WhatsApp or other available communication channels.
                  </li>
                </ul>

                <h4>Basic website information</h4>
                <p>
                  Depending on the website hosting environment and any
                  services enabled, technical information may be collected
                  automatically. This can include browser type, device
                  information, pages visited, approximate usage information
                  and technical logs.
                </p>

                <p>
                  We do not intentionally ask visitors to provide passwords,
                  payment card details, identity documents or other highly
                  sensitive information through a general enquiry form.
                </p>
              </section>

              <section id="use" className="aw-privacy-section">
                <span className="aw-privacy-section-number">02</span>
                <h3>How We Use Information</h3>

                <p>
                  Information provided through an enquiry may be used for
                  reasonable communication and service-related purposes,
                  including:
                </p>

                <ul>
                  <li>Responding to questions and enquiries.</li>
                  <li>Understanding the service information you request.</li>
                  <li>
                    Communicating information about consultation
                    arrangements, where applicable.
                  </li>
                  <li>Following up on an enquiry when appropriate.</li>
                  <li>
                    Maintaining website security and improving the visitor
                    experience.
                  </li>
                </ul>

                <p>
                  We do not state or imply that submitting an enquiry
                  automatically creates a client relationship or guarantees
                  that a particular service will be provided.
                </p>
              </section>

              <section id="whatsapp" className="aw-privacy-section">
                <span className="aw-privacy-section-number">03</span>
                <h3>WhatsApp Communication</h3>

                <p>
                  This website provides links that allow visitors to start a
                  conversation through WhatsApp.
                </p>

                <p>
                  When you select a WhatsApp link, you are redirected to
                  WhatsApp or the relevant WhatsApp application. The contact
                  message may be prepared using information you entered on
                  the website.
                </p>

                <p>
                  You remain in control of whether you send that message.
                  Please review the information before sending it.
                </p>

                <p>
                  WhatsApp is a third-party service operated by Meta. Your
                  use of WhatsApp is also subject to WhatsApp's own terms and
                  privacy practices. Ancestral Wisdom does not control how
                  WhatsApp independently processes information.
                </p>

                <p>
                  You can learn more through the{" "}
                  <a
                    href="https://www.whatsapp.com/legal/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp Privacy Policy
                  </a>.
                </p>
              </section>

              <section id="sharing" className="aw-privacy-section">
                <span className="aw-privacy-section-number">04</span>
                <h3>Information Sharing</h3>

                <p>
                  We do not present personal enquiry information as
                  information for public display or general distribution.
                </p>

                <p>
                  Information may be processed by service providers involved
                  in operating the website or communication services, where
                  necessary for those services to function.
                </p>

                <p>
                  Information may also be disclosed where required by
                  applicable law, a lawful request or a legitimate need to
                  protect the security and rights of individuals.
                </p>

                <p>
                  We do not claim that information is never shared with
                  third-party infrastructure providers. Their own terms and
                  privacy practices may apply.
                </p>
              </section>

              <section id="cookies" className="aw-privacy-section">
                <span className="aw-privacy-section-number">05</span>
                <h3>Cookies and Website Data</h3>

                <p>
                  Cookies are small files that websites may store on a
                  visitor's device. They can support website functionality,
                  preferences, security and analytics.
                </p>

                <p>
                  This website may use essential technical storage or
                  third-party website services depending on its hosting and
                  configuration.
                </p>

                <p>
                  We do not claim to use advertising or analytics cookies
                  unless those services are actually enabled on the website.
                  If optional tracking tools are introduced, this policy
                  should be updated to explain their use.
                </p>

                <p>
                  You can manage cookies through your browser settings.
                  Disabling certain cookies may affect how some websites
                  function.
                </p>
              </section>

              <section id="security" className="aw-privacy-section">
                <span className="aw-privacy-section-number">06</span>
                <h3>Information Security</h3>

                <p>
                  We aim to take reasonable steps to protect information
                  received through website enquiries and communications.
                </p>

                <p>
                  However, no website, internet connection or electronic
                  communication method can be guaranteed to be completely
                  secure. Visitors should avoid sending confidential
                  information through ordinary website forms or messaging
                  channels.
                </p>
              </section>

              <section id="retention" className="aw-privacy-section">
                <span className="aw-privacy-section-number">07</span>
                <h3>Data Retention</h3>

                <p>
                  Information may be retained for as long as reasonably
                  necessary for the purpose for which it was provided,
                  including responding to enquiries, maintaining relevant
                  communications, addressing disputes or meeting applicable
                  legal requirements.
                </p>

                <p>
                  Actual retention periods may vary depending on the type of
                  information, communication platform and applicable
                  obligations.
                </p>
              </section>

              <section id="rights" className="aw-privacy-section">
                <span className="aw-privacy-section-number">08</span>
                <h3>Your Privacy Choices</h3>

                <p>
                  Depending on the laws that apply to your location, you may
                  have rights relating to your personal information. These
                  may include:
                </p>

                <ul>
                  <li>Requesting information about personal data held about you.</li>
                  <li>Requesting correction of inaccurate information.</li>
                  <li>
                    Asking for deletion of information where applicable.
                  </li>
                  <li>
                    Objecting to or restricting certain forms of processing
                    where applicable.
                  </li>
                  <li>
                    Withdrawing consent where processing is based on consent.
                  </li>
                </ul>

                <p>
                  To make a privacy-related request, contact us through the
                  WhatsApp link on our Contact page. We may need to verify
                  your request before taking action.
                </p>
              </section>

              <section id="third-party" className="aw-privacy-section">
                <span className="aw-privacy-section-number">09</span>
                <h3>Third-Party Websites</h3>

                <p>
                  This website may contain links to external websites,
                  platforms or services. These external services operate
                  independently and may have their own privacy policies,
                  terms and data practices.
                </p>

                <p>
                  We encourage visitors to review the relevant policies
                  before providing personal information to third-party
                  websites.
                </p>
              </section>

              <section id="children" className="aw-privacy-section">
                <span className="aw-privacy-section-number">10</span>
                <h3>Children's Privacy</h3>

                <p>
                  This website is not intended to encourage children to
                  submit personal information independently. We do not
                  knowingly seek personal information from children through
                  general enquiries.
                </p>

                <p>
                  A parent or legal guardian who believes that a child has
                  provided personal information may contact us to raise the
                  concern.
                </p>
              </section>

              <section id="changes" className="aw-privacy-section">
                <span className="aw-privacy-section-number">11</span>
                <h3>Changes to This Privacy Policy</h3>

                <p>
                  This policy may be updated when website features,
                  communication methods or applicable privacy requirements
                  change.
                </p>

                <p>
                  Any revised version will be published on this page with an
                  updated revision date. Visitors are encouraged to review
                  the policy periodically.
                </p>
              </section>

              <section id="contact" className="aw-privacy-section">
                <span className="aw-privacy-section-number">12</span>
                <h3>Contact Us About Privacy</h3>

                <p>
                  If you have a question about this Privacy Policy or wish to
                  make a privacy-related enquiry, please contact Ancestral
                  Wisdom.
                </p>

                <a
                  className="aw-privacy-contact-link"
                  href="https://wa.me/27732335239?text=Hello%20Ancestral%20Wisdom%2C%20I%20have%20a%20question%20about%20your%20Privacy%20Policy."
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} />
                  Contact Us on WhatsApp
                  <ArrowRight size={16} />
                </a>
              </section>

              <div className="aw-privacy-document-footer">
                <ShieldCheck size={20} />
                <p>
                  We believe that respectful service begins with respect for
                  people's privacy, choices and personal boundaries.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* PRIVACY VALUES */}
        <section className="aw-privacy-values">
          <div className="aw-privacy-container">
            <div className="aw-privacy-section-heading">
              <span className="aw-privacy-eyebrow">OUR PRINCIPLES</span>
              <h2>Privacy Built on Respect</h2>
              <p>
                We believe every visitor should understand how their
                information may be used and have a meaningful choice about
                what they share.
              </p>
            </div>

            <div className="aw-privacy-values-grid">
              <div className="aw-privacy-value-card">
                <Eye size={27} />
                <h3>Transparency</h3>
                <p>
                  Clear information about how enquiries and website data may
                  be handled.
                </p>
              </div>

              <div className="aw-privacy-value-card">
                <LockKeyhole size={27} />
                <h3>Careful Handling</h3>
                <p>
                  A commitment to treating personal communications with
                  appropriate care.
                </p>
              </div>

              <div className="aw-privacy-value-card">
                <UserCheck size={27} />
                <h3>Personal Choice</h3>
                <p>
                  You decide what information you choose to share when making
                  an enquiry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="aw-privacy-final">
          <div className="aw-privacy-final-overlay" />

          <div className="aw-privacy-container aw-privacy-final-content">
            <span className="aw-privacy-eyebrow">
              ANCESTRAL WISDOM
            </span>

            <h2>
              Have a Question About
              <span> Your Privacy?</span>
            </h2>

            <p>
              We welcome questions about this policy and how enquiries are
              handled.
            </p>

            <Link to="/contact" className="aw-privacy-button">
              Visit Contact Page
              <ArrowRight size={17} />
            </Link>

            <div className="aw-privacy-bottom-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Our Services</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicy;
