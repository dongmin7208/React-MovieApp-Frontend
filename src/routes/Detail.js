import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    console.log(location.state);
  }
  render() {
    return <span>connection</span>;
  }
}

export default Detail;
