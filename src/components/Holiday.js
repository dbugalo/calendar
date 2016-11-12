import {react} from 'react';

export default class Holiday extends React.Component {
    render() {
        return <span>{this.props.name}</span>;
    }
}