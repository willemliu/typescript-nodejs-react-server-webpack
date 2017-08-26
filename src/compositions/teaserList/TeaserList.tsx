import * as React from 'react';
import Teaser from "../teaser/teaserReducer";

export default class TeaserList extends React.Component {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        console.info('TeaserList composition', props);
        this.removeTeaserFromTeaserList = this.removeTeaserFromTeaserList.bind(this);
    }

    componentDidMount() {
        console.info('TeaserList mounted');
    }
        
    componentWillUnmount() {
        console.info('TeaserList will unmount');
    }

    componentWillReceiveProps(nextProps) {
        console.info('TeaserList next props', nextProps);        
    }

    removeTeaserFromTeaserList(articleId) {
        console.info('Remove teaser from teaserList', articleId);
        this.props.actions.removeTeaserFromTeaserList(this.props.teaserListId, articleId);
    }

    render() {
        if(!this.props.articleIds || this.props.articleIds.length === 0) {
            console.info('Render empty TeaserList', this.props.idx, this.props);
            return null;
        }
        console.info('Render TeaserList', this.props.idx, this.props);
        return (
            <section data-idx={this.props.idx} data-teaserListId={this.props.teaserListId}>
                {
                    this.props.articleIds.map((key, index) => {
                        console.info('TeaserList render Teaser', key, index);
                        return <Teaser key={index} idx={index} articleId={key} onRemove={this.removeTeaserFromTeaserList}/>;
                    })
                }
            </section>
        );
    }
}
