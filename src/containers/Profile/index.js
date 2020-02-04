import React from "react";
import { connect } from "react-redux";
import BottomNav from "../../components/BottomNav";
import { HeaderNav } from "../../components/HeaderNav";

function Profile(props){
    //react hooks

    return (
        <div>
            <HeaderNav display='none' menuText='Perfil'/>
            <BottomNav />
        </div>
    )
}

export default connect()(Profile)