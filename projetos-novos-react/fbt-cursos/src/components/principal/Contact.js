import React from "react";

export default function Contact() {
    return (
        <>
        <h2 className="heading">Entre em <span>Contato</span></h2>

<form action="">
    <div className="input-group">
        <div className="input-box">
            <input type="text" placeholder="Nome completo"/>
            <input type="email" placeholder="Email"/>
        </div>

        <div className="input-box">
            <input type="number" placeholder="Telefone"/>
            <input type="text" placeholder="Cidade/Estado"/>
        </div>
    </div>

    <div className="input-group-2">
        <textarea cols="30" rows="10" placeholder="Sua mensagem"></textarea>
        <input type="submit" value="Enviar mensagem" className="btn"/>
    </div>

</form>

        </>
    )
}

