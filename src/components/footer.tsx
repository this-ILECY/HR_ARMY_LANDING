import React from 'react';
import HomeIcon from '../assets/icons/home-icon';
import NewspaperIcon from '../assets/icons/newspaper-icon';
import UserGroupIcon from '../assets/icons/user-group-icon';
// import jalaali from 'jalaali-js';

const Footer: React.FC = () => {

    //     const today = new Date();
    //   const { jy } = jalaali.toJalaali(today);

    return (
        <span className="footer">
            <span className="links">
                <button className="link home">
                    <HomeIcon />
                    <span className="text">صفحه اصلی</span>
                </button>
                <button className="link news">
                    <NewspaperIcon />
                    <span className="text">اخبار و تازه ها</span>
                </button>
                <button className="link employment">
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