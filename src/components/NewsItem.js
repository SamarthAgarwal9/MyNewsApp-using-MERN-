// import React, { Component } from 'react'
// export default class NewsItem extends Component {
//   render() {
//     let {title,description,urlToImage,newsUrl,author,date,source} = this.props;
//     return (
//       <div>
//       <div className="card"> 
//        <div><span className="badge rounded-pill bg-dark" style={{
//         display:'flex', justifyContent:'flex-end',position:'absolute', right: '0'}} >{source}</span></div>
//         <img src={urlToImage} className="card-img-top" alt="..."/>
//         <div className="card-body" >
//           <h5 className="card-title">{title} </h5>
//           <p className="card-text">{description}...</p>
//           <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
//         </div>
//           <a  href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary"  >Read More</a>
//       </div>
//   </div>
//   )
//   }
// }
import React from 'react'
const NewsItem =(props)=> {
    let {title,description,urlToImage,newsUrl,author,date,source} = props;
    return (
      <div>
      <div className="card shadow p-0.5 mb-1 bg-white rounded acrd-hover"> 
       <div><span className="badge rounded-pill bg-dark" style={{
        display:'flex', justifyContent:'flex-end',position:'absolute', right: '0'}} >{source}</span></div>
        <img src={urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body" >
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
        </div>
          <a  href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary"  >Read More</a>
      </div>
  </div>
  )
}
export default NewsItem;
