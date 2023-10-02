import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { FaChevronLeft } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import Accordions from './Accordions';
import datas from '../data/data.json';
import Navibox from './Navibox';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { seach } from '../redux/searchSlice.js';
import Map from './Map';



const NavigationBox = () => {

    const [isOpen, setFocus] = useState(false);
    const [isScroll, setScroll] = useState(false);
    const [searchValue, setSerchValue] = useState('');
    const [isClick, setClick] = useState('');


    const searchText = useSelector(state => state.search.searchValue);
    const ref = useRef();

    const dispatch = useDispatch();

    const location = useLocation().pathname;
    const locations = useLocation();
    const pathName = locations.pathname.split('/')[1]?.replaceAll('-', ' ');

    const navigate = useNavigate();

    const variants = {
        open: { height: '100%', borderRadius: '0' },
        closed: { height: '50%' },
    };

    const handleFocus = (v) => {
        setFocus(v);
        setScroll(v);
        ref.current.blur();
        setSerchValue('');

        navigate('/');
    };

    useEffect(() => {
        dispatch(seach(searchValue));
    }, [dispatch, searchValue]);


    const swipeHandler = useSwipeable({
        onSwipedUp: () => setScroll(true),
        onSwipedDown: () => !pathName && handleFocus(false)

    });


    const handleSearch = room => {
        const roomsearchtitle = room.roomname.toUpperCase();
        if (roomsearchtitle.includes(searchValue.toUpperCase())) {
            return true;
        }
    };
    const onSearchHandle = (e) => {
        setSerchValue(e.target.value);
        setClick('');
    };

    const onClickHandler = (v) => {
        setClick(v);
        setSerchValue('');

    };
    const setFocusHandler = (v) => {
        setFocus(v);
    };




    return (
        <motion.div initial={{ height: '50%' }}
            animate={isScroll || isOpen || location !== '/' ? "open" : "closed"}
            variants={variants}
            layout
            className={`absolute divclass bg-[#EDF6FD] h-[50%] w-full ${pathName ? 'overflow-y-auto' : ''} bottom-0 rounded-t-[26px] p-5 pt-0   scrollbarHide`}
            {...swipeHandler}
        >

            {isOpen || isScroll || pathName !== '' ? '' : <div className='w-[4rem] h-[6px] rounded-md mx-auto bg-[#051B29]/[0.2] mb-0 mt-2'></div>}
            <div className="searchBox fixed bg-[#EDF6FD] z-30 py-2" style={{ width: `calc(100% - 40px)` }}>
                <div className='mx-auto'>
                    <div className={`relative ${isOpen || isScroll || pathName !== '' ? 'mt-2' : ''} rounded-full flex items-center w-full h-12 bg-[#E6EFF6] overflow-hidden`}>
                        {isOpen || isScroll || pathName !== '' ? <button className='text-2xl font-bold ml-2 text-[#051B29]/[0.5]' onClick={() => handleFocus(false)}> <FaChevronLeft /> </button> : ""}
                        <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-[#e6eff6] px-4 font-bold"
                            type="text"
                            id="search"
                            placeholder="ex : software lab, 1008, machine shop..."
                            onFocus={() => setFocusHandler(true)}
                            // onBlur={() => handleFocus(false)}
                            autoComplete='off'
                            ref={ref}
                            autoFocus={false}
                            onChange={(e) => onSearchHandle(e)}
                            value={searchValue}
                        />
                        <div className="grid place-items-center h-full w-12  text-[#051B29]/[0.5] me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {searchText == '' && location == '/' && <div className={`navigationBoxes grid grid-cols-2 gap-5 items-center  justify-between ${isOpen || isScroll ? 'mt-[5rem]' : 'mt-[4.5rem]'} pb-10 `}>

                {datas.map(data => (
                    <Navibox data={data} key={data.id} />
                ))}

            </div>}



            <div className='mt-[5rem]'>
                {searchValue !== '' && (
                    datas.map(data => (
                        data.roomsdropdown.map((room, index) => (
                            <ul key={index} className={`${isClick ? "hidden" : 'flex'} flex-col gap-y-1 mt-0 mb-1`}>
                                {room.roomNo.filter(handleSearch).map((v, i) => (
                                    <Link key={i} onClick={() => onClickHandler(v.roomname)} to={`/${data.title}/${v.roomname.replaceAll(' ', '-')}`}>

                                        <li className=" p-3 first:rounded-t-[6px] last:rounded-b-[6px] bg-[#E6EFF6] mb">
                                            <div className="flex items-center gap-3">
                                                <div className="w-[50px] h-[50px] rounded-full  bg-[#edf6fd] p-3 ">
                                                    <img className="w-full " src={data.icon} alt="" />
                                                </div>
                                                <p className="ml-0 text-left font-semibold">{v.roomname}</p>
                                            </div>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        ))
                    ))
                )
                }
            </div>

            {searchValue !== '' && (datas.map(data => (
                data.individual.filter(handleSearch).map((v, i) => (
                    <Link key={i} to={`/${data.title}/${v.roomname.replaceAll(' ', '-')}`} onClick={() => onClickHandler(v.roomname)} >
                        <div className={`bg-[#E6EFF6] ${isClick ? "hidden" : 'flex'} items-center px-2 py-2 rounded-[12px] gap-y-2 mb-2 mt-2`}>
                            <div className="w-[50px] h-[50px] rounded-full  bg-[#edf6fd] p-3 mr-3">
                                <img className="w-full" src={data.icon} alt="" />
                            </div>
                            <p className="ml-0 font-semibold">{v.roomname}</p>
                        </div>
                    </Link>
                ))
            )))}


            {searchValue == '' && <div className={`mt-[5.2rem]`}>
                <Accordions />
            </div>}

            {searchValue == '' && < Map />}




        </motion.div>
    );
};

export default NavigationBox;