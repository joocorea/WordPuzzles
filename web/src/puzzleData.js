export const levels = [
  {
    id: '01', title: '단계 01', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: 1, direction: "across", row: 0, col: 1, answer: "글자", clue: "말을 나타낸 기호. [비] 문자" },
      { id: 2, direction: "down",   row: 0, col: 2, answer: "자연", clue: "산, 강, 바다처럼 저절로 생겨난 환경." },
      { id: 3, direction: "across", row: 1, col: 4, answer: "누나", clue: "나이 많은 여자 형제를 남동생이 부르는 말." },
      { id: 4, direction: "down",   row: 1, col: 5, answer: "나그네", clue: "집을 떠나 떠돌아다니는 사람. [예] 해와 바람 중 누가 ㄴㄱㄴ의 옷을 벗길까?" },
      { id: 5, direction: "down",   row: 3, col: 0, answer: "선생님", clue: "학생을 가르치는 사람. [반] 학생" },
      { id: 6, direction: "across", row: 4, col: 0, answer: "생선", clue: "먹기 위해 잡은 싱싱한 물고기. [예] 저녁 반찬은 ㅅㅅ 구이다." },
      { id: 7, direction: "down",   row: 5, col: 6, answer: "낚시", clue: "여러 가지 도구로 물고기를 낚는 일. [예] 바다에서 ㄴㅅ를 했다." },
      { id: 8, direction: "across", row: 6, col: 3, answer: "꼭두각시", clue: "꼭두각시놀음에 나오는 인형." }
    ]
  },
  {
    id: '02', title: '단계 02', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 1, col: 2, answer: "탈출", clue: "갇혀 있던 곳에서 빠져나옴. [예] 고양이가 ㅌㅊ을 시도했다." },
      { id: '2a', num: 2, direction: "across", row: 1, col: 5, answer: "간판", clue: "가게 이름이 잘 보이도록 써놓은 표지판." },
      { id: '2d', num: 2, direction: "down",   row: 1, col: 5, answer: "간직", clue: "잘 챙겨서 넣어 둠. [비] 보관" },
      { id: '3d', num: 3, direction: "down",   row: 3, col: 1, answer: "묶음", clue: "한데 모아서 묶은 덩어리. [예] 종이 한 ㅁㅇ" },
      { id: '4a', num: 4, direction: "across", row: 4, col: 0, answer: "마음가짐", clue: "마음이 가지는 자세." },
      { id: '5a', num: 5, direction: "across", row: 5, col: 4, answer: "물음", clue: "묻는 일. [비] 질문" },
      { id: '5d', num: 5, direction: "down",   row: 5, col: 4, answer: "물살", clue: "물이 흐르는 힘. [예] 강의 ㅁㅅ이 너무 빠르다." }
    ]
  },
  {
    id: '03', title: '단계 03', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 1, answer: "무지개", clue: "공기 중의 물방울이 햇빛을 받아 빨주노초파남보 7가지 색을 나타내는 것." },
      { id: '2a', num: 2, direction: "across", row: 1, col: 0, answer: "간지럼", clue: "간지러운 느낌. [예] ㄱㅈㄹ을 타다." },
      { id: '3d', num: 3, direction: "down",   row: 2, col: 3, answer: "해바라기", clue: "해의 방향을 따라다니는 커다란 노란색 꽃." },
      { id: '4a', num: 4, direction: "across", row: 3, col: 2, answer: "삯바느질", clue: "돈을 받고 바느질해 주는 일. [예] 할머니는 ㅅㅂㄴㅈ로 돈을 벌었다." },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 5, answer: "질투", clue: "내가 좋아하는 사람이 다른 사람과 친하게 지내는 것을 싫어함. [비] 샘" },
      { id: '6a', num: 6, direction: "across", row: 5, col: 0, answer: "홍보", clue: "소식을 널리 알리는 일. [예] ㅎㅂ 활동" },
      { id: '7d', num: 7, direction: "down",   row: 5, col: 1, answer: "보물", clue: "매우 귀하고 소중한 물건. [예] ㅂㅁ상자" }
    ]
  },
  {
    id: '04', title: '단계 04', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 1, answer: "태풍", clue: "큰비를 내리며 부는 매우 센 바람." },
      { id: '1d', num: 1, direction: "down",   row: 0, col: 1, answer: "태극기", clue: "대한민국의 국기. [예] ㅌㄱㄱ가 바람에 펄럭입니다." },
      { id: '2a', num: 2, direction: "across", row: 2, col: 4, answer: "꾸러미", clue: "꾸리어 싼 물건. [예] 달걀 한 ㄲㄹㅁ" },
      { id: '3d', num: 3, direction: "down",   row: 2, col: 6, answer: "미세먼지", clue: "눈에 보이지 않을 정도로 아주 작은 먼지." },
      { id: '4a', num: 4, direction: "across", row: 3, col: 2, answer: "낙엽", clue: "말라서 떨어진 나뭇잎. [예] 가을에는 ㄴㅇ이 진다." },
      { id: '5a', num: 5, direction: "across", row: 4, col: 0, answer: "시계", clue: "시각을 나타내는 기계." },
      { id: '6d', num: 6, direction: "down",   row: 4, col: 1, answer: "계절", clue: "봄, 여름, 가을, 겨울을 통틀어 말함. [예] 가을은 결실의 ㄱㅈ" },
      { id: '7a', num: 7, direction: "across", row: 5, col: 4, answer: "허벅지", clue: "허벅다리 안쪽의 살이 있는 곳. [비] 허벅다리" }
    ]
  },
  {
    id: '05', title: '단계 05', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 3, answer: "국기", clue: "한 나라를 상징하는 깃발. [예] 우리나라의 ㄱㄱ는 태극기" },
      { id: '2a', num: 2, direction: "across", row: 1, col: 2, answer: "일기예보", clue: "날씨 변화를 미리 예상하여 알리는 일." },
      { id: '3d', num: 3, direction: "down",   row: 1, col: 5, answer: "보람", clue: "어떤 일을 했을 때 돌아오는 좋은 결과나 만족감." },
      { id: '4a', num: 4, direction: "across", row: 3, col: 0, answer: "기발", clue: "재치가 있고 남달리 뛰어남." },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 1, answer: "발표", clue: "어떤 사실이나 결과를 여러 사람에게 알리는 것. [예] 국어 시간에 ㅂㅍ를 했다." },
      { id: '6a', num: 6, direction: "across", row: 4, col: 1, answer: "표현", clue: "생각이나 감정을 말이나 행동으로 나타냄." },
      { id: '7d', num: 7, direction: "down",   row: 5, col: 5, answer: "세모", clue: "종이 위에 세 점을 이어 만든 도형. [비] 삼각형 [예] 동그라미, ㅅㅁ, 네모…" },
      { id: '8a', num: 8, direction: "across", row: 6, col: 3, answer: "코스모스", clue: "가을철 길가에 자주 보이는 흰색, 분홍색, 자주색의 꽃. [예] 가을 길에 ㅋㅅㅁㅅ가 피어 있다." }
    ]
  },
  {
    id: '06', title: '단계 06', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 0, answer: "받침", clue: "한글을 쓸 때 모음 다음에 아래로 오는 자음." },
      { id: '1d', num: 1, direction: "down",   row: 0, col: 0, answer: "받아쓰기", clue: "선생님이 읽는 글을 그대로 옮겨 쓰는 것." },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 4, answer: "빙그레", clue: "소리 없이 방긋이 웃는 모양. [예] 아기가 ㅂㄱㄹ 웃는다." },
      { id: '3a', num: 3, direction: "across", row: 1, col: 3, answer: "동그라미", clue: "동그랗게 생긴 모양. [비] 원" },
      { id: '4a', num: 4, direction: "across", row: 2, col: 0, answer: "쓰임새", clue: "돈이나 물건이 실제로 쓰이는 곳." },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 6, answer: "의논하다", clue: "어떤 일에 대하여 서로 의견을 말하고 듣는다. [예] 어떻게 할지 서로 ㅇㄴㅎㄷ." },
      { id: '6d', num: 6, direction: "down",   row: 4, col: 2, answer: "어림", clue: "대강 짐작으로 헤아림. [예] ㅇㄹ잡아" },
      { id: '7a', num: 7, direction: "across", row: 5, col: 1, answer: "그림자", clue: "빛을 가로막은 물체 뒤에 생기는, 물체의 모양을 닮은 검은 꼴." }
    ]
  },
  {
    id: '07', title: '단계 07', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 4, answer: "날짜", clue: "일정한 일을 하는 데 걸리는 날의 수. [예] 방학까지 아직 ㄴㅉ가 남았다." },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 5, answer: "짜임", clue: "조직이나 구성. [예] 글의 ㅉㅇ" },
      { id: '3d', num: 3, direction: "down",   row: 2, col: 1, answer: "휘파람", clue: "입김을 불어서 내는 맑은 소리." },
      { id: '4a', num: 4, direction: "across", row: 4, col: 0, answer: "바람개비", clue: "바람을 받으면 빙글빙글 도는 장난감. [비] 팔랑개비" },
      { id: '5a', num: 5, direction: "across", row: 5, col: 5, answer: "낱말", clue: "일정한 뜻이 있으면서 홀로 쓰일 수 있는 낱개의 말. [비] 단어" },
      { id: '5d', num: 5, direction: "down",   row: 5, col: 5, answer: "낱개", clue: "여러 개 중에서 따로 떼어 낼 수 있는 한 개. [예] ㄴㄱ로도 팔아요." },
      { id: '6a', num: 6, direction: "across", row: 6, col: 3, answer: "지우개", clue: "연필로 쓴 글씨나 그림 따위를 지우는 데 쓰는 물건." }
    ]
  },
  {
    id: '08', title: '단계 08', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 0, answer: "네모", clue: "네 개의 직선으로 둘러싸인 평면 도형. [비] 사각형" },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 1, answer: "모형", clue: "어떤 물건을 본떠서 만든 물건. [예] ㅁㅎ 항공기" },
      { id: '3a', num: 3, direction: "across", row: 0, col: 3, answer: "축제", clue: "많은 사람이 모여 벌이는 큰 규모의 행사. [예] ㅊㅈ가 시작되면, 모두 들뜬다." },
      { id: '4d', num: 4, direction: "down",   row: 2, col: 5, answer: "낭송", clue: "글을 소리 내어 외우거나 읽음. [예] 시를 함께 ㄴㅅ해 보자." },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 2, answer: "양치질", clue: "이를 닦고 물로 입 안을 헹구는 일." },
      { id: '6a', num: 6, direction: "across", row: 3, col: 5, answer: "송편", clue: "멥쌀가루를 반죽하여 팥, 콩, 밤, 깨 등을 넣고 반달 모양으로 빚어서 솔잎을 깔고 찐 떡." },
      { id: '7d', num: 7, direction: "down",   row: 3, col: 6, answer: "편안하다", clue: "몸이나 마음이 어려움 없이 편하고 좋다. [반] 불편하다." },
      { id: '8a', num: 8, direction: "across", row: 4, col: 0, answer: "비석치기", clue: "납작한 돌을 세워 놓고 조금 떨어진 곳에서 작은 돌을 던지거나 발로 차서 세워 놓은 돌을 맞혀 넘어뜨리는 놀이. [비] 돌치기" }
    ]
  },
  {
    id: '09', title: '단계 09', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 1, answer: "모으기", clue: "흩어져 있는 것을 한데 합치기. [반] 가르기" },
      { id: '1d', num: 1, direction: "down",   row: 0, col: 1, answer: "모둠", clue: "학습이나 놀이 등의 활동을 하기 위해 몇 명씩 묶어 만든 모임." },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 3, answer: "기쁨", clue: "신이 나는 느낌이나 기분이 좋은 마음. [반] 슬픔" },
      { id: '3d', num: 3, direction: "down",   row: 2, col: 5, answer: "심부름", clue: "남의 시킴이나 부탁을 받고 그 일을 대신함." },
      { id: '4a', num: 4, direction: "across", row: 3, col: 3, answer: "문장부호", clue: "쉼표, 물음표, 따옴표 등과 같이 문장의 뜻을 잘 전달하고, 문장을 읽고 이해하기 쉽도록 돕는 부호." },
      { id: '5d', num: 5, direction: "down",   row: 4, col: 0, answer: "곱하기", clue: "곱셈을 하는 일. [반] 나누기" },
      { id: '6a', num: 6, direction: "across", row: 5, col: 0, answer: "하품", clue: "졸리거나 고단하거나 배부르거나 할 때, 절로 입이 벌어지면서 하는 깊은 숨쉬기." },
      { id: '7d', num: 7, direction: "down",   row: 5, col: 6, answer: "포함", clue: "어떤 무리나 범위에 함께 들어 있거나 함께 넣음. [예] 나를 ㅍㅎ한 우리 가족" }
    ]
  },
  {
    id: '10', title: '단계 10', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 1, answer: "요정", clue: "전설이나 동화 속에 나오는 신기한 능력을 보이는 존재로 사람의 모습을 하고 있다. [예] 숲속의 ㅇㅈ" },
      { id: '2a', num: 2, direction: "across", row: 1, col: 0, answer: "확정", clue: "일을 확실하게 정함. [예] 올림픽 일정이 ㅎㅈ되었다." },
      { id: '3a', num: 3, direction: "across", row: 2, col: 2, answer: "겨드랑이", clue: "양편 팔 밑의 오목한 곳." },
      { id: '3d', num: 3, direction: "down",   row: 2, col: 2, answer: "겨울나기", clue: "겨울을 넘김. [비] 월동" },
      { id: '4d', num: 4, direction: "down",   row: 4, col: 4, answer: "짝수", clue: "2, 4, 6, 8…과 같이 2로 나누어떨어지는 수. [반] 홀수" },
      { id: '5a', num: 5, direction: "across", row: 5, col: 1, answer: "일기", clue: "그날그날 겪은 일과 감상을 매일 적은 글." },
      { id: '6a', num: 6, direction: "across", row: 5, col: 4, answer: "수수깡", clue: "수수의 줄기. [비] 수숫대" },
      { id: '7d', num: 7, direction: "down",   row: 5, col: 5, answer: "수염", clue: "사람이나 동물의 입가에 난 털. [예] 산타할아버지 ㅅㅇ은 하얗다." }
    ]
  },
  {
    id: '11', title: '단계 11', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 2, answer: "방법", clue: "어떤 일이나 목적을 이루기 위한 해결법." },
      { id: '2a', num: 2, direction: "across", row: 1, col: 0, answer: "맞춤법", clue: "글자를 바르게 적기 위한 규칙." },
      { id: '3a', num: 3, direction: "across", row: 1, col: 5, answer: "칭찬", clue: "다른 사람의 좋은 점을 높이 평가하는 말. [예] 발표를 잘했다고 ㅊㅊ을 들었다." },
      { id: '4a', num: 4, direction: "across", row: 3, col: 4, answer: "어머니", clue: "나를 낳아 주고 길러 준 여자. [반] 아버지" },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 5, answer: "머리카락", clue: "머리털 가닥. [예] ㅁㄹㅋㄹ을 묶었다." },
      { id: '6d', num: 6, direction: "down",   row: 4, col: 2, answer: "뺄셈", clue: "한 수에서 다른 수를 빼는 셈. [반] 덧셈" },
      { id: '7a', num: 7, direction: "across", row: 5, col: 1, answer: "덧셈", clue: "한 개의 수에 또 하나의 수를 더하는 셈. [반] 뺄셈" },
      { id: '8a', num: 8, direction: "across", row: 6, col: 3, answer: "발가락", clue: "발끝의 다섯 개로 갈라진 부분." }
    ]
  },
  {
    id: '12', title: '단계 12', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 3, answer: "애벌레", clue: "알에서 나와 아직 다 자라지 않은 곤충." },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 4, answer: "벌판", clue: "사방으로 펼쳐진 넓고 평평한 땅." },
      { id: '3a', num: 3, direction: "across", row: 2, col: 0, answer: "소꿉놀이", clue: "아이들이 장난감 그릇을 가지고 어른들의 흉내를 내며 노는 것. [비] 소꿉장난" },
      { id: '4d', num: 4, direction: "down",   row: 2, col: 2, answer: "놀이터", clue: "주로 아이들이 모여 노는 곳." },
      { id: '5d', num: 5, direction: "down",   row: 4, col: 4, answer: "마술사", clue: "여러 가지 도구나 손재주로 사람의 눈을 속여 신기하고 이상한 일을 하여 보이는 사람." },
      { id: '6d', num: 6, direction: "down",   row: 4, col: 6, answer: "육각형", clue: "여섯 개의 직선으로 둘러싸인 평면 도형." },
      { id: '7a', num: 7, direction: "across", row: 6, col: 4, answer: "사각형", clue: "네 개의 직선으로 둘러싸인 평면 도형. [비] 네모" }
    ]
  },
  {
    id: '13', title: '단계 13', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 2, answer: "칠교놀이", clue: "일곱 가지 도형 조각으로 여러 형태를 만들면서 즐기는 놀이." },
      { id: '1d', num: 1, direction: "down",   row: 0, col: 2, answer: "칠판", clue: "분필로 글씨를 쓰거나 그림을 그릴 수 있게 만든 검정이나 초록색의 판. [예] ㅊㅍ 지우개" },
      { id: '2a', num: 2, direction: "across", row: 1, col: 0, answer: "게시판", clue: "널리 알릴 내용을 붙이거나 내걸어 두루 보게 걸어 놓은 판." },
      { id: '3d', num: 3, direction: "down",   row: 1, col: 1, answer: "시각", clue: "시간의 어느 한 시점. [예] 해 뜨는 ㅅㄱ" },
      { id: '4d', num: 4, direction: "down",   row: 2, col: 4, answer: "쓰레기", clue: "못 쓰게 되어 버려야 할 것이나 내다 버린 것을 모두 이르는 말." },
      { id: '5a', num: 5, direction: "across", row: 3, col: 3, answer: "크레파스", clue: "크레용과 파스텔의 성질을 섞어 만든 막대기로 색을 칠할 때 사용한다. [예] 노란색 ㅋㄹㅍㅅ" },
      { id: '6a', num: 6, direction: "across", row: 5, col: 1, answer: "무궁화", clue: "우리나라의 국화." },
      { id: '7d', num: 7, direction: "down",   row: 5, col: 3, answer: "화면", clue: "텔레비전이나 컴퓨터 따위에서 그림이나 영상이 나타나는 면." }
    ]
  },
  {
    id: '14', title: '단계 14', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 0, answer: "비행기", clue: "날개나 프로펠러를 이용해서 공중을 날아 사람이나 물건을 싣고 나르는 기계." },
      { id: '1d', num: 1, direction: "down",   row: 0, col: 0, answer: "비상구", clue: "갑작스러운 사고가 일어날 때 밖으로 빠져나가기 위해 만들어 놓은 문." },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 5, answer: "크기", clue: "어떤 사물의 큰 정도." },
      { id: '3a', num: 3, direction: "across", row: 1, col: 3, answer: "비둘기", clue: "비둘깃과에 속한 새를 통틀어 이르는 말. 평화를 상징하는 새." },
      { id: '3d', num: 3, direction: "down",   row: 1, col: 3, answer: "비교", clue: "여럿을 서로 견주어 보는 것. [예] 크기 ㅂㄱ" },
      { id: '4d', num: 4, direction: "down",   row: 4, col: 3, answer: "상징", clue: "어떤 사실이나 생각을 떠오르게 하는 사물, 또는 그 사물을 가리키는 말이나 표시. [예] 비둘기는 평화의 ㅅㅈ" },
      { id: '5a', num: 5, direction: "across", row: 5, col: 2, answer: "특징", clue: "다른 것에 비하여 특별히 눈에 뜨이는 점. [예] 특색" },
      { id: '6a', num: 6, direction: "across", row: 6, col: 5, answer: "새싹", clue: "새로 돋아나는 싹. [예] 봄에는 ㅅㅆ이 파릇파릇" }
    ]
  },
  {
    id: '15', title: '단계 15', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 4, answer: "폭력", clue: "남을 거칠고 사납게 억누름. [예] 학교 ㅍㄹ은 절대 안 된다." },
      { id: '2d', num: 2, direction: "down",   row: 1, col: 2, answer: "오누이", clue: "오라비와 누이를 아울러 이르는 말. [비] 남매" },
      { id: '3a', num: 3, direction: "across", row: 2, col: 2, answer: "누룽지", clue: "솥 바닥에 눌어붙은 밥. [비] 눌은밥" },
      { id: '4a', num: 4, direction: "across", row: 3, col: 0, answer: "나들이", clue: "집을 떠나 가까운 곳에 잠시 다녀오는 일. [예] 휴일 ㄴㄷㅇ" },
      { id: '5d', num: 5, direction: "down",   row: 4, col: 4, answer: "승강기", clue: "사람이나 화물을 아래위로 나르는 기계 장치. [예] ㅅㄱㄱ를 타다." },
      { id: '6d', num: 6, direction: "down",   row: 5, col: 1, answer: "오전", clue: "자정부터 낮 열두 시까지의 시간. [반] 오후" },
      { id: '7a', num: 7, direction: "across", row: 5, col: 3, answer: "강강술래", clue: "정월 대보름날이나 팔월 한가위에 여러 사람이 함께 손을 잡고 빙빙 돌면서 춤을 추고 노래를 부르는 민속놀이." },
      { id: '8a', num: 8, direction: "across", row: 6, col: 0, answer: "안전", clue: "위험하거나 사고가 날 염려가 없는 상태." }
    ]
  },
  {
    id: '16', title: '단계 16', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 5, answer: "세균", clue: "눈으로 볼 수 없을 만큼 작으며, 세포가 하나인 생물. [예] ㅅㄱ을 없애는 양치법" },
      { id: '1d', num: 1, direction: "down",   row: 0, col: 5, answer: "세배", clue: "설날에 어른에게 드리는 큰절." },
      { id: '2a', num: 2, direction: "across", row: 1, col: 2, answer: "표정", clue: "마음속의 상태가 얼굴에 드러나는 모습." },
      { id: '2d', num: 2, direction: "down",   row: 1, col: 2, answer: "표지판", clue: "알려야 할 내용을 담은 판." },
      { id: '3a', num: 3, direction: "across", row: 2, col: 0, answer: "아버지", clue: "부모 중 남자. [반] 어머니" },
      { id: '3d', num: 3, direction: "down",   row: 2, col: 0, answer: "아저씨", clue: "남자 어른을 친근하게 이르는 말. [반] 아주머니" },
      { id: '4d', num: 4, direction: "down",   row: 3, col: 6, answer: "난리", clue: "전쟁이나 재해 등으로 어지럽고 소란스러운 상태. [예] 홍수로 ㄴㄹ가 나다." },
      { id: '5a', num: 5, direction: "across", row: 4, col: 4, answer: "회오리", clue: "바람이 한곳에서 뱅뱅 돌아 깔때기 모양으로 하늘 높이 오르는 현상. [예] ㅎㅇㄹ 바람" }
    ]
  },
  {
    id: '17', title: '단계 17', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 3, answer: "오각형", clue: "다섯 개의 직선으로 둘러싸인 평면 도형." },
      { id: '2a', num: 2, direction: "across", row: 3, col: 0, answer: "지저분하다", clue: "정리가 되어 있지 않아서 깨끗하지 못하다. [예] 때가 껴서 옷이 ㅈㅈㅂㅎㄷ." },
      { id: '5a', num: 5, direction: "across", row: 5, col: 0, answer: "재채기", clue: "코안이 간지럽다가 갑자기 숨을 내뿜으면서 큰 소리를 내는 것." },
      { id: '6a', num: 6, direction: "across", row: 5, col: 4, answer: "엉덩이", clue: "앉으면 바닥에 닿는, 허리와 허벅지 사이의 부분." },
      { id: '1d', num: 1, direction: "down",   row: 0, col: 3, answer: "오후", clue: "낮 열두 시부터 밤 열두 시까지의 동안. [반] 오전" },
      { id: '3d', num: 3, direction: "down",   row: 3, col: 2, answer: "분위기", clue: "주위를 둘러싸고 있는 상황이나 환경." },
      { id: '4d', num: 4, direction: "down",   row: 3, col: 6, answer: "더듬이", clue: "곤충의 머리에 달린 길고 뾰족한 감각기관. [예] 개미의 ㄷㄷㅇ" }
    ]
  },
  {
    id: '18', title: '단계 18', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 3, answer: "번데기", clue: "곤충의 애벌레가 어른벌레로 되는 과정 중에 한동안 고치 속에 가만히 들어 있는 몸." },
      { id: '2a', num: 2, direction: "across", row: 0, col: 5, answer: "원", clue: "해나 보름달처럼 둥글게 그려진 모양이나 형태. [비] 동그라미" },
      { id: '3a', num: 3, direction: "across", row: 1, col: 2, answer: "껍데기", clue: "달걀이나 조개 같은 것을 싸고 있는 딱딱한 겉." },
      { id: '4d', num: 4, direction: "down",   row: 3, col: 1, answer: "공사장", clue: "공사를 하는 곳. [비] 공사판" },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 5, answer: "호탕하다", clue: "거리낌 없이 트여 있다. [예] 웃음소리가 ㅎㅌㅎㄷ." },
      { id: '6a', num: 6, direction: "across", row: 4, col: 4, answer: "바탕", clue: "무엇이 이루어지기 위한 뼈대나 틀을 이루는 부분. [비] 기본" },
      { id: '7a', num: 7, direction: "across", row: 5, col: 0, answer: "만장일치", clue: "모든 사람의 의견이 같음." }
    ]
  },
  {
    id: '19', title: '단계 19', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 2, answer: "막대기", clue: "가늘고 기다랗고 단단한 물건. [예] ㅁㄷㄱ를 휘둘렀다." },
      { id: '2d', num: 2, direction: "down",   row: 1, col: 0, answer: "지진", clue: "화산 활동이나 땅속 물질이 움직여서 땅이 흔들리는 것." },
      { id: '3a', num: 3, direction: "across", row: 2, col: 0, answer: "진드기", clue: "동물의 피부에 붙어서 피를 빨아 먹는 작은 벌레." },
      { id: '4d', num: 4, direction: "down",   row: 2, col: 4, answer: "허수아비", clue: "곡식을 해치는 새, 짐승 따위를 막기 위하여 짚으로 만들어 논밭에 세워 놓은 인형. [예] 가을 논밭에 세워진 ㅎㅅㅇㅂ" },
      { id: '5a', num: 5, direction: "across", row: 4, col: 3, answer: "할아버지", clue: "부모의 아버지. [반] 할머니" },
      { id: '6d', num: 6, direction: "down",   row: 5, col: 0, answer: "황사", clue: "사막이나 황토 지대의 누런 모래가 강한 바람으로 인하여 날아와서 내려앉는 현상. [예] 봄철 ㅎㅅ 현상" },
      { id: '7a', num: 7, direction: "across", row: 6, col: 0, answer: "사다리", clue: "높은 곳이나 낮은 곳을 오르내릴 때 디딜 수 있도록 만든 기구. [비] 사닥다리" }
    ]
  },
  {
    id: '20', title: '단계 20', gridSize: { rows: 6, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 1, answer: "인물", clue: "이야기나 연극에서 어떤 역할을 하는 사람. [예] 주요 ㅇㅇ" },
      { id: '4a', num: 4, direction: "across", row: 3, col: 4, answer: "주인공", clue: "연극, 영화, 소설 등에서 이야기의 중심이 되는 인물. [예] 나는 이번 연극에서 ㅈㅇㄱ을 맡았다." },
      { id: '6a', num: 6, direction: "across", row: 5, col: 0, answer: "완성", clue: "완전히 다 이루었음. [반] 미완성" },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 2, answer: "물고기", clue: "붕어처럼 아가미와 지느러미가 있는 물에 사는 동물." },
      { id: '3d', num: 3, direction: "down",   row: 2, col: 5, answer: "확인", clue: "틀림없이 그러한가를 알아봄. [반] 미확인" },
      { id: '4d', num: 4, direction: "down",   row: 3, col: 4, answer: "주말", clue: "한 주일의 끝 무렵. [예] ㅈㅁ 농장" },
      { id: '5d', num: 5, direction: "down",   row: 4, col: 1, answer: "건성", clue: "정성을 들이지 않고 어떤 일을 대충 함. [예] ㄱㅅ으로 책을 읽다." }
    ]
  },
  {
    id: '21', title: '단계 21', gridSize: { rows: 6, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 0, answer: "횡단보도", clue: "사람이 안전하게 건너다닐 수 있도록 차도 위에 마련한 길. [비] 건널목" },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 3, answer: "도움", clue: "일이 잘되도록 남을 돕는 일." },
      { id: '3d', num: 3, direction: "down",   row: 1, col: 6, answer: "불가사리", clue: "몸이 다섯 가닥으로 되어 있어 별 모양인 바닷속 동물." },
      { id: '4a', num: 4, direction: "across", row: 3, col: 2, answer: "영역", clue: "힘, 활동 따위가 미치는 분야나 범위. [예] 활동 ㅇㅇ" },
      { id: '4d', num: 4, direction: "down",   row: 3, col: 2, answer: "영감", clue: "나이가 많이 든 남자를 약간 대접하여 부르는 말." },
      { id: '5a', num: 5, direction: "across", row: 3, col: 5, answer: "행사", clue: "여럿이 어떤 목적을 세우고 모임을 진행하는 일. [예] 마트에서 설맞이 ㅎㅅ를 한다." },
      { id: '6a', num: 6, direction: "across", row: 4, col: 1, answer: "실감", clue: "실제로 체험하는 느낌. [예] ㅅㄱ 나는 영상" },
      { id: '6d', num: 6, direction: "down",   row: 4, col: 1, answer: "실천", clue: "생각한 바를 실제로 행함. [비] 실행" }
    ]
  },
  {
    id: '22', title: '단계 22', gridSize: { rows: 6, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 1, answer: "연극", clue: "배우가 무대 위에서 각본에 따라 말과 행동으로 이야기를 보여 주는 예술. [예] ㅇㄱ 공연" },
      { id: '1d', num: 1, direction: "down",   row: 0, col: 1, answer: "연기", clue: "불이 났을 때 생겨나는 흐릿한 기체. [속] 아니 땐 굴뚝에 ㅇㄱ 날까." },
      { id: '2d', num: 2, direction: "down",   row: 1, col: 4, answer: "긴장", clue: "마음을 졸이고 정신을 바짝 차림. [예] 시험 전날의 ㄱㅈ" },
      { id: '3a', num: 3, direction: "across", row: 2, col: 2, answer: "운동장", clue: "주로 체육이나 운동 경기를 하기 위해 만든 큰 마당." },
      { id: '4d', num: 4, direction: "down",   row: 2, col: 3, answer: "동생", clue: "같은 부모의 자식으로 나보다 나이가 적은 사람." },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 5, answer: "젓가락", clue: "음식을 집어 먹거나, 물건을 집는 데 쓰는 두 개의 기다란 작대기." },
      { id: '6a', num: 6, direction: "across", row: 4, col: 0, answer: "접촉", clue: "서로 맞닿음. [예] 신체 ㅈㅊ" },
      { id: '7a', num: 7, direction: "across", row: 4, col: 5, answer: "가면", clue: "종이, 나무, 흙 따위로 사람이나 동물의 얼굴 모양을 본떠 만든 것." }
    ]
  },
  {
    id: '23', title: '단계 23', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 0, answer: "해충", clue: "사람에게 해가 되는 곤충을 통틀어 이르는 말." },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 1, answer: "충치", clue: "세균 따위의 영향으로 이가 상하는 것." },
      { id: '3d', num: 3, direction: "down",   row: 1, col: 3, answer: "순서", clue: "차례로 나열한 것. [예] 그네 타는 ㅅㅅ" },
      { id: '4a', num: 4, direction: "across", row: 2, col: 3, answer: "서랍", clue: "빼었다 끼웠다 하는 뚜껑 없는 상자. [예] ㅅㄹ에 물건을 넣다." },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 6, answer: "꼭짓점", clue: "수학에서 각을 이루는 두 변이 만나는 점." },
      { id: '6a', num: 6, direction: "across", row: 4, col: 5, answer: "몸짓", clue: "몸을 놀리는 모양." },
      { id: '7a', num: 7, direction: "across", row: 5, col: 0, answer: "도화지", clue: "그림을 그리는 데 쓰는 종이. [예] 크레파스와 ㄷㅎㅈ" },
      { id: '8d', num: 8, direction: "down",   row: 5, col: 1, answer: "화창", clue: "날씨나 바람이 온화하고 맑음. [예] ㅎㅊ한 봄날" }
    ]
  },
  {
    id: '24', title: '단계 24', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '2a', num: 2, direction: "across", row: 1, col: 5, answer: "초대", clue: "잔치나 식사 때에 오라고 부름. [비] 초청" },
      { id: '5a', num: 5, direction: "across", row: 4, col: 0, answer: "가르기", clue: "쪼개거나 나누어 따로따로 되게 하다. [예] ㄱㄹㄱ와 모으기" },
      { id: '7a', num: 7, direction: "across", row: 6, col: 5, answer: "한복", clue: "우리나라의 전통 의복." },
      { id: '1d', num: 1, direction: "down",   row: 0, col: 5, answer: "벌초", clue: "무덤의 풀을 베어서 깨끗이 함. [예] 할아버지 묘에 ㅂㅊ를 했다." },
      { id: '3d', num: 3, direction: "down",   row: 2, col: 0, answer: "애국가", clue: "우리나라의 국가." },
      { id: '4d', num: 4, direction: "down",   row: 2, col: 2, answer: "돋보기", clue: "가까운 데 있는 글자나 작은 것을 크게 보이도록 볼록하게 만든 안경." },
      { id: '6d', num: 6, direction: "down",   row: 5, col: 6, answer: "반복", clue: "같은 일을 되풀이함. [예] ㅂㅂ 행동" }
    ]
  },
  {
    id: '25', title: '단계 25', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 2, answer: "공사판", clue: "공사를 하는 곳. [예] 아파트 ㄱㅅㅍ" },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 3, answer: "사촌", clue: "아버지의 친형제의 아들이나 딸을 나타내는 촌수." },
      { id: '3a', num: 3, direction: "across", row: 2, col: 4, answer: "여러분", clue: "여러 명의 사람을 높여 부르는 말. [예] 어린이 ㅇㄹㅂ!" },
      { id: '4d', num: 4, direction: "down",   row: 2, col: 6, answer: "분류", clue: "종류에 따라서 가름. [예] 도서 ㅂㄹ" },
      { id: '5d', num: 5, direction: "down",   row: 4, col: 1, answer: "평소", clue: "특별한 일이 없는 보통 때. [예] 호야는 ㅍㅅ에도 밥을 잘 먹는다." },
      { id: '6a', num: 6, direction: "across", row: 5, col: 0, answer: "산소", clue: "무덤을 높여 이르는 말." },
      { id: '7a', num: 7, direction: "across", row: 5, col: 4, answer: "변덕", clue: "이랬다저랬다 자주 바뀌는 태도나 성질. [관] ㅂㄷ이 죽 끓는 듯하다." },
      { id: '7d', num: 7, direction: "down",   row: 5, col: 4, answer: "변신", clue: "몸의 모양이나 태도 따위를 바꿈. [예] 새롭게 ㅂㅅ한 엄마의 패션" }
    ]
  },
  {
    id: '26', title: '단계 26', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 1, answer: "담장", clue: "집이나 건물 주변을 둘러막기 위하여 흙, 돌, 벽돌 따위로 쌓아 올린 것." },
      { id: '2a', num: 2, direction: "across", row: 1, col: 1, answer: "장난감", clue: "가지고 노는 여러 가지 놀잇감. [예] 완구" },
      { id: '3d', num: 3, direction: "down",   row: 2, col: 6, answer: "결석하다", clue: "나가야 할 자리에 나가지 않다. [반] 출석하다." },
      { id: '4a', num: 4, direction: "across", row: 3, col: 5, answer: "멍석", clue: "짚으로 만든 큰 돗자리. 사람이 앉거나 곡식을 널어 말릴 때 쓴다. [예] ㅁㅇ 위에 콩을 널다." },
      { id: '5a', num: 5, direction: "across", row: 5, col: 1, answer: "미끄럼틀", clue: "앉아서 미끄러져 내려오도록 비스듬하게 만든 놀이 기구." },
      { id: '5d', num: 5, direction: "down",   row: 5, col: 1, answer: "미로", clue: "복잡하게 갈래가 져서, 한번 들어가면 빠져나오기 어려운 길." },
      { id: '6a', num: 6, direction: "across", row: 6, col: 0, answer: "위로", clue: "따뜻한 말이나 행동으로 상대의 슬픔을 달래 주는 것." }
    ]
  },
  {
    id: '27', title: '단계 27', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '3a', num: 3, direction: "across", row: 1, col: 0, answer: "치과", clue: "이가 아픈 것을 전문적으로 치료하는 병원." },
      { id: '5a', num: 5, direction: "across", row: 1, col: 4, answer: "참기름", clue: "참깨로 짠 기름." },
      { id: '6a', num: 6, direction: "across", row: 4, col: 4, answer: "오솔길", clue: "폭이 좁고 조용한 길. [예] ㅇㅅㄱ을 걷다." },
      { id: '8a', num: 8, direction: "across", row: 6, col: 2, answer: "빈칸", clue: "비어 있는 칸. [예] ㅂㅋ에 알맞은 말을 쓰세요." },
      { id: '1d', num: 1, direction: "down",   row: 0, col: 0, answer: "뭉치", clue: "한데 뭉치거나 말거나 감은 덩이. [예] 인형 안의 솜ㅁㅊ" },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 6, answer: "거름", clue: "식물이 잘 자라도록 흙에 주는 물질." },
      { id: '4d', num: 4, direction: "down",   row: 1, col: 1, answer: "과정", clue: "일이 되어 가는 경로. [예] 진행 ㄱㅈ" },
      { id: '7d', num: 7, direction: "down",   row: 4, col: 6, answer: "길이", clue: "한끝에서 다른 한끝까지의 거리. [예] 연필의 ㄱㅇ" }
    ]
  },
  {
    id: '28', title: '단계 28', gridSize: { rows: 8, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 5, answer: "차례", clue: "순서 있게 구분하여 벌여 나가는 관계. [예] ㅊㄹ를 지키다." },
      { id: '2a', num: 2, direction: "across", row: 2, col: 2, answer: "부레옥잠", clue: "잎자루가 둥그랗게 부풀어서 물에 떠서 사는 식물로 늦여름에 연한 자줏빛 꽃이 핀다." },
      { id: '2d', num: 2, direction: "down",   row: 2, col: 2, answer: "부호", clue: "일정한 뜻을 나타내기 위하여 따로 정하여 쓰는 기호." },
      { id: '3a', num: 3, direction: "across", row: 3, col: 1, answer: "번호", clue: "차례를 나타내기 위해 붙이는 숫자." },
      { id: '4d', num: 4, direction: "down",   row: 3, col: 6, answer: "율동", clue: "음악에 맞추어 하는 체조. [예] ㅁㅇ 체조" },
      { id: '5a', num: 5, direction: "across", row: 4, col: 5, answer: "소동", clue: "사람들이 시끄럽게 떠들고 마구 행동하는 일. [예] 한바탕 ㅅㄷ을 일으키다." },
      { id: '6a', num: 6, direction: "across", row: 6, col: 2, answer: "한판승", clue: "크게 벌어진 한판 승부." },
      { id: '6d', num: 6, direction: "down",   row: 6, col: 2, answer: "한강", clue: "서울을 가로지르는 큰 강." }
    ]
  },
  {
    id: '29', title: '단계 29', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 0, answer: "적응", clue: "일정한 조건이나 환경 따위에 맞추게 됨." },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 1, answer: "응원", clue: "운동 경기에서, 선수들이 힘을 낼 수 있도록 돕는 행동." },
      { id: '3d', num: 3, direction: "down",   row: 0, col: 6, answer: "망원경", clue: "두 개 이상의 볼록 렌즈를 써서 멀리 있는 물체를 크고 정확히 보게 하는 기구." },
      { id: '4a', num: 4, direction: "across", row: 2, col: 5, answer: "환경", clue: "생활하는 주위의 상태." },
      { id: '4d', num: 4, direction: "down",   row: 2, col: 5, answer: "환기구", clue: "방 안의 공기를 내보내고 바깥의 공기를 들어오게 하는 구멍." },
      { id: '5d', num: 5, direction: "down",   row: 5, col: 2, answer: "역할", clue: "자기가 마땅히 맡아서 하는 일." },
      { id: '6a', num: 6, direction: "across", row: 6, col: 2, answer: "할머니", clue: "아버지의 어머니, 또는 어머니의 어머니. [반] 할아버지" }
    ]
  },
  {
    id: '30', title: '단계 30', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 1, col: 1, answer: "건널목", clue: "기찻길에서 차와 사람이 건너다닐 수 있게 정해진 곳. [비] 횡단보도" },
      { id: '2d', num: 2, direction: "down",   row: 1, col: 3, answer: "목욕", clue: "물에 온몸을 씻는 일." },
      { id: '3a', num: 3, direction: "across", row: 1, col: 5, answer: "이슬", clue: "공기 중의 수증기가 기온이 내려가거나 찬 물체에 닿아 엉겨서 생기는 물방울. [예] 풀잎에 ㅇㅅ이 맺혔다." },
      { id: '4d', num: 4, direction: "down",   row: 1, col: 6, answer: "슬픔", clue: "슬픈 마음이나 느낌. [반] 기쁨" },
      { id: '5a', num: 5, direction: "across", row: 4, col: 0, answer: "날씨", clue: "비, 구름, 바람, 기온 따위가 나타나는 기상 상태. [예] 추운 ㄴㅆ" },
      { id: '6d', num: 6, direction: "down",   row: 4, col: 1, answer: "씨앗", clue: "곡식이나 채소 따위의 씨. [예] ㅆㅇ에서 싹이 트기 시작했다." },
      { id: '7a', num: 7, direction: "across", row: 5, col: 5, answer: "고민", clue: "마음속으로 괴로워하고 걱정함." },
      { id: '7d', num: 7, direction: "down",   row: 5, col: 5, answer: "고향", clue: "자기가 태어나서 자란 곳." }
    ]
  },
  {
    id: '31', title: '단계 31', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 0, answer: "잠꼬대", clue: "잠을 자면서 자기도 모르게 하는 중얼거림." },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 2, answer: "대피하다", clue: "위험이나 피해를 입지 않도록 안전한 곳으로 피하다. [예] 안전한 곳으로 ㄷㅍ" },
      { id: '3a', num: 3, direction: "across", row: 4, col: 0, answer: "밥상", clue: "음식을 차리는 데 쓰는 상." },
      { id: '4d', num: 4, direction: "down",   row: 4, col: 1, answer: "상상", clue: "직접 경험하지 않은 일이나 사물에 대하여 마음속으로 그려 봄." },
      { id: '5a', num: 5, direction: "across", row: 4, col: 4, answer: "손뼉", clue: "손바닥과 손가락을 합친 전체 바닥. [예] ㅅㅃ을 치다." },
      { id: '5d', num: 5, direction: "down",   row: 4, col: 4, answer: "손잡이", clue: "손으로 어떤 것을 열거나 들거나 붙잡을 수 있도록 덧붙여 놓은 것." },
      { id: '6d', num: 6, direction: "down",   row: 5, col: 6, answer: "탐구", clue: "필요한 것을 조사하여 찾아냄. [예] ㅌㄱ 생활" }
    ]
  },
  {
    id: '32', title: '단계 32', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 6, answer: "목소리", clue: "목구멍에서 나는 소리." },
      { id: '2a', num: 2, direction: "across", row: 1, col: 1, answer: "친구", clue: "친하게 오래 사귄 사람." },
      { id: '2d', num: 2, direction: "down",   row: 1, col: 1, answer: "친척", clue: "어머니 아버지와 혈통이 가까운 사람. [예] 일가 ㅊㅊ" },
      { id: '3a', num: 3, direction: "across", row: 1, col: 5, answer: "장소", clue: "어떤 일이 일어나는 곳." },
      { id: '4a', num: 4, direction: "across", row: 4, col: 0, answer: "전시", clue: "여러 가지 물품을 한곳에 벌여 놓고 보임. [예] 미술 작품 ㅈㅅ" },
      { id: '5d', num: 5, direction: "down",   row: 4, col: 1, answer: "시합", clue: "운동이나 그 밖의 경기에서 서로 승부를 겨루는 일. [예] 축구 ㅅㅎ" },
      { id: '6d', num: 6, direction: "down",   row: 4, col: 5, answer: "어린이", clue: "보통 다섯 살부터 열두 살까지의 아이를 높여서 이르는 말." },
      { id: '7a', num: 7, direction: "across", row: 6, col: 3, answer: "쇠붙이", clue: "쇠·구리·금·알루미늄처럼 단단하며, 전기와 열이 잘 통하는 물체. [비] 금속" }
    ]
  },
  {
    id: '33', title: '단계 33', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 1, answer: "동상", clue: "추위 때문에 살갗이 얼어서 조직이 상하는 일." },
      { id: '2a', num: 2, direction: "across", row: 1, col: 0, answer: "조상", clue: "부모님 위로 대대의 어른. [예] ㅈㅅ 대대로 해 온 일이다." },
      { id: '3d', num: 3, direction: "down",   row: 1, col: 5, answer: "정리", clue: "지저분한 상태에 있는 것을 치워서 질서 있는 상태가 되게 함. [예] 책상 ㅈㄹ" },
      { id: '4a', num: 4, direction: "across", row: 2, col: 4, answer: "달리기", clue: "정해진 거리를 빨리 달리는 것을 겨루는 경기." },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 2, answer: "학예회", clue: "무용·노래·연극 따위의 예능 발표를 보여 주는 행사." },
      { id: '6d', num: 6, direction: "down",   row: 4, col: 5, answer: "약속", clue: "누구와 앞으로의 일을 어떻게 할 것인가를 미리 정하는 것. [예] 점심을 먹기로 ㅇㅅ했다." },
      { id: '7a', num: 7, direction: "across", row: 5, col: 0, answer: "운동회", clue: "여러 사람이 모여 운동 경기를 하는 모임." },
      { id: '8d', num: 8, direction: "down",   row: 5, col: 1, answer: "동네", clue: "여러 집이 모여 사는 곳. [예] ㄷㄴ 사람들" }
    ]
  },
  {
    id: '34', title: '단계 34', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 2, answer: "되풀이", clue: "같은 말이나 일을 여러 번 반복함. [예] 잘못을 ㄷㅍㅇ 하지 말아라." },
      { id: '2a', num: 2, direction: "across", row: 0, col: 5, answer: "단위", clue: "수·양·무게 등을 나타내는 기준." },
      { id: '3d', num: 3, direction: "down",   row: 0, col: 6, answer: "위급", clue: "아주 위험하고 급함. [예] ㅇㄱ을 알리는 사이렌 소리" },
      { id: '4a', num: 4, direction: "across", row: 4, col: 4, answer: "오감", clue: "시각, 청각, 후각, 미각, 촉각의 다섯 가지 감각." },
      { id: '5d', num: 5, direction: "down",   row: 4, col: 5, answer: "감정", clue: "마음속에서 일어나는 느낌이나 생각." },
      { id: '6d', num: 6, direction: "down",   row: 5, col: 1, answer: "통일", clue: "나누어진 여러 개를 합쳐서 하나로 모이게 함." },
      { id: '7a', num: 7, direction: "across", row: 6, col: 0, answer: "요일", clue: "일주일의 각 날을 말함. [예] ㅇㅇ별 급식 메뉴" }
    ]
  },
  {
    id: '35', title: '단계 35', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 3, answer: "야영", clue: "야외에 천막을 치고 생활하는 것. [비] 캠핑" },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 4, answer: "영양소", clue: "생물이 성장하고 활동하는 데 필요한 물질. [예] ㅇㅇㅅ를 골고루 먹어야 한다." },
      { id: '3a', num: 3, direction: "across", row: 2, col: 0, answer: "다짐", clue: "마음이나 뜻을 굳게 정함. [예] 굳게 ㄷㅈ을 했다." },
      { id: '4d', num: 4, direction: "down",   row: 2, col: 1, answer: "짐작", clue: "남의 형편을 어림잡아 알아차림." },
      { id: '5a', num: 5, direction: "across", row: 2, col: 4, answer: "소방서", clue: "불이 난 것을 끄는 업무를 맡은 기관." },
      { id: '6d', num: 6, direction: "down",   row: 5, col: 5, answer: "보기", clue: "설명을 쉽게 이해하도록 그림이나 표로 나타낸 예시. [비] 본보기" },
      { id: '7a', num: 7, direction: "across", row: 6, col: 3, answer: "기러기", clue: "겨울에 북쪽에서 남쪽으로 떼지어 날아와 물가에서 살다 가는 물새. [예] ㄱㄹㄱ가 날아갔다." }
    ]
  },
  {
    id: '36', title: '단계 36', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 2, answer: "생명", clue: "사람이 살아서 숨 쉬고 활동할 수 있게 하는 힘." },
      { id: '2a', num: 2, direction: "across", row: 0, col: 4, answer: "까닭", clue: "일이 생기게 된 원인. [예] 지각한 ㄲㄷ" },
      { id: '3a', num: 3, direction: "across", row: 1, col: 1, answer: "발명", clue: "아직까지 없던 기술이나 물건을 새로 생각하여 만들어 냄." },
      { id: '4d', num: 4, direction: "down",   row: 3, col: 1, answer: "왁자지껄", clue: "여럿이 모여 시끄럽게 떠드는 모양. [예] 갑자기 밖이 ㅇㅈㅈㄲ 시끄러워" },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 4, answer: "청소", clue: "더럽거나 어지러운 것을 쓸고 닦아서 깨끗하게 함." },
      { id: '6a', num: 6, direction: "across", row: 4, col: 3, answer: "미소", clue: "소리 없이 빙긋이 웃는 모습." },
      { id: '7a', num: 7, direction: "across", row: 5, col: 0, answer: "쪽지", clue: "어떤 내용의 글을 적은 작은 종이." }
    ]
  },
  {
    id: '37', title: '단계 37', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 4, answer: "풍습", clue: "풍속과 습관을 모두 이르는 말. [비] 풍속" },
      { id: '2d', num: 2, direction: "down",   row: 0, col: 5, answer: "습관", clue: "어떤 행동을 되풀이하면서 굳어진 버릇. [비] 버릇" },
      { id: '3a', num: 3, direction: "across", row: 1, col: 0, answer: "깜박", clue: "눈이 잠깐 감겼다 뜨이는 모양. [관] 눈 ㄲㅂ할 사이" },
      { id: '4d', num: 4, direction: "down",   row: 1, col: 1, answer: "박자", clue: "음악적 시간을 구성하는 기본 단위. [예] ㅂㅈ가 빠르다." },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 4, answer: "도르래", clue: "높은 곳에서 달아 놓은 바퀴에 줄을 걸어 물건을 담아, 쉽게 들어 올리는 장치. [예] ㄷㄹㄹ로 물건을 올렸다." },
      { id: '6a', num: 6, direction: "across", row: 5, col: 0, answer: "백성", clue: "일반 국민을 옛날식으로 부르는 말." },
      { id: '7d', num: 7, direction: "down",   row: 5, col: 1, answer: "성묘", clue: "산소를 찾아가서 인사를 드리고 돌봄." },
      { id: '8a', num: 8, direction: "across", row: 5, col: 3, answer: "술래잡기", clue: "술래가 숨은 사람들을 찾아내는 놀이." }
    ]
  },
  {
    id: '38', title: '단계 38', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1a', num: 1, direction: "across", row: 0, col: 0, answer: "눈금", clue: "자나 저울 따위에 물건의 길이나 무게를 나타내기 위한 금. [예] 온도계의 ㄴㄱ" },
      { id: '1d', num: 1, direction: "down",   row: 0, col: 0, answer: "눈서리", clue: "눈과 서리를 아울러 이르는 말. [예] 나무에 ㄴㅅㄹ가 폈다." },
      { id: '2a', num: 2, direction: "across", row: 0, col: 5, answer: "가치", clue: "물건이 지닌 쓸모. [비] 값어치" },
      { id: '3d', num: 3, direction: "down",   row: 0, col: 6, answer: "치아", clue: "'이'를 점잖게 이르는 말." },
      { id: '4d', num: 4, direction: "down",   row: 2, col: 5, answer: "고장", clue: "기구나 기계가 제대로 움직이지 못하게 되는 것. [예] 자동차가 ㄱㅈ이 났다." },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 1, answer: "곡식", clue: "사람의 식량이 되는 쌀, 보리, 밀 등의 곡물." },
      { id: '6a', num: 6, direction: "across", row: 3, col: 5, answer: "장면", clue: "연극이나 영화의 한 광경을 나타내는 부분." },
      { id: '7a', num: 7, direction: "across", row: 4, col: 1, answer: "식중독", clue: "상한 음식을 먹은 뒤, 배가 아프거나 설사, 구토, 두드러기가 나는 현상." },
      { id: '8d', num: 8, direction: "down",   row: 5, col: 4, answer: "배열", clue: "일정한 차례나 간격에 따라 벌여 놓음. [예] ㅂㅇ 순서" },
      { id: '9a', num: 9, direction: "across", row: 6, col: 4, answer: "열매", clue: "식물이 수정한 후에 생기는 것으로 이 속에 씨가 들어 있음. [예] ㅇㅁ가 열렸다." }
    ]
  },
  {
    id: '39', title: '단계 39', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 1, answer: "규칙", clue: "여러 사람이 다 같이 지키기로 작정한 법칙. [예] ㄱㅊ을 지키다." },
      { id: '2a', num: 2, direction: "across", row: 1, col: 4, answer: "배려", clue: "도와주거나 보살펴 주려고 마음을 씀. [예] 노인을 ㅂㄹ하자." },
      { id: '2d', num: 2, direction: "down",   row: 1, col: 4, answer: "배웅", clue: "가는 손님을 따라 나가서 작별함. [반] 마중" },
      { id: '3d', num: 3, direction: "down",   row: 3, col: 1, answer: "홍수", clue: "강이나 개천에 갑자기 물이 크게 불어남. [예] 장마 때문에 ㅎㅅ가 나다." },
      { id: '4a', num: 4, direction: "across", row: 4, col: 0, answer: "홀수", clue: "1, 3, 5, 7…과 같이 2로 나누어떨어지지 않는 수. [반] 짝수" },
      { id: '5d', num: 5, direction: "down",   row: 4, col: 4, answer: "기지개", clue: "피곤할 때 몸을 쭉 펴면서 팔다리를 뻗는 일." },
      { id: '6a', num: 6, direction: "across", row: 6, col: 3, answer: "베개", clue: "잠을 자거나 누울 때 머리를 받치는 것." }
    ]
  },
  {
    id: '40', title: '단계 40', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 2, answer: "조각", clue: "어떤 물건으로부터 떨어져 나온 작은 부분." },
      { id: '2a', num: 2, direction: "across", row: 1, col: 1, answer: "감각", clue: "눈, 코, 귀, 혀, 살갗을 통하여 바깥의 어떤 자극을 알아차림." },
      { id: '3a', num: 3, direction: "across", row: 1, col: 4, answer: "마무리", clue: "일의 끝맺음. [반] 시작" },
      { id: '4d', num: 4, direction: "down",   row: 1, col: 5, answer: "무늬", clue: "물건의 겉에 색깔과 선으로 나타나 있는 일정한 모양." },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 0, answer: "당번", clue: "서로 나누어서 하는 일을 할 차례가 된 사람. [예] 급식 ㄷㅂ" },
      { id: '6a', num: 6, direction: "across", row: 4, col: 0, answer: "번개", clue: "구름과 구름 사이에서 번쩍이는 불꽃. [예] 천둥 ㅂㄱ가 치다." },
      { id: '7d', num: 7, direction: "down",   row: 4, col: 6, answer: "분실", clue: "자기도 모르는 사이에 물건 따위를 잃어버림. [예] 지갑을 ㅂㅅ하다." },
      { id: '8a', num: 8, direction: "across", row: 5, col: 4, answer: "보건실", clue: "학교에서 아프면 가는 곳." }
    ]
  },
  {
    id: '41', title: '단계 41', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 5, answer: "물건", clue: "모양을 갖추고 있는 모든 사물. [비] 물체" },
      { id: '2a', num: 2, direction: "across", row: 1, col: 3, answer: "손수건", clue: "몸에 가지고 다니며 사용하는 작은 수건." },
      { id: '3d', num: 3, direction: "down",   row: 1, col: 4, answer: "수업", clue: "선생님이 학생에게 지식을 가르쳐 주는 일." },
      { id: '4a', num: 4, direction: "across", row: 3, col: 0, answer: "가랑비", clue: "가늘게 내리는 비. [예] ㄱㄹㅂ가 내려요." },
      { id: '5d', num: 5, direction: "down",   row: 3, col: 2, answer: "비밀", clue: "남에게 알리지 않고 숨기는 것." },
      { id: '6a', num: 6, direction: "across", row: 5, col: 4, answer: "아침", clue: "날이 새서 밝아질 때까지의 시간. [예] 그는 ㅇㅊ 일찍 일어난다." },
      { id: '6d', num: 6, direction: "down",   row: 5, col: 4, answer: "아기", clue: "젖 먹는 아이. [비] 아가" }
    ]
  },
  {
    id: '42', title: '단계 42', gridSize: { rows: 7, cols: 7 },
    words: [
      { id: '1d', num: 1, direction: "down",   row: 0, col: 5, answer: "이사", clue: "사는 곳을 다른 데로 옮기는 것." },
      { id: '2a', num: 2, direction: "across", row: 1, col: 4, answer: "눈사람", clue: "눈 뭉치로 사람 모양을 만든 것." },
      { id: '3a', num: 3, direction: "across", row: 2, col: 1, answer: "우산", clue: "비가 올 때 펴서 머리 위를 가리는 것." },
      { id: '3d', num: 3, direction: "down",   row: 2, col: 1, answer: "우리나라", clue: "우리가 사는 나라를 스스로 이르는 말. [비] 조국" },
      { id: '4a', num: 4, direction: "across", row: 3, col: 0, answer: "소리", clue: "귀에 들리는 것. [예] 음악 ㅅㄹ가 아름답다." },
      { id: '5a', num: 5, direction: "across", row: 3, col: 5, answer: "추석", clue: "송편을 지어 먹는 명절. [비] 한가위" },
      { id: '6a', num: 6, direction: "across", row: 5, col: 4, answer: "학교", clue: "학생에게 교육하는 기관. [예] ㅎㄱ에 다니다." },
      { id: '7d', num: 7, direction: "down",   row: 5, col: 5, answer: "교통", clue: "사람이 이동하거나 짐을 실어 나르는 일. [예] 버스는 ㄱㅌ 수단 중 하나입니다." }
    ]
  }
];
