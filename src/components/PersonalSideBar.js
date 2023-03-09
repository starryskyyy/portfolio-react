import React, { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import { TriangleRightIcon } from '@radix-ui/react-icons';

export default function PersonalSideBar() {
    const [active, setActive] = useState(1);

    const values = [
        {
            id: 1,
            name: "about",
            svgPath: "M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-4 5h8a4 4 0 1 0-8 0z",
            color: "rgba(233,146,135,1)"
        }
        , {
            id: 2,
            name: "interests",
            svgPath: "M17.363 11.045c1.404-1.393 3.68-1.393 5.084 0 1.404 1.394 1.404 3.654 0 5.047L17 21.5l-5.447-5.408c-1.404-1.393-1.404-3.653 0-5.047 1.404-1.393 3.68-1.393 5.084 0l.363.36.363-.36zm1.88-6.288c.94.943 1.503 2.118 1.689 3.338-1.333-.248-2.739-.01-3.932.713-2.15-1.303-4.994-1.03-6.856.818-2.131 2.115-2.19 5.515-.178 7.701l.178.185 2.421 2.404L11 21.485 2.52 12.993C.417 10.637.496 7.019 2.757 4.757c2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z",
            color: "rgba(201,139,223,1)"
        },
        {
            id: 3,
            name: "education",
            svgPath: "M22 8v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7h19a1 1 0 0 1 1 1zm-9.586-3H2V4a1 1 0 0 1 1-1h7.414l2 2z",
            color: "rgba(67,217,173,1)"
        },
    ];


    return (
        /*
        <div class="w-60 h-full " id="sidenavExample">
            <Accordion.Root class="text-white" type="multiple" collapsible defaultValue={["item-1"]}>
                <Accordion.Item value="item-1">
                    <Accordion.Header class="border-solid border-b border-lines p-2">
                        <Accordion.Trigger className="AccordionTrigger">
                            <TriangleRightIcon className="AccordionChevron" aria-hidden />
                            <span class="ml-4">personal-info</span>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        {values.map((val) => (
                            <a href="#" onClick={() => setActive(val.id)}>
                                <span class="icon pr-2">
                                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d={val.svgPath} fill={val.color} /></svg>
                                </span>
                                <span  class={active === val.id ? "text-white" : "text-secondary-1"}>{val.name}</span>
                                <br/><br/>
                            </a>
                        ))}
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-2">
                    <Accordion.Header class="border-solid border-y border-lines p-2">
                        <Accordion.Trigger className="AccordionTrigger">
                            <TriangleRightIcon className="AccordionChevron" aria-hidden />
                            <span class="ml-4">contacts</span>

                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent" class="py-6 pl-3">
                        <span>
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" fill="rgba(96,123,150,1)" /></svg>
                            </span>
                            <span class="text-sm pl-2 text-secondary-1">vygovskaia.e@gmail.com</span>
                        </span>
                        <br />
                        <span class="mt-6">
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" fill="rgba(96,123,150,1)" /></svg>
                            </span>
                            <span class="text-sm pl-2 text-secondary-1">+1 905 226-95-25</span>
                        </span>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </div>
        */
        <div div class="h-full">
            <div class="h-full flex flex-row ...">
            <div class="w-60 h-full border-solid border-r border-lines" id="sidenavExample">
            <Accordion.Root class="text-white" type="multiple" collapsible defaultValue={["item-1"]}>
                <Accordion.Item value="item-1">
                    <Accordion.Header class="border-solid border-b border-lines p-2">
                        <Accordion.Trigger className="AccordionTrigger">
                            <TriangleRightIcon className="AccordionChevron" aria-hidden />
                            <span class="ml-4">personal-info</span>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent">
                        {values.map((val) => (
                            <a href="#" onClick={() => setActive(val.id)}>
                                <span class="icon pr-2">
                                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d={val.svgPath} fill={val.color} /></svg>
                                </span>
                                <span  class={active === val.id ? "text-white" : "text-secondary-1"}>{val.name}</span>
                                <br/><br/>
                            </a>
                        ))}
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-2">
                    <Accordion.Header class="border-solid border-y border-lines p-2">
                        <Accordion.Trigger className="AccordionTrigger">
                            <TriangleRightIcon className="AccordionChevron" aria-hidden />
                            <span class="ml-4">contacts</span>

                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="AccordionContent" class="py-6 pl-3">
                        <span>
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" fill="rgba(96,123,150,1)" /></svg>
                            </span>
                            <span class="text-sm pl-2 text-secondary-1">vygovskaia.e@gmail.com</span>
                        </span>
                        <br />
                        <span class="mt-6">
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" fill="rgba(96,123,150,1)" /></svg>
                            </span>
                            <span class="text-sm pl-2 text-secondary-1">+1 905 226-95-25</span>
                        </span>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </div>
                <div className="p-10 h-full w-45% border-solid border-r border-lines">02</div>
                <div className="p-10">03</div>
            </div>
        </div>
    )
}
