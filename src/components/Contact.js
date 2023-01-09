import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';

export default function Contact() {
    return (
        <div className="w-full bg-primary-2 border-solid border border-lines rounded-md h-full">
            <div class="flex flex-col h-full justify-between">
                <header class="h-auto"><NavBar /></header>
                <main class="mb-auto">Contact</main>
                <footer class="h-auto"><Footer /></footer>
            </div>
        </div>

    )
}
