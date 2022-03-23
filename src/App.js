import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  // apikey = "85a03d2ac05e4f84a8a6ac0aa44636b0";//ashishmane30012000@gmail.com
  // apikey = "d093e0fd42d8435699c24f74287bcbc1";//ashishmane300100@gmail.com
  // apikey = "b5405c71a27e46bf8af4612ce43afe74";//merner300100@gmail.com
  apikey=process.env.REACT_APP_NEWS_API_API_KEY;
   
  pagesize=5;
 state={
   progress:0
 }
  setProgress=(x)=>{
    this.setState({
      progress:x
    })
  }
  render() {
    return (
      <div>
         <BrowserRouter>
          <Navbar />
          <LoadingBar
        color='black'
        height={4}
        progress={this.state.progress}
        // height='3'
       />
          <Routes>
              {/* <Route exact path="/"          element={<News key="general"apikey={this.apikey} category={"general"} country="in" pagesize={9} />}></Route> */}
              {/* this  is also an correct syntax for using router */}
 
              <Route     path="/"                 element={<News setProgress={this.setProgress} key="general"    apikey={this.apikey}      category={"general"}        country="in"     pagesize={this.pagesize} />} />
              <Route     path="/sports"           element={<News setProgress={this.setProgress}  key="sports"   apikey={this.apikey}    category={"sports"}        country="in"         pagesize={this.pagesize} />} />
              <Route     path="/business"         element={<News setProgress={this.setProgress}  key="business"    apikey={this.apikey}     category={"business"}        country="in"     pagesize={this.pagesize}/>} />
              <Route     path="/health"           element={<News setProgress={this.setProgress}  key="health"    apikey={this.apikey}    category={"health"}        country="in"       pagesize={this.pagesize} />} />
              <Route     path="/technology"       element={<News setProgress={this.setProgress}  key="technology"    apikey={this.apikey}    category={"technology"}        country="in"     pagesize={this.pagesize} />} />
              <Route     path="/science"          element={<News setProgress={this.setProgress}  key="science"   apikey={this.apikey}     category={"science"}        country="in"     pagesize={this.pagesize} />} />
              <Route     path="/entertainment"    element={<News setProgress={this.setProgress}  key="entertainment"   apikey={this.apikey}    category={"entertainment"}   country="in"     pagesize={this.pagesize} />} />
          </Routes>
        </BrowserRouter>



      </div>

    )
  }
}
