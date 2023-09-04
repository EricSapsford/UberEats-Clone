import OpenModalButton from "../OpenModalButton";
import "./Wallet.css"
import DonateToTheDevelopers from "./donateToDev"


function Charity() {
  return (
    <>
    <div className="this-is-a-plea-for-help">
      <p className="pfh-header">It's us. We're the charity.</p>
      <p className="pfh-subheader">help us</p>
      <p className="pfh-footer">please</p>
    </div>
    <div className="charity-top-div">
      <div className="rainbow-div">
        <OpenModalButton
          buttonText="Donate to the developers"
          modalComponent={<DonateToTheDevelopers />}
        />
      </div>
    </div>
    </>
  )
}

export default Charity
