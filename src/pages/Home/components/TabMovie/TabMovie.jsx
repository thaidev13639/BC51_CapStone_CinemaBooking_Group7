import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { movieService } from "../../../../services/movie";


export default function TabMovie() {
  const TabPane = Tabs.TabPane;
  const [tabList, setTabList] = useState([]);
  useEffect(() => {
    fetchTabList();
  }, []);

  const fetchTabList = async () => {
    const result = await movieService.fetchMovieTabApi();
    console.log(result);
    setTabList(result.data.content);
  };

  const renderTabList = () => {
    return tabList.map((element) => {
      return <TabPane key={element.maHeThongRap} 
      tab ={<img className="logo" src={element.logo} /> } 
       >
             {/* <img className="" src={element.logo} alt="" />  */}
            </TabPane>
         
    });
  };
  return (
    <div className=" mb-5"> 
    <Tabs tabPosition="left" style={{ height: 220 }}>
      {/* <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
          */}
      {renderTabList()}
    </Tabs>
    </div>
  );
}
