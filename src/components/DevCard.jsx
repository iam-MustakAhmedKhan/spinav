import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';



// eslint-disable-next-line react/prop-types
const DevCard = ({ name, className, cont, pic, socials }) => {
    return (
        <div className='bg-[#e6eff6] flex flex-col items-center gap-5 rounded-md p-4 mb-3 text-center'>
            <div className="devPic w-[200px] text-center">
                <img className="mx-auto" src={pic} alt="" />
            </div>
            <div className="devInfo text-center">
                <p className="name font-bold text-lg">{name}</p>
                <p className="class">{className}</p>
                <p className="contri font-bold pt-2">{cont}</p>
                <div className="devSocial flex text-xl items-center w-[10rem] mx-auto justify-around mt-2">
                    {socials?.map((v, i) => {
                        switch (v.name) {
                            case 'Facebook':
                                return <Link target="_blank" to={v.link} key={i}>
                                    {
                                        <BsFacebook />
                                    }
                                </Link>;
                            case 'Instagram':
                                return <Link target="_blank" to={v.link} key={i}>
                                    {
                                        <BsInstagram />
                                    }
                                </Link>;
                            case 'Linkedin':
                                return <Link target="_blank" to={v.link} key={i}>
                                    {
                                        <BsLinkedin />
                                    }
                                </Link>;
                            case 'Github':
                                return <Link target="_blank" to={v.link} key={i}>
                                    {
                                        <BsGithub />
                                    }
                                </Link>;
                        }
                    })}
                </div>
            </div>
        </div >
    );
};

export default DevCard;