interface isSortResult{
    [key:string] : string;
}

// 'a:1'转换为{a:'1'}


function sort(value:string):isSortResult{
    const sortMap={};
    const result=  value.split(',');//字符串转换为数组
    //result变成['a:1'];
    result.forEach( (item) => {
        const sortItem =  item.split(':');
        //temp转换为['a','1'];
        sortMap[sortItem[0]] = sortItem[1];

    })
    return sortMap;
}
console.log(sort('a:1'));
