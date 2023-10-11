import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";
import '../ManageAccount/ManageAccount.css';
import OpenModalButton from "../OpenModalButton";
import "./Wallet.css";
import { useEffect } from 'react';
import DonateToTheDevelopers from "./donateToDev";
import Charity from './charity';

function WalletLandingPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const wallet = useSelector(state => state.session.user.wallet);

  const addMonies = (e) => {
    dispatch(sessionActions.updateCurrentWalletThunk(100000))
  };

  useEffect(() => {
    dispatch(sessionActions.getCurrentWalletThunk());
    // dispatch(sessionActions.updateCurrentWalletThunk(amount));
  }, [dispatch, wallet]);

  return (
    <>
      <div className='wallte-overdiv'>
        <div className="wallet-top-div">
          <div className='wallet-user-name-div'>
            {sessionUser.firstName} {sessionUser.lastName}{sessionUser.lastName.length - 1 === "s" ? "'" : "'s"} Wallet
          </div>
          <div className="wallet-current-ammount">
            Current Amount:
          </div>
          <div className="wallet-number">
            $ {(+sessionUser.wallet).toLocaleString()}
          </div>
          <div>
            {/* <OpenModalButton
            className="get-more-button"
            buttonText="Get More"
            modalComponent={<Maze />}
          /> */}
            <button onClick={addMonies}>Get More</button>
          </div>
          {/* <div>
        <OpenModalButton
            buttonText="Donate to charity"
            modalComponent={<Charity />}
          />
        </div> */}
          <div className="rainbow-div">
            <OpenModalButton
              buttonText="Donate to the developers"
              modalComponent={<DonateToTheDevelopers />}
            />
          </div>
        </div>
      </div>
    </>
  )
};

export default WalletLandingPage;
