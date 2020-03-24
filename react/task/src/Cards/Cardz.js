import React, { Component } from 'react'
import { withRouter } from "react-router";
import Card from './CardUi'

import img1 from '../Pics/1.jpg'
import img2 from '../Pics/2.jpg'
import img3 from '../Pics/3.jpg'

class Cardz extends Component {

    // goToCarddetails = (cardId) => {
    //     localStorage.setItem("selectedCard", cardId);
    //     this.props.history.push('/card-details');
    // }

    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="HeLlO"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="h_E_llo"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="___hello"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cardz
