import * as React from 'react';

/**
 * Atomic react component
 */
export default class Leadtext extends React.Component {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        console.info('Leadtext component', props);
    }

    componentDidMount() {
        console.info('Leadtext mounted');
    }

    componentWillUnmount() {
        console.info('Leadtext will unmount');
    }
    
    render() {
        return (
            <p data-idx={this.props.idx}>{this.props.leadtext}</p>
        );
    }
}
