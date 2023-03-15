import React, { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import { TriangleRightIcon } from '@radix-ui/react-icons';
import SocialMedia from '../about/socials/SocialMedia'
import Games from '../about/socials/Games'
import Music from '../about/socials/Music'
import CodeShowcase from '../about/CodeShowcase';

export default function HobbiesSideBar() {
    const [active, setActive] = useState(1);

    const values = [
        {
            id: 1,
            name: "social-media",
            svgPath: "M18 2a1 1 0 0 1 1 1v8.529A6 6 0 0 0 9 16c0 3.238 2.76 6 6 6H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm-3 10a4 4 0 0 1 3.446 6.032l2.21 2.21-1.413 1.415-2.211-2.21A4 4 0 1 1 15 12zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
            color: "rgba(201,139,223,1)"
        }
        , {
            id: 2,
            name: "games",
            svgPath: "M12.004 2c-5.25 0-9.556 4.05-9.964 9.197l5.36 2.216c.454-.31 1.002-.492 1.593-.492.053 0 .104.003.157.005l2.384-3.452v-.049c0-2.08 1.69-3.77 3.77-3.77 2.079 0 3.77 1.692 3.77 3.772s-1.692 3.771-3.77 3.771h-.087l-3.397 2.426c0 .043.003.088.003.133 0 1.562-1.262 2.83-2.825 2.83-1.362 0-2.513-.978-2.775-2.273l-3.838-1.589C3.573 18.922 7.427 22 12.005 22c5.522 0 9.998-4.477 9.998-10 0-5.522-4.477-10-9.999-10zM7.078 16.667c.218.452.595.832 1.094 1.041 1.081.45 2.328-.063 2.777-1.145.22-.525.22-1.1.004-1.625-.215-.525-.625-.934-1.147-1.152-.52-.217-1.075-.208-1.565-.025l1.269.525c.797.333 1.174 1.25.84 2.046-.33.797-1.247 1.175-2.044.843l-1.228-.508zm10.74-7.245c0-1.385-1.128-2.512-2.513-2.512-1.387 0-2.512 1.127-2.512 2.512 0 1.388 1.125 2.513 2.512 2.513 1.386 0 2.512-1.125 2.512-2.513zM15.31 7.53c1.04 0 1.888.845 1.888 1.888s-.847 1.888-1.888 1.888c-1.044 0-1.888-.845-1.888-1.888s.845-1.888 1.888-1.888z",
            color: "rgba(77,91,206,1)"
        },
        {
            id: 3,
            name: "music",
            svgPath: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.55 2 12 2zm3.75 14.65c-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85-.2.3-.55.4-.85.2zm1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95 3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1s-.7.5-1.05.25zM6.3 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75z",
            color: "rgba(67,217,173,1)"
        }
    ];

    const handleItemClick = (pageName, itemId) => {
        setActive(itemId);
    };

    let activeComponent;
    switch (active) {
        case 1:
            activeComponent = <SocialMedia />;
            break;
        case 2:
            activeComponent = <Games/>;
            break;
        case 3:
            activeComponent = <Music/>;
            break;
        default:
            activeComponent = null;
    }
    return (
        <div div class="h-full">
            <div class="h-full flex flex-row ...">
                <div class="w-72 h-full h-full border-solid border-r border-lines" id="sidenavExample">
                    <Accordion.Root class="text-white" type="multiple" collapsible defaultValue={["item-1"]}>
                        <Accordion.Item value="item-1">
                            <Accordion.Header class="border-solid border-b border-lines p-2">
                                <Accordion.Trigger className="AccordionTrigger">
                                    <TriangleRightIcon className="AccordionChevron" aria-hidden />
                                    <span class="ml-4">social</span>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="AccordionContent">
                                {values.map((val) => (
                                    <a href="#" onClick={() => setActive(val.id)}>
                                        <span class="icon pr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d={val.svgPath} fill={val.color} /></svg>
                                        </span>
                                        <span class={active === val.id ? "text-white" : "text-secondary-1"}>{val.name}</span>
                                        <br /><br />
                                    </a>
                                ))}
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion.Root>
                </div>
                <div className="h-full w-1/2 border-solid border-r border-lines">{activeComponent}</div>
                <div className="pt-10 pl-4 w-1/2"><CodeShowcase/></div>
            </div>
        </div >
    )
}
