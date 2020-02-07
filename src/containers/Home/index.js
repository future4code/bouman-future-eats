import React from "react";
import { connect } from "react-redux";
import BottomNav from "../../components/BottomNav";
import CategoryTabs from '../../components/CategoryTabs';
import { HeaderNav } from '../../components/HeaderNav';
import SearchBar from '../../components/SearchBar';
import { goBack } from 'connected-react-router';
import { push } from 'connected-react-router';
import { routes } from '../Router/index';
import OngoingOrder from "../../components/OngoingOrder";
import { getActiveOrder } from '../../actions/orders'

export function Home(props) {
    //react hooks
    React.useState(
        () => props.getActiveOrder()
        , []
    )
    return (
        <div>
            <HeaderNav onClick={() => props.goBack()} menuText="FutureEats" />
            <SearchBar onClick={() => props.goToSearch()} />
            <CategoryTabs />
            {props.activeOrder && <OngoingOrder restaurant={props.activeOrder.restaurantName} totalPrice={props.activeOrder.totalPrice} />}

            <BottomNav />
        </div>
    )
}

const mapStateToProps = state => ({
    activeOrder: state.orders.active
})

const mapDispatchToProps = dispatch => ({
    goBack: () => dispatch(goBack()),
    goToSearch: () => dispatch(push(routes.search)),
    getActiveOrder: () => dispatch(getActiveOrder())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)