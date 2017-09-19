import * as React from 'react';

import Teaser from '../teaser/teaserReducer';

/**
 * Teaser list react component.
 */
export default class TeaserList extends React.Component {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        console.info('TeaserList composition');
        this.removeTeaserFromTeaserLists = this.removeTeaserFromTeaserLists.bind(this);
    }

    componentDidMount() {
        console.info('TeaserList mounted');
    }
        
    componentWillUnmount() {
        console.info('TeaserList will unmount');
    }

    componentWillReceiveProps(nextProps) {
        // console.info('TeaserList next props', nextProps);
    }

    removeTeaserFromTeaserLists(articleId) {
        console.info(`Remove teaser[${articleId}] from teaserLists [${this.props.teaserListName}]`);
        this.props.actions.removeTeaserFromTeaserLists(this.props.teaserListName, articleId);
    }

    render() {
        // In case the teaser list contains no article ids then don't render the teaser list.
        if(!this.props.articleIds || this.props.articleIds.length === 0) {
            console.info('Render empty TeaserList', this.props.teaserListName);
            return null;
        }
        console.info('Render TeaserList', this.props.teaserListName);
        return (
            <section data-idx={this.props.idx} data-teaserListName={this.props.teaserListName}>
                {
                    this.props.articleIds.map((key, index) => {
                        return <Teaser key={index} idx={index} articleId={key} onRemove={this.removeTeaserFromTeaserLists}/>;
                    })
                }
            </section>
        );
    }
}
