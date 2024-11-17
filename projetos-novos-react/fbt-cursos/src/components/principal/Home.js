import React from "react";
import sutura2 from "../../images/sutura-2.png"

export default function Home() {

    return (
        <>
        <div className="home-content">
            <h1>Bem-vindo ao Instituto<span> FBT</span></h1>
            <h3 class="text-animation">Você aprende <span></span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae reprehenderit vitae ullam ipsum sed
                animi earum porro veniam placeat suscipit aliquam nemo unde, iure fuga facilis.</p>
        

        <div class="social-icons">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-whatsapp'></i></a>
            <a href="#"><i class='bx bxl-instagram'></i></a>
            <a href="#"><i class='bx bxl-tiktok'></i></a>
        </div>

        <div class="btn-group">
            <a href="#" class="btn">Matricule-se</a>
            <a href="#contact" class="btn">Contato</a>
        </div>

        </div>
        <div class="home-img">
            <img src={sutura2} alt=""/>
        </div>
        
        </>
    )
}