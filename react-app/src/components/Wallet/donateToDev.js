import { useState } from 'react';
import "./Wallet.css"


function DonateToTheDevelopers() {

  const [ favorite, setFavorite ] = useState();


  return (
    <>
      <div className="donate-to-dev-div">
        <div className='donate-to-dev-words'>
          {"Thank you for supporting your local(host) developers!"}
        </div>
        <div>
        { favorite === "will" ? <p className='donate-to-dev-p'>https://venmo.com/u/Will-Campbell-19</p> : <button className='donate-to-dev-button' onClick={() => setFavorite("will")}>Will Campbell</button>}
        </div>
        <div>
        { favorite === "erica" ? <p className='donate-to-dev-p'>https://venmo.com/u/EricaMaranowski</p> : <button className='donate-to-dev-button' onClick={() => setFavorite("erica")}>Erica Maranowski</button>}
        </div>
        <div>
        { favorite === "josh" ? <p className='donate-to-dev-p'>https://venmo.com/u/joshpas24</p> : <button className='donate-to-dev-button' onClick={() => setFavorite("josh")}>Josh Pascual</button>}
        </div>
        <div>
        { favorite === "eric" ? <p className='donate-to-dev-p'>https://venmo.com/u/Eric-Sapsford</p> : <button className='donate-to-dev-button' onClick={() => setFavorite("eric")}>Eric Sapsford</button>}
        </div>
      </div>
    </>
  )
}

export default DonateToTheDevelopers
