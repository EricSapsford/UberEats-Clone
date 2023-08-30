import MenuItemForm from '../MenuItemForm';

export default function MenuItemFormCreate({ restIdAsNum }) {

    let menuItem = {
        name: '',
        type: '',
        price: '',
        description: '',
        imageUrl: '',
        restaurantId: restIdAsNum,
    }

    return (
        <MenuItemForm
            formType='Create Menu Item'
            menuItem={menuItem}
        />
    )
};
