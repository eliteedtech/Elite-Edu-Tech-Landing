
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function Getintouch() {
  return (
    <div className="bg-indigo-600 py-4 px-4">
      <h1 className="text-white text-xl font-semibold text-center mb-1">
        Get in Touch
      </h1>
      <p className="text-white text-sm text-center mb-6">
        Have questions or ready to transform your school? Reach out to us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-2 gap-y-3 px-15 justify-center">
       
        <div className="">
          <p className="text-white  font-semibold text-2xlg mb-2  ">Contact Information</p>
          <div className="space-y-2 text-sm lg:grid-cols-1 sm:grid-cols-2 grid grid-cols-1">
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
          <p className="text-white  font-semibold  text-2xlg mb-2">Send Us a Message</p>
          <form className="space-y-2 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input label="Full Name" type="text" name="fullname" placeholder="Your name" />
              <Input label="Email" type="email" name="email" placeholder="Your email" />
            </div>
            <Input label="Phone" type="number" name="phone" placeholder="Phone number" />
            <Input label="School Name" type="text" name="schoolname" placeholder="Your school Name" />
            <Textarea label="Message" name="message" placeholder="How can we help you?" />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="check" className="h-3 w-3" />
              <label htmlFor="check" className="text-white text-xs">I agree</label>
            </div>
            <button type="submit" className="w-full py-1.5 text-sm border border-white text-white rounded">
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
    <div className="flex items-start gap-2 text-white">
      <div className="text-indigo-300 mt-0.5">{icon}</div>
      <div>
        { <p className="font-medium text-xs mb-0.5">{title}</p>}
        <p className="text-xs">{children}</p>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-white text-xs block mb-0.5">{label}</label>
      <input
        {...props}
        className="w-full px-2 py-1 border border-white bg-transparent text-white placeholder-white rounded focus:outline-none text-xs"
      />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="text-white text-xs block mb-0.5">{label}</label>
      <textarea
        {...props}
        rows={3}
        className="w-full px-2 py-1 border border-white bg-transparent text-white placeholder-white rounded focus:outline-none text-xs"
      />
    </div>
  );
}

export default Getintouch;
