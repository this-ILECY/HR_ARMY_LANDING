import React from 'react';
import HomeIcon from '../assets/icons/home-icon';
import NewspaperIcon from '../assets/icons/newspaper-icon';
import UserGroupIcon from '../assets/icons/user-group-icon';
import { useNavigate } from 'react-router-dom';
// import jalaali from 'jalaali-js';

const Footer: React.FC = () => {

    //     const today = new Date();
    //   const { jy } = jalaali.toJalaali(today);

    const navigate = useNavigate();

    const handleClick = (route: string) => {
        navigate(route);
    }

    return (
        <span className="footer">
            <span className="links">
                <button onClick={() => { handleClick("/home#main") }} className="link home">
                    <HomeIcon />
                    <span className="text">صفحه اصلی</span>
                </button>
                <button onClick={() => { handleClick("/home#news") }} className="link news">
                    <NewspaperIcon />
                    <span className="text">اخبار و تازه ها</span>
                </button>
                <button  onClick={() => { handleClick("/home#emp") }} className="link employment">
                    <UserGroupIcon />
                    <span className="text">درخواست همکاری</span>
                </button>
            </span>
            <button disabled className="credit">
                تولید شده توسط معاونت نیروی انسانی ستاد ارتش جمهوری اسلامی ایران 1404
            </button>
        </span>
    )

}

export default Footer;