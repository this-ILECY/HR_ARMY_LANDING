import { useNavigate } from "react-router-dom";

const MainView: React.FC = () => {

    const navigate = useNavigate();

    const handleClick = (route: number) => {
        navigate(`/content/${route}`);
    }

    return (
        <span className="view main">
            <span className="top">
                <span className="actions">
                    <button>ورود به سامانه رزومه</button>
                    <button>درخواست همکاری</button>
                </span>
                <span className="title-logo">
                    <span className="blur-gradient"></span>
                    <span className="logo"></span>
                    <span className="title">
                        <span className="pre-title">معاونت نیروی انسانی</span>
                        <span className="main-title">
                            <span className="last">ارتش</span>
                            <span> جمهوری اسلامی </span>
                            <span className="first">ایران</span>
                        </span>
                    </span>
                </span>
            </span>
            <span className="bottom">
                <span onClick={() => { handleClick(3) }} className="item item-left">قهرمانهای ارتش</span>
                <span onClick={() => { handleClick(1) }} className="item item-middle">مدالها و افتخارات</span>
                <span onClick={() => { handleClick(2) }} className="item item-right">نشان های ارتش</span>
            </span>
        </span>
    )

}

export default MainView;