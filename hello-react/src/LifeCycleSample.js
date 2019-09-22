import React, {Component} from 'react';

class LifeCycleSample extends Component {

    state = {
        number: 0,
        color: null
    }

    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor', props.color);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps', nextProps.color, prevState.color);

        if (nextProps.color !== prevState.color) {
            return {color: nextProps.color}
        }

        return null;
    }

    componentDidMount() {
        console.log('componentDidMount', this.state.color);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate', nextProps.color, nextState.color);
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        /*
        console.log('----------------handleClick', this.state.color.substring(1))
        let n = parseInt(this.state.color.substring(1), 16);
        console.log(n);
        n++;
        console.log(n);
        let nextColor = "#" + n.toString(16);
        console.log(nextColor);
*/
        this.setState({
            number: this.state.number + 1,
            color: this.state.color
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapShotBeforeUpdate', prevState.color);
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('color before update : ', snapshot);
        }
    }

    render() {
        this.props.missing.value();
        console.log('render');
        const style = {color: this.props.color};

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p> color : {this.props.color} </p>
                <button onClick={this.handleClick.bind(this)}> add</button>
            </div>
        );
    }
}

export default LifeCycleSample;