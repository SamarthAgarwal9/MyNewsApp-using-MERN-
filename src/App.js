// import './App.css';
// import React, { Component } from 'react'
// import NavBar from './components/NavBar';
// import NewsComponent from './components/NewsComponent';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
//   pageSize=5;
//   //apikey=process.env.REACT_APP_API_KEY;
//   state={progress:0}
//   setProgress=(progress)=>{setState({progress:progress})};
//   render() {
//     return (
//       <div>
//       <Router>
//       <NavBar/>
//       <LoadingBar
//         color='white'
//         progress={state.progress}
//        // onLoaderFinished={() => setProgress(0)}
//       />
//        {/* A <Routes> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//             <Routes>
//               <Route exact path="/home" element={<NewsComponent setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
//               <Route exact path="/business" element={<NewsComponent setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
//               <Route exact path="/entertainment" element={<NewsComponent setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
//               <Route exact path="/general" element={<NewsComponent setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
//               <Route exact path="/health" element={<NewsComponent setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
//               <Route exact path="/science" element={<NewsComponent setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
//               <Route exact path="/sports" element={<NewsComponent setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
//               <Route exact path="/technology" element={<NewsComponent setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
//           </Routes>
//       </Router>
//       </div>
//     )
//   }
// }
import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import NewsComponent from "./components/NewsComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App=()=> {
 const pageSize = 5;
  //apikey=process.env.REACT_APP_API_KEY;
  const[progress,setProgress]=useState(0);
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="white"
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route
              exact
              path="/home"
              element={
                <NewsComponent
                  setProgress={setProgress}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <NewsComponent
                  setProgress={setProgress}
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <NewsComponent
                  setProgress={setProgress}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <NewsComponent
                  setProgress={setProgress}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <NewsComponent
                  setProgress={setProgress}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <NewsComponent
                  setProgress={setProgress}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <NewsComponent
                  setProgress={setProgress}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <NewsComponent
                  setProgress={setProgress}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
}
export default App;
