import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";
import Info2 from "./Info2";

const App = () => {

    const [visible, setVisible] = useState(true);

    const onClickShow = () => {
        visible ? setVisible(false) : setVisible(true)
    }

    return (
        <>
            <button onClick={onClickShow}>show/hide</button>
            <Counter/>
            {visible && <Info/>}
          {visible && <Info2/>}
            <Average/>
        </>
    );
}

export default App;
