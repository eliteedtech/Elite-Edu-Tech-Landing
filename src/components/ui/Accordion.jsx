import { ChevronRight } from "lucide-react";
import { useState } from "react";


export default function Accordion({title , answer, accordionOpen = false}) {
    const [accordionState, setAccordionState] = useState(accordionOpen);
    
    function toggleAccordion () {
        setAccordionState(!accordionState);
    }
  
    return (
      <div
        className="transition-all duration-700 ease-in-out px-2 py-5 md:py-5"
        onClick={toggleAccordion}
      >
        <button className="flex w-full justify-between transition-all items-center duration-700 ease-in-out md:my-3 ">
          <p className="text-xl font-semibold text-left md:text-xl">{title}</p>
          <div className={accordionState ? "rotate-90" : null}>
            <ChevronRight size={"1.25em"} strokeWidth={2.5} color="blue" />
          </div>
        </button>

        {accordionState && (
          <div className="mt-3 md:my-4">
            <p className="text-left text-gray-500">{answer}</p>
          </div>
        )}
      </div>
    );
}
