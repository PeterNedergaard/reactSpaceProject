import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
    return (
        <footer style={footer}>

        </footer>
    );
};

Footer.propTypes = {

};

export default Footer;

const footer = {
    width: "100%",
    height: "80px",
    display: "flex",
    marginTop: 40,
    justifyContent: "center",
    background: "#d9d9d9",
    fontFamily: 'Trebuchet MS',
}