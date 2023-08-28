import MenuItemForm from '../MenuItemForm';

export default function MenuItemFormCreate() {

    let menuItem = {
        name: '',
        type: '',
        price: '',
        description: '',
        imageUrl: ''
    }

    return (
        <MenuItemForm menuItem={menuItem} formType='Create Menu Item' />
    );
};
