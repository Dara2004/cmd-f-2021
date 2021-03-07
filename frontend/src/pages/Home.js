import React from 'react'
import { OrderNowBtn } from '../common/buttons/OrderNow'
import { PriceIcon } from '../common/PriceIcon'
import pizza1 from "../assets/pizza1.png"

export const Home = () => {
    return (
        <div className="home">
            <div className="homeLeft">
                <img src={pizza1} alt="pizza1"/>
            </div>

            <div className="homeRight">
                <h2>Mediterannean Pizza</h2>
                <PriceIcon/>
                <OrderNowBtn/>
            </div>
        </div>
    )
}