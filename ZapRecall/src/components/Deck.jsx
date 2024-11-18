import play from "../assets/seta_play.png";
import virar from "../assets/seta_virar.png"
export default function Deck() {
    return (
        <div className="content">
            <div className="flashcard">
                <h1>Pergunta 1</h1>
                <img src={play} />
            </div>
            <div className="flashcard">
                <h1>Pergunta 2</h1>
                <img src={play} />
            </div>

            <div className="flashcard-virar">
                <h1>O que é JSX?</h1>
                <img src={virar} />
            </div>

            <div className="flashcard-resposta">
                <h1>JSX é uma sintaxe para escrever HTML dentro do JS</h1>
                <div className="resultado">
                    <button className="errou">Não Lembrei</button>
                    <button className="quase">Quase não lembrei</button>
                    <button className="acertou">Zap!</button>
                </div>
                
            </div>

        </div>
    )
}