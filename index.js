/**
 *
 * Author: Ejaz Bawasa
 * Email: bawasa.ejaz@gmail.com
 * Date: 12/08/15 at 02:55
 *
 */
'use strict';

/**
 * this require is necessary.
 * It converts any es6 code following it into es5
 */
require('babel/register')({});

// get our server
var server = require('./server');

// start our server
server.listen(3000, function() {
    console.log('server is running on 3000');
});