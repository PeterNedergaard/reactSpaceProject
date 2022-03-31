import React from 'react';
import PropTypes from 'prop-types';


const Info = ({latitude,longitude,altitude,velocity,timestamp}) => {
    console.log(timestamp)

    const date = new Date(timestamp*1000);

    return (
        <tr>
            <td>
                {date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear()}
            </td>
            <td>
                {date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}
            </td>
            <td>
                {latitude.toFixed(4)}
            </td>
            <td>
                {longitude.toFixed(4)}
            </td>
            <td>
                {altitude.toFixed(2)}
            </td>
            <td>
                {velocity.toFixed(0)}
            </td>
        </tr>
    );
};

Info.propTypes = {
    
};

export default Info;











// import React from 'react';
// import PropTypes from 'prop-types';
//
//
// const Info = ({name,id,latitude,longitude,altitude,velocity}) => {
//     return (
//         <div style={tableContainer}>
//             <table style={issTable} className="table table-striped table-bordered">
//                 <thead>
//                 <tr>
//                     <th scope="col">ID</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Lat</th>
//                     <th scope="col">Long</th>
//                     <th scope="col">Alt</th>
//                     <th scope="col">Velocity</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 <tr>
//                     <td>
//                         {id}
//                     </td>
//                     <td>
//                         {name}
//                     </td>
//                     <td>
//                         {latitude}
//                     </td>
//                     <td>
//                         {longitude}
//                     </td>
//                     <td>
//                         {altitude}
//                     </td>
//                     <td>
//                         {velocity}
//                     </td>
//                 </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// Info.propTypes = {
//
// };
//
// export default Info;
//
// const issTable = {
//     width: "50%",
//     margin: 40,
// }
//
// const tableContainer = {
//     display: "flex",
//     justifyContent: "center",
// }