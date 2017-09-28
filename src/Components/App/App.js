import React, { Component } from "react";

import { Header } from "../../Components";

class App extends Component{
    render () {
        return [
            <Header />,
            <Navbar />,
            <Route exact path="/posts/:key" component={ Posts } />,
        ];
    }
}

export default App;