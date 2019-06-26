import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { YOUTUBE_API_KEY } from '../config/youtube';


library.add(fab, faCheckSquare, faCoffee);

ReactDOM.render(<Routes />, document.getElementById('root'));


