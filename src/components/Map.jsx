import { FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import datas from '../data/mapArray.json';
import { MapInteractionCSS } from 'react-map-interaction';
import { useState } from "react";


const Map = () => {


    const location = useLocation();
    const pathName = location.pathname.split('/')[2]?.replaceAll('-', ' ');

    const [zoom, setZoom] = useState({
        value: {
            scale: 1,
            translation: { x: 100, y: 0 },
           
        }
    })


    return (
        <>

            <div className='mx-auto z-20 text-white font-bold '>
                {datas.map((data, i) => {
                    if (data.roomname==pathName) {
                        return (
                            <div key={i}>
                                <div className="mapsDiv w-5/5 h-[70vh] overflow-auto border border-[#0076BE] mx-auto rounded-md" >

                                    <MapInteractionCSS value={zoom.value}   onChange={(value) => setZoom({ value }) }>
                                        {/* <img src="path/to/thing.png" /> */}
                                            <img className="w-full" src={data.map} alt="" />
                                    </MapInteractionCSS>
                                </div>

                                {data.map !== '' ? <div className="flex flex-wrap text-black items-center text-center mt-9">
                                    <p>{data.building} </p>
                                    <FaChevronRight />
                                    <p>{data.floor} </p>
                                    <FaChevronRight />
                                    <p>{data.roomname}</p>
                                </div> : <div className="text-black">No Map Found !</div>}
                            </div>
                        )
                }
                })}
            </div>




        </>
    );
};

export default Map;