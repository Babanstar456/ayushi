import React from "react";
import Link from "next/link";
import ContactItem from "@/components/side-bar/contact-item";
import { LuGithub, LuLinkedin, LuMail, LuMapPin, LuPhone } from "react-icons/lu";

import "@/styles/side-bar/contact-list.css";

function ContactsList() {
  return (
    <ul className="contacts-list">
      <ContactItem icon={LuMapPin} title="Location">
        <address className="text-white-2 text-sm font-light">Kolkata, India</address>
      </ContactItem>

      <ContactItem icon={LuMail} title="Email">
        <Link
          href="mailto:ayushikundu5@gmail.com"
          className="block text-white-2 text-sm font-light custom-lg:truncate"
          target="_blank"
          rel="noopener noreferrer"
        >
          ayushikundu5@gmail.com
        </Link>
      </ContactItem>

      <ContactItem icon={LuPhone} title="Phone">
        <Link
          href="tel:+918100532886"
          className="block text-white-2 text-sm font-light custom-lg:truncate"
          target="_blank"
          rel="noopener noreferrer"
        >
          +91 8100532886
        </Link>
      </ContactItem>

      <ContactItem icon={LuGithub} title="Github">
        <Link
          href="https://github.com/ayushikundu5"
          className="contact-link block text-white-2 text-sm font-light custom-lg:truncate"
          target="_blank"
          rel="noopener noreferrer"
        >
          ayushikundu5
        </Link>
      </ContactItem>

      <ContactItem icon={LuLinkedin} title="LinkedIn">
        <Link
          href="https://www.linkedin.com/in/ayushikundu"
          className="contact-link block text-white-2 text-sm font-light custom-lg:truncate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ayushi Kundu
        </Link>
      </ContactItem>
    </ul>
  );
};

export default ContactsList;
