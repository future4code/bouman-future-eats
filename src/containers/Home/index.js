import React from "react";
import { connect } from "react-redux";
import BottomNav from "../../components/BottomNav";
import CategoryTabs from '../../components/CategoryTabs';

function Home(){
    //react hooks

    return (
        <div>
            <CategoryTabs />
            <BottomNav />
        </div>
    )
}

export default connect()(Home)