import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { thunkGetReviews } from "../../store/reviews";
import OpenModalButton from "../OpenModalButton"
import { CreateReviewModal } from "../ReviewModal/createReview"
import { DeleteReviewModal } from "../ReviewModal/deleteReview";
import "./ReviewCard.css"

export default function ReviewCard() {
  const dispatch = useDispatch()
  const { restaurantId } = useParams()
  const reviews = useSelector(state => state.reviews)
  const sessionUser = useSelector(state => state.session.user)
  const restaurant = useSelector(state => state.restaurant.singleRestaurant)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchReviews = async () => {
      await dispatch(thunkGetReviews(restaurantId))
      setIsLoaded(true)
    }
    fetchReviews()
  }, [dispatch, restaurantId]);

  const reviewList = Object.values(reviews.reviews)
  const reviewUserIds = reviewList.map(review => review.userId)


  return (
    <>
      {isLoaded && (
        <>
          {reviewList.length === 0 ? (
            <>
              <h2 id="reviewHeader">Reviews</h2>
              <div id='noReviewMessage'>
                This restaurant has no reviews. Be the first to try it and let everyone know what you think!
              </div>
            </>
          ) : (
            <>
              <h2 id="reviewHeader">Reviews</h2>
              {!reviewUserIds.includes(sessionUser?.id) && (sessionUser?.id != restaurant?.ownerId) && (sessionUser != null) && (
                <div className="reviewModalButton leaveReviewButton">
                  <OpenModalButton
                    buttonText="Leave a review"
                    modalComponent={<CreateReviewModal restaurantId={restaurantId} />} />
                </div>)}
              {reviewList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((review) => (
                <div key={review.id} className="reviewDiv">
                  <div id="reviewStarsDiv">
                    {review.user.firstName} • <i className="fa-solid fa-star"></i> {review.stars.toFixed(1)}
                  </div>
                  <div id="reviewDateDiv">
                    {review.createdAt.slice(5, -13)}
                  </div>
                  {reviewUserIds.includes(sessionUser?.id) && review.userId === sessionUser.id && (
                    <div className="reviewModalButton deleteReviewButton"><OpenModalButton
                      buttonText="Delete Review"
                      modalComponent={<DeleteReviewModal reviewId={review.id} restaurantId={restaurantId} />} />
                    </div>)}
                  <div id="reviewTextDiv">
                    {review.reviewText}
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </>
  )
}
