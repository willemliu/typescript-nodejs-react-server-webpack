import * as React from 'react';
import Button from "../../components/button/Button";
import Title from "../../components/title/Title";
import Leadtext from "../../components/leadtext/Leadtext";

export default class Teaser extends React.Component {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        this.removeTeaser = this.removeTeaser.bind(this);
        console.info('Teaser composition', props);
    }

    componentDidMount() {
        console.info('Teaser mounted');
    }
        
    componentWillUnmount() {
        console.info('Teaser will unmount');
    }

    componentWillReceiveProps(nextProps) {
        console.info('Teaser next props', nextProps);        
    }

    removeTeaser() {
        console.info('Remove teaser', this.props.articleId);
        this.props.actions.removeTeaser(this.props.articleId);
        this.props.onRemove?this.props.onRemove(this.props.articleId):()=>{console.info('No onRemove callback for teaser', this.props.articleId)};
    }

    render() {
        if(!this.props.teaser) {
            console.info('Render empty teaser', this.props.idx, this.props);
            return null;
        }
        console.info('Render teaser', this.props.idx, this.props);
        return (
            <article data-idx={this.props.idx} data-articleId={this.props.articleId}>
                <Title title={this.props.teaser.title}/>
                <Leadtext leadtext={this.props.teaser.leadtext}/>
                <Button onClick={this.removeTeaser}/>
            </article>
        );
    }
}