import React from "react";
import { connect } from "react-redux";
import BottomNav from "../../components/BottomNav";

function Home(){
    //react hooks

    return (
        <div>
            <BottomNav />
        </div>
    ) 
}

export default connect()(Home)