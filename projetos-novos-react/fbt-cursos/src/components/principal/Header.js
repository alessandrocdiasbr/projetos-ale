import React, { useState, useEffect } from "react";

export default function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("header nav a");

        const handleScroll = () => {
            let top = window.scrollY;
            sections.forEach((sec) => {
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');
                
                if (top >= offset && top < offset + height) {
                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').includes(id)) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuToggle = () => {
        setIsMenuActive((prevState) => !prevState);
    };

    return (
        <>
            <a href="#home" className="logo">
                Instituto <span>FBT</span>
            </a>

            <i
                className={`bx bx-menu ${isMenuActive ? 'bx-x' : ''}`}
                id="menu-icon"
                onClick={handleMenuToggle}
            ></i>

            <nav className={`navbar ${isMenuActive ? 'active' : ''}`}>
                <a
                    href="#home"
                    className={activeLink === "#home" ? "active" : ""}
                    onClick={() => setActiveLink("#home")}
                >
                    Home
                </a>
                <a
                    href="#education"
                    className={activeLink === "#education" ? "active" : ""}
                    onClick={() => setActiveLink("#education")}
                >
                    Conteúdo
                </a>
                <a
                    href="#services"
                    className={activeLink === "#services" ? "active" : ""}
                    onClick={() => setActiveLink("#services")}
                >
                    Legislação
                </a>
                <a
                    href="#testimonials"
                    className={activeLink === "#testimonials" ? "active" : ""}
                    onClick={() => setActiveLink("#testimonials")}
                >
                    Depoimentos
                </a>
                <a
                    href="#contact"
                    className={activeLink === "#contact" ? "active" : ""}
                    onClick={() => setActiveLink("#contact")}
                >
                    Contato
                </a>
            </nav>
        </>
    );
}
