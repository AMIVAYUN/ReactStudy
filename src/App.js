import logo from './logo.svg';
import './App.css';
import fragment, { Component, Fragment } from 'react'
import MyComponent from "./MyComponent";
import Counter from './2.state/Counter';
import IterationSample from './5.Repeat Component/IterationSample';
import LifeCycleSample from './6.LifeCycle/LifeCycleSample';
import ErrorBoundary from './6.LifeCycle/ErrorBoundary';

// import EventPractice from './EventHandling/ByClassComponent/EventPractice';
// import EventPracticeMethodRefactor from './EventHandling/ByClassComponent/EventHandlingMethodRefactor';
// 함수형 컴포넌트
// function App() {
//   const name = '나의 공부';
//   const style ={
//     backgroundColor: 'black',
//     color : 'aqua',
//     fontSize: '48px',
//     fontWeight: 'bold',
//     padding: 16
//   }
//   return (
//     // <div className="App">
//     //   <h1> react hi </h1>
//     //   <h2>newwewnenwenw</h2>
//     // </div>
//     // <Fragment>
//     //   <h1> 리액트 하이 </h1>
//     //   <h2> 잘 작동하니 </h2>

//     // </Fragment>
//     // 둘의 차이 기본적으로 Fragment를 쓰면 중앙 정렬이 안됨
    
    
//     <> 
//       <div style = {style}>
//         <h1> {name} 리액트 하이 </h1>
//         <h2> 잘 작동하니 </h2>
//       </div>

//       <hr></hr>


//       <div className = "react">
//         { name === '나의 공부' ? (
//           <h1> 윤주석 </h1>
//         ) : (
//           <h2> 내 공부가 아닙니다. </h2>
//         )}
//       </div>



//     </>

//     // 이거도 fragment
//   );
// }


//클래스형 컴포넌트
// 클래스형 컴포넌트를 사용시 state 기능 및 라이프 사이클 기능을 사용할 수 있고, 임의 메서드를 정의 가능하다.
// render 함수가 꼭 있어야 한다.
// 결과물의 파일 크기 또한 작다. 사실 상 별 차이 없긴 함.


// class App extends Component{
//   render(){
//     const name = 'react';
//     return <div className="react">
//         <h1>{name}</h1>
//         <h2></h2>
//       </div>
//   }
// }


// const App = () => {
//   // return <MyComponent name="yun react"/>;
//   return <MyComponent name={3} favoriteNumber={2}>리액트</MyComponent>
// };


// // class형 컴포넌트 State
// const App = () => {
//   return <Counter></Counter>;
// }

// 함수형 컴포넌트 State
// import Say from './state/Say';

// const App = () => {
//   return <Say/>
// }

// EventHandling 1
// const App = () => {
//   return <EventPractice/>
// }

// EventHandling 2
  // const App = () => {
  //   return <EventPracticeMethodRefactor/>
  // }

// EventHandling 3 // by Functional Component
// import EventPractice from './3.EventHandling/ByFunctionalComponent/EventPractice'
// const App = () => {
//   return <EventPractice/>
// }

// Repeat Component 1
// const App = () => {
//   return <IterationSample/>
// }


// LifeCycle 1

function getRandomColor() { return '#' + Math.floor( Math.random() * 16777215 ).toString(16); }

class App extends Component{
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
        <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;
