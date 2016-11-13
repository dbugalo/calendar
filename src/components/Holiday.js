import {react} from 'react';

export default class Holiday extends React.Component {
    render() {
        return <li>{this.props.name}</li>;
    }
}