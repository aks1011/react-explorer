import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import "./Card.css";

import CustomHook from '../../content/customHook';

const Card = ({ details }) => {

    const getColor = () => {
        return "hsl(" + 360 * Math.random() + ',' +
            (25 + 70 * Math.random()) + '%,' +
            (85 + 10 * Math.random()) + '%)'
    }

    return (
        <div className="card-item" style={{ background: `${getColor()}` }}>
            <div className="card-item-body">
                <Link to="" element={<CustomHook/>}></Link>
                <h5 className="card-item-title">{details.title}</h5>
                <h6 className="card-item-subtitle mb-2 text-muted">{details.description}</h6>
            </div>
        </div>
    )
}

export default Card;