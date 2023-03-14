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
                            <div className="p-6 text-secondary-1 text-sm">

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
