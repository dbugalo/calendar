import {react} from 'react';

export default class TipoFeriado extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            value: props.value
        };
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render() {
        return <select onChange={this.handleChange}>
            <option value="true">Publico</option>
            <option value="false">Todos</option>
        </select>;
    }
}