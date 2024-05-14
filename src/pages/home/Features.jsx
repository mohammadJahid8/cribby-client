import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const Features = () => {
  // State to manage which accordion section is open
  const [openSection, setOpenSection] = useState(null);

  // Function to toggle accordion sections
  const toggleAccordion = (sectionId) => {
    if (openSection === sectionId) {
      setOpenSection(null); // Close the section if it's already open
    } else {
      setOpenSection(sectionId); // Open the clicked section
    }
  };

  // Accordion data
  const accordionData = [
    {
      id: "accordion-collapse-body-1",
      heading: "Dynamic Pricing Tool",
      content:
        "Hosts can use CribbyAI’s dynamic pricing tool that analyzes market data in real-time to suggest optimal pricing strategies, maximizing occupancy and revenue.",
    },
    {
      id: "accordion-collapse-body-2",
      heading: "Custom Itinerary Builder",
      content:
        "Guests can use CribbyAI to create personalized travel itineraries based on interests and location, integrating local attractions, events, and dining options.",
    },
    {
      id: "accordion-collapse-body-3",
      heading: "Smart Lock Integration",
      content:
        "Enable seamless check-in and check-out processes through smart lock technology, which guests can control directly from their smartphones.",
    },
    {
      id: "accordion-collapse-body-4",
      heading: "AI-Powered Safety Monitoring",
      content:
        "Enhance guest safety with CribbyAI’s monitoring system that detects and alerts for any potential security issues during a stay.",
    },
    {
      id: "accordion-collapse-body-5",
      heading: "Sustainability Score",
      content:
        "Properties are rated by their eco-friendliness based on several criteria, and CribbyAI assists hosts in making their spaces more sustainable.",
    },
    {
      id: "accordion-collapse-body-6",
      heading: "AI Chatbot Concierge",
      content:
        "Beyond booking, the CribbyAI can act as a concierge, providing guests with information like weather updates, transportation options, and emergency contacts.",
    },
    {
      id: "accordion-collapse-body-7",
      heading: "Neighborhood Compatibility Score",
      content:
        "CribbyAI analyzes your preferences and lifestyle to match you with neighborhoods that would be most suitable for your stay.",
    },
    {
      id: "accordion-collapse-body-8",
      heading: "Flexible Date Search",
      content:
        "Find the best rates and options with CribbyAI’s flexible date search, which suggests alternative dates for your stay to provide the best value.",
    },
    {
      id: "accordion-collapse-body-9",
      heading: "Interactive Travel Guides",
      content:
        "Access detailed, AI-generated travel guides that adapt to your interests and the length of your stay, packed with up-to-date information curated by local experts.",
    },
    {
      id: "accordion-collapse-body-10",
      heading: "AI-Optimized Route Planning",
      content:
        "Provide guests with the best routes and transportation options for getting to and from the property, considering current traffic and public transport schedules.",
    },
    {
      id: "accordion-collapse-body-11",
      heading: "Personalized Weather Alerts",
      content:
        "Get real-time weather updates and personalized alerts during your stay, helping you plan your activities and travel safely.",
    },
  ];

  return (
    <div className="w-11/12 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-6xl md:leading-[5rem] tracking-wide text-white py-10">
        Cribby's Advanced Features
      </h2>
      {accordionData.map((section, index) => (
        <div key={index}>
          <h2>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border  border-white ${
                index === 0 && "rounded-t-xl"
              } ${
                index === accordionData.length - 1 && !openSection
                  ? "border-b-2 rounded-b-xl"
                  : "border-b-0"
              } hover:bg-gray-100 gap-3`}
              onClick={() => toggleAccordion(section.id)}
              aria-expanded={openSection === section.id}
              aria-controls={section.id}
            >
              <span>{section.heading}</span>
              <MdArrowDropDown />
            </button>
          </h2>
          <div
            id={section.id}
            className={
              openSection === section.id
                ? "p-5 border border-t-0 border-white" +
                  (index === accordionData.length - 1
                    ? " border-b-2 rounded-b-xl"
                    : " border-b-0")
                : "hidden"
            }
          >
            <p className="mb-2 text-white">{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
