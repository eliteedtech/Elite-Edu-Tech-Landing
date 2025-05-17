import React from "react";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

function Getintouch() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  })
  return (
    <div className="bg-[#00356B] dark:bg-[#A51C30] py-8 px-4" data-aos="fade-right">
      <div className="mb-10 text-center">
        <h1 className="text-white dark:text-white text-3xl md:text-4xl font-bold text-center mb-4">
          Get in Touch
        </h1>
        <p className="text-white dark:text-white text-center ">
          Have questions or ready to transform your school? Reach out to us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-2 gap-y-3 px-15 justify-center">

        <div className="">
          <p className="text-white dark:text-[#A51C30] font-bold  text-2xlg mb-6">Contact Information</p>
          <div className="space-y-4 text-sm lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-2 grid grid-cols-1">
            <ContactItem icon={<MapPin />} title="Address">
              Plot 25, Tech Hub Avenue<br />
              Kano State, Nigeria
            </ContactItem>
            <ContactItem icon={<Phone />} title="Phone">
              +234 8012345678<br />
              +234 9087654321
            </ContactItem>
            <ContactItem icon={<Mail />} title="Email">
              info@eliteedtech.com<br />
              support@eliteedtech.com
            </ContactItem>
            <ContactItem icon={<Clock />} title="Hours">
              Mon-Fri: 8am-5pm<br />
              Sat: 9am-1pm
            </ContactItem>
          </div>
        </div>


        <div>
          <p className="text-white dark:text-[#A51C30] font-bold  text-2xlg mb-6">Send Us a Message</p>
          <form className="space-y-2 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input label="Full Name" type="text" name="fullname" placeholder="Your name" />
              <Input label="Email" type="email" name="email" placeholder="Your email" />
            </div>
            <Input label="Phone" type="number" name="phone" placeholder="Phone number" />
            <Input label="School Name" type="text" name="schoolname" placeholder="Your school Name" />
            <Textarea label="Message" name="message" placeholder="How can we help you?" />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="check" className="h-3 w-3 rounded text-[#A51C30] dark:text-[#00356B]" />
              <label htmlFor="check" className="text-white dark:text-white text-xs">I agree</label>
            </div>
            <button type="submit" className="w-full py-2 text-sm bg-[#A51C30] dark:bg-[#00356B] text-white rounded-lg hover:bg-[#00356B] dark:hover:bg-[#A51C30]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, children }) {
  return (
    <div className="flex items-start gap-2 text-white dark:text-white">
      <div className="text-[#A51C30] dark:text-[#00356B] mt-0.5">{icon}</div>
      <div>
        <p className=" text-lg font-medium text-white dark:text-white mb-0.5">{title}</p>
        <p className=" text-lg text-white dark:text-white">{children}</p>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-white dark:text-white text-sm font-medium block mb-0.5">{label}</label>
      <input
        {...props}
        className="w-full px-2 py-3 border border-[#A51C30] dark:border-[#00356B] focus:border-[#A51C30] dark:focus:border-[#00356B] focus:ring-[#A51C30] focus:outline-none text-white dark:text-white placeholder-white dark:placeholder-white rounded-xl focus:outline-none text-xs"
      />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="text-white text-sm font-medium block mb-0.5">{label}</label>
      <textarea
        {...props}
        rows={4}
        className="w-full px-2 py-3 border border-[#A51C30] dark:border-[#00356B] focus:border-[#A51C30] dark:focus:border-[#00356B] focus:ring-[#A51C30] focus:outline-none text-white dark:text-white placeholder-white dark:placeholder-white rounded-xl focus:outline-none text-xs"
      />
    </div>
  );
}

export default Getintouch;
