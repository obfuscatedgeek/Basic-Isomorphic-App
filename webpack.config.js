/**
 *
 * Author: Ejaz Bawasa
 * Email: bawasa.ejaz@gmail.com
 * Date: 12/08/15 at 03:18
 *
 */


var path = require('path');

module.exports = {

    entry: [
        './clients/entry'
    ]

    ,output: {
        path: __dirname+'/build'
        ,filename: 'bundle.js'
    }

    ,resolve: ['', '.js']

    ,module: {
        loaders: [
            {
                test: /\.jsx?$/
                ,loaders: ['babel-loader?experimental']
                ,exclude: /node_modules/
            }
        ]
    }
};