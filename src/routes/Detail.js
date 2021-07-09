import React from 'react';
import Movie from '../components/Movie';
import './Home.css';

class Detail extends React.Component {

  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  
  render() {
    const { location } = this.props;
    if (location.state) {
      // return <span>{location.state.title}</span>;
      return (
        <section className="container">
          <div className="movies">
            <Movie
              id={location.state.id}
              year={location.state.year}
              title={location.state.title}
              summary={location.state.summary}
              poster={location.state.poster}
              genres={location.state.genres}
            />
          </div>
        </section>
      )
    } else {
      return null;
    }
  }
}

export default Detail;
