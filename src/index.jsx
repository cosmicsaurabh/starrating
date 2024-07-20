import { useState } from "react";
import "./styles.css"
import { FaStar } from "react-icons/fa";

export default function StarRating({noOfStars = 5}){
    const [rating, setRating] = useState(0);
   const [hover, setHover] = useState(0);
    console.log("Saddgag")
    function handleClickStar(getCurrentIndex){
        setRating(getCurrentIndex)
    }
    function handleMouseHoverEntry(getCurrentIndex){
        setHover(getCurrentIndex)
    }
    function handleMouseHoverLeave(getCurrentIndex){
        setHover(rating)
    }

    return(
        <div className="outerbox">
        <div className="star-rating">
            {[...Array(noOfStars)].map((_, index) =>{
                index += 1;
                return (
                    <FaStar
                    key = {index}
                    className = {index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick= {() => handleClickStar(index)}
                    onMouseMove = { () => handleMouseHoverEntry(index)}
                    onMouseLeave = { () => handleMouseHoverLeave()}
                    size = {60}

                    />
                );
            })}
        </div>
        </div>
    )
}