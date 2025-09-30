"use client"

import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/component/ContactMe/button";
import { Input } from "@/component/ContactMe/input";
import { GlowCard } from "../GlowCard/spotlight-card";


interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}



export const Contact2 = ({
  title = "Contact Me",
  description = "I am available for questions, feedback, or collaboration opportunities. Let me know how we can help!",
  email = "junctionli16@gmail.com",
}: Contact2Props) => {
  const formRef = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formRef.current) return;

  emailjs
    .sendForm(
      "service_vhimiht",
      "template_s7crucg",
      formRef.current,
      "31W2iXee8Lci24ojO"
    )
    .then(
      () => {
        alert("✅ Message sent successfully!");
        formRef.current?.reset(); 
      },
      (error) => {
        alert("❌ Failed to send message. Please try again later.");
      }
    );
};


  return (
    <section className="py-20 px-4">
      <GlowCard>
      <div className="container">
        <div className="mx-auto flex flex-col lg:flex-row justify-between gap-10 px-3 sm:px-6 md:px-6 lg:px-0 max-w-screen-xl">
           <div className="mx-auto flex w-full max-w-full md:max-w-xl flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl py-8">
                {title}
              </h1>
              <p className="text-muted-foreground text-m py-5">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>

                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>

            </div>
          </div>
          <div className="mx-auto w-full max-w-md flex flex-col gap-6 rounded-lg p-1 sm:p-1">

            <form
                ref={formRef}
                onSubmit={sendEmail}
                className="w-full flex flex-col gap-6"
              >
                <div className="flex w-full flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <label htmlFor="firstname" className="block text-sm font-medium">First Name</label>
                    <Input type="text" id="firstname" name="firstname" placeholder="First Name" />
                  </div>
                  <div className="w-full">
                    <label htmlFor="lastname" className="block text-sm font-medium">Last Name</label>
                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name" />
                  </div>
                </div>

                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="email">Email</label>
                  <Input type="email" id="email" name="email" placeholder="Email" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="subject">Subject</label>
                  <Input type="text" id="subject" name="subject" placeholder="Subject" />
                </div>
                <div className="grid w-full gap-1.5">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Please type your message here."
                    className="min-h-[150px] w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
          </div>
        </div>
      </div>
      </GlowCard>
      
    </section>
  );
};
