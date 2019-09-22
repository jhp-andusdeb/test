import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = numbers => {
    console.log('average computing...', numbers);
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback( e => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(e => {
        if (parseInt(number)) {
            const nextList = list.concat(parseInt(number));
            setList(nextList);
        }
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);



    const avg = useMemo( () => getAverage(list), [list]);

    return (
        <div>
            <input name="number" value={number} ref={inputEl} onChange={onChange}/>
            <button onClick={onInsert}>register</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>average : </b> {avg}
            </div>
        </div>
    );
};

export default Average;