import * as React from 'react';

export default class Clock extends React.Component {
    public state: any;
    public props: any;
    private timerID;

    constructor(props: any) {
        super(props);
        this.props = props;
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        console.info('Clock mounted');
        this.timerID = setInterval(() => this.tick(), 1000);
    }
        
    componentWillUnmount() {
        console.info('Clock will unmount');
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>{this.state.date.toLocaleTimeString()}</div>
        );
    }
}