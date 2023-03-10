import React, { useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import ProfessionalInfo from "../side-bars/ProfessionalSideBar";
import Hobbies from "../side-bars/HobbiesSideBar";
import PersonalSideBar from "../side-bars/PersonalSideBar";

export default function About(props) {
  
  const values = [
    { id: 1, svgPath: "M5 20h14v2H5v-2zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" },
    { id: 2, svgPath: "M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9 12v2h6v-2h-6zm-3.586-3l-2.828 2.828L7 16.243 11.243 12 7 7.757 5.586 9.172 8.414 12z" },
    { id: 3, svgPath: "M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h10zm-7 5H8v2H6v2h1.999L8 15h2l-.001-2H12v-2h-2V9zm8 4h-2v2h2v-2zm-2-4h-2v2h2V9z" },
  ];

  const [activeItemId, setActiveItemId] = useState(1);

  const handleItemClick = (pageName, itemId) => {
    setActiveItemId(itemId);
  };

  let activeComponent;
  switch (activeItemId) {
    case 1:
      activeComponent = <PersonalSideBar/>;
      break;
    case 2:
      activeComponent = <ProfessionalInfo />;
      break;
    case 3:
      activeComponent = <Hobbies />;
      break;
    default:
      activeComponent = null;
  }

  return (
    <div className="w-full bg-primary-2 border-solid border border-lines rounded-md h-full">
      <div className="flex flex-col h-full justify-between">
        <header className="h-auto">
          <NavBar />
        </header>
        <main className="mb-auto h-full">
          <div className="flex flex-row h-full">
            <div className="h-full w-16 border-solid border-r border-lines">
              <div className="w-auto h-auto ">
                <ul className="relative">
                  {values.map((val) => (
                    <li
                      className="relative"
                      key={val.id}
                      onClick={() => handleItemClick(val.path, val.id)}
                    >
                      <div
                        className={`flex items-center pt-8 px-5 h-12 overflow-hidden text-secondary-1 text-ellipsis whitespace-nowrap hover:text-white transition duration-300 ease-in-out ${
                          activeItemId === val.id ? "active-side" : ""
                        }`}
                      >
                        <a href="#">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              fill={
                                activeItemId === val.id ? "white" : "#607B96"
                              }
                              d={val.svgPath}
                            />
                          </svg>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full">
              {activeComponent}
            </div>
          </div>
        </main>
        <footer className="h-auto">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
