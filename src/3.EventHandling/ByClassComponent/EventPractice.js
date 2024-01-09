import { Component } from "react";

class EventPractice extends Component{

    state = {
        message: ''
    }

    render() {
        return (
            // syntheticEvent 로서 웹 브라우저의 네이티브 이벤트를 감싸는 객체이다.
            // 차이점은 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화 되어 참조가 불가능 이를 참조하기 위해선 e.persist()를 해주어야 한다.

            // 2. state에 input 값 담기
            <div>
                <h1> 이벤트 연습 </h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력"
                    onChange = {
                        // 1.
                        // (e) => {
                        //     console.log( e );
                        //     console.log( e.target.value );
                        // }
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }/>

                <button onClick={
                    () => {
                        alert( this.state.message );
                        this.setState({
                            message: ''
                        })
                    }
                }>확인</button>
            </div>
        )
    }
}

export default EventPractice;