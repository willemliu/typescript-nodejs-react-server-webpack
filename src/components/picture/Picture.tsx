import * as React from 'react';

/**
 * Atomic react component
 */
export default class Picture extends React.Component {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        console.info('Picture component', props);
    }

    componentDidMount() {
        console.info('Picture mounted');
    }

    componentWillUnmount() {
        console.info('Picture will unmount');
    }

    render() {
        return (
            <figure>
                <picture>
                    <source media="(max-width:640px)" srcSet="https://images.fd.nl/Wdn-Wu2NaDywX3b5Qt7yKOQ1lDE.jpg?fit=crop&amp;crop=faces&amp;auto=format%2ccompress&amp;q=45&amp;w=1024&amp;h=576&amp;rect=.0,.099250936329588,.9999999999999999,.8426966292134831"/>
                    <source media="(max-width:860px)" srcSet="https://images.fd.nl/Wdn-Wu2NaDywX3b5Qt7yKOQ1lDE.jpg?fit=crop&amp;crop=faces&amp;auto=format%2ccompress&amp;q=45&amp;w=1024&amp;h=576&amp;rect=.0,.099250936329588,.9999999999999999,.8426966292134831"/>
                    <source media="(min-width:861px)" srcSet="https://images.fd.nl/Wdn-Wu2NaDywX3b5Qt7yKOQ1lDE.jpg?fit=crop&amp;crop=faces&amp;auto=format%2ccompress&amp;q=45&amp;w=1024&amp;h=576&amp;rect=.0,.099250936329588,.9999999999999999,.8426966292134831"/>
                    <img src="https://images.fd.nl/Wdn-Wu2NaDywX3b5Qt7yKOQ1lDE.jpg?fit=crop&amp;crop=faces&amp;auto=format%2ccompress&amp;q=45&amp;w=1024&amp;h=576&amp;rect=.0,.099250936329588,.9999999999999999,.8426966292134831"/>
                </picture>
                <span className="audio-icon"></span>
            </figure>
        );
    }
}
