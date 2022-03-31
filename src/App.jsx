import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoPanel from "./components/InfoPanel";
import {useState, useRef, useEffect} from "react";
import Map from "./components/Map";
import React from "react";

export default function App() {

  const [info,setInfo] = useState([])

  const [clicked,setClicked] = useState(false);

  const [list,setList] = useState([]);

  const pos1 = {
    center: {
      lat: "51.690",
      lng: "53.230"
    }
  }

  const [pos,setPos] = useState(pos1)


  useEffect(() => {

    let testList = [...list];

    if (info.id != null){
      testList.push(info);
    }

    setList(testList);

    setPos({
        center: {
        lat: info.latitude,
        lng: info.longitude
      }});

  }, [info])



  useEffect(() => {

    const infoData = async () => {
      const data = await getInfoData();
      setInfo(data);
    }

    infoData();



  }, [clicked])



  async function getInfoData(){
    const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    const json = await res.json();

    return json;
  }



  const clickHandler = () => {
    setClicked(!clicked);
  }




  return <>
    <Header title="International Space Station Info"/>

    <div className="container">

      <div className="row">
        <div className="col-4">
          <InfoPanel infos={list} />
        </div>

        <div style={updateButtonContainer} className="col-4">
            <div>
              <button style={updateButton} className="btn btn-dark" onClick={clickHandler}>Get data</button>
            </div>
        </div>

        <div style={mapContainer} className="col-4">
          <Map props={pos}/>
        </div>

      </div>
    </div>


    <Footer/>
  </>
}

const updateButton = {
  width: 150,
  height: 50,
}

const updateButtonContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const mapContainer = {
  width: 200,
  justifyContent: "center",

}
