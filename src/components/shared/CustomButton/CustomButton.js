import React from 'react';

const CustomButton = ({ title, icon, backgroundColor, color, border }) => {
    return (
        <>
            <button style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: 'Source Sans Pro',
                backgroundColor: backgroundColor,
                border: border,
                borderRadius: " 5px",
                color: color,
                fontSize: "16px",
                width: "140px",
                height: "50px",
            }} ><span style={{ fontSize: "22px" }} > {icon}</span>{title}<span></span></button>
        </>
    );
};

export default CustomButton;