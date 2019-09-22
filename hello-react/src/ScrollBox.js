import React, {Component} from 'react'

class ScrollBox extends Component {

    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        // === const scrollHeight = this.box.scrollHeight;
        // === const clientHeight = this.box.clientHeight;
        this.box.scrollTop = scrollHeight - clientHeight; //스크롤바의 위치. 0 ~ max(높이 차)
    }

    render() {
        const style = {
            border:'1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }

        return (
            <div
                style = {style}
                ref={(ref) => this.box=ref}>
                <button onClick={this.scrollToBottom}>asdfsf</button>
                <div style={innerStyle}/>


            </div>


        );
    }
}

export default ScrollBox