import {react} from 'react';
import {Link} from 'react-router'
import moment from 'moment'

import Year from '../components/Year'
import Country from '../components/Country'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {country: 'BR'};
    }
    
    render(){
        console.log(moment().months());
        return(
            <div>
                <div>
                    <Link to="/">Home</Link> | <Link to="/month">Mes</Link> | <Link to="/day">Dia</Link>
                </div>
                <br />
                <div>
                    Pais <Country data={this.state.country} />
                </div>
                <br />
                <Year date={moment()} />
            </div>
        );
    }
}