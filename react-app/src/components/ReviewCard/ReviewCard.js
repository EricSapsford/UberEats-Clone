import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { thunkGetReviews } from "../../store/reviews";


function ReviewCard() {
    const dispatch = useDispatch()
    const restaurantId = useParams()
    const reviews = useSelector(state => state.reviews)
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const getUser = async () => {
        const res = await fetch('/api/session', {
            method: "GET"
        })
        if (res.ok) {
            const user = await res.json()
            return user
        }
    }

    useEffect(() => {
        dispatch(thunkGetReviews(restaurantId))
        getUser().then(user => {
            setCurrentUser(user)
            setIsLoaded(true)
        })
    }, [dispatch, restaurantId])

    return (
        <>
        { <div>
            
        </div>}
            {isLoaded && (reviews.map((review) => (
                <>
                    <div>
                        {currentUser.username} • <i className="fa-solid fa-star"></i>{review.stars.toFixed(1)}
                    </div>
                    <div>
                        {review.createdAt}
                    </div>
                    <div>
                        {review.reviewText}
                    </div>
                </>
            )))}
        </>
    )
}

export default ReviewCard;