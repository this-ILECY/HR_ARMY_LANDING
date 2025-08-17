import { useState } from "react";
import Menu from "./menu";

const Content: React.FC = () => {

    const [showMenu, setShowMenu] = useState("");

    const handleHover = (value: string) => {
        setShowMenu(value);
    }

    return (
        <span className="emp-content">
            <span className="header">
                <span className="army-logo"></span>
                <button onMouseEnter={() => { handleHover("show") }} onMouseLeave={() => { handleHover("") }} className="menu-button">گزینش و استخدام</button>
                <span className="iran-flag"></span>
                <span className={showMenu + " menu-container"}>
                    <Menu onMouseEnter={() => { handleHover("show") }} onMouseLeave={() => { handleHover("") }} />
                </span>
            </span>
            <span className="data">32</span>
        </span>
    )
}

export default Content;