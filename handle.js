if ( !getCookie('wgid') ) {
    setWGID();
    console.log("wgid not found.");
} else {
    console.log( "user authorized-> " + getWGID() );
}