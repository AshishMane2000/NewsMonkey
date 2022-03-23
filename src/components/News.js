import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }
  articlesz =
    [ ]
  constructor() {
    super();
     this.state = {
      articles: this.articlesz,
      page: 1,
      loading: false,
      totalresults: 0

    }
  }
  async updateNews() {
    this.props.setProgress(33);
     let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pagesize}&page=${this.state.page}`);
    let parseddata = await data.json();//convert received data into json format....
    this.setState({
      articles: parseddata.articles,
      totalresults: parseddata.totalresults,
      })    
     this.props.setProgress(100);

  }
 
  fetchMoreData = async () => {
    
    this.setState({ page: this.state.page+1 })
     let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pagesize}&page=${this.state.page}`);
    let parseddata = await data.json();//convert received data into json format....
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      page: this.state.page,
      loading: false
    })
  };


  // this function works after the first return  
  async componentDidMount() {
    this.updateNews();
  }
  render() {
    return (
      <>
        <h2 className='d-flex justify-content-center my-4 poppins'>NewsMonkey -{this.props.category !== "general" ? this.props.category : "top"} HeadLines</h2>
        {this.state.loading && <Spinner />}


        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalresults}
          loader={<Spinner />}
        >
          <div className='container  bg-light'>
          <div className="row mb-3">
            {!this.state.loading && this.state.articles.map((element) =>
              <div key={element.url} className='col-md-4  mb-3'>
                <Newsitem title={element.title} description={element.description} url={element.url} imageurl={element.urlToImage} author={element.author} date={element.publishedAt} publisher={element.source.name} />
              </div>
            )}
          </div></div>
        </InfiniteScroll>


      </>

    )
  }
}

export default News