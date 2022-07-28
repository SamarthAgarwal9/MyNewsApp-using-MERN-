// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'

// export default class NewsComponent extends Component {
//   static defaultProps = {
//     country: 'in',
//     pageSize:3,
//     category:"general"
//   }
//   static propTypes = {
//     pageSize: PropTypes.number,
//     country:PropTypes.string,
//     category:PropTypes.string,
//   }
//   articles=[]
//   constructor(props){
//     super(props);
//     this.state={
//       articles: this.articles,
//       loading:false,
//       page:1,
//       pageSize:5
//     }
//     document.title=`${this.capitalizeFirstLetter(this.props.category)}`;
//   }
//   async updateNews(){
//     this.props.setProgress(20);
//     const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2b67e55fae840b6bd5b82dc271a12a1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     let data=await fetch(url);
//     this.props.setProgress(60);
//     this.setState({loading:true});
//     let parsedData=await data.json();
//     this.props.setProgress(0);
//     this.setState({
//       articles:parsedData.articles,
//       totalResults:parsedData.totalResults,
//       loading :false
//     })
//     this.props.setProgress(100);
//   }
//   async componentDidMount(){
//       this.updateNews();
//   }
//   clickPrevBtn= async()=>{
//     this.setState({page:this.state.page -1});
//     this.updateNews();
//   }
//   clickNextBtn=async ()=>{
//     this.setState({page:this.state.page +1})
//     this.updateNews();
//   }
//    capitalizeFirstLetter=(string)=> {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
//   render() {
//     return (
//       <div className='container my-5'>
//         <h3 className="text-center">NewsApp -:The {this.capitalizeFirstLetter(this.props.category)} News</h3>
//         {this.state.loading &&<Spinner/>}
//         <div className="row">
//         {!this.state.loading && this.state.articles.map((element)=>{
//         return <div className="col-md-4 my-5"  key={element.url?element.url:""}>
//           <NewsItem title={element.title?element.title:"Tesla Stock Streaked Past $1,000. Exactly Why Is a Puzzle."} description={element.description?element.description:"The stock is up for the seventh consecutive session on Wednesday. Interest rates are a headwind and Wall Street research doesn't seem to be playing a role."}  urlToImage={!element.urlToImage?"https://images.barrons.com/im-510394/social":element.urlToImage} newsUrl={!element.Url?"https://www.barrons.com/articles/tesla-stock-winning-streak-reasons-51648052780":""} author={element.author} date={element.publishedAt} source={element.source.name}/>
//           </div>
//         })}
//       </div>
//       <div className="container d-flex justify-content-between">
//       <button disabled={this.state.page<=1} type="button" className='btn  btn-secondary ' onClick={this.clickPrevBtn}>&larr; Previous</button>
//       <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className='btn btn-secondary' onClick={this.clickNextBtn}>Next &rarr;</button>
//       </div>
//     </div>
//     )
//   }
// }

import React, { useEffect,useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const NewsComponent =(props)=> {
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setPage]=useState(1)
  // const[pageSize,setPageSize]=useState(5)
  const[totalResults,setTotalResults]=useState(0)
  
  const updateNews=async()=>{
    props.setProgress(20);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c2b67e55fae840b6bd5b82dc271a12a1&page=${page}&pageSize=${props.pageSize}`;
    let data=await fetch(url);
    props.setProgress(60);
    setLoading(true);
    let parsedData=await data.json();
    props.setProgress(0);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(parsedData.loading)
    props.setProgress(100);
  }
  useEffect(()=>{
    updateNews();
    document.title=`${capitalizeFirstLetter(props.category)}`;
  },[]);
  const clickPrevBtn= async()=>{
    setPage(page -1)
    updateNews();
  }
  const clickNextBtn=async ()=>{
    setPage(page+1)
    updateNews();
  }
  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    return (
      <div className='container my-5'>
        <h3 className="text-center" style={{marginTop:'90px'}}>NewsApp -:The {capitalizeFirstLetter(props.category)} News</h3>
        {loading &&<Spinner/>}
        <div className="container">
        <div className="row">
        {!loading && articles.map((element)=>{
        return <div className="col-md-4 my-5"  key={element.url?element.url:""}>
          <NewsItem title={element.title?element.title:"Tesla Stock Streaked Past $1,000. Exactly Why Is a Puzzle."} description={element.description?element.description:"The stock is up for the seventh consecutive session on Wednesday. Interest rates are a headwind and Wall Street research doesn't seem to be playing a role."}  urlToImage={!element.urlToImage?"https://images.barrons.com/im-510394/social":element.urlToImage} newsUrl={!element.Url?"https://www.barrons.com/articles/tesla-stock-winning-streak-reasons-51648052780":""} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
      </div>
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={page<=1} type="button" className='btn  btn-secondary ' onClick={clickPrevBtn}>&larr; Previous</button>
      <button disabled={page+1>Math.ceil(totalResults/props.pageSize)} type="button" className='btn btn-secondary' onClick={clickNextBtn}>Next &rarr;</button>
      </div>
    </div>
    )
  
}
NewsComponent.defaultProps = {
  country: 'in',
  pageSize:3,
  category:"general"
}
NewsComponent.propTypes = {
  pageSize: PropTypes.number,
  country:PropTypes.string,
  category:PropTypes.string,
}
export default NewsComponent;
