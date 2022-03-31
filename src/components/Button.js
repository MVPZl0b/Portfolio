import React from 'react'
import { styled } from '@stitches/react';


const Btn = styled('button', {
    padding: '8px 20px',
    borderRadius: '4px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Orbitron',

    '&.btn-primary': {
        backgroundColor: '#fff',
        color: "#242424",
        border: "1px solid #fff"
    },
    '&.btn--outline': {
        backgroundColor: 'transparent',
        color: '#fff',
        border: '1px solid #fff',
        transition: 'all 0.3s ease-out',
    },
    variants: {
        color: {
            red: {
                backgroundColor: "#f00946",
                '&:hover': {
                    border: 'none',
                    color: "#242424",
                    backgroundColor: "#009688"
                }
            },
            blue: {
                backgroundColor: "#276afb"
            },
            green: {
                backgroundColor: "#25ce4a"
            },
            primary: {
                backgroundColor: "#242424",
                '&:hover': {
                    border: 'none',
                    color: "#242424",
                    backgroundColor: "#fff"
                }
            },
            none: {
                backgroundColor: "transparent",
                '&:hover': {
                    color: "#242424",
                    backgroundColor: "#fff"
                }
            },
        },
        size: {
            medium: {
                padding: "8px 20px",
                fontSize: "18px"
            },
            mobile: {
                textAlign: "center",
                borderRadius: "4px",
                width: "80%",
                textDecoration: "none",
                fontSize: "1.5rem",
                backgroundColor: "transparent",
                color: "#fff",
                padding: "14px 20px",
                border: "1px solid #fff",
                transition: "all 0.3s ease-out"
            },
            large: {
                padding: "12px 26px",
                fontSize: "20px"
            },
            wide: {
                padding: "12px 64px",
                fontSize: "20px",
                '&:hover': {
                    color: "#fff",
                    backgroundColor: "#f00946",
                    transition: "all 0.2s ease-out"
                }
            }
        }
    },
    defaultVariants: {
        color: 'none',
        size: 'medium',
    }
})

const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor }) => {
    return (
        <Btn
            className={buttonStyle}
            size={buttonSize}
            color={buttonColor}
            onClick={onClick}
            type={type}>{children}
        </Btn>
    )
}

export default Button