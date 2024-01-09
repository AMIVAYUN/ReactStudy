import { Component } from "react";

class EventPracticeMethodRefactor extends Component{

    state = {
        username: '',
        message: ''
    }

    // constructor( props ){
    //     super( props );
    //     this.handleChange = this.handleChange.bind( this );
    //     this.handleClick = this.handleClick.bind( this );
    // }
    // 이렇게 쓰면 간단하게 생성자를 날려버릴 수 있게 된다.
    handleChange= (e) => {
        this.setState({
            [e.target.name] : e.target.value //이게 핵심
            // message: e.target.value
        })
    }

    handleClick= () => {
        // alert( this.state.message );
        // this.setState({
        //     message:''
        // })

        alert( this.state.username + ': ' + this.state.message );
        this.setState({
            username: '',
            message: ''
        })
    }

    render() {
        return (
            // syntheticEvent 로서 웹 브라우저의 네이티브 이벤트를 감싸는 객체이다.
            // 차이점은 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화 되어 참조가 불가능 이를 참조하기 위해선 e.persist()를 해주어야 한다.

            // 2. state에 input 값 담기

            // 3. 임의 메서드를 통한 코드 리팩토링
            /*
                메서드 바인딩은 생성자에서 하는 것이 일반적이다. 
                허나 매번 생성자를 수정해주어야 하기에, 바벨의 transform-class-properties 문법을 사용해서 변환해보자 
            */

            //4 인풋 여러개 사용하기
            <div>
                <h1> 이벤트 연습 </h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력"
                    value={this.state.message}
                    onChange={ this.handleChange }
                    />

                <button 
                    onClick={ this.handleClick }
                >확인</button>
                

                <input
                    type="text"
                    name="username" // 이게 핵심
                    placeholder="아무거나 입력"
                    value={this.state.username}
                    onChange={ this.handleChange }
                    />

                <button 
                    onClick={ this.handleClick }
                >확인</button> 

            </div>

            
            
        )
    }
}

export default EventPracticeMethodRefactor;