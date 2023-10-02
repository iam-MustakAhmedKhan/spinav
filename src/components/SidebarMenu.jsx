import Navbar from './Navbar';
import AccondionSingle from './AccondionSingle';
import DevCard from './DevCard';
import devinfo from '../data/devInfo.json';
import { useSelector } from 'react-redux';

const SidebarMenu = () => {
    const toogle = useSelector(state => state.toogle.toggled)
    
    return (
        <div className={`${toogle ? '' : 'translate-x-full invisible'} absolute top-0 z-40 transition-all ease-linear`}>
            <div className='fixed z-50 bg-[#0076BE] top-0 w-full'>
                <Navbar />
            </div>
            <div className='w-full h-screen bg-[#0076BE]  scrollbarHide overflow-auto'>

                <div className='px-5 mt-[5rem] mb-[5rem]'>
                    <AccondionSingle
                        icon={'/assets/icon/usemanual.svg'}
                        id={1}
                        title={'User Manual'}
                        bodystyle={'bg-[#e6eff6] p-6 rounded-md'}
                        accorColor={'bg-[#076CAB] '}
                        imgBgColor={'bg-[#0076BE]'}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laborum odit natus maiores eaque voluptatum excepturi? Quo consequatur, animi deserunt ullam commodi omnis recusandae ratione sint eligendi voluptas debitis beatae.
                    </AccondionSingle>
                    <AccondionSingle
                        icon={'/assets/icon/map.svg'}
                        id={2}
                        title={'Full Map'}
                        bodystyle={'bg-[#e6eff6] p-6 rounded-md'}
                        accorColor={'bg-[#076CAB] '}
                        imgBgColor={'bg-[#0076BE]'}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laborum odit natus maiores eaque voluptatum excepturi? Quo consequatur, animi deserunt ullam commodi omnis recusandae ratione sint eligendi voluptas debitis beatae.
                    </AccondionSingle>
                    <AccondionSingle
                        icon={'/assets/icon/dev.svg'}
                        id={2}
                        title={'Developers'}
                        bodystyle={'mt-3 rounded-md'}
                        accorColor={'bg-[#076CAB] '}
                        imgBgColor={'bg-[#0076BE]'}
                    >
                        {
                            devinfo.map((dev, i) => (
                                
                                    <DevCard key={i} name={dev.name} className={dev.class} pic={dev.pic} cont={dev.contribution} socials={dev?.social}/>
                                
                                
                            ))
                            
                        }

                        <div className='bg-[#e6eff6] flex flex-col items-center gap-5 rounded-md p-4 mb-3'>
                            <h1 className='text-lg font-bold'>Special Thanks:</h1>
                            <div className="devInfo text-center">
                                <p className="name text-lg">Mahbubur Rahman Tamim</p>
                                <p className="name text-lg">MD. Rakibul Islam</p>
                                <p className="name text-lg">Aminul Islam</p>
                                <p>CIVIL/6th/2020-21</p>
                            </div>
                        </div >
                    </AccondionSingle>
                </div>

            </div>

        </div>
    );
};

export default SidebarMenu;