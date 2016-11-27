import {react} from 'react';
import { Router, Route, Link , hashHistory } from 'react-router'

import YearAction from './actions/YearAction';
import MonthAction from './actions/MonthAction';
import DayAction from './actions/DayAction';

ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={YearAction} />
                    <Route path="/month" component={MonthAction} />
                    <Route path="/day" component={DayAction} />
                </Router>, document.getElementById("content"));