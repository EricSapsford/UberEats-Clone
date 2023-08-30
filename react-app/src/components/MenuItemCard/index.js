import { Link } from 'react-router-dom';
import './MenuItemCard.css';

export default function MenuItemCard({ menuItem }) {
  return (
    <>
      <Link to={`/menu-items/${menuItem.id}`}>
        <div className='menu-item-card'>
          <div>
            <img className='menu-item-img restaurantImage' src={menuItem.imageUrl}></img>
          </div>
          <div className='menu-item-name'>
            {menuItem.name}
          </div>
          <div className='menu-item-price'>
            ${menuItem.price}
          </div>
        </div>
      </Link>
    </>
  )
};
