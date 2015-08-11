/**
 *
 * Author: Ejaz Bawasa
 * Email: bawasa.ejaz@gmail.com
 * Date: 12/08/15 at 03:12
 *
 */


/**
 * the client side of our React app
 */
import React from 'react';
import { Router } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import routes from '../shared/routes';


/**
 * this is how you render on the client side
 */
Router.render(<Router children={routes}/>, document.getElementById('main-vew'));