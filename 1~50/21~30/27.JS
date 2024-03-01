// # 문제27 : 객체 만들기

// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해주세요.
// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}
// const data = {};
// data.Yujin = 70;
// data.Hyewon = 100;
// console.log(data);
const name = "Yujin Hyewon";
const math = "70 100";
const keys = name.split(" ");
const value = math.split(" ");
const score = {};
for (let i = 0; i < keys.length; i++) {
    score[keys[i]] = parseInt(value[i], 10);
}
console.log(score);
//split : 문자열에서 특정부분을빼고 나머지부분들을 배열안 문자열로 나눔
//{[]} : 배열로 접근하기위해 사용됨//헷갈림
//{parseInt} : 문자열로 오는것을 상수특히(,10)으로오기에 10진수로 변환해주기위해 사용됨
