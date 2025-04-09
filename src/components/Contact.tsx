import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { Github, Linkedin, Instagram, Mail, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

function Contact() {
  const contactData = [
    {
      platform: "GitHub",
      description: "Check out my code repositories and contributions",
      icon: <Github className="h-6 w-6" />,
      link: "https://github.com/ManOnTheMoonXIX",
    },
    {
      platform: "LinkedIn",
      description: "Connect with me professionally",
      icon: <Linkedin className="h-6 w-6" />,
      link: "https://linkedin.com/in/justin-alder",
    },
    {
      platform: "Email",
      description: "justinalder02@gmail.com",
      icon: <Mail className="h-6 w-6" />,
      link: "mailto:justinalder02@gmail.com",
    },
    {
      platform: "Instagram",
      description: "Follow me",
      icon: <Instagram className="h-6 w-6" />,
      link: "https://www.instagram.com/ManOnTheMoonXIX/",
    },
  ];

  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_5zy2tv5",
        "template_56qf22k",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        "pWS2gbSg2qsCuG3yF"
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          className:
            "bg-darkBg border border-gray-800 text-white shadow-xl shadow-black/30",
          descriptionClassName: "text-gray-300",
        });
        setFormData({ from_name: "", from_email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again.", {
          className:
            "bg-darkBg border border-gray-800 text-white shadow-xl shadow-black/30",
          descriptionClassName: "text-gray-300",
        });
        setIsSubmitting(false);
      });
  };

  const ContactCard = ({
    contact,
    index,
  }: {
    contact: (typeof contactData)[0];
    index: number;
  }) => (
    <a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card block p-6 bg-darkBg shadow-xl shadow-black/50 rounded-2xl transition-all duration-300 hover:shadow-teal/20 hover:shadow-2xl hover:translate-y-[-5px]"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="bg-black/30 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3 text-teal">
        {contact.icon}
      </div>
      <h3 className="text-xl font-bold mb-1">{contact.platform}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        {contact.description}
      </p>
    </a>
  );

  return (
    <div className="container mx-auto py-16 md:py-24 px-4 text-white relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Let's <span className="text-teal">Connect</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="md:col-span-1 space-y-4">
          {contactData.map((contact, index) => (
            <ContactCard
              key={contact.platform}
              contact={contact}
              index={index}
            />
          ))}
        </div>

        <div className="md:col-span-2">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="p-6 bg-darkBg shadow-xl shadow-black/50 rounded-2xl h-full border border-gray-800 flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-6 text-teal">
              Send Me A Message
            </h3>

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="form-input"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="form-input"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-input flex-grow min-h-[150px] resize-none mb-4"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="teal-button w-full mt-auto"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Mail className="h-5 w-5" />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
