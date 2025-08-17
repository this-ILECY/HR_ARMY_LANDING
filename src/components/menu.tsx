import { menu } from "../data/menu.data";

interface Props {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Menu = ({ onMouseEnter, onMouseLeave }:Props) => {

    const data = menu;

    return (
        <span className="menu" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {data.map((item, i) => (
                <div className="category">
                    <span className="cat-name">{item.category}</span>
                    <span className="children">
                        {item.children.map((child, i) => (
                            <button>{child.name}</button>
                        ))}
                    </span>
                </div>
            ))}
        </span>
    )

}

export default Menu;