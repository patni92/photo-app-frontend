import React, { Component } from "react";

class InfiniteScroll extends Component {
  state = {
    freeze: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  unfreeze = () => setTimeout(() => this.setState({ freeze: false }), 100);

  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !this.props.isLloading &&
      !this.state.freeze
    ) {
      this.setState({
        freeze: true
      });
      this.unfreeze();
      this.props.paginate();
    }
  };

  render() {
    return this.props.children;
  }
}

export default InfiniteScroll;
