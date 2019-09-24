import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataRequest, getPostsRequest, createPostRequest } from './actions/data'; 

class App extends Component {    
  componentDidMount() {
    this.props.getDataRequest();
    this.props.getPostsRequest();
  }

  render() {
    return(
      <div>
        <h1>
          {this.props.data}
          {this.props.posts.map((e,i) => {
            return(
              <div key={i}>{e.msg}</div>
            )
          })}
        </h1>

        <button onClick={() => this.props.createPostRequest({"post": "Random Num Post - "})}>CLick to Add POst</button>
      </div>
    )
  }
}

// redux providing state takeover
const mapStateToProps = (state) => {
    console.log("App State ->", state);
    return {
      data: state.data.test,
      posts: state.data.posts
    }
}
export default connect(mapStateToProps, { getDataRequest, getPostsRequest, createPostRequest })(App)  