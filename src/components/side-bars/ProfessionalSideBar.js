import React, { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import { TriangleRightIcon } from '@radix-ui/react-icons';
import Development from '../about/professional-info/Development';


export default function ProfessionalSideBar() {
    const [active, setActive] = useState(1);

    const values = [
        {
            id: 1,
            name: "development",
            svgPath: "M6.382 3.968A8.962 8.962 0 0 1 12 2c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453A8.962 8.962 0 0 1 21 11v1H3v-1c0-2.125.736-4.078 1.968-5.618L3.515 3.93l1.414-1.414 1.453 1.453zM3 14h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7zm6-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
            color: "rgba(67,217,173,1)"
        }
        , {
            id: 2,
            name: "skills",
            svgPath: "M7.05 13.406l3.534 3.536-1.413 1.414 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 1.413-1.414zM3 3l3.546.003 11.817 11.818 1.415-1.414 1.414 1.414-2.474 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.475 2.475-1.414-1.414 1.414-1.415L3.003 6.531 3 3zm14.457 0L21 3.003l.002 3.523-4.053 4.052-3.536-3.535L17.457 3z",
            color: "rgba(77,91,206,1)"
        },
        {
            id: 3,
            name: "certificates",
            svgPath: "M3 8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8zm7-4.5L4.5 9H10V3.5z",
            color: "rgba(233,146,135,1)"
        },
        {
            id: 4,
            name: "resume",
            svgPath: "M16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm1.657 10L14.12 8.464 12.707 9.88 14.828 12l-2.12 2.121 1.413 1.415L17.657 12zM6.343 12l3.536 3.536 1.414-1.415L9.172 12l2.12-2.121L9.88 8.464 6.343 12z",
            color: "rgba(201,139,223,1)"
        }
    ];
    const handleItemClick = (pageName, itemId) => {
        setActive(itemId);
    };

    let activeComponent;
    switch (active) {
        case 1:
            activeComponent = <Development/>;
            break;
        case 2:
            activeComponent = null;
            break;
        case 3:
            activeComponent = null;
            break;
        default:
            activeComponent = null;
    }

    return (
        <div div class="h-full">
            <div class="h-full flex flex-row ...">
                <div class="w-60 h-full border-solid border-r border-lines" id="sidenavExample">
                    <Accordion.Root class="text-white" type="multiple" collapsible defaultValue={["item-1"]}>
                        <Accordion.Item value="item-1">
                            <Accordion.Header class="border-solid border-b border-lines p-2">
                                <Accordion.Trigger className="AccordionTrigger">
                                    <TriangleRightIcon className="AccordionChevron" aria-hidden />
                                    <span class="ml-4">professional-info</span>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="AccordionContent">
                                {values.map((val) => (
                                    <a href="#" onClick={() => handleItemClick(val.path, val.id)}>
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
                <div className="p-10">03</div>
            </div>
        </div>
    )
}
