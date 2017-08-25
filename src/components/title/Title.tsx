import * as React from 'react';

export default class Title extends React.Component {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        console.info('Title component', props.idx);
    }

    componentDidMount() {
        console.info('Title mounted');
    }
        
    componentWillUnmount() {
        console.info('Title will unmount');
    }
    render() {
        return (
            <h1 data-idx={this.props.idx}>{this.props.title}</h1>
        );
    }
}
