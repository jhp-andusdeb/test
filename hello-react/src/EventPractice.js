import React, {useState} from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username:'',
        message:''
    });
    const {username, message} = form;

    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ' : ' + message);
        setForm({
            username:'',
            message:''
        });
    };
    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClick();
        }
    };
    /*
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangeMessage = (e) => setMessage(e.target.value);
    const handleOnClick = (e) => { alert(username + ' : ' + message); setMessage(''); setUsername('')};
    const handleKeyPress = (e) => { if(e.key === 'Enter[') { handleOnClick(); }}
*/
    return (
        <div>
            <h1> event practice! </h1>
            <input
                type="text"
                name="username"
                placeholder={"username"}
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="input something"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />

            <button onClick={onClick}> ok </button>

        </div>
    );
}

/*
class EventPractice extends Component {
    state = {
        message: '',
        username: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({message: ''});
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1> event practice! </h1>
                <input
                    type="text"
                    name="username"
                    placeholder={"username"}
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                <input
                    type="text"
                    name="message"
                    placeholder="input something"
                    value={this.state.message}

                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />

                <button onClick={
                    this.handleClick}
                > ok
                </button>

            </div>
        );
    }
}
*/

export default EventPractice;
