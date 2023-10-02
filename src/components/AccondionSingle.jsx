import { useState } from 'react';
import Icon from "./AccordionIcon";
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';


// eslint-disable-next-line react/prop-types
const AccondionSingle = ({ id, icon, title, searchValue, accorColor, bodystyle, imgBgColor, children }) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);

    };

    return (
      
            <Accordion className={`px-2 rounded-[12px] gap-y-2 py-2 mb-2 mt-2 ${accorColor}`} open={open === id || searchValue == true} icon={<Icon id={id} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(id)}>
                    <div className={`${accorColor} flex items-center px-2 rounded-[12px] gap-y-2 mb-2 mt-2 Accodionbtn`}>
                        <div className={`w-[50px] h-[50px] rounded-full  ${imgBgColor} p-3 mr-3`}>
                            <img className="w-full" src={icon} alt="" />
                        </div>
                        <h1 className="ml-0 font-semibold">{title}</h1>
                    </div>
                </AccordionHeader>
                <AccordionBody className={`${bodystyle}`}>
                    {children}
                </AccordionBody>
            </Accordion >
    );
};

export default AccondionSingle;