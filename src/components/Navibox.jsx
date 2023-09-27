/* eslint-disable react/prop-types */


const Navibox = ({ data: { icon, title } }) => {
    return (
        <div className="navigationBox bg-[#E6EFF6] p-[1rem] w-full rounded-[1rem]">
            <div className="navigationIcon mt-2">
                <img className="mx-auto" src={icon} />
            </div>
            <div className="navigationTitle text-center mt-2">
                <h1 className="text-lg font-bold">{title}</h1>
            </div>
        </div>
    );
};

export default Navibox;