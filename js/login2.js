function logout(){
    session_del();
    location.href='../INDEX.html';;
}

function addJavascript(jsname){
    var th = document.getElementsByTagName('head')[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', jsname);
    th.appendChild(s);
}
addJavascript('/js/security.js');
addJavascript('/js/session.js');
addJavascript('/js/cookie.js');

document.getElementById("logout_btn").addEventListener('click', logout);
