import React from "react";
import {buyIceCream} from "../redux";
import { connect } from "react-redux";

function IceCreamComponent(props) {

    return (
        <div>
            <h1> Number of iceCream - { props.numberOfIceCream }</h1>
            <button onClick={ props.buyIceCream }>buy iceCream</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        numberOfIceCream: state.iceCream.numberOfIceCream
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => { dispatch(buyIceCream())}
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamComponent);