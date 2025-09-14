import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Footer from "../components/Footer";
import { Modal } from "antd";
import { CONTACTS, MAP_AVTAR, SOCIAL_LINKS } from "../constants/constants";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

import { FaQuestionCircle, FaQuestion } from "react-icons/fa";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { BsQuestionCircleFill } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    if (!userInput.name || !userInput.email || !userInput.message) {
      toast.error("All fields are required!");
      return;
    }

    console.log(userInput);
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        message: userInput.message,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
        window.scrollTo(0, 0);
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What's your typical response time?",
      answer:
        "I generally respond within 12–24 hours on weekdays. For active projects or urgent tasks, I prioritize communication and usually reply within a few hours.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "My core expertise lies in the MERN Stack (MongoDB, Express.js, React.js, Node.js) along with Next.js, Tailwind CSS, and TypeScript. I also work with Docker, GitHub Actions, REST & GraphQL APIs, and have experience integrating third-party services.",
    },
    {
      question: "Do you work on small projects?",
      answer:
        "Absolutely. I handle projects of all scales — from fixing critical bugs to building production-ready full-stack applications and deploying them to the cloud.",
    },
    {
      question: "What's your development process?",
      answer:
        "I follow agile and industry-standard practices: requirement analysis, system design, coding, testing, and deployment. I ensure CI/CD pipelines, maintain version control, and host applications on cloud platforms for smooth scalability and reliability.",
    },
    {
      question: "Do you handle deployment and hosting?",
      answer:
        "Yes. I set up and manage deployments on cloud providers like AWS, Vercel, and Netlify. I configure servers, optimize performance, and ensure applications run securely and reliably in production.",
    },
  ];

  return (
    <div className="Contact-Page h-full flex flex-col">
      <ToastContainer position="top-right" />

      {/* Scrollable content */}
      <div className="flex-1 overflow-auto no-scrollbar">
        <BannerLayout>
          <div className="px-4 py-2">
            {/* Main Layout Container */}
            <div className="my-6 flex flex-col lg:flex-row gap-6">
              {/* LEFT SIDE - Contact Form */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="text-Snow mb-6">
                  <h1 className="text-lg font-bold">Get In Touch</h1>
                </div>
                <div className="flex-1 flex flex-col">
                  <form
                    onSubmit={handleSubmit}
                    className="flex-1 pt-8 pb-4 px-8 bg-EveningBlack rounded-xl text-sm flex flex-col"
                  >
                    <div className="flex-1 flex flex-col justify-center gap-6">
                      <div className="flex flex-col w-full">
                        <div className="userIcon relative">
                          <div
                            id="icon"
                            className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                          >
                            <HiUser />
                          </div>
                          <input
                            type="text"
                            name="name"
                            required
                            value={userInput.name}
                            onChange={handleChange}
                            className="input_stylings"
                            placeholder="Name"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col w-full">
                        <div className="mailIcon relative">
                          <div
                            id="icon"
                            className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                          >
                            <HiMail />
                          </div>
                          <input
                            type="text"
                            name="email"
                            required
                            value={userInput.email}
                            onChange={handleChange}
                            className="input_stylings"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col w-full flex-1">
                        <div className="textIcon relative h-full">
                          <div
                            id="icon"
                            className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                          >
                            <BsChatTextFill />
                          </div>
                          <textarea
                            name="message"
                            required
                            value={userInput.message}
                            onChange={handleChange}
                            className="input_stylings resize-none h-32 lg:h-full min-h-[120px]"
                            placeholder="Message"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button type="submit" className="button w-full">
                        SEND MESSAGE
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* RIGHT SIDE - Social Links, Contact Info, Location */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4 mt-[51px]">
                {/* TOP - Social Links */}
                <div className="h-14 w-full card_stylings text-xl sm:text-2xl flex gap-x-6 sm:gap-x-8 items-center justify-center text-Snow">
                  <Link
                    className="hover:scale-125 ease-in-out duration-700"
                    href={`mailto:${CONTACTS.EMAIL}`}
                  >
                    <HiMail />
                  </Link>
                  <a
                    className="hover:scale-125 ease-in-out duration-700"
                    href={SOCIAL_LINKS.GITHUB}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="hover:scale-125 ease-in-out duration-700"
                    href={SOCIAL_LINKS.LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="hover:scale-125 ease-in-out duration-700 text-xl sm:text-2xl"
                    href={SOCIAL_LINKS.TWITTER}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </div>

                {/* MIDDLE - Contact Information */}
                <div className="card_stylings rounded-xl p-4 md:p-5  flex flex-col gap-y-5 text-xs">
                  <div className="flex justify-between items-center text-Snow">
                    <span>Name:</span>
                    <span className="text-LightGray">Prince Raj</span>
                  </div>

                  <div className="flex justify-between items-center text-Snow">
                    <span>Email:</span>
                    <span className="text-LightGray">praj81232@gmail.com</span>
                  </div>

                  <div className="flex justify-between items-center text-Snow">
                    <span>Phone:</span>
                    <span className="text-LightGray">+91 8218328333</span>
                  </div>
                </div>

                {/* BOTTOM - Location Map */}
                <div className="card_stylings relative p-3 md:p-4 flex flex-col">
                  <h2 className="text-base font-bold text-Snow mb-3">
                    Location
                  </h2>
                  <div className="relative h-40">
                    <Image
                      width={48}
                      height={48}
                      src={MAP_AVTAR}
                      alt="map-avatar"
                      className="w-12 h-12 rounded-full absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    />
                    <iframe
                      className="rounded-md w-full h-full"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14029.870181045733!2d77.4860042509886!3d28.465463025757874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea75939040b9%3A0xf80aa08154223323!2sKnowledge%20Park%20II%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin&output=embed&gestureHandling=greedy"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER PART  */}
            <div className="pt-6">
              <div className="card_stylings rounded-xl p-6">
                <h3 className="text-Snow text-xl font-bold mb-6 text-center flex items-center justify-center gap-3">
                  Frequently Asked Questions
                  <AiOutlineQuestionCircle className="text-Green text-2xl animate-pulse" />
                </h3>
                <div className="space-y-2">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-700 last:border-b-0"
                    >
                      <button
                        onClick={() =>
                          setOpenFaq(openFaq === index ? null : index)
                        }
                        className="w-full text-left py-4 flex justify-between items-center hover:text-Green transition-colors"
                      >
                        <span className="text-Snow font-medium">
                          {faq.question}
                        </span>
                        <span
                          className={`text-Green transform transition-transform ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>
                      {openFaq === index && (
                        <div className="pb-4 text-LightGray text-sm">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BannerLayout>
      </div>

      {/* Fixed footer at bottom */}
      <Footer />

      {/* Success Modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl">In Progress</h1>
          <a
            className="underline text-Snow"
            target="_blank"
            href="https://github.com/Prince Raj/portfolio"
          >
            Be the one to integrate this!
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
