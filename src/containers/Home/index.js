import React from "react";
import { connect } from "react-redux";
import BottomNav from "../../components/BottomNav";
import CategoryTabs from '../../components/CategoryTabs';
import { HeaderNav } from '../../components/HeaderNav';
import SearchBar from '../../components/SearchBar';
import { goBack } from 'connected-react-router';
import { push } from 'connected-react-router';
import { routes } from '../Router/index';

function Home(props){
    //react hooks

    return (
        <div>
            <HeaderNav onClick={() => props.goBack() } menuText="FutureEats" />
            <SearchBar onClick={() => props.goToSearch() } />
            <CategoryTabs />
            <BottomNav />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    goBack: () => dispatch(goBack()),
    goToSearch: () => dispatch(push(routes.search)),
})

export default connect(null, mapDispatchToProps)(Home)