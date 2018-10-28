import React from 'react';

class Text_Prompt extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };

        this.onChange = (e) => this._onChange(e);

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            this.props.onChange(this.state.value);
        }
    }

    _onChange(e) {
        let value = e.target.value;

        this.setState({value: value});
    }

    render() {
        return (
            <div>
                <input type={this.props.type} className={this.props.style} value={this.state.value} placeholder={this.props.placeholder} onChange={this.onChange}  />
            </div>
        )
    }
}

export default Text_Prompt;