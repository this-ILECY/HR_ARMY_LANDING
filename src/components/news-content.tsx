import { useParams } from "react-router-dom";
import { news, notfound } from "../data/news.data";

const NewsContent: React.FC = () => {

    const { id } = useParams();

    let data;
    let notFound: string = "";


    if (id && news.find(x => x.id == +id)) {
        data = news.find(x => x.id == +id);
        notFound = "";
    }
    else {

        data = notfound;
        notFound = "not-found";
    }

    return (
        <span className={notFound + " news-content"}>
            {data?.img ? <span className="img" style={{ backgroundImage: `url(${data.img})` }}></span> : null}
            <span className="data">
                {data?.date && data.author ? <span className="top">
                    <span className="author">{data.author}</span>
                    <span className="date">{data.date}</span>
                </span> : null}
                {data?.preTitle ? <span className="pre-title">
                    {data.preTitle}
                </span> : null}
                {data?.title ? <span className="title">
                    {data?.title}
                </span> : null}
                {data?.content ? <span className="content">
                    {data?.content}
                </span> : null}
            </span>
        </span>
    )

}

export default NewsContent;