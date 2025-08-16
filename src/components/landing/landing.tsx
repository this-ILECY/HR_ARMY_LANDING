import MainView from "./components/main-view";
import News from "./components/news";
import ResumeEntrance from "./components/resume-entrance";

const Landing: React.FC = () => {
    return (
        <span className="Landing">
            <MainView />
            <News />
            <ResumeEntrance />
        </span>
    )

}

export default Landing;