import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';

export default function Contact() {
    return (
        <div className="w-full bg-primary-2 border-solid border border-lines rounded-md h-full">
            <div class="flex flex-col h-full justify-between">
                <header class="h-auto"><NavBar /></header>
                <main class="mb-auto h-full w-full">
                    <div className="flex flex-row h-full w-full">
                        <div className="h-full w-1/5 border-solid border-r border-lines">
                            <div className="border-solid border-b border-lines">
                                <p className="p-2 text-white">contact-info</p>
                            </div>
                            <div className="p-6 text-lg">
                                <span>
                                    <span class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" fill="white" /></svg>
                                    </span>
                                    <span class=" pl-2 text-white ">vygovskaia.e@gmail.com</span>
                                </span>
                                <br /><br/>
                                <span class="mt-6">
                                    <span class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" fill="white" /></svg>
                                    </span>
                                    <span class="pl-2 text-white">+1 905 226-95-25</span>
                                </span>
                            </div>
                        </div>
                        <div className=" h-full w-47 border-solid border-r border-lines">
                            <div className="border-solid border-b border-lines">
                                <p className="p-2 text-white">contact-form</p>
                            </div>
                        </div>
                        <div className="h-full w-1/3 border-solid border-r border-lines">
                            <div className="border-solid border-b border-lines">
                                <p className="p-2 text-white">contact-code</p>
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="h-auto"><Footer /></footer>
            </div>
        </div>
    )
}
