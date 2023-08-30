import RestaurantForm from "../RestaurantForm";

function RestaurantFormCreate() {

  let restaurant = {
    name: "",
    streetAddress: "",
    category: "",
    priceRange: "",
    imageUrl: "",
  }

  return (
    <RestaurantForm restaurant={restaurant} formType="Create Restaurant" />
  )
}

export default RestaurantFormCreate
