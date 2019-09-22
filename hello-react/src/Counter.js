import React, {Component} from 'react'

class Counter extends Component {
    /*
    constructor(props) {
        super(props);
        //state의 초기값 설정
        this.state = {
            number: 0
        };
    }
     */
    state = {
        number : 0,
        fixedNumber : 0
    }
    render() {
        const {number} = this.state; //state를 조회할 때는 this.state로 조회
        return (
            <div>
                <h1> {number} </h1>
                <button
                    // onClick을 통해 버튼이 클릭되었을 때 함수를 지정한다.
                    onClick={() => {
                        //this.setState({ number:number+1});
                        //this.setState(prevState => { return { number:prevState.number + 1}});
                        this.setState(prevState => ({number : prevState.number + 1}),
                            () => {
                            console.log("setState called");
                            console.log(this.state)
                            })
                    }}
                    >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;