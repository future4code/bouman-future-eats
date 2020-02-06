import React from "react";
import { connect } from "react-redux";
import BottomNav from "../../components/BottomNav";
import CategoryTabs from '../../components/CategoryTabs';
import { HeaderNav } from '../../components/HeaderNav';
import SearchBar from '../../components/SearchBar';

export function Home(props){
    //react hooks

    return (
            <div>
                <HeaderNav onClick={() => props.goBack() } menuText="FutureEats" />
                <SearchBar />
                <CategoryTabs />
                <BottomNav />
          </div>
    )
}

export default connect()(Home)