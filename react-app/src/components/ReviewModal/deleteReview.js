import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkRemoveReview } from "../../store/reviews";
import { getOneRestaurantThunk } from "../../store/restaurant";
import "./ReviewModal.css"


function DeleteReviewModal({ reviewId }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const keepReview = (e) => {
        e.preventDefault()
        closeModal()
    }

    const deleteReview = async (e, reviewId, restaurantId) => {
        e.preventDefault()
        dispatch(thunkRemoveReview(reviewId))
        dispatch(getOneRestaurantThunk(restaurantId))
        closeModal()
    }
    
    return (
        <>
            <div id='deleteModal'>
                <div className="deleteModalHeader">Confirm Delete</div>
                <div className="deleteModalSecondaryText">
                    <a id='deleteModalSecondaryText'>Are you sure you want to remove this review?</a>
                </div>
                <div id="yesNoButtons">
                    <button type="submit" id='deleteModalYesButton' onClick={(e) => {
                        deleteReview(e, reviewId)
                    }}>Delete My Review</button>
                    <button type="submit" id='deleteModalNoButton' onClick={keepReview}>Keep My Review</button>
                </div>
            </div>
        </>
    );
}


export { DeleteReviewModal };