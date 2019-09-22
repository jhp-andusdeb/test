import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
const MyComponent = props => {
    const {name, children} = props; // destructuring assignment 비구조화 할당, 구조 분해 문법이라고 함.함수의 파라미터 부분에서도 사용할 수 있음
 */
/*
const MyComponent = ({name, children, favoriteNumber}) => {
 */
class MyComponent extends Component {
    static defaultProps = {
        name: 'aaa'
    };
    static propTypes = {
        name : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired
    }
    render() {

    const {name, favoriteNumber, children} = this.props;
    return (
        <div>
            Hello, my name is {name} <br/>
            children is {children} <br/>
            my favorite number {favoriteNumber}
        </div>
    );
    }
};

MyComponent.defaultProps = {
    name : '홍길동'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;