import { Link } from 'react-router-dom';
import React from 'react';

//Bigger Version
// const Cabinet = ({ screenImage, name }) => {
//   return (
//     <Link to="/Home" className="flex flex-col items-center">
//       <div className="w-60 h-[300px] bg-[#ffea00] rounded-lg shadow-xl p-4 flex flex-col items-center">
//         <div className="w-full h-2/3 bg-black rounded-lg overflow-hidden flex items-center justify-center">
//           {screenImage ? (
//             <img src={screenImage} alt="Game Cover" className="object-cover w-full h-full" />
//           ) : (
//             <span className="text-white text-sm">Insert Game Here</span>
//           )}
//         </div>
//       </div>
//       <div className="mt-2 text-black text-base font-bold text-center">{name}</div>
//     </Link>
//   );
// };

//Smaller Version
const Cabinet = ({ screenImage, name }) => {
  return (
    <Link to="/Home" className="flex flex-col items-center">
      <div className="w-40 h-[220px] bg-[#ffea00] rounded-lg shadow-lg p-4 flex flex-col items-center">
        <div className="w-full h-2/3 bg-black rounded-md overflow-hidden flex items-center justify-center">
          {screenImage ? (
            <img src={screenImage} alt="Game Cover" className="object-cover w-full h-full" />
          ) : (
            <span className="text-white text-xs text-center">Insert Game</span>
          )}
        </div>
      </div>
      <div className="mt-1 text-black text-sm font-semibold text-center">{name}</div>
    </Link>
  );
};


export default Cabinet;
