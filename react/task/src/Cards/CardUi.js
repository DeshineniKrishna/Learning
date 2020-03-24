import React from 'react'
import './Card-Style.css'

const Card = props =>{
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                 <img src={props.imgsrc} alt="Image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    dvsdf agvsgsf dafasf aafasf dvsdf agvsgsf dafasf aafasf dvsdf agvsgsf dafasf aafasf
                </p>
                <a href="#" className="btn btn-outline-success"> Go There </a>
            </div>
        </div>
    );
}


export default Card;