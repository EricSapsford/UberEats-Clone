import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkCreateReview } from "../../store/reviews";
import "./ReviewModal.css"

function CreateReviewModal(restaurantId) {
  const dispatch = useDispatch();
  const [reviewText, setReviewText] = useState("");
  const [stars, setStars] = useState(0);
  const [clicked1, setClicked1] = useState(false)
  const [clicked2, setClicked2] = useState(false)
  const [clicked3, setClicked3] = useState(false)
  const [clicked4, setClicked4] = useState(false)
  const [clicked5, setClicked5] = useState(false)
  const [errors, setErrors] = useState([]);
  const [reviewErrors, setReviewErrors] = useState({});
  const [starErrors, setStarErrors] = useState({});
  const [triggerRerenderToggle, setTriggerRerenderToggle] = useState(false);
  const { closeModal } = useModal();
  const sessionUser = useSelector(state => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let review = {
      restaurantId,
      userId: sessionUser.id,
      reviewText: reviewText,
      stars: stars,
    };

    const data = await dispatch(thunkCreateReview(restaurantId.restaurantId, review));

    if (data) {
      setErrors(data);
    } else {
      closeModal();
    };
    closeModal();
  };

  useEffect(() => {
    if (reviewText.length > 0 && reviewText.length < 10) {
      reviewErrors.reviewText = "Minimum 10 characters";
    } else if (reviewText.length >= 10 && reviewText.length <= 200) {
      reviewErrors.reviewText = "";
    };
    setTriggerRerenderToggle(!triggerRerenderToggle);
  }, [reviewText]);

  useEffect(() => {
    if (reviewText.length > 200) {
      reviewErrors.reviewText = "Maximum 200 characters";
    } else if (reviewText.length >= 10 && reviewText.length <= 200) {
      reviewErrors.reviewText = "";
    };
    setTriggerRerenderToggle(!triggerRerenderToggle);
  }, [reviewText]);

  useEffect(() => {
    if (reviewText.length > 0 && stars === 0) {
      starErrors.stars = "Please select a star rating";
    } else {
      starErrors.stars = "";
    };
    setTriggerRerenderToggle(!triggerRerenderToggle);
  }, [reviewText, stars]);

  useEffect(() => {
  }, [triggerRerenderToggle]);

  return (
    <>
      <div id='createReviewModal'>
        <div id="createReviewHeader">How was your dining experience?</div>
        {/* <div id="reviewLengthNote">Please write at least 10 characters, and select a star rating</div> */}
        <div>
          <textarea
            id="createReviewTextArea"
            placeholder="Leave your review here..."
            onChange={(e) => setReviewText(e.target.value)}>
          </textarea>
          {reviewErrors.reviewText != "" && (<div className="review-error-text">{reviewErrors.reviewText}</div>)}
        </div>
        <div className="createReviewStarsDiv">
          <div id="createReviewStar">
            <div>
              {errors?.errors?.stars && <a>Must give a star rating</a>}
              {!clicked1 && <i className="fa-regular fa-star rev-star" onClick={() => {
                setClicked1(true)
                setStars(1)
              }}></i>}
              {clicked1 && <i className="fa-solid fa-star rev-star" onClick={() => {
                setClicked1(true)
                setClicked2(false)
                setClicked3(false)
                setClicked4(false)
                setClicked5(false)
              }}></i>}
            </div>
            <div>
              {!clicked2 && <i className="fa-regular fa-star rev-star" onClick={() => {
                setClicked1(true)
                setClicked2(true)
                setStars(2)
              }}></i>}
              {clicked2 && <i className="fa-solid fa-star rev-star" onClick={() => {
                setClicked2(false)
                setClicked3(false)
                setClicked4(false)
                setClicked5(false)
              }}></i>}
            </div>
            <div>
              {!clicked3 && <i className="fa-regular fa-star rev-star" onClick={() => {
                setClicked1(true)
                setClicked2(true)
                setClicked3(true)
                setStars(3)
              }}></i>}
              {clicked3 && <i className="fa-solid fa-star rev-star" onClick={() => {
                setClicked3(false)
                setClicked4(false)
                setClicked5(false)
              }}></i>}
            </div>
            <div>
              {!clicked4 && <i className="fa-regular fa-star rev-star" onClick={() => {
                setClicked1(true)
                setClicked2(true)
                setClicked3(true)
                setClicked4(true)
                setStars(4)
              }}></i>}
              {clicked4 && <i className="fa-solid fa-star rev-star" onClick={() => {
                setClicked4(false)
                setClicked5(false)
              }}></i>}
            </div>
            <div>
              {!clicked5 && <i className="fa-regular fa-star rev-star" onClick={() => {
                setClicked1(true)
                setClicked2(true)
                setClicked3(true)
                setClicked4(true)
                setClicked5(true)
                setStars(5)
              }}></i>}
              {clicked5 && <i className="fa-solid fa-star rev-star" onClick={() => {
                setClicked5(false)
              }}></i>}
            </div>
          </div>
          <div>
            {starErrors.stars != "" && (<div className="review-star-error-text">{starErrors.stars}</div>)}
          </div>
          <div id='createReviewButton'>
            <button
              onClick={handleSubmit}
              id={
                (reviewText?.length <= 9 || reviewErrors.reviewText != '' || stars === 0) ?
                  'disabledButton' : 'notDisabledButton'
              }
              disabled={reviewText?.length <= 9 || reviewErrors.reviewText != '' || stars === 0}
            >
              Submit Your Review
            </button>
          </div>
        </div>
      </div>
    </>
  )
}


export { CreateReviewModal };
