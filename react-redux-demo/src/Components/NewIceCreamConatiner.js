import React, { useState } from "react";
import { buyIceCream } from "../Redux/indux";
import { connect } from "react-redux";

const NewIceCreamContainer = (props) => {
    const [num, setNum] = useState(1);
  return (
    <div>
      <h2>Number of IceCreams: {props.numOfIceCream}</h2>
      <input type='text' value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => props.buyIceCream(num)}>Buy {num} Ice Cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: (num) => dispatch(buyIceCream(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewIceCreamContainer);
