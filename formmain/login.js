$('#submit-btn').on('click', function(e) {
  let idBox = $('#id').val();
  let pwBox = $('#pw').val();
  console.log(idBox, pwBox);

  if(idBox == '' && pwBox == '') {
    //id-box 들어있는 값이 빈값이면 alert창에 아이디를 입력하세요
    alert('둘다 빈칸이다');
    e.preventDefault();
  } else if(pwBox == '') {
    // alert('비밀번호를 입력하세요')
    $('.pw-alert').css('display', 'block')
    $('.pw-alert').html("비밀번호를 입력하세요")
    // document.querySelector('.pw-text').innerHTML="비밀번호를 입력하세요"
    e.preventDefault();
  } else if(idBox == '') {
    // alert('아이디를 입력하세요')
    $('.id-alert').css('display', 'block')
    $('.id-alert').html("아이디를 입력하세요")
    // document.querySelector('.id-text').innerHTML="아이디를 입력하세요"
    e.preventDefault();
  } else if(pwBox != '' && pwBox.length < 6) {
    //pwbox가 빈칸이 아니고 6자 보다 작을 때 
    //pw-alert의 display -> block
    //pw-alert의 안에 텍스트를 비밀번호를 6자 이상으로 설정하세요
    $('.pw-alert').css('display' , 'block');
    $('.pw-alert').html("비밀번호를 6자 이상으로 설정하세요");
    e.preventDefault();
  } 
})



//조건문
// if(조건) {
  // 실행 할 코드
// }

// if(조건) {
  //else if(또 다른 조건)
// }

//비교 연산자
//A > B : A가 B보다 크다
//A >= B : A가 B보다 크거나 작다

// if(10 > 1) {
//   console.log('true')
// } else {
//   console.log('false')
// }


//A < B : A가 B보다 작다
//A <= B : A가 B보다 작거나 작다

// if(10 < 1) {
//   console.log('true')
// } else {
//   console.log('false')
// }

//A == B : A와 B가 같다 / 데이터만 일치해도 true / 느슨한 비교
//A != B : A와 B가 같지않다 / 느스한 비교

// if(10 == 1) {
//   console.log('정답')
// } else {
//   console.log('정답 아닙니다.')
// }


//A === B : A와 B가 같다 / 데이터랑 형 모두 일치해야 true / 엄격한 비교
//A !== B : A와 B가 같지않다 / 데이터랑 형 모두 불일치해야 true / 엄격한 비교

// if(3 === '3') {
//   console.log('같다')
// } else {
//   console.log('같지않다')
// }



//논리 연산자
//1. A || B : or A조건 또는 B조건 둘 중 하나 일치할 때
//2. A && B : and A조건 또는 B조건 둘 다 일치할 때
//3. ! : not 논리부정
// if(10 > 1 || 5 < 3) {
//   console.log('같다')
// } else {
//   console.log('같지않다')
// }

// if(10 > 1 && 5 < 3) {
//   console.log('같다')
// } else {
//   console.log('같지않다')
// }

//(조건) 10과 1은 같다 -> 10과 1은 같지않다
// if(!(10 == 1)) {
//   console.log('참')
// } else {
//   console.log('거짓')
// }





