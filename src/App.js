import React, {Component} from 'react';
import Body from './Components/lib/Body/Body';

class App extends Component{
  render(){
    return(
      <div>
        <Body
        img = "avengers3.jpg"
        judul ="AVENGERS INFINITY WAR"
        desc ="film ini sangat menarik"
        />
        <Body
        img = "avengers.jpg"
        judul ="AVENGERS INFINITY WAR"
        desc ="film ini sangat menarik"
        />
        <Body
        img = "avengers.jpg"
        judul ="AVENGERS INFINITY WAR"
        desc ="film ini sangat menarik"
        />
        <Body
        img = "avengers3.jpg"
        judul ="AVENGERS INFINITY WAR"
        desc ="film ini sangat menarik"
        />
        <Body
        img = "avengers.jpg"
        judul ="AVENGERS INFINITY WAR"
        desc ="film ini sangat menarik"
        />
        <Body
        img = "avengers3.jpg"
        judul ="AVENGERS INFINITY WAR"
        desc ="film ini sangat menarik"
        />
      </div>
    );
  }
}

export default App;