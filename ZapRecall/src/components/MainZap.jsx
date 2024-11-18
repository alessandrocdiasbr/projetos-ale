import Logo from "./Logo";
import Contador from "./Contador";
import Deck from "./Deck";


export default function MainZap() {
    return (
        <div className="container">
            <div className="logo">
                <Logo />
            </div>

            <div className="box-container">
                <Deck />
            </div>

            <div className="contador">
                <Contador />
            </div>
        </div>
    )
}