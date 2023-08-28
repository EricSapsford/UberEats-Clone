import MenuItemForm from '../MenuItemForm';

export default function MenuItemFormUpdate() {

    let menuItem = {
        name: '',
        type: '',
        price: '',
        description: '',
        imageUrl: ''
    }

    return (
        <MenuItemForm menuItem={menuItem} formType='Update Menu Item' />
    );
};
