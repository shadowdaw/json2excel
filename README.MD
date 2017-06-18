# json2excel


## Quick start

Install
```bash
npm install json2excel
```

Example

```node
var jexcel=require('json2excel');

/***
init a sheet object :

var sheet={
        header: *A map of table header which has the same key of a item in items Array*,
        items:  *the sheet data Arry*,
        sheetName: *name of the sheet*
    }


***/

var sheet1={
        header: { 
            'author': 'Author Name',
            'title': 'Article Title'
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
        sheetName: 'sheet1'  //
    };
    
var sheet2=....
    
```



```

var data = {
    sheets: [sheet1, sheet2],
    filepath: 'j2x.xlsx'
} 


/* 
Use the method 'j2e' to transform the data into a excel file.
one Callback function will be apply when the work is done
 */

jexcel.j2e(data,function(err){ 
    console.log('finish')
});

```