export const CONTACT = {
  email: "hola@dialogato.com",
  // Temporary business WhatsApp line while the AI agent is in development.
  // Stored once in E.164; other formats are derived from it.
  whatsapp: "+50662247291",
};

// wa.me expects the number as digits only
export const whatsappHref = (message: string) =>
  `https://wa.me/${CONTACT.whatsapp.slice(1)}?text=${encodeURIComponent(message)}`;
