import React from 'react';
import { Button } from "@material-ui/core";

export default class ButtonComp extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            text: this.props.task,
            color: "secondary"
        };
    }

    // if a button is clicked, set it's "liked" state to true 
    handleClick(e) {
        e.preventDefault();
        const task = this.state.text;
        this.setState({color: 'primary', text: task + '| '});
    }

    render() {
        return (
            <Button color={this.state.color} size="large" onClick={this.handleClick}>
                {this.state.text}
            </Button>
        )
    }
}