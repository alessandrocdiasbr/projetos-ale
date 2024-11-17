import React from "react";

export default function Footer() {
    return (
        <>
        <div className="social">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-whatsapp'></i></a>
            <a href="#"><i class='bx bxl-instagram'></i></a>
            <a href="#"><i class='bx bxl-tiktok'></i></a>
        </div>

        <ul className="list">
            <li>
                <a href="#">FAQ</a>
            </li>
            <li>
                <a href="#">Conteúdo</a>
            </li>
            <li>
                <a href="#">Sobre</a>
            </li>
            <li>
                <a href="#">Contato</a>
            </li>
            <li>
                <a href="#">Depoimentos</a>
            </li>
        </ul>

        <p className="copyright">
            © Alessandro Dias | All Rights Reserved
        </p>
        </>
    )
}

