import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-primary-2 rounded-t-md border-solid border-b border-lines text-lg">
            <div class="border-r pr-6 border-lines border-solid">
                <div class="flex items-center flex-shrink-0 text-white ml-6 mr-40 my-3 ">
                    <span class="text-secondary-1">elizaveta-vygovskaia</span>
                </div>
            </div>
            <div class="w-full  block flex-grow lg:flex lg:items-center lg:w-auto ">
                <div class="text-sm lg:flex-grow h-full w-auto">
                         <div class="inline-block  h-14 border-r  border-lines border-solid">
                            <NavLink to="/" exact activeClassName="active">_hello</NavLink>
                        </div>
                        <div class="inline-block h-14 border-r  border-lines border-solid">
                            <NavLink to="/about">_about-me</NavLink>
                        </div>
                        <div class="inline-block h-14 border-r  border-lines border-solid">
                            <NavLink to="/projects">_projects</NavLink>
                        </div>
                </div>
                <div class="h-14 border-l ml-6  border-lines border-solid">
                    <NavLink to="/contact">_contact</NavLink>
                </div>
            </div>
        </nav>
    )
}
