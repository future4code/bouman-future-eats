import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { RestaurantCard } from '../RestaurantCard'
import { connect } from 'react-redux'
import { getRestaurants, getRestaurantDetails } from '../../actions/restaurants'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '95%',
  },
});

function CategoryTabs(props) {

  const [value, setValue] = useState(0)
  const [category, setCategory] = useState("Todos")

  const handleChange = (event, value) => {
    setValue(value)
  };

  const verifyValue = (event, id) => {
    if (value === id) {
      setValue(0)
    }
  }

  React.useEffect(
    () => props.getRestaurants(),
    []
  )

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="main"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab style={{ width: '100px' }} label="Todos" />
          <Tab onClick={(event) => verifyValue(event, 1)} style={{ width: '100px' }} label="Burguer" />
          <Tab onClick={(event) => verifyValue(event, 2)} style={{ width: '100px' }} label="Asiática" />
          <Tab onClick={(event) => verifyValue(event, 3)} style={{ width: '100px' }} label="Italiana" />
          <Tab onClick={(event) => verifyValue(event, 4)} style={{ width: '100px' }} label="Árabe" />
        </Tabs>
      </AppBar>
      <TabContainer>{props.restaurantList.filter(
        (restaurant) => (
          value === 0 || 
          (value === 1 && restaurant.category === "Hamburguer") ||
          (value === 2 && restaurant.category === "Asiática") ||
          (value === 3 && restaurant.category === "Italiana") ||
          (value === 4 && restaurant.category === "Árabe") 
        //  ||          (prosp.searchFilter !== null && restaurant.name.includes(searchFilter))
        )  
      ).map(
        (restaurant) => <RestaurantCard
          name={restaurant.name}
          category={restaurant.category}
          photoUrl={restaurant.logoUrl}
          shipping={restaurant.shipping}
          deliveryTime={restaurant.deliveryTime}
          onclick={() => props.getRestaurantDetails(restaurant.id)}
        />
      )}</TabContainer>     
    </div>
  );

}

function mapStateToProps(state) {
  return ({
    restaurantList: state.restaurants.restaurantList,
  })

}

const mapDispatchToProps = dispatch => ({
  getRestaurants: () => dispatch(getRestaurants()),
  getRestaurantDetails:  (id) => dispatch(getRestaurantDetails(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTabs);

