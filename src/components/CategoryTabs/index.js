import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
    if(value === id){
      setValue(0)
    }
  }

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
          <Tab onClick={(event) => verifyValue(event, 1)} style={{ width: '100px' }} label="Burger" />
          <Tab onClick={(event) => verifyValue(event, 2)} style={{ width: '100px' }} label="Asiática" />
          <Tab onClick={(event) => verifyValue(event, 3)} style={{ width: '100px' }} label="Massas" />
          <Tab onClick={(event) => verifyValue(event, 4)} style={{ width: '100px' }} label="Árabe" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>{/* props. */restaurants.map(
        (restaurant) => (restaurant.name)
      )}</TabContainer>}

      {value === 1 && <TabContainer>{/* props. */restaurants.filter(
        (restaurant) => (restaurant.category === "Burger")
      ).map(
        (restaurant) => (restaurant.name)
      )}</TabContainer>}

      {value === 2 && <TabContainer>{/* props. */restaurants.filter(
        (restaurant) => (restaurant.category === "Asiática")
      ).map(
        (restaurant) => (restaurant.name)
      )}</TabContainer>}

      {value === 3 && <TabContainer>{/* props. */restaurants.filter(
        (restaurant) => (restaurant.category === "Massas")
      ).map(
        (restaurant) => (restaurant.name)
      )}</TabContainer>}

      {value === 4 && <TabContainer>{/* props. */restaurants.filter(
        (restaurant) => (restaurant.category === "Árabe")
      ).map(
        (restaurant) => (restaurant.name)
      )}</TabContainer>}
    </div>
  );

}

export default withStyles(styles)(CategoryTabs);

const restaurants = [
  {
    "id": "1",
    "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
    "shipping": 6,
    "address": "Rua das Margaridas, 110 - Jardim das Flores",
    "name": "Habibs",
    "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
    "deliveryTime": 60,
    "category": "Árabe"
  },
  {
    "id": "10",
    "address": "Travessa Reginaldo Pereira, 130 - Ibitinga",
    "name": "Tadashii",
    "logoUrl": "http://soter.ninja/futureFoods/logos/tadashii.png",
    "deliveryTime": 50,
    "category": "Asiática",
    "description": "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
    "shipping": 13
  }
]
