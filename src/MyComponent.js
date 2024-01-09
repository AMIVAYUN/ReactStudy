// const MyComponent = props  => {
//     const { name, children } = props;
//     // return <div> 
//     //         나의 새롭고 멋진 컴포넌트 name : { props.name }
//     //         children의 값은 {props.children} 입니다.
//     //     </div>;
//     return <div> 
//     나의 새롭고 멋진 컴포넌트 name : { name }
//     children의 값은 {children} 입니다.
// </div>;
// };


// proptypes 를 통한 검증

// import PropTypes from 'prop-types';
// const MyComponent = ({ name, children, favoriteNumber })  => {

//     // return <div> 
//     //         나의 새롭고 멋진 컴포넌트 name : { props.name }
//     //         children의 값은 {props.children} 입니다.
//     //     </div>;
//     return <div> 
//     나의 새롭고 멋진 컴포넌트 name : { name }
//     children의 값은 {children} 입니다.

//     <br></br>

//     제가 좋아하는 숫자는 {favoriteNumber}입니다.

// </div>;
// };

// MyComponent.defaultProps = {
//     name: '기본 이름'
// }

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber : PropTypes.number.isRequired
// }
import { Component } from 'react';
import PropTypes from 'prop-types';
//클래스형 컴포넌트 만들기
class MyComponent extends Component{
    static defaultProps = {
        name : '기본 이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    }
    render(){
        const { name, favoriteNumber, children } = this.props;
        return ( 
            <div>
                안녕하세요 제 이름은 { name }입니다.<br/>
                children의 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.

            </div>
        )
    }
}

//state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미함.
/*
 props는 컴포넌트가 사용되는 과정에서 건네주는 값
 state는 컴포넌트 내부에서 바뀔 수 있는 값
 클래스형 컴포넌트가 지니고 있는 state 와 함수 컴포넌트에서 useState라는 함수를 통해 사용하는 state 입니다. 
*/
export default MyComponent;