import * as React from 'react';

declare var alert: any;

export default class Button extends React.Component{
    public state;
    public props;
    constructor(props) {
        super(props);
        this.props = props;
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
        console.info('Button mounted');
    }

    componentWillUnmount() {
        console.info('Button will dismount');
    }

    handleClick() {
        alert('AAAHH');
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>AAAHH</button>
        );
    }
}