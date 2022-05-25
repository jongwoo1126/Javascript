const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="userName";

function onLoginSubmit(event) {
    event.preventDefault()  //브라우저 기본 동작 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);  //class name에 hidden 삽입
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName)      //localStorage를 이용해 userName 저장
    //greeting.innerText = "Hello " + userName;     아래와 같은 의미. 옛날 표현 방식.
    paintGreetings(userName);   
}

function paintGreetings(userName) {
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    //class name에 hidden 삭제
}

const savedUserName = localStorage.getItem(USERNAME_KEY);       //localStorage를 이용해 userName 불러옴

if(savedUserName === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)

}else{
    // show the greeting
    paintGreetings(savedUserName);
}


