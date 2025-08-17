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
                <span className="link home">
                    <HomeIcon />
                    <span className="text">صفحه اصلی</span>
                </span>
                <span className="link news">
                    <NewspaperIcon/>
                    <span className="text">اخبار و تازه ها</span>
                </span>
                <span className="link employment">
                    <UserGroupIcon/>
                    <span className="text">درخواست همکاری</span>
                </span>
            </span>
            <span className="credit">
                تولید شده توسط معاونت نیروی انسانی ستاد ارتش جمهوری اسلامی ایران 1404
            </span>
        </span>
    )

}

export default Footer;