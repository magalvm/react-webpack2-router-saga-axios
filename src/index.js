import React, {Component} from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends Component {
    render(){
        return (<h1>Hi</h1>);
    }
}

render( <App /> ,document.getElementById('App') );