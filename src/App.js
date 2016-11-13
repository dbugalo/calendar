import {react} from 'react';
import { Router, Route, Link , browserHistory } from 'react-router'

import Home from './pages/Home';
import Month from './pages/Month';
import Day from './pages/Day';

ReactDOM.render(<Router history={browserHistory}>
                    <Route path="/" component={Home} />
                    <Route path="/month" component={Month} />
                    <Route path="/day" component={Day} />
                </Router>, document.getElementById("content"));