import React, {Component} from 'react';
import './App.css';
import MyComponent from "./MyComponent";
import Counter from "./Counter.js"
import Say from "./Say"
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import RefSample from "./RefSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                <LifeCycleSample number={1} color={"#f11111"}/>
                </ErrorBoundary>
                <IterationSample/>
                <ScrollBox ref={(ref) => this.sbox = ref}/>
                <button onClick={() => this.sbox.scrollToBottom()}> go down</button>
                <RefSample/>
                <ValidationSample/>
                <EventPractice/>
                <Say/>
                <Counter/>
                <MyComponent name="react" favoriteNumber={1}>cool</MyComponent>
            </div>
        )
    }
}

/*
//props(properties)
const App = () => { //app이 실행되는 이유는, index.js에 renderDOM이 root 요소에 App를 render하도록 되어있기 때문
    return (
        <div>
            <ValidationSample/>
            <EventPractice/>
            <Say/>
            <Counter/>
            <MyComponent name="react" favoriteNumber={1}>cool</MyComponent>
        </div>
    )
        ;
}
 */

export default App;
