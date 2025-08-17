import Filoor from "./components/filoor";
import MainView from "./components/main-view";
import News from "./components/news";
import ResumeEntrance from "./components/resume-entrance";

const Landing: React.FC = () => {

    const activeId = 0;
    const allProvinces = true;
    const tooltipMapped = [{ title: "hi", value: "bye" }];
    const mapOnClickHandler = () => { }
    const onHoverHandler = () => { }
    const clearTooltipMapped = () => { }
    return (
        <span className="Landing">
            <section id="main"><MainView /></section>
            <section id="news"><News /></section>
            <section id="emp"><ResumeEntrance /></section>
            {/* <Filoor
                activeId={activeId}
                setActiveId={mapOnClickHandler}
                tooltipMapped={tooltipMapped}
                onHoverHandler={onHoverHandler}
                clearTooltipMapped={clearTooltipMapped}
                className="w-2/3"
                activeAllProvinces={allProvinces}
                disable={allProvinces} /> */}
        </span>
    )

}

export default Landing;