import React from "react"

import Header from "./components/principal/Header"
import Home from "./components/principal/Home.js"
import Curses from "./components/principal/Curses"
import Services from "./components/principal/Services"
import Testimonials from "./components/principal/Testimonials"
import Contact from "./components/principal/Contact"
import Footer from "./components/principal/Footer"

export default function App() {

    return(
        <body>
            <header className="header">
                <Header />
            </header>
            <section className="home" id="home">
                <Home />
            </section>

            <section className="curses" id="education">
                <Curses />
            </section>

            <section className="services" id="services">
                <Services />
            </section>

            <section className="testimonials" id="testimonials">
                <Testimonials />
            </section>

            <section className="contact" id="contact">
                <Contact />
            </section>

            <footer class="footer">
                <Footer />
            </footer>

        </body>
    )

}