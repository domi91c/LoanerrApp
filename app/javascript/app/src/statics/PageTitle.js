//Import Dependencies Here
import React, { Component } from 'react';

class PageTitle extends Component {
  render() {
    return (
       <div>
            <h2 style = {{marginLeft: 50 }}>Page Title Text</h2>
            <p className="text-muted" style = {{marginLeft: 50 }} >Page Subtitle Text</p>
            <hr style = {{ marginBottom: 0 }}/>
       </div>
    );
  }
}

export default PageTitle;
