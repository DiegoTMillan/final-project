import "../components/NavStyle.css"
import {Link, Routes, Route, useNavigate} from "react-router-dom"

export const Nav = () => {
    return (
        <div className="containerNav">
            <div className="logoNav">
            <i class="fa-solid fa-dice"></i>
                <p>Board Games 4 You</p>
            </div>
            <div className="menuNav">
                <p>Quiénes Somos</p>
                <p>Home</p>
                <p>Juegos</p>
            </div>
            <div className="loginNav" onClick={event =>  window.location.href='/login'}>
                <i className="fa-solid fa-right-to-bracket"></i>
            </div>
        </div>
    )
}