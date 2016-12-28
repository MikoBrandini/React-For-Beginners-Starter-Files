import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component{
constructor(){
super();

this.addFish = this.addFish.bind(this);
// initial state or known as getinitialState
this.state = {
                  fishes: {},
                  order: {}
};
}

addFish(fish){
              //update our state
              const fishes = {...this.state.fishes};
              //add in new fish:
              const timestamp = Date.now();
              fishes['fish-${timestamp}'] = fish;
              //this.state.fishes.fish1=fish; this could be done but it's not preferred. the more complicate round-about version above is preferred.
              //set state
              this.setState({fishes})
}
render(){
  return(
<div className="catch-of-the-day">
  <div className="menu">
  <Header tagline="Fresh Seafood Market"/>
  </div>
  <Order />
  <Inventory addFish={this.addFish} />
</div>
    )
}
}

export default App;
