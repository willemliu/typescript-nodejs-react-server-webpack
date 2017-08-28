import * as React from 'react';

declare var alert: any;

/**
 * Atomic react component
 */
export default class Button extends React.Component{
    public state;
    public props;
    constructor(props) {
        super(props);
        this.props = props;
        this.handleClick = this.handleClick.bind(this);
        console.info('Button component', props);
    }
    
    componentDidMount() {
        console.info('Button mounted');
    }

    componentWillUnmount() {
        console.info('Button will unmount');
    }

    handleClick() {
        alert('AAAHH');
    }
    
    render() {
        console.info('Render button');
        return (
            <button onClick={this.props.onClick?this.props.onClick:this.props.handleClick}>AAAHH</button>
        );
    }
}