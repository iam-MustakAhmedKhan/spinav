import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import datas from '../data/data.json';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";



function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 mr-2 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export default function Accordions() {
    const [open, setOpen] = React.useState(0);
    const searchValue = useSelector(state => state.search.searchValue);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);

    };
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
                        <div key={i}>
                            {
                                searchValue == '' && (
                                    data.roomsdropdown.map((room, index) => (
                                        <div key={index}>
                                            <Accordion className="bg-[#E6EFF6] px-2 rounded-[12px] gap-y-2 py-2 mb-2 mt-2" open={open === room.id || searchValue==true} icon={<Icon id={room.id} open={open} />}>
                                                <AccordionHeader onClick={() => handleOpen(room.id)}>
                                                    <div className="bg-[#E6EFF6] flex items-center px-2 rounded-[12px] gap-y-2 mb-2 mt-2 Accodionbtn">
                                                        <div className="w-[50px] h-[50px] rounded-full  bg-[#edf6fd] p-3 mr-3">
                                                            <img className="w-full" src={data.icon} alt="" />
                                                        </div>
                                                        <h1 className="ml-0 font-semibold">{room.title}</h1>
                                                    </div>
                                                </AccordionHeader>
                                                <AccordionBody>
                                                    <ul className="flex flex-col gap-y-1 mt-0">
                                                        {room.roomNo.map((v, i) => (
                                                            <li key={i} className=" p-3 first:rounded-t-[6px] last:rounded-b-[6px] bg-[#edf6fd]">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="w-[50px] h-[50px] rounded-full  bg-[#e6eff6] p-3 ">
                                                                        <img className="w-full " src={data.icon} alt="" />
                                                                    </div>
                                                                    <Link to={`${pathName}/${v.roomname}`} className="ml-0 text-left font-semibold">Room No: {v.roomname}</Link>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </AccordionBody>
                                            </Accordion >

                                        </div>
                                    ))
                                )
                            }

                            {searchValue == '' && (data.individual.map((v, i) => (
                                <div key={i} className="bg-[#E6EFF6] flex items-center px-2 py-2 rounded-[12px] gap-y-2 mb-2 mt-2">
                                    <div className="w-[50px] h-[50px] rounded-full  bg-[#edf6fd] p-3 mr-3">
                                        <img className="w-full" src={data.icon} alt="" />
                                    </div>
                                    <Link to={`${pathName}/${v.roomname.replaceAll(' ', '-')}`} className="ml-0 font-semibold">{v.roomname}</Link>
                                </div>
                            )))}


                            {searchValue !== '' && (
                                data.roomsdropdown.map((room, index) => (
                                    <ul key={index} className="flex flex-col gap-y-1 mt-0">
                                        {room.roomNo.filter(handleSearch).map((v, i) => (
                                            <li key={i} className=" p-3 first:rounded-t-[6px] last:rounded-b-[6px] bg-[#edf6fd]">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[50px] h-[50px] rounded-full  bg-[#e6eff6] p-3 ">
                                                        <img className="w-full " src={data.icon} alt="" />
                                                    </div>
                                                    <Link to={`${pathName}/${v.roomname}`} className="ml-0 text-left font-semibold">Room No: {v.roomname}</Link>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ))
                            )
                            }

                            {searchValue !== '' && (data.individual.filter(handleSearch).map((v, i) => (
                                <div key={i} className="bg-[#E6EFF6] flex items-center px-2 py-2 rounded-[12px] gap-y-2 mb-2 mt-2">
                                    <div className="w-[50px] h-[50px] rounded-full  bg-[#edf6fd] p-3 mr-3">
                                        <img className="w-full" src={data.icon} alt="" />
                                    </div>
                                    <Link to={`${pathName}/${v.roomname.replaceAll(' ', '-')}`} className="ml-0 font-semibold">{v.roomname}</Link>
                                </div>
                            )))}

                    
                        </div>
                    );
                }
            })}



        </>
    );
}