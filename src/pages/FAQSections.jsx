import Accordion from "./Accordion";

export default function FAQSections() {
    return (
      <div className="flex mt-5 flex-col space-y-3 text-center bg-white w-full items-center justify-center md:mx-auto md:w-3xl ">
        <div className="p-3 w-full ">
          <h2 className="text-3xl font-bold text-indigo-800 mb-3 md:text-4xl ">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-14  md:mb-17">
            Find answers to common questions about our platform.
          </p>

          <div className="divide-y-1 divide-zinc-200">
            <Accordion
              title="How does Elite Edu Tech protect student data?"
              accordionOpen={true}
              answer="We take data privacy seriously. All student data is encrypted both in transit and at rest. We comply with FERPA, COPPA, and GDPR regulations. Our platform undergoes regular security audits, and we never sell student data to third parties."
            />
            <Accordion
              title="Can Elite Edu Tech integrate with existing LMS platforms?"
              answer="Yes, our platform is designed to integrate seamlessly with major Learning
                Management Systems including Canvas, Blackboard, Moodle, and Google Classroom. We also offer an API for
                custom integrations with proprietary systems."
            />
            <Accordion
              title="Is training provided for educators and administrators?"
              answer="Absolutely! We provide comprehensive training resources including live webinars,
                on-demand video tutorials, documentation, and personalized onboarding sessions. Our customer success
                team is also available to provide ongoing support and training."
            />
            <Accordion
              title="What devices are compatible with Elite Edu Tech?"
              answer="Our platform works on all modern devices including desktops, laptops, tablets, and
                smartphones. We support the latest versions of Chrome, Firefox, Safari, and Edge browsers. Our mobile
                apps are available for both iOS and Android devices."
            />
            <Accordion
              title="How does the AI Learning Assistant work?"
              answer="Our AI Learning Assistant uses advanced natural language processing and machine
                learning to provide personalized help. It can answer questions, explain concepts, provide practice
                problems, and adapt its teaching style based on your learning patterns. The more you use it, the better
                it becomes at addressing your specific needs."
            />
          </div>
        </div>
        <a
          href="#"
          className=" mt-8 mb-20 md:mt-5 text-indigo-500 font-semibold md:mb-20 md:text-md"
        >
          View all FAQs
        </a>
      </div>
    );
};
