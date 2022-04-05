import React from "react";
import PropTypes from 'prop-types';
import GitApi from "./GitApi";
import {useState} from 'react';
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Categories from "./Pages/Categories";
import Kid from "./Pages/Kid";
import Kid2 from "./Pages/Kid2";
// import {Link,Routes,Route,BrowserRouter as Router} from 'react-router-dom'
// import { render } from "react-dom";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Listview from "./Listview";
import ListItem from "./Pages/ListItem";
import Counter from "./Counter";
import Clickme from "./Clickme";
import Hoverme from "./Hoverme";
import Contextapi from "./Contextapi";
function Myapp()
{

    function CounterCall(count,handelChange)
    {
        return <>
        <Clickme count={count} handelChange={handelChange} />
        </>
    }
    return(<>
    <Contextapi />
    {/* <Counter>{(count,handelChange)=>(<Hoverme count={count} handelChange={handelChange} />)}</Counter> */}
    <Counter render={(count,handelChange)=>(<Hoverme count={count} handelChange={handelChange} />)} />
    <Counter  render={CounterCall}/>
    <Router>
      <Navbar />
      <Routes>
          <Route index element={<Home /> }/>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path="/list" element={<Listview />}>
             
             
          </Route>
          
          <Route path="/list/:item" element={<ListItem />}></Route>

          <Route path='/category' element={<Categories />}>
              <Route path='Kid' element={<Kid />}></Route>
              <Route path='Kid2' element={<Kid2 />}></Route>
          </Route>
          
      </Routes>
    </Router>
    </>)
}
export default Myapp;
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// // import App from "./App";
// // import Expenses from "./routes/expenses";
// // import Invoices from "./routes/invoices";
// export default function Myapp()
// {
//     return<>
//   <Navbar />
//   <BrowserRouter>
//     <Routes>
//       <Route path="/"  />
//       <Route path="about"  />
//       <Route path="contact us"  />
//     </Routes>
//   </BrowserRouter>
//     </>
// }
// function Counter()
// {
//     let [count,setCount]=useState(0);
//     function increment()
//     {
//         setCount(count+1);
//     }
//     function decrement()
//     {

//     }
    
//     return<>
//     {/* <button onClick={callme}>Clicked</button> */}
//     <h1>{count}</h1>
//     <button onClick={increment}>+</button>
//     <button onClick={()=>setCount(count-1)}>-</button>
//     </>
// }
// class Myapp extends React.Component
// {
//     render()
//     {
//         return<>
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/contact us">Contact us</Link>
//         </nav>
//         <Router>
//         <Routes>
//             <Route path='/' />
//             <Route path='/home' />
//             <Route path='/about' />
//         </Routes>
//         </Router>
//         </>
//     }
// }
// class Myapp extends React.Component
// {
//     timeId;
//     constructor(props)
//     {
//         super(props);
//         this.state={date:new Date(),count:4,arr:[1,2,3,4]};
//         // this.tick=this.tick.bind(this)
//     }
//     render()
//     {
//         return<>
//         <h1>{this.state.date.toLocaleTimeString()}</h1>
//         <h1>{this.state.count}</h1>
//         <h1>{this.state.arr[5]}</h1>
//         {/* <button onClick={()=>this.tick()}>Click</button> */}
//         <button onClick={this.tick.bind(this)}>Click</button>
//         </>
//     }
//     tick()
//     {
//         // this.setState((prev,props)=>({date:new Date(),count:prev.count+1}));
//         this.setState((prev,props)=>{
//             console.log(props)
//             return {date:new Date(),count:prev.count+1,arr:[...prev.arr,prev.count+1]}
//         })
//     }
    // componentDidMount()
    // {
    //      this.timeId=setInterval(this.tick,1000);
    //     // this.tick()
    // }
    // componentDidUpdate(prev)
    // {
    //     if(!prev)
    //         this.tick()
    //     // setInterval(this.tick,1000);
    // }
    // componentWillUnmount()
    // {
    //     clearInterval(this.timeId)
    // }
// }
// function Mycomponent(props)
// {
//     return <h1>{props.name}</h1>
// }
// class Myapp extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//     }
   
//     render()
//     {
//         let name;
//         return(<>
//         <Mycomponent name={name} />
//         <h1>Hello world</h1>
//         <span>{this.props.children}</span>
//         {/* <GitApi name="haseebullahabbasi"/> */}
        
//         </>)
//     }
// }

// Mycomponent.defaultProps={
//     name:"Koi bhi nahi"
// }
// Mycomponent.propTypes = {
//     name: PropTypes.string
//   }
