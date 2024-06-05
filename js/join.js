class SignUp {
    constructor(firstName, lastName, birthdayDate, gender, emailAddress, phoneNumber, classNumber, random) { // 생성자 함수
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthdayDate = birthdayDate;
      this.gender = gender;
      this.emailAddress = emailAddress;
      this.phoneNumber = phoneNumber;
      this.classNumber = classNumber;
      this.random = random;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`; // 템플릿 리터럴 문자열 연결, 기존에는 + 연산자로 연결
      }
    
      set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
      }
    
      get contactInfo() {
        return `${this.emailAddress} ${this.phoneNumber} ${this.random}`; // 요소 하나 하나를 객체 프로퍼티라고 한다.
      }
    
      set contactInfo(contactInfo) {
        const [emailAddress, phoneNumber, random] = contactInfo.split(" ");
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.random = random;
          
      }
    }
  

function join(){ // 회원가입
        let form = document.querySelector("#form_main");
        let f_name = document.querySelector("#firstName");
        let l_name = document.querySelector("#lastName");
        let b_day = document.querySelector("#birthdayDate");
        let gender = document.querySelector("#inlineRadioOptions");
        let email = document.querySelector("#emailAddress");
        let p_number = document.querySelector("#phoneNumber");
        let class_check = document.querySelector(".select form-control-lg");
        
        form.action = "../login/join_end.html";
        form.method = "get";
        
        if(f_name.value.length === 0 || l_name.value.length === 0 || b_day.value.length === 0 || email.value.length === 0 || p_number.value.length === 0){
            alert("회원가입 폼에 필수 정보를 입력해주세요.(성별, 분반 제외)");
        }
        else{
            session_join_set(); 
            form.submit();
        }
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

function encodeByAES256(key, data){
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString();
}

function decodeByAES256(key, data){
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
}

function encrypt_text(password){
    const k = "key";
    const rk = k.padEnd(32, " ");
    const b = password;
    const eb = this.encodeByAES256(rk, b);
    return eb;
    console.log(eb);
}

function decrypt_text(){
    const k = "key";
    const rk = k.padEnd(32, " ");
    const eb = session_get;
    const b = this.decodeByAES256(rk, eb);
    console.log(b);
}


