import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { isToogled } from '../redux/toogleSlice';


const Navbar = () => {
    const toogle = useSelector(state => state.toogle.toggled)
    const dispatch = useDispatch()

    const onToogleHandler = () => {
        dispatch(isToogled(!toogle))
    }


    return (

        <div className='flex items-center justify-between py-[1rem] px-5'>
            <div>
                <img src="/assets/img/namedLogo.svg" alt="" />
            </div>
            <div className='text-3xl cursor-pointer' onClick={onToogleHandler}  >
                {toogle ? <RxCross2 /> : <AiOutlineMenu />}
            </div>
        </div>
    );
};

export default Navbar;