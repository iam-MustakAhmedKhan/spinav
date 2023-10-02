import Navbar from './Navbar';
import AccondionSingle from './AccondionSingle';
import DevCard from './DevCard';
import devinfo from '../data/devInfo.json';

const SidebarMenu = () => {

    return (
        <>
            <div className='fixed z-50 bg-[#0076BE] top-0 w-full'>
                <Navbar />
            </div>
            <div className='w-full h-screen bg-[#0076BE] absolute top-0 z-40 overflow-auto'>

                <div className='px-5 mt-[5rem]'>
                    <AccondionSingle
                        icon={'../../public/assets/icon/usemanual.svg'}
                        id={1}
                        title={'User Manual'}
                        bodystyle={'bg-[#e6eff6] p-6 rounded-md'}
                        accorColor={'bg-[#076CAB] '}
                        imgBgColor={'bg-[#0076BE]'}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laborum odit natus maiores eaque voluptatum excepturi? Quo consequatur, animi deserunt ullam commodi omnis recusandae ratione sint eligendi voluptas debitis beatae.
                    </AccondionSingle>
                    <AccondionSingle
                        icon={'../../public/assets/icon/map.svg'}
                        id={2}
                        title={'Full Map'}
                        bodystyle={'bg-[#e6eff6] p-6 rounded-md'}
                        accorColor={'bg-[#076CAB] '}
                        imgBgColor={'bg-[#0076BE]'}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laborum odit natus maiores eaque voluptatum excepturi? Quo consequatur, animi deserunt ullam commodi omnis recusandae ratione sint eligendi voluptas debitis beatae.
                    </AccondionSingle>
                    <AccondionSingle
                        icon={'../../public/assets/icon/dev.svg'}
                        id={2}
                        title={'Developers'}
                        bodystyle={' p-6 rounded-md'}
                        accorColor={'bg-[#076CAB] '}
                        imgBgColor={'bg-[#0076BE]'}
                    >
                        {
                            devinfo.map((dev, i) => (
                                <DevCard key={i} name={dev.name} className={dev.class} pic={dev.pic} cont={dev.contribution} />
                            ))
                        }
                    </AccondionSingle>
                </div>

            </div>

        </>
    );
};

export default SidebarMenu;