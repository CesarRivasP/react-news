import React, { Component, Fragment } from 'react';
import Header from './components/header';


class App extends Component {
  state = {
    news: []
  }

  componentDidMount(){
    this.consultNews();
  }

  consultNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=ve&category=business&apiKey=1c8bbef6a2b344ac9044935d122d88bf`;

    const response = await fetch(url);

    const news = await response.json();

    this.setState({
      news: news.articles
    })
  }

  render(){
    return (
      <Fragment>
        <Header title="Noticias" />

        <div className="container white news-container">

        </div>
      </Fragment>
    );
  }
}

export default App;
