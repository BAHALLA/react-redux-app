import React from "react";
import { connect } from "react-redux";
function ItemContainer(props) {

    return (
        <div>
            <h1>Items - { props.item }</h1>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {

    const itemState = ownProps.cake ? state.cake.numberOfCake : state.iceCream.numberOfIceCream;

    return {
        item : itemState
    };
};

export default connect(mapStateToProps)(ItemContainer);