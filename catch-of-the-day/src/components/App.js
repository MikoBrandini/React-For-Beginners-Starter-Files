import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component{
constructor(){
super();

this.addFish = this.addFish.bind(this);
this.loadSamples = this.loadSamples.bind(this);
this.addToOrder = this.addToOrder.bind(this);
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

loadSamples(){
  this.setState({
    fishes: sampleFishes
  })
}

addToOrder(key){
//take a copy of our state
const order = {...this.state.order};
//update or add the new number of fish ordered
order[key] = order[key] + 1 || 1;
//update or state
this.setState({order: order});
}

render(){
  return(
<div className="catch-of-the-day">
  <div className="menu">
  <Header tagline="Fresh Seafood Market"/>
  <ul className="list-of-fishes">
    {
      Object
        .keys(this.state.fishes)
        .map(key => <Fish key={key} index={key}
          details={this.state.fishes[key]}

        addToOrder={this.addToOrder} />)

    }
  </ul>
  </div>
  <Order />
  <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
</div>
    )
}
}

export default App;
