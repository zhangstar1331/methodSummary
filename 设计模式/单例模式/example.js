const getSingle = function( fn ){
    let result;
    return function(){
        return result || ( result = fn .apply(this, arguments ) );
    }
}; 