(function(){
    var _UA = navigator.userAgent;
    if (_UA.indexOf('iPhone') > -1 || _UA.indexOf('iPod') > -1) {
        document.write('<link rel="stylesheet" type="text/css" href="https://gadget-r.github.io/assets/css/sp.css">');
    }else if(_UA.indexOf('Android') > -1){
        document.write('<link rel="stylesheet" type="text/css" href="https://gadget-r.github.io/assets/css/sp.css">');
    }else{
        document.write('<link rel="stylesheet" type="text/css" href="https://gadget-r.github.io/assets/css/pc.css">');
    }
})();