// using prototype we have added function myPush
// three dot means a is an array and will take as much as element

Array.prototype.myPush = function(...a){
    this.push(a[0]);
}