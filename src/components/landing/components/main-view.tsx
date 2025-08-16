const MainView: React.FC = () => {
    return (
        <span className="view main">
            <span className="top">
                <span className="actions">
                    <button>action1</button>
                    <button>action2</button>
                </span>
                <span className="title-logo">
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
                <span className="item item-left">item-left</span>
                <span className="item item-middle">item-middle</span>
                <span className="item item-right">item-right</span>
            </span>
        </span>
    )

}

export default MainView;