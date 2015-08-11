/**
 *
 * Author: Ejaz Bawasa
 * Email: bawasa.ejaz@gmail.com
 * Date: 12/08/15 at 02:56
 *
 */

import express from 'express';
import React from 'react';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import routes from './shared/routes';

const app = express();

function generateHtml(dom) {
    return `
    <!doctype html>
        <html>
            <head>
            <link rel="icon" href="data:;base64,iVBORw0KGgo=">
            </head>
            <body>
                <h1>Hello Ejaz</h1>
                <div id='main-vew'>${dom}</div>
                <script type="application/javascript" src='http://localhost:8080/bundle.js' defer></script>
            </body>
        </html>
    `;

}
/**
 * middle ware for the express app.
 * This will basically run the different routes.
 * For each route we pick the react component = cmpFromReact
 * We convert this react component to html = domComponent
 * And inject this dom manually into html page
 * And render this html page.
 */
app.use( (req,res) => {


    let location = new Location(req.path, req.query);

    Router.run(routes, location, (error, initialState, transition) => {

        const cmpFromReact = (<Router {...initialState}/>);

        const domComponent = React.renderToString(cmpFromReact);

        res.send(generateHtml(domComponent));
    });
    }
);

export default app;