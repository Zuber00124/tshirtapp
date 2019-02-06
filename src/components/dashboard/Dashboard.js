import React, { Component } from "react"
import Display from "../design/Display"
import Settings from "../design/Setting"

class Dashboard extends Component {
  state = {
    tshirtColor: "black",
    upperText: "This is Upper Text",
    lowerText: "This is lower Text",
    memeImg: ""
  }

  handleTshirtColor = e => {
    this.setState({ tshirtColor: e.target.id })
  }

  handleupperText = e => {
    this.setState({ upperText: e.target.value })
  }

  handleLowerText = e => {
    this.setState({ lowerText: e.target.value })
  }

  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <Display display={this.state} />
          </div>
          <div className="col-lg-4">
            <Settings
              color={this.handleTshirtColor}
              upperText={this.handleupperText}
              lowerText={this.handleLowerText}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
