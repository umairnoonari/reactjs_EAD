// import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap'
class Mycomponent extends React.Component
{
    constructor(props)
    {
       super(props)
      //  this.Mycomponent=this.Mycomponent.bind(this);

    }
    render()
    {
       return<h1>{this.props.name}</h1>
    }
}
class App extends React.Component
{
   
   render()
   {
       return(
          <Container> 
             <Row>
               <Col md={7}  style={{backgroundColor:"red"}}>
                <h1>Hello world</h1>
                </Col>
                <Col style={{backgroundColor:"red"}}>
                <h1>Hello world</h1>
                </Col>
                <Col style={{backgroundColor:"red"}}>
                <h1>Hello world</h1>
                </Col>
                <Col style={{backgroundColor:"red"}}>
                <h1>Hello world</h1>
                </Col>
             </Row>
             <Row>
                
             </Row>
          </Container>
       )
   }
}
export default App
   //  render()
   //  {
   //     const edited=true;
   //     if(edited==true)
   //     {
   //        return <Mycomponent name="Umair" />
   //     }
   //     else
   //     {
   //        return <h1>Hello world</h1>
   //     }
      //   return(
      //   <>
      //   {edited ? (
      //       <Mycomponent name={"Umair"}/>):
      //       (<h1>Hello world</h1>)
      //       }
      //   </>)
//     }
// }
// function Mycomponent(props)
// {
//    props.name="Umair"
//    // return <h1>How are you {props.obj.name} your age is {props.obj.age}</h1>
//    return <h1>{props.name}</h1>
// }

// class App extends React.Component
// {
//     render()
//     {
//        const person={name:"ali",age:18,avatar:
//        "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHw%3D&w=1000&q=80"}
//       //  function getName(person)
//       //  {
//       //     if(person.age>=18)
//       //     {
//       //        return(<h1>Hello {person.name="Umair"}<br/>, you are {person.age}</h1>)
//       //     }
//       //     return <h1>Sorry</h1>
//       //  }
//       const mystyle={color:"red", backgroundColor:"black"};
//       const name1="Tahir"
//        return(
//        <div>
//           <Mycomponent name={name1}/>
//           {/* <h1 className={'myclass'} style={{color:"red", backgroundColor:"black"}}>Umair</h1> */}
//           <h1 className={'myclass'} style={mystyle}>{person.name}</h1>
//           <img src={person.avatar}></img>
//        </div>)
//     }
// }


