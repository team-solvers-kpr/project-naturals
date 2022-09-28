import React from 'react';

const CustomButton = ({ title, icon }) => {
    return (
        <>
            <button style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: 'Source Sans Pro',
                backgroundColor: "#ffffff",
                border: "2px solid #00a651",
                borderRadius: " 5px",
                color: "#00a651",
                fontSize: "16px",
                width: "140px",
                height: "50px",
            }} ><span style={{ fontSize: "22px" }} > {icon}</span>{title}<span></span></button>
        </>
    );
};

export default CustomButton;