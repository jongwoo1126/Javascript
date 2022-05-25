const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");     //String.padStart(자릿수, 표시문자) : 자릿수만큼 표시되고 자릿수보다 적을 경우 표시문자를 자릿수에 맞게 출력
    const minutes = String(date.getMinutes()).padStart(2, "0"); //"1".padStart(2, "0") -> 01로 표시
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();     //없을 경우 00:00:00이 사이에 출력
setInterval(getClock, 1000);
// setInterval(sayHello, 5000)     5초마다 sayHello함수 실행
//setTimeout(sayHello, 5000);      5초 뒤 sayHello함수 실행