import React from "react";
import '../Styles/Footer.css'

export const Footer = ({pathname}) => {

    const color = pathname === '/resume' ? 'gray': 'white'

    return (
        <React.Fragment>
            <div className="footer-box"/>
        </React.Fragment>
    )
}