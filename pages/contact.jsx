import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Fiverr_Icon from "../components/Fiverr_Icon";
import Footer from "../components/Footer";
import { Modal } from "antd";
import { CONTACTS, MAP_AVTAR, SOCIAL_LINKS } from "../constants/constants";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

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

     if (!userInput.name ||!userInput.email ||!userInput.message) {
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
   
  return (
    <BannerLayout>
      <ToastContainer position="top-right" />
      <div className=" px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            {/* Name section */}
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-9 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">
                  praj81232@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Name:</span>
                <span className="text-LightGray text-sm">Prince Raj</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone:</span>
                <span className="text-LightGray text-sm">+91 8218328333</span>
              </div>
            </div>
            {/* Map section  */}
            <div className="card_stylings relative w-full md:w-1/2 p-5 md:p-2 lg:p-4 flex flex-col gap-y-4">
              <img
                src={MAP_AVTAR}
                alt="map-avatar"
                className="w-12 h-12 rounded-full absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              />
              <iframe
                className="rounded-md w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14029.870181045733!2d77.4860042509886!3d28.465463025757874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea75939040b9%3A0xf80aa08154223323!2sKnowledge%20Park%20II%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin&output=embed&gestureHandling=greedy"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
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
            className="hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1"
            href={SOCIAL_LINKS.TWITTER}
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>

        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Get In Touch</h1>
          <form
            onSubmit={handleSubmit}
            className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm"
          >
            <div>
              <div className="flex flex-col w-full">
                <div className="userIcon relative mb-6">
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
                <div className="mailIcon relative mb-6">
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

              <div className="flex flex-col w-full">
                <div className="textIcon relative mb-6">
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
                    rows={6}
                    cols={50}
                    className="input_stylings no resize-none"
                    placeholder="Message"
                  />
                </div>
              </div>

              <div className="my-4">
                <button type="submit" className="button">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* success modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        // wrapClassName='bg-red-800'
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
      <Footer />
    </BannerLayout>
  );
};

export default Contact;
