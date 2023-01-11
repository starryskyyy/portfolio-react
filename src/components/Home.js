import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';
import mySvg from '../assets/img/Background_Blurs.svg';

export default function Home() {

    return (
        <div className="w-full bg-primary-2 border-solid border border-lines rounded-md h-full w-full">
            <div class="flex flex-col h-full justify-between w-full">
                <header class="h-auto"><NavBar /></header>
                <main class="mb-auto w-full h-full">
                    <div class="flex flex-row w-full m-0 h-full ...">
                        <div class="w-auto h-auto flex mt-60 pl-40">
                            <div>
                                <h1 class="text-white text-4xl">Elizaveta Vygovskaia</h1>
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
                                <p class="mt-6 text-secondary-1">// please enjoy the game</p>
                                <p class="text-secondary-1">// you can find more projects on my GitHub page</p>
                                <p><span class="text-secondary-3">const&nbsp;</span><span class="text-accent-2">githubLink&nbsp;</span><span class="text-white">=&nbsp;</span><a class="text-accent-3" target="_blank" rel="noreferrer" href="https://github.com/starryskyyy/">"https://github.com/starryskyyy/"</a></p>
                            </div>

                        </div>
                        <div class="w-full h-full" style={{ backgroundImage: `url(${mySvg})` }}>
                            <div id="parent" class="w-108 h-96 border-solid border border-lines rounded-md ml-72 mt-40 bg-gradient-to-br from-gradient-1 to-transparent shadow-lg" >
                                <img src={require('../assets/img/bolt.png')} alt="bolt" />
                                <img src={require('../assets/img/bolt.png')} alt="bolt" />
                                <img src={require('../assets/img/bolt.png')} alt="bolt" />
                                <img src={require('../assets/img/bolt.png')} alt="bolt" />

                                <div class="flex flex-row ...">

                                    <canvas class=" w-48 h-80 my-8 ml-8 border-solid border border-lines rounded-md bg-primary-2 shadow-inner">

                                    </canvas>
                                    <div class="overflow-hidden">
                                        <img class="arrows-img" src={require('../assets/img/arrows.png')} alt="arrows" />
                                        <p class="text-xs ml-8 text-white">// best score: </p>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div></main>
                <footer class=""><Footer /></footer>
            </div>
        </div>
    )
}
