'use strict';

var xlsx = require('node-xlsx');
var fs = require('fs');
var handleJson = function(t, callback) {
    var data = t.sheets;
    var filepath = t.filepath;
    var sheets = [];
    for (var i = 0; i < data.length; i++) { 
        sheets.push(data2sheet(data[i]));
    }
    savaxlsx(sheets, filepath, callback);
}

var data2sheet = function(data) {

    var header = data.header;
    var items = data.items;
    var sheetName = data.sheetName;
    var sheet = [];
    var row;
    var colkey = [];
    if (header) {
        row = [];
        for (var key in header) {
            colkey.push(key);
            row.push(header[key]);
        }
        sheet.push(row);

    }
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        row = [];
        for (var k = 0; k < colkey.length; k++) {
            row.push(item[colkey[k]]);
        }
        sheet.push(row);
    }
    return { data: sheet, name: sheetName };

}
var savaxlsx = function(sheets, filepath, callback) {
    var buffer = xlsx.build(sheets);

    fs.writeFile(filepath, buffer, 'utf-8', function(err) {
        callback(err);
    });
}


module.exports = { j2e: handleJson };
