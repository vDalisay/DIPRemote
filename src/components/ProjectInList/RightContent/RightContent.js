import React from "react";
import "./RightContent.css"

const RightContent = props => {
    let content;
    if (props.isImage){
        content =
            <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Trulli" className="imgStyle" />
    } else {
        content =
            <p>Augmented Reality suits the furniture/interior business perfectly. It is also a fine tool for personalization of customer needs...</p>
    }

    return(
        <div>
            <div className="rightContentPad">
                {content}
            </div>
        </div>
        )
}

export default RightContent;