


import React from "react";
import Select from "../Select/Select";
import OverviewSettings from "../OverviewSettings/OverviewSettings";

export default function Faqs() {
  const categories = [
    "All",
    "Returns",
    "Refunds",
    "Reports",
    "Account",
    "Integrations",
    "Billing",
  ];

  return (
<div className="container mx-auto py-10  ">

<OverviewSettings name="FAQs"   />



    <main className="min-h-screen    px-6 py-5 text-[#161c36]">
    
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[124px_minmax(0,1fr)] md:gap-14">
      
        <aside>
          <h2 className="mb-4 text-sm font-bold">Categories</h2>

<div className="flex flex-col gap-6">
  {categories.map((category) => (
    <button
      key={category}
      type="button"
      className={`w-full rounded px-3 py-2 text-xs font-medium transition ${
        category === "All"
          ? "border border-[#ffd4cc] bg-[#fff5f2] text-[#f2765f]"
          : "border border-transparent bg-transparent text-[#161c36] hover:bg-gray-50"
      }`}
    >
      {category}
    </button>
  ))}
</div>
          
        </aside>

        <section className="border-t border-gray-200 pt-6 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <h2 className="mb-5 text-sm font-bold">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-6 w-full">
            <Select  data="How do I process a return?" />
            <Select data="How long does a refund take?" />
            <Select data="How can I track my return rate?" />
            <Select data="Can I export my return data?" />
            <Select data="How do I manage user permissions?" />
            <Select data="How do integrations work?" />
          </div>

          <p className="mt-16 text-xs font-semibold">
            Still have questions?
            <br />
            <span className="font-normal text-gray-400">
              Contact our{" "}
              <a
                href="/contactSupport"
                className="text-[#f2765f] hover:underline"
              >
                support team
              </a>
            </span>
          </p>
        </section>
      </div>
    </main>
</div>


  );
}



