import React from "react";
import { FormField } from "@/utils/FormFields";
import { Input } from "@heroui/react";
import OverviewSettings from "../OverviewSettings/OverviewSettings";

const contactMethods = [
  {
    title: "Email Support",
    detail: "support@vesta.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M3.75 6.75 12 12.75l8.25-6M5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75A2.25 2.25 0 0 1 5.25 4.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Live Chat",
    detail: "Available 9 AM–6 PM (Mon–Fri)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M8 10h8M8 14h5m7-2a8 8 0 0 1-8 8 8.5 8.5 0 0 1-3.5-.75L3 21l1.75-4.5A8.5 8.5 0 0 1 4 13a8 8 0 1 1 16-1Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Phone Support",
    detail: "+1 (555) 123-4567",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M2.25 6.75A3.75 3.75 0 0 1 6 3h1.5l2.25 5.25-2.25 1.5a13.5 13.5 0 0 0 6.75 6.75l1.5-2.25L21 16.5V18a3.75 3.75 0 0 1-3.75 3.75A15 15 0 0 1 2.25 6.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ContactSupport() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">


<div className="mb-16">

<OverviewSettings name="Contact Support"  />
</div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <section className="rounded-2xl text-[#161C36] p-6  shadow-lg sm:p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#EF8B70]">
            We’re here to help
          </p>

          <h1 className="text-2xl font-bold sm:text-3xl">Get in Touch</h1>

          <p className="mt-3 text-[#161C36] max-w-md text-sm leading-6">
            Our support team is here to help with any questions or issues.
            Choose the best way to reach us.
          </p>

          <div className="mt-8 space-y-6">
            {contactMethods.map((method) => (
              <div key={method.title} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#EF8B70]">
                  {method.icon}
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-[#161C36]">{method.title}</h2>
                  <p className="mt-1 text-sm text-[#161C36]">{method.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 
          px-4 py-3 text-sm flex gap-3 ">

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


            We typically respond within 24 hours.
          </div>
        </section>

<section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
  <h2 className="text-base font-semibold text-[#161C36]">
    Send us a message
  </h2>

  <form className="mt-4 space-y-3">
    <div className="space-y-2">
      <label htmlFor="subject" className="block text-xs font-medium text-[#161C36]">
        Subject
      </label>
      <Input
        id="subject"
        name="subject"
        type="text"
        placeholder="How can we help you?"
        className="h-9 w-full rounded-md border border-gray-300 px-3 text-xs outline-none placeholder:text-gray-400 focus:border-[#EF8B70]"
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="category" className="block text-xs font-medium text-[#161C36]">
        Category
      </label>
      <select
        id="category"
        name="category"
        defaultValue=""
        className="h-9 w-full rounded-md border border-gray-300 bg-white px-3 text-xs text-gray-500 outline-none focus:border-[#EF8B70]"
      >
        <option value="" disabled>Select a category</option>
        <option value="returns">Returns</option>
        <option value="refunds">Refunds</option>
        <option value="account">Account</option>
        <option value="billing">Billing</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div className="space-y-2">
      <label htmlFor="message" className="block text-xs font-medium text-[#161C36]">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder="Describe your issue..."
        className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-xs outline-none placeholder:text-gray-400 focus:border-[#EF8B70]"
      />
    </div>

    <div className="flex justify-center pt-1">
      <button
        type="submit"
        className="rounded-xl bg-[#161C36] px-10 py-2 text-xs font-semibold text-white transition hover:bg-[#252d4c]"
      >
        Send Message
      </button>
    </div>
  </form>
</section>
       
      </div>
    </main>
  );
}