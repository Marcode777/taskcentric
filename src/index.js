console.log("yeah, this works"); //this shows that index.js is working
let message = 'HELLO FROM ENTRY!!!'; // this shows that both index.js and es6 is working as well (also, just changing any part of these messages and then after saving, if the changes update, then that's confirmation that live-reloading is working as well)
console.log(message); // this shows that both index.js and es6 is working as well also

import React from 'react';
import {render} from 'react-dom'; // this allows to render into the HTML DOM
import App from 'components/app';

render(<App/>, document.getElementById('app')); // this is the id where the react app will actually be displayed into the html page