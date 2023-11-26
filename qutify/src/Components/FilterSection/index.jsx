import Carousel from "../Carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
export default ({ albumName, data, filter,executeFilter,navId }) => {

  const [selectedTab, setSectedTab] = useState(0);
  return (
    <div className="section">
      <div>
        <h1 className="title">{albumName}</h1>

        <Tabs value={selectedTab} onChange={(e, value) => {
            console.log(filter[value].key)
            executeFilter(filter[value].key)
            setSectedTab(value)}} 
        TabIndicatorProps={{
            style:{
                    backgroundColor:"green"
            }
        }}  >
          {filter.map((item) => (
            <Tab key={item.key} style={{ color: "white" }} label={item.label} />
          ))}
        </Tabs>
      </div>
      <div style={{marginTop:"20px"}}>
      <Carousel data={data} navId='filter'/>
      </div>
     
    </div>
  );
};
