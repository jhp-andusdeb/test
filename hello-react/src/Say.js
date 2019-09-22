import React, {useState} from 'react'

const Say = () => {
    const [message, setMessage] = useState(''); //usetState('')를 호출하면, 배열이 리턴됨.
    const onClickEnter = () => setMessage('ㅎㅇ');
    const onClickLeave = () => setMessage('ㅂㅂ');

    const [color, setColor] = useState('black');

    const object = { a: 1, b:2, c:3};
    const object2 = {...object, b:3};

    return (
        <div>
            <h1>{object.b}</h1>
            <h1>{object2.b}</h1>
            <button onClick={onClickEnter}>enter</button>
            <button onClick={onClickLeave}>leave</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={() => { setColor('red') }}> red </button>
            <button style={{color: 'green'}} onClick={() => { setColor('green') }}> green </button>
            <button style={{color: 'blue'}} onClick={() => { setColor('blue') }}> blue </button>
        </div>
    );
}

export default Say;