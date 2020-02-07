import React from "react";
import { connect } from "react-redux";
import BottomNav from "../../components/BottomNav";
import CategoryTabs from '../../components/CategoryTabs';
import { HeaderNav } from '../../components/HeaderNav';
import SearchBar from '../../components/SearchBar';
import {goBack} from 'connected-react-router';

export function Home(props){
    //react hooks

    return (
        <div>
            <HeaderNav onClick={props.goBack} menuText="FutureEats" />
            <SearchBar />
            <CategoryTabs />
            <BottomNav />
        </div>
    ) 
}

const mapDispatchToProps = dispatch => ({
    goBack: () => dispatch(goBack()),
})

export default connect(null, mapDispatchToProps)(Home)