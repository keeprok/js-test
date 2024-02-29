// # 문제26 : 행성 문제2

// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
const solar = {
    Mercury: "수성",
    Venus: "금성",
    Earth: "지구",
    Mars: "화성",
    Jupiter: "목성",
    Saturn: "토성",
    Uranus: "천왕성",
    Neptune: "해왕성",
};
function translation() {
    const name = "수성";
    for (key in solar) {
        if (solar[key] === name) {
            console.log(key);
        }
    }
}

translation();
