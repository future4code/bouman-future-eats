import React from "react";
import { connect } from "react-redux";
import { HeaderNav } from '../../components/HeaderNav';
import SearchBar from '../../components/SearchBar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { goBack } from 'connected-react-router';
import { RestaurantCard } from '../../components/RestaurantCard';

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`
function SearchPage(props) {
    //react hooks
    const [restaurantName, setName] = React.useState("")

    if (restaurantName) {
        return (
            <div>
                <HeaderNav onClick={() => props.goBack()} menuText="Busca" />
                <SearchBar
                    value={restaurantName}
                    onChange={(ev) => (setName(ev.target.value))}
                />
                <Text>
                    <Typography variant="h6">
                        Busque por nome de restaurante
                        </Typography>
                </Text>

                <div>
                    {props.restaurantList.filter((restaurant) => restaurant.name.includes(restaurantName))
                        .map(
                            (restaurant) => <RestaurantCard
                                name={restaurant.name}
                                category={restaurant.category}
                                photoUrl={restaurant.logoUrl}
                                shipping={restaurant.shipping}
                                deliveryTime={restaurant.deliveryTime}
                                onclick={() => props.getRestaurantDetails(restaurant.id)}
                            />
                        )}
                </div>
            </div>
        )
    } if (setName) {
        return (
            <div>
                <HeaderNav onClick={() => props.goBack()} menuText="Busca" />
                <SearchBar
                    value={restaurantName}
                    onChange={(ev) => (setName(ev.target.value))}
                />
                <Text>
                    <Typography variant="h6">
                        Busque por nome de restaurante
                        </Typography>
                </Text>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        restaurantList: state.restaurants.restaurantList,
    })
}

const mapDispatchToProps = dispatch => ({
    goBack: () => dispatch(goBack()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)