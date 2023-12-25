import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Individual = ({ icon, pathName, roomname }) => {

  return (
      // eslint-disable-next-line react/prop-types

     
      <Link to={`${pathName}/${roomname.replaceAll(' ', '-')}`}>
          <div className="bg-[#E6EFF6] flex items-center px-2 py-2 rounded-[12px] gap-y-2 mb-2 mt-2">
              <div className="w-[50px] h-[50px] rounded-full  bg-[#edf6fd] p-3 mr-3">
                  <img className="w-full" src={icon} alt="" />
              </div>
              <p className="ml-0 font-semibold">{roomname}</p>
          </div>
      </Link>
  )
}

export default Individual