import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {

    return (
        <div className="w-full bg-primary-2 border-solid border border-lines rounded-md h-full w-full">
            <div class="flex flex-col h-full justify-between w-full">
                <header class="h-auto"><NavBar /></header>
                <main class="mb-auto w-full">
                    <div class="flex flex-row w-screen m-0 ...">
                        <div class="w-7/12 h-160 flex justify-center items-center ">
                            <div>
                                <h1 class="text-white text-5xl">Elizaveta Vygovskaia</h1>
                                <TypeAnimation
                                
                                    // Same String at the start will only be typed once, initially
                                    sequence={[
                                        '> Back-end developer',
                                        1000,
                                        '> Software developer',
                                        1000,
                                        '> Full-stack developer',
                                        1000,
                                    ]}
                                    speed={50} // Custom Speed from 1-99 - Default Speed: 40
                                    style={{ fontSize: '2em', color: "#4D5BCE" }}
                                    wrapper="span" // Animation will be rendered as a <span>
                                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                                />
                            </div>

                        </div>
                        <div class="w-4/12">02</div>
                    </div></main>
                <footer class="h-auto"><Footer /></footer>
            </div>
        </div>
    )
}
