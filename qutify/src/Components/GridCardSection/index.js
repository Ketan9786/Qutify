import { useState } from "react";
import Cards from "../Cards";
import "./GridCardSection.css";
import Carousel from "../Carousel";
export default ({ albumName, data, navId }) => {
    // console.log(data, "dd")
    const [isCollapsed, setIsCollapsed] = useState(true);
    return (
        <div className="section" >
            <div className="section-header">
                <h1 className="title">{albumName}</h1>
                <h1 className="title2" onClick={() => { setIsCollapsed(!isCollapsed) }}>{isCollapsed ? "show all" : "collapsed"}</h1>
            </div>

            {
                isCollapsed ? <Carousel data={data} navId={navId} /> : (<div className="card-container">
                    {data.map((item) => {

                        return (<Cards
                            key={item.id}
                            title={item.title}
                            follow={item.follows}
                            imgUrl={item.image}
                            totalSongs={item.songs ? item.songs.length : "This is singel track"}
                        />)

                    })}
                </div>)
            }

        </div>)
}