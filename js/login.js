const check_input = () => {
    const idsave_check = document.getElementById('idSaveCheck');
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    //const c = '아이디, 패스워드를 체크합니다';
    //alert(c);
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === ''){
        alert('이메일을 입력하세요.');
        return false;
    }
    if (passwordValue === ''){
        alert('비밀번호를 입력하세요.');
        return false;
    }
    if (emailValue.length < 5){
        alert('아이디는 최소 5글자 이상 입력해야 합니다.');
        return false;
    }
    if (passwordValue.length < 12){
        alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
        return false;
    }
    const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) !== null;
    if (!hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
        return false;
    }
    const hasUpperCase = passwordValue.match(/[A-Z]+/) !==null;
    const hasLowerCase = passwordValue.match(/[a-z]+/) !==null;
    if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
        return false;
    }
    const check_xss = (input) => {
        // DOMPurify 라이브러리 로드 (CND 사용)
        const DOMPurify = window.DOMPurify;
        //입력 값을 DOMpurify로 sanitize
        const sanitizedInput = DOMPurify.sanitize(input);
        //Sanitized된 값과 원본 입력 값 비교
        if (sanitizedInput !== input) {
            // XSS 공격 가능성 발견 시 에러 처리
            alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
            return false;
        }
        //Sanitized된 값 변환
        return sanitizedInput;   
    };

    const sanitizedPassword = check_xss(passwordValue); // check_xss 함수로 비밀번호 Sanitize
    const sanitizedEmail = check_xss(emailValue); // check_xss 함수로 비밀번호 Sanitize
    if (!sanitizedEmail) {
        //Sanitize된 비밀번호 사용
        return false;
    }

    if (!sanitizedPassword) {
        //Sanitized된 비밀번호 사용
        return false;
    }   

    if(idsave_check.checked == true) {
        alert("쿠키를 저장합니다.", emailValue);
        setCookie("id", emailValue, 1);
        alert("쿠키 값 :" + emailValue);
    }
    else
    {
        setCookie("id", emailValue.value, 0);
    }


    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);
    session_set();
    loginForm.submit();

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

document.getElementById("login_btn").addEventListener('click', check_input);
