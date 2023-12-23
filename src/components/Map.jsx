import { FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import datas from '../data/mapArray.json';
import { MapInteractionCSS } from 'react-map-interaction';
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { data } from "autoprefixer";


const Map = () => {

    const [imgload,setImgLoad]=useState(false)

    const location = useLocation();
    const pathName = location.pathname.split('/')[2]?.replaceAll('-', ' ');

    const [zoom, setZoom] = useState({
        value: {
            scale: 1,
            translation: { x: 100, y: 0 },
           
        }
    })


    useEffect(() => {
       
         setImgLoad(false);
        
    }, [pathName]);



    return (
        <>

            <div className='mx-auto z-20 text-white font-bold relative'>
                {datas.map((data, i) => {
                    if (data.roomname==pathName) {
                        return (
                            <div key={i}>
                                <div className="mapsDiv w-5/5 h-[65vh] overflow-auto border border-[#0076BE] mx-auto rounded-md " >

                                    {imgload==false && <Circles
                                        height="80"
                                        width="80"
                                        color="#0076BE"
                                        ariaLabel="circles-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="maploader"
                                        visible={true}
                                    />}
                                    <MapInteractionCSS value={zoom.value}  onChange={(value) => setZoom({ value }) }>
                                        {<img className={`w-full ${imgload?'':'hidden'} `} onLoad={() => setImgLoad(true)} src={data.map} alt="map" />}
                                    </MapInteractionCSS>
                                </div>

                                {data.map !== '' ? <div className="flex flex-wrap text-black items-center text-center mt-9">
                                    <p>{data.building} Bulding </p>
                                    <FaChevronRight />
                                    <p>{data.floor} Floor</p>
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