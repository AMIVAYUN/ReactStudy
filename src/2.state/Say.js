import { useState } from "react";

const Say = () => {
    const [ message, setMessage ] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const [ color, setColor ] = useState( 'black' );

    return (
        <div>

            <button onClick={ onClickEnter} > In </button>
            <button onClick={ onClickLeave} > Out </button>
            <h1 style = {{ color }}> {message} </h1>
            
            <button style = {{ color: 'red'} } onClick={ () => setColor('red')}> red </button>
            <button style = {{ color: 'green'} } onClick={ () => setColor('green')}> green </button>
            <button style = {{ color: 'blue'} } onClick={ () => setColor('blue')}> blue </button>
        </div>
    )
}

export default Say;