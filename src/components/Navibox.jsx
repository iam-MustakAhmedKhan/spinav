/* eslint-disable react/prop-types */
// import { useDispatch } from 'react-redux';
// import { click } from '../redux/buttonClickSlice.js'
import { Link } from 'react-router-dom';



const Navibox = ({ data: { icon, title } }) => {
    
    // const dispatch = useDispatch()

    // const handleController = (v) => {
    //     dispatch(click(v))

    // }


    return (
        <Link to={title}>
            <div className="navigationBox bg-[#E6EFF6] p-[1rem] w-full rounded-[1rem]">
                <div className="navigationIcon mt-2">
                    <img className="mx-auto" src={icon} />
                </div>
                <div className="navigationTitle text-center mt-2">
                    <h1 className="text-lg font-bold">{title}</h1>
                </div>
            </div>
        </Link>
        
    );
};

export default Navibox;