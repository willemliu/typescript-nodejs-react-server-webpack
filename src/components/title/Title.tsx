import * as React from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import * as TitleActions from './titleActions';

class Title extends React.Component {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        console.info('Title props', props);
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


function mapStateToProps(state) {
    return {
        name: state.title.name
    };
}
  
function mapDispatchToProps(dispatch) {
    return { 
        actions: bindActionCreators(TitleActions as any, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);