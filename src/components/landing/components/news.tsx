import { useEffect, useState } from "react";
import { INewsPreview, newsPreview } from "../../../data/news.data";

const News: React.FC = () => {

    let [selected, setSelected] = useState(0);

    const [data, setData] = useState(newsPreview[0]);

    const changeTheNews = (i: any) => {
        setData(newsPreview[i])
        setSelected(i);
    }

    return (
        <span className="view news">
            <span className="data">

                <div key={data.id} className="data-content">
                    <span className="right-panel">
                        <div className="data-text">
                            <div className="pre-title">{data.preTitle}</div>
                            <div className="title">{data.title}</div>
                            <div className="content">{data.content}</div>
                        </div>
                        <button>متن کامل خبر</button>
                    </span>
                    <div className="data-img" style={{ backgroundImage: `url(${data.img})` }}></div>
                </div>
            </span>
            <span className="indicator">
                {newsPreview.map((it, i) => (
                    <div onClick={(e) => { changeTheNews(i) }} className={`news-indicator ${i == selected ? "active" : ""}`}></div>
                ))}
            </span>
        </span>
    )

}

export default News;