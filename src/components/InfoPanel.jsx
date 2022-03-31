import React from 'react';
import PropTypes from 'prop-types';
import Info from "./Info";

const InfoPanel = ({infos}) => {
    return (
        <div style={tableContainer}>
            <table style={issTable} className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Lat</th>
                        <th scope="col">Long</th>
                        <th scope="col">Alt(Km)</th>
                        <th scope="col">Velocity(Km/h)</th>
                    </tr>
                </thead>
                <tbody>
                    {infos.map(info => {
                        return <Info name={info.name} id={info.id} latitude={info.latitude} longitude={info.longitude} altitude={info.altitude} velocity={info.velocity} timestamp={info.timestamp} />
                    })}
                </tbody>
            </table>
        </div>
    );
};

InfoPanel.propTypes = {
    
};

export default InfoPanel;


const issTable = {
    textAlign: "center"
}

const tableContainer = {
    marginTop: 40,
    display: "flex",
    justifyContent: "right",
}







// import React from 'react';
// import PropTypes from 'prop-types';
// import Info from "./Info";
//
// const InfoPanel = ({info}) => {
//     return (
//         <div>
//             <Info name={info.name} id={info.id} latitude={info.latitude} longitude={info.longitude} altitude={info.altitude} velocity={info.velocity} />
//         </div>
//     );
// };
//
// InfoPanel.propTypes = {
//
// };
//
// export default InfoPanel;