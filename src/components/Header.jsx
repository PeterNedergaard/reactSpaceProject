import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return <header style={header}>
        <h1 style={text}>{title}</h1>
    </header>
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header

const header = {
    width: "100%",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#d9d9d9",
    fontFamily: 'Trebuchet MS',
}

const text = {
    color: "black",
}