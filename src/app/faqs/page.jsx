import React from "react";
import Container from "@/components/layout/Container";
import { items } from "./data.js";

const getData = () => {
  const data = items["faqs"];

  if (data) {
    return data;
  }

  return notFound();
};

const Faqs = () => {
  const data = getData();
  return (
    <>
      <Container>
        <div className="max-w-screen-xl mx-auto px-5 bg-transparent min-h-sceen">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-5xl text-white mt-5 tracking-tight">
              FAQs
            </h2>
            <p className="text-white text-xl mt-3">Frequenty asked questions</p>
          </div>
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            {data.map((item) => (
              <div key={item.id} className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center text-white font-medium cursor-pointer list-none">
                    <span> {item.quest}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-white mt-3 group-open:animate-fadeIn">
                    {item.answe}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Faqs;
