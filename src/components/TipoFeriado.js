import {react} from 'react';

export default class TipoFeriado extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
         this.context.tipoFeriado.setValue(event.target.value);
    }
    
    render() {
        return <select value={this.context.tipoFeriado.value} onChange={this.handleChange}>
            <option value="true">Publico</option>
            <option value="false">Todos</option>
        </select>;
    }
}

TipoFeriado.contextTypes = {
    tipoFeriado: React.PropTypes.object
};