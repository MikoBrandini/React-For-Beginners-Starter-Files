import React from 'react';

class StorePicker extends React.Component{
render(){
  //This is how one comments outside JSX, regular JS.
  return (
<form className="store-selector">
{/*{This is how one comments inside JSX*/ }
<h2>Please Enter A Store</h2>
<input type="text" required placeholder="Store Name"/>
<button type="submit">Visit Store</button>
</form>
    )

  }
}

export default StorePicker;
