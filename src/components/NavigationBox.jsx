import { useRef, useState } from 'react';
import datas from '../data/data.json';
import Navibox from './Navibox';
import { motion, useScroll } from "framer-motion";
import { FaChevronLeft } from 'react-icons/fa';


const NavigationBox = () => {

    const [isOpen, setFocus] = useState(false);
    const [isScroll, setScroll] = useState(false);
    const ref = useRef()


    const variants = {
        open: { height: '100%', borderRadius: '0' },
        closed: { height: '50%' },
    };

    const handlescroll = () => {
        setScroll(true)
        ref.current.focus()
    }


    return (
        <motion.div initial={false}
            animate={isOpen || isScroll ? "open" : "closed"}
            variants={variants}
            className={`absolute divclass bg-[#EDF6FD] h-[50%] w-full bottom-0 rounded-t-[26px] p-5 overflow-auto scrollbarHide`}
            onScroll={handlescroll}
            onClick={() => setScroll(false)}
        >

            <motion.div className="searchBox">
                <div className='mx-auto'>
                    <div className='w-[4rem] h-[6px] rounded-md mx-auto bg-[#051B29]/[0.2] mb-3 mt-[-8px]'></div>
                    <div className="relative rounded-full flex items-center w-full h-12 bg-[#E6EFF6] overflow-hidden">
                        {isOpen | isScroll ? <button className='text-2xl font-bold ml-2 text-[#051B29]/[0.5]'> <FaChevronLeft /> </button>:""}
                        <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-[#e6eff6] px-4 font-bold"
                            type="text"
                            id="search"
                            placeholder="ex : software lab, 1008, machine shop..."
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            autoComplete='off'
                            ref={ref}
                        />

                        <div className="grid place-items-center h-full w-12  text-[#051B29]/[0.5] me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </motion.div>


            <div className="navigationBoxes grid grid-cols-2 gap-5 items-center justify-between mt-5 pb-10">

                {datas.map(data => (
                    <Navibox data={data} key={data.id} />
                ))}

            </div>
        </motion.div>
    );
};

export default NavigationBox;