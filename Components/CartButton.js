import React, { Component } from "react";

import { Button, Icon } from "native-base";

class CartButton extends Component {
  render() {
    return (
      <Button
        light
        transparent
        onPress={() => this.props.navigation.navigate("CartScreen")}
      >
        <Icon name="cart" />
      </Button>
    );
  }
}

export default CartButton;
