'use strict';

const arr = [1,2,3, 'aaa', 'word'];

console.log(arr.some(function(item) {
    return item > 0;
}));

