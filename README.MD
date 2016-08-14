# json2excel


## Quick start

Install
```bash
npm install json2excel
```

Example
```node
var jexcel=require('json2excel');

var data = {
    sheets: [{
        header: {
            'author': 'authorName',
            'title': 'title'
        },
        items: [
         {
            author:'john',
            title:'how to use this'
         },
         {
            author:'Bob',
            title:'so Easy'
         }
        ],
        sheetName: 'sheet1',
    }],
    filepath: 'j2x.xlsx'
} 

jexcel.j2e(data,function(err){ 
    console.log('finish')
});

```