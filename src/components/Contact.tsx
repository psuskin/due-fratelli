"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, MapPin, Phone } from "lucide-react";
import Button from "./Button";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl font-normal text-stone-100 uppercase tracking-wider"
          >
            Kontakt
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-amber-600 font-normal -mt-12 md:-mt-16 relative z-10"
          >
            Sie haben Post für uns?
          </motion.p>
        </motion.div>

        {/* Minimal Contact Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-stone-500 mb-2"
                  >
                    Name
                  </label>
                  <div className="flex items-center border-b-2 border-stone-200 focus-within:border-amber-500 transition-colors duration-200 py-2">
                    <User className="h-5 w-5 text-stone-400 mr-3" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="block w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-stone-800"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-stone-500 mb-2"
                  >
                    Email
                  </label>
                  <div className="flex items-center border-b-2 border-stone-200 focus-within:border-amber-500 transition-colors duration-200 py-2">
                    <Mail className="h-5 w-5 text-stone-400 mr-3" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="block w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-stone-800"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-stone-500 mb-2"
                  >
                    Nachricht
                  </label>
                  <div className="flex border-b-2 border-stone-200 focus-within:border-amber-500 transition-colors duration-200 py-2">
                    <MessageSquare className="h-5 w-5 text-stone-400 mr-3 flex-shrink-0 mt-1" />
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="block w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-stone-800 resize-none"
                      placeholder="Ihre Nachricht..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  {isSubmitted ? (
                    <div className="text-green-600 font-medium flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Nachricht gesendet!
                    </div>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          Senden...
                        </>
                      ) : (
                        <>Nachricht senden</>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Right Side - Map and Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Map */}
              <div className="h-64 mb-8 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2361.0557592755544!2d10.870227776677668!3d53.95805297246455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2590748c2597f%3A0x90008e2b8c771f14!2sDue%20Fratelli!5e0!3m2!1sen!2sde!4v1709913047473!5m2!1sen!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-amber-600 mr-3" />
                  <span>Vorderreihe 1A, Travemünde</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-amber-600 mr-3" />
                  <span>04502 3640</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-amber-600 mr-3" />
                  <span>info@duefratelli.com</span>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-8 pt-6 border-t border-stone-100">
                <h3 className="text-lg font-normal text-amber-600 mb-4">
                  Öffnungszeiten
                </h3>
                <div className="grid grid-cols-2 gap-y-2">
                  <div className="text-stone-600">Montag - Freitag</div>
                  <div className="text-stone-800">12 - 10 pm</div>

                  <div className="text-stone-600">Samstag - Sonntag</div>
                  <div className="text-stone-800">12 - 10 pm</div>

                  <div className="text-stone-600">Mittwoch</div>
                  <div className="text-amber-600 font-medium">Ruhetag</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
