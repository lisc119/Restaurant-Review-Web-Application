import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { HomepageContainer } from "./style";
import { Navbar } from "../Header";
import SearchForm from "../serachRestaurant/SearchRestaurant";
import { RestaurantsList } from "../restaurant/RestaurantsList";
import Footer from "../Footer/footer.js";
import { getBestRestaurantsAction } from "../../store/actions/restaurantAction";

const Homepage = () => {
  const restaurants = useSelector(
    (state) => state.restaurants.best_restaurants
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (restaurants == null) {
      dispatch(getBestRestaurantsAction);
    }
  }, [dispatch, restaurants]);

  if (restaurants == null) {
    return <p>Loading restaurants...</p>;
  }

  return (
    <>
      <HomepageContainer>
        <Navbar />
        <SearchForm />
        <RestaurantsList restaurants={restaurants} />
        <Footer />
      </HomepageContainer>
    </>
  );
};

export default Homepage;
