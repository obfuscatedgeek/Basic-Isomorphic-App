/**
 *
 * Author: Ejaz Bawasa
 * Email: bawasa.ejaz@gmail.com
 * Date: 12/08/15 at 02:59
 *
 */



import React from 'react';
import { Route } from 'react-router';
import AppView from './components/App';

/**
 * Define the various routes of our application and export it
 */
export default (
    <Route name="app" component={AppView} path="/">

    </Route>
);

