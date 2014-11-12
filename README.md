finans
======

# Installation

    npm install -g finans

Simple CLI to list a stock using the Yahoo Finance api

Example usage:

`finans goog,aapl`

Would give you the following result Nov 12, 2014:

    ┌──────────┬────────┬─────────────┬────────┬────────┐
    │ Exchange │ Symbol │ Name        │ Price  │ Change │
    ├──────────┼────────┼─────────────┼────────┼────────┤
    │ NasdaqNM │ GOOG   │ Google Inc. │ 545.34 │ -0.89% │
    ├──────────┼────────┼─────────────┼────────┼────────┤
    │ NasdaqNM │ AAPL   │ Apple Inc.  │ 110.49 │ 0.72%  │
    └──────────┴────────┴─────────────┴────────┴────────┘

Enjoy!
