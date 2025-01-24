import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { Tilt } from "react-tilt";

function Contact() {
  const contactData = [
    {
      platform: "GitHub",
      description: "Check out my code repositories and contributions",
      icon: <FaGithub className="text-3xl mb-2" />,
      link: "https://github.com/ManOnTheMoonXIX",
    },
    {
      platform: "LinkedIn",
      description: "Connect with me professionally",
      icon: <FaLinkedin className="text-3xl mb-2" />,
      link: "https://linkedin.com/in/justin-alder",
    },
    {
      platform: "Email",
      description: "Send me an email (justinalder02@gmail.com)",
      icon: <MdOutlineMailOutline className="text-3xl mb-2" />,
      link: "mailto:justinalder02@gmail.com",
    },
    {
      platform: "Instagram",
      description: "Follow me",
      icon: <FaInstagram className="text-3xl mb-2" />,
      link: "https://www.instagram.com/ManOnTheMoonXIX/",
    },
  ];

  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

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
        setStatus("success");
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      });
  };

  const statusMessages = {
    loading: "Sending...",
    success: "Message sent successfully!",
    error: "Failed to send message. Please try again.",
  };

  const getStatusColor = (status) => {
    const colors = {
      success: "text-green-400",
      error: "text-red-400",
      loading: "text-gray-400",
    };
    return colors[status] || "";
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 text-white">
      <h2 className="text-2xl mt-14 md:text-4xl font-bold mb-4 text-center">
        Let's Keep This Conversation Going
      </h2>

      <div className="flex flex-col md:flex-row intersect-once intersect:motion-preset-slide-up">
        <div className="w-full md:w-1/3 p-4">
          {contactData.map((contact, index) => (
            <Tilt
              key={index}
              options={{
                max: 25,
                scale: 1.05,
                speed: 1000,
                transition: true,
                reverse: true,
              }}
            >
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 md:p-6 mb-4 flex flex-col bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transition-transform duration-300 cursor-pointer"
              >
                {contact.icon}
                <h3 className="text-lg font-semibold">{contact.platform}</h3>
                <p className="text-gray-300 text-sm md:text-md leading-tight py-1">
                  {contact.description}
                </p>
              </a>
            </Tilt>
          ))}
        </div>

        <div className="w-full md:w-2/3 p-4 intersect:motion-preset-slide-up">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="p-3 md:p-6 flex flex-col bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl h-[calc(100%-2rem)]"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="bg-transparent border border-gray-600 rounded-lg p-2 mb-4 w-full text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="bg-transparent border border-gray-600 rounded-lg p-2 mb-4 w-full text-white placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-transparent border border-gray-600 rounded-lg p-2 mb-4 w-full flex-grow text-white placeholder-gray-400"
            />
            {status && (
              <div className={`mb-4 text-center ${getStatusColor(status)}`}>
                {statusMessages[status]}
              </div>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="text-sm md:text-lg border-[#66FCF1] border-solid rounded-md border-2 px-5 py-2 bg-[rgba(0,0,0,0.6)] backdrop-blur-md relative font-bold overflow-hidden text-white hover:text-black transition-all duration-500 flex items-center justify-center before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-green-400 before:to-[#66FCF1] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {status === "loading" ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
