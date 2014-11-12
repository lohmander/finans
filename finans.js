#!/usr/bin/env node

var finance = require('yahoo-finance'),
    Table = require('cli-table'),
    colors = require('colors'),
    util = require('util');

finance.snapshot({
    symbol: process.argv[2]
}, function (err, q) {
    if (err) {
        console.log('Could not find a stock with that symbol.'.red);
        return;
    }

    var exchange = q.stockExchange.grey,
        symbol = q.symbol.cyan,
        name = q.name.blue,
        price = q.askRealtime,
        changeStr = (q.changePercentRealtime * 100) + "%",
        change = (q.changePercentRealtime >= 0)? changeStr.bgGreen : changeStr.bgRed;

    var table = new Table({
        head: ['Exchange', 'Symbol', 'Name', 'Price', 'Change']
    });

    table.push([exchange, symbol, name, price, change]);

    console.log(table.toString());
});