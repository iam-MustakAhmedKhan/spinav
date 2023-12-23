

import datas from '../data/data.json';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AccondionSingle from "./AccondionSingle";
import Individual from './Individual';

 function Accordions() {

    const searchValue = useSelector(state => state.search.searchValue);

    const location = useLocation();
    const pathName = location.pathname.replace('/', '');


    const handleSearch = room => {
        const roomsearchtitle = room.roomname.toUpperCase();
        if (roomsearchtitle.includes(searchValue.toUpperCase())) {
            return true;
        }
    };


     
    return (
        <>
            {datas.map((data, i) => {
                if (data?.title == pathName) {
                    return (
                        <div key={i} className='pb-[5.2rem]' >
                            {
                                searchValue == '' && (
                                    data.roomsdropdown.map((room, index) => (
                                        <div key={index}>
                                            <AccondionSingle icon={data.icon} id={room.id} title={room.title} searchValue={searchValue} accorColor={'bg-[#E6EFF6]'} imgBgColor={'bg-[#edf6fd]'}>

                                                <ul className="flex flex-col gap-y-1 mt-0 ">
                                                    {room.roomNo.map((v, i) => (
                                                        <Link key={i} className="first:rounded-t-[6px] last:rounded-b-[6px]  bg-[#edf6fd]" to={`${pathName}/${v.roomname.replaceAll(' ', '-')}`}>
                                                            <li className=" p-3 ">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="w-[50px] h-[50px] rounded-full  bg-[#e6eff6] p-3 ">
                                                                        <img className="w-full " src={data.icon} alt="" />
                                                                    </div>
                                                                    <p className="ml-0 text-left font-semibold">{v.roomname}</p>
                                                                </div>
                                                            </li>
                                                        </Link>
                                                    ))}
                                                </ul>
                                            </AccondionSingle>

                                        </div>
                                    ))
                                )
                            }

                            {searchValue == '' && (data.individual.map((v, i) => (
                                <Individual key={i} pathName={pathName} icon={data.icon} roomname={v.roomname}/>
                            )))}

                            {searchValue !== '' && (data.individual.filter(handleSearch).map((v, i) => (
                                <Individual key={i} pathName={pathName} icon={data.icon} roomname={v.roomname}/>
                            )))}

                            {searchValue !== '' && (
                                <ul className="flex flex-col gap-y-1 mt-0 pb-5">
                                    {
                                        data.roomsdropdown.map((room, index) => {
                                             {room.roomNo.filter(handleSearch).map((v, i) => (
                                            <Link key={i} to={`${pathName}/${v.roomname.replaceAll(' ', '-')}`}>
                                                <li className=" p-3 first:rounded-t-[6px] last:rounded-b-[6px] bg-[#edf6fd]">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-[50px] h-[50px] rounded-full  bg-[#e6eff6] p-3 ">
                                                            <img className="w-full " src={data.icon} alt="" />
                                                        </div>
                                                        <p className="ml-0 text-left font-semibold">{v.roomname}</p>
                                                    </div>
                                                </li>
                                            </Link>
                                        ))}
                                         })
                               }
                                    </ul>
                            )
                            }

                        </div>
                    );
                }
            })}



        </>
    );
}

export default Accordions