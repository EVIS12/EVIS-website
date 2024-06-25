'use client';

import { FAQ } from 'CPD';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

type Props = {
  FAQs: FAQ[];
};

export default function FAQsAccordion({ FAQs }: Props) {
  return (
    <section className="section-pad bg-second-color" id="faqs">
      <div className="container">
        <h2 className="title !text-start">FAQs</h2>
        <Accordion className="mt-12 " allowZeroExpanded>
          <ul className="faqs list-disc">
            {FAQs?.map(({ question, answer, id }) => (
              <li key={id}>
                <AccordionItem className="bg-transparent py-6 border-b-[1px] border-light-gray">
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordion__button !bg-transparent !p-0 font-bold relative before:absolute before:right-0 before:top-0 before:translate-y-1/2 before:!border-main-color before:transition-all before:!-rotate-[225deg]">
                      {question}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-0 py-4 transition-all">
                    <p>{answer}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </li>
            ))}
          </ul>
        </Accordion>
      </div>
    </section>
  );
}
