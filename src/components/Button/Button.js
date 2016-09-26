import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <button className={this.props.classes} onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
}

Button.propTypes = {
    classes: React.PropTypes.string,
    onClick: React.PropTypes.func,
    text: React.PropTypes.string
};
export default Button;