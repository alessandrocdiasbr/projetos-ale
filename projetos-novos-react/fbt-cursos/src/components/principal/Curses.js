import React from "react";
import curativo from "../../images/curativo.jpeg"
import sutura from "../../images/sutura.png"
import curativo2 from "../../images/curativo2.png"


export default function Curses() {
    return (
        <>
        <div className="curse-box">
            <h2 className="heading">Cursos Disponiveis</h2>

            <div className="wrapper">
                <div className="curse-item">
                    <img src={curativo} alt=""/>
                    <h2>Curso de Feridas - Básico</h2>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur dicta, accusantium sit
                        delectus quod saepe, maxime eveniet est vitae sint assumenda quo. Voluptate, maxime nobis totam
                        hic odio nemo!"</p>
                </div>

                <div className="curse-item">
                    <img src={sutura}
                        alt=""/>
                    <h2>Curso de Sutura - Básico</h2>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur dicta, accusantium sit
                        delectus quod saepe, maxime eveniet est vitae sint assumenda quo. Voluptate, maxime nobis totam
                        hic odio nemo!"</p>
                </div>

                <div className="curse-item">
                    <img src={curativo2} alt=""/>
                    <h2>Curso de Feridas - Avançado</h2>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur dicta, accusantium sit
                        delectus quod saepe, maxime eveniet est vitae sint assumenda quo. Voluptate, maxime nobis totam
                        hic odio nemo!"</p>
                </div>
            </div>
        </div>
        </>
    )
}