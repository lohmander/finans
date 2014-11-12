#!/usr/bin/env node

var finance = require('yahoo-finance'),
    Table = require('cli-table'),
    colors = require('colors'),
    util = require('util');

finance.snapshot({
    symbols: process.argv[2].split(',')
}, function (err, stocks) {
    if (err) {
        console.log('Could not find a stock with that symbol.'.red);
        return;
    }

    var table = new Table({
        head: ['Exchange', 'Symbol', 'Name', 'Price', 'Change']
    });

    var q;

    for (stock in stocks) {
        q = stocks[stock];
        var exchange = q.stockExchange.grey,
            symbol = q.symbol.cyan,
            name = q.name.blue,
            price = q.askRealtime,
            changeVal = (typeof q.changePercentRealtime === 'string')? 0 : q.changePercentRealtime,
            changeValStr = changeVal.toString(),
            decimals = changeValStr.substr(changeValStr.indexOf('.')).length - 1,
            changeStr,
            change;

        changeVal = Math.round(changeVal * Math.pow(10, decimals)) / Math.pow(10, decimals - 2);
        changeStr = changeVal + "%";
        change = (q.changePercentRealtime >= 0)? changeStr.bgGreen : changeStr.bgRed;

        table.push([exchange, symbol, name, price, change]);
    }

    console.log(table.toString());
});
