import React from "react";


class CardDetails extends React.Component {

render() {
    let selectedCardId = localStorage.getItem("selectedCard");
    return ( <div>
        card details here
       </div>
    )
  }
}

export default CardDetails;