import * as React from 'react';

export default class Title extends React.Component {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        console.info('Title mounted');
    }
        
    componentWillUnmount() {
        console.info('Title will unmount');
    }
    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}