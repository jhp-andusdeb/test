import React, {Component} from 'react'
import './ValidationSample.css'

class ValidationSample extends Component {

    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        //this.setState({[e.target.name]: e.target.value});
        this.setState({password:e.target.value})
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated: this.state.password === '0000'
        });
        this.king.focus(); //this.king은 JSX의 input ref 를 가리킨다.
    }

    render() {
      return (
          <div>
              <input
                  ref = {(ref) => {this.king=ref}}
                  type={"password"}
                  value={this.state.password}
                  onChange={this.handleChange}
                  className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                  />
              <button onClick={this.handleButtonClick}> push </button>
          </div>
      )
    };
}

export default ValidationSample