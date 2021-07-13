import React from 'react';
import Movie from '../components/Movie';
import './Detail.css';

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
              
              date_uploaded={location.state.date_uploaded}
              title_long={location.state.title_long}
              rating={location.state.rating}
              runtime={location.state.runtime}
              language={location.state.language}
            />
          </div>
          <div className="movies__detail">
            <p>[応用] - より詳しい項目list(cssなし)</p>
            <h1>アップロード日付:{location.state.date_uploaded}</h1>
            <h2>詳しいタイトル:{location.state.title_long}</h2>
            <h3>点数:{location.state.rating}</h3>
              <h4>上映時間:{location.state.runtime}</h4>
              <h4>映画国家言語:{location.state.language}</h4>
          </div>
          
        </section>
      )
    } else {
      return null;
    }
  }
}

export default Detail;
