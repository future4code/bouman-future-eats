import React from "react";
import { connect } from "react-redux";
import { HeaderNav } from '../../components/HeaderNav';
import SearchBar from '../../components/SearchBar';

function SearchPage(props){
    //react hooks

    return (
        <div>
            <HeaderNav onClick={() => props.goBack() } menuText="Busca" />
            <SearchBar />
            {/* (prosp.searchFilter !== null && restaurant.name.includes(searchFilter)) */}
            <div>Busque por nome de restaurante</div>
        </div>
    )
}

export default connect()(SearchPage)