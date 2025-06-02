"use client";

import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Getintouch() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    schoolname: "",
    message: "",
    agreed: false,
  });
  const [formStatus, setFormStatus] = useState({
    status: "idle", // idle, loading, success, error
    message: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (!formData.agreed) newErrors.agreed = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus({ status: "loading", message: "" });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real implementation, you would send the email here
      // Example:
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      // if (!response.ok) throw new Error('Failed to send message')

      setFormStatus({
        status: "success",
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        schoolname: "",
        message: "",
        agreed: false,
      });
    } catch (error) {
      setFormStatus({
        status: "error",
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {/* <div className="bg-gradient-to-r from-[#00356B] to-[#A51C30] py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">Get in Touch</h1>
          </div>
        </div>
      </div> */}

      {/* Contact Form Section */}
      <div className="flex-grow bg-gray-50 dark:bg-gray-900 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-[#00356B] to-[#A51C30] p-8 md:p-12 text-white">
                <div data-aos="fade-right">
                  <h2 className="text-2xl font-bold mb-8">
                    Contact Information
                  </h2>

                  <div className="space-y-8">
                    <ContactItem icon={<MapPin />} title="Our Location">
                      Floor 1, African Alliance Building, No 1 Sani Abacha Way
                      <br />
                      Kano State, Nigeria
                    </ContactItem>

                    <ContactItem icon={<Phone />} title="Call Us">
                      +234 703 538 4184
                      <br />
                      {/* +234 703 538 4184 */}
                    </ContactItem>

                    <ContactItem icon={<Mail />} title="Email Us">
                      info@eliteedtech.com
                      <br />
                      {/* admin@elscholar.ng */}
                      eliteedutech1@gmail.com
                    </ContactItem>

                    <ContactItem icon={<Clock />} title="Working Hours">
                      Monday - Friday: 8am - 5pm
                      <br />
                      {/* Saturday: 9am - 1pm */}
                    </ContactItem>
                  </div>

                  <div className="mt-12">
                    <h3 className="font-semibold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <SocialButton icon="facebook" />
                      <SocialButton icon="twitter" />
                      <SocialButton icon="instagram" />
                      <SocialButton icon="linkedin" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 md:p-12">
                <div data-aos="fade-left">
                  <h2 className="text-2xl font-bold text-[#00356B] dark:text-[#A51C30] mb-6">
                    Send Us a Message
                  </h2>

                  {formStatus.status === "success" ? (
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-green-700 dark:text-green-300">
                        {formStatus.message}
                      </p>
                      <button
                        onClick={() =>
                          setFormStatus({ status: "idle", message: "" })
                        }
                        className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {formStatus.status === "error" && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 flex items-start">
                          <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                          <p className="text-red-700 dark:text-red-300">
                            {formStatus.message}
                          </p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          label="Full Name"
                          type="text"
                          name="fullname"
                          placeholder="Your name"
                          value={formData.fullname}
                          onChange={handleChange}
                          error={errors.fullname}
                        />

                        <Input
                          label="Email"
                          type="email"
                          name="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleChange}
                          error={errors.email}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          label="Phone"
                          type="tel"
                          name="phone"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          error={errors.phone}
                        />

                        <Input
                          label="School Name"
                          type="text"
                          name="schoolname"
                          placeholder="Your school name (optional)"
                          value={formData.schoolname}
                          onChange={handleChange}
                        />
                      </div>

                      <Textarea
                        label="Message"
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        error={errors.message}
                      />

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="agreed"
                            name="agreed"
                            type="checkbox"
                            checked={formData.agreed}
                            onChange={handleChange}
                            className="h-4 w-4 rounded text-[#A51C30] dark:text-[#00356B] focus:ring-[#A51C30] dark:focus:ring-[#00356B]"
                          />
                        </div>
                        <div className="ml-3">
                          <label
                            htmlFor="agreed"
                            className="text-sm text-gray-600 dark:text-gray-400"
                          >
                            I agree to the{" "}
                            <a
                              href="/terms"
                              className="text-[#A51C30] dark:text-[#00356B] hover:underline"
                            >
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                              href="/privacy"
                              className="text-[#A51C30] dark:text-[#00356B] hover:underline"
                            >
                              Privacy Policy
                            </a>
                          </label>
                          {errors.agreed && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.agreed}
                            </p>
                          )}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus.status === "loading"}
                        className="w-full py-3 bg-gradient-to-r from-[#A51C30] to-[#00356B] hover:from-[#00356B] hover:to-[#A51C30] text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                      >
                        {formStatus.status === "loading" ? (
                          <>
                            <Loader className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          {/* <div className="mt-16" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-[#00356B] dark:text-[#A51C30] mb-6 text-center">Find Us</h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-[400px]">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Map will be displayed here. Integrate with Google Maps or other map service.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-white/10 p-3 rounded-full">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-white/80">{children}</p>
      </div>
    </div>
  );
}

function SocialButton({ icon }) {
  const getIcon = () => {
    switch (icon) {
      case "facebook":
        return <FaFacebook />;
      case "twitter":
        return <FaTwitter />;
      case "instagram":
        return <FaInstagram />;
      case "linkedin":
        return <FaLinkedin />;
      default:
        return null;
    }
  };

  return (
    <a
      href={`#${icon}`}
      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
    >
      {getIcon()}
    </a>
  );
}

function Input({ label, error, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
          error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
        } rounded-lg focus:ring-2 focus:ring-[#A51C30] dark:focus:ring-[#00356B] focus:border-[#A51C30] dark:focus:border-[#00356B] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function Textarea({ label, error, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <textarea
        {...props}
        rows={4}
        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
          error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
        } rounded-lg focus:ring-2 focus:ring-[#A51C30] dark:focus:ring-[#00356B] focus:border-[#A51C30] dark:focus:border-[#00356B] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default Getintouch;
