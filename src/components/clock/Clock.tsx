import * as React from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import * as ClockActions from './clockActions';

class Clock extends React.Component {
    public state: any;
    public props: any;
    private timerID;

    constructor(props: any) {
        super(props);
        this.props = props;
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
        this.props.actions.setTime(new Date());
    }

    render() {
        return (
            <div className="">{(new Date(this.props.date)).toLocaleTimeString('nl-NL', {
                hour: "2-digit", minute: "2-digit", second: "2-digit"
            })}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        date: state.clock.date
    };
}
  
function mapDispatchToProps(dispatch) {
    return { 
        actions: bindActionCreators(ClockActions as any, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Clock);