import React, {useState} from 'react'

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: 'snow'},
        {id: 2, text: 'fire'},
        {id: 3, text: 'wind'},
        {id: 4, text: 'ice'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);

    const onChange = (e) => {
        setInputText(e.target.value);
    }

    const onRemove = id => {
        const removeNames = names.filter(name => name.id !== id);
        setNames(removeNames);
    }

    var cnt = 3;
    const onClick = () => {
        cnt++;
        console.log(cnt);
        if (inputText !== '') {
            const nextNames = names.concat({
                id: nextId,
                text: inputText
            });
            setNextId(nextId + 1);
            setNames(nextNames);
            setInputText('');
        }
    }


    return (
        <>
            <input placeholder={"asdf"} value={inputText} onChange={onChange}/>
            <button onClick={onClick}>add</button>
            <ul>
                {namesList}
            </ul>
        </>
    );
}

export default IterationSample;