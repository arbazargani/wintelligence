function makeWGID() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
}
function getTimestamp() {
    return new Date().getTime();
}
function setWGID() {
    document.cookie = "wgid=" + makeWGID() + "-" + getTimestamp();
}
function setCookie(name, value) {
    document.cookie = name+"="+value;
}
function getCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : false;
}
function deleteCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}
function getWGID() {
    return getCookie('wgid');
}