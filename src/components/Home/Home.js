import React, { Component } from 'react';
import axios from 'axios';

import './Home.css';


class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      assetToUpload: null,
    }
  }

  postAssetToServer = () => {
    console.log(document.getElementById("assetInput").files[0])
    axios.post('/test', {asset:document.getElementById("assetInput").files[0]}).then(res => {
      console.log(res)
    }).catch(err => {
      alert("Could not process asset upload at this time.")
    })
  }

  render() {
    return (
      <div onClick={this.test} className="home">

        <input id="assetInput" name="asset" type="file" style={{width:"100%", height:"100%", opacity:"1"}}/>
        <button onClick={this.postAssetToServer} style={{}}>Upload</button>

        <form action="/test" method="post" encrypt="multipart/form-data">  
          <input type="file" name="asset" />
          <input type="submit" />
        </form> 


      </div>
    );
  }
}


export default Home;