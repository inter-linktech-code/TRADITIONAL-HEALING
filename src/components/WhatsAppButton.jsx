import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

const WHATSAPP_NUMBER = "27732335239";

function WhatsAppButton() {
  const message =
    "Hello, I visited your website and would like to enquire about your traditional spiritual consultation services.";

  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={link}
      className="aw-floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={26} />

      <span className="aw-whatsapp-tooltip">
        Chat with us
      </span>
    </a>
  );
}

export default WhatsAppButton;