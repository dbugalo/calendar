import {react} from 'react';
import {Link} from 'react-router'
import moment from 'moment'

import TipoFeriado from '../components/TipoFeriado'
import Month from '../components/Month'
import Country from '../components/Country'

export default class YearAction extends React.Component {

    render() {
        var year = moment().year();
        
        var months = [];
        for(var i = 1; i <= 12; i++) {
            var pad = "00";
            var date = year + "-" + pad.substring(0, pad.length - (i + "").length) + i + "-01";
            months.push(<Month date={moment(date)}/>)
        }

        return(
            <div>
                <div>
                    <Link to="/">Home</Link> | <Link to="/month">Mes</Link> | <Link to="/day">Dia</Link>
                </div>
                <br />
                <div>
                    Pais <Country />
                </div>
                <br />
                <div>
                    Tipo Feriados <TipoFeriado />
                </div>
                <br />
                <div>
                    {months}
                </div>
            </div>
        );
    }
}