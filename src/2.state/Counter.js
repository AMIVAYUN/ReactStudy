import { Component } from "react";
// 클래스형 컴포넌트에서 State 사용하기
class Counter extends Component{
    // constructor( props ){
    //     super( props );
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     }
    // }
    state = {
        number: 0,
        fixedNumber: 0
    }
    render(){
        const { number, fixedNumber } = this.state;
        return ( 
            <div>
                <h1>{number}</h1>
                <h2> none Changed Value: { fixedNumber } </h2>
                <button onClick={ () => {
                    // this.setState({ number: number+1});
                    // this.setState({ number: this.state.number + 1 }) // 이런다고 해서 바로 바뀌지 않는다. 왜냐하면 실시간적으로 바로바로 바뀌지 않기 때문. 이를 해결하기 위해서는 아래와 같이 하면 된다.
                    this.setState( prevState => {
                        return {
                            number: prevState.number + 1
                        }
                    })
                    this.setState( prevState => {
                        return {
                            number: prevState.number + 1
                        }
                    }, () => {
                        console.log( 'calculate two times Done')
                    }) // 이와 같이 콜백을 지정할 수도 있다.
                }}>
                    +1
                </button>
            </div>
        ) 
    }
}

export default Counter;