import React, { Component } from "react";

class Wellcome extends Component{
    render() {
        const { name, heroName } = this.props
        return <h1> Wellcome {name} a.k.a {heroName}  </h1>
    }
}
export default Wellcome