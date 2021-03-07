import React from 'react'
import { OrderNowBtn } from '../common/buttons/OrderNow'
import { PriceIcon } from '../common/PriceIcon'
import pizza1 from "../assets/pizza1.png"

export const Home = () => {
    return (
        <React.Fragment>
            <div className="">
                <img src={pizza1} alt="pizza1"/>
            </div>

            <div className="">
                <h2>Mediterannean Pizza</h2>
                <PriceIcon/>
                <OrderNowBtn/>
            </div>
        </React.Fragment>
    )
}