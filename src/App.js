import {react} from 'react';
import { Router, Route, Link , hashHistory } from 'react-router'

import Subscription from './Subscription'
import YearAction from './actions/YearAction';
import MonthAction from './actions/MonthAction';
import DayAction from './actions/DayAction';


class App extends React.Component {
    constructor(props,context) {
        super(props, context);
        
        this.country = new Subscription('BR');
        this.tipoFeriado = new Subscription(false);
    }
    
    getChildContext() {
        return {country: this.country, tipoFeriado: this.tipoFeriado};
    }

    componentDidMount() {
        this.country.subscribe(() => this.forceUpdate())
        this.tipoFeriado.subscribe(() => this.forceUpdate())
    }
    
    render() {
        return <Router history={hashHistory}>
                    <Route path="/" component={YearAction} />
                    <Route path="/month" component={MonthAction} />
                    <Route path="/day" component={DayAction} />
                </Router>
    }
}

App.childContextTypes = {
    country: React.PropTypes.object,
    tipoFeriado: React.PropTypes.boolean
};


ReactDOM.render(<App />, document.getElementById("content"));