

// eslint-disable-next-line react/prop-types
const DevCard = ({ name, className, cont,pic }) => {
    return (
        <div className='bg-[#e6eff6] flex items-center gap-5 rounded-md p-4 mb-3'>
            <div className="devPic">
                <img src={pic} alt="" />
            </div>
            <div className="devInfo">
                <p className="name font-bold text-lg">{ name}</p>
                <p className="class">{ className}</p>
                <p className="contri font-bold pt-2">{ cont}</p>
            </div>
        </div>
    );
};

export default DevCard;