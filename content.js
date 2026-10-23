/* 교화 길잡이 본문 데이터 (샘플: 1~2장)
   {{용어id|표시글}} = 누르면 용어 풀이가 열리는 낱말 */
window.APP_DATA = {
  parts: [
    { id: 1, ko: "제Ⅰ부 보이지 않는 세계와 나", en: "Part I. The Unseen World and Me", color: "#2F4A6D" },
    { id: 2, ko: "제Ⅱ부 우주의 이치", en: "Part II. The Principles of the Universe", color: "#1F7A6E" },
    { id: 3, ko: "제Ⅲ부 상제님의 강세", en: "Part III. The Descent of Sangje-nim", color: "#C0612B" },
    { id: 4, ko: "제Ⅳ부 천지공사", en: "Part IV. The Reordering Works of Heaven and Earth", color: "#8A3B7A" },
    { id: 5, ko: "제Ⅴ부 종통", en: "Part V. The Orthodox Lineage", color: "#6B7A1F" },
    { id: 6, ko: "제Ⅵ부 개벽과 후천선경", en: "Part VI. Gaebyeok and the Later World Paradise", color: "#A3263A" },
    { id: 7, ko: "제Ⅶ부 수도와 생활", en: "Part VII. Cultivation and Daily Life", color: "#5B3FA0" },
    { id: 8, ko: "부록", en: "Appendices", color: "#5A5A5A" }
  ],
  toc: [
    [1, 1, "음과 양", "Yin and Yang"],
    [1, 2, "사람이 죽으면: 명부와 하늘의 층", "When a Person Dies: Myeongbu and the Layers of Heaven"],
    [1, 3, "조상과 자손", "Ancestors and Descendants"],
    [1, 4, "덕을 쌓는 길", "Ways of Accumulating Merit"],
    [1, 5, "신명의 세계", "The World of Spirits"],
    [1, 6, "전생록", "Record of Past Lives"],
    [2, 7, "생장염장과 우주 1년", "Birth, Growth, Harvest, Rest and the Cosmic Year"],
    [2, 8, "개벽: 여름에서 가을로", "Gaebyeok: From Summer to Autumn"],
    [2, 9, "인류문명 7천년: 천존·지존·인존", "7,000 Years of Civilization"],
    [2, 10, "우주의 목적과 상제님의 큰 계획", "The Purpose of the Universe"],
    [3, 11, "삼대성인이 오신 이유", "Why the Three Great Sages Came"],
    [3, 12, "이마두 대성사와 하소연", "Great Sage Matteo Ricci and the Appeal"],
    [3, 13, "천개탑에서 한반도로: 진표율사와 금산사", "To the Korean Peninsula: Jinpyo and Geumsansa"],
    [3, 14, "수운·김일부와 상제님 탄강", "Suun, Kim Il-bu and the Birth of Sangje-nim"],
    [4, 15, "세상 진단과 해원", "Diagnosis of the World and Haewon"],
    [4, 16, "신명조화정부", "The Spirit Government of Transformation"],
    [4, 17, "세운공사: 오선위기와 씨름판", "Works on World Affairs"],
    [4, 18, "문명·생활 공사와 대속", "Works on Civilization and Atonement"],
    [4, 19, "도운공사", "Works on the Course of the Dao"],
    [5, 20, "도주님", "Doju-nim"],
    [5, 21, "도전님", "Dojeon-nim"],
    [5, 22, "대진성주회", "Daejin Seongjuhoe"],
    [6, 23, "선지자들의 예언", "Prophecies of the Seers"],
    [6, 24, "그날이 오면: 괴질병겁", "When That Day Comes: The Great Plague"],
    [6, 25, "사는 길: 의통과 천지대도", "The Way to Live: Uitong"],
    [6, 26, "후천선경", "The Later World Paradise"],
    [6, 27, "1만 2천 도통군자", "The 12,000 Enlightened Ones"],
    [7, 28, "교리개요와 종지", "Doctrine and Tenets"],
    [7, 29, "신조: 사강령과 삼요체", "Creed"],
    [7, 30, "훈회와 수칙", "Precepts and Rules"],
    [7, 31, "도심(성심): 구도 이야기", "Stories of Sincere Seeking"],
    [7, 32, "잘못된 언행 경계", "Guarding Against Wrong Words and Deeds"],
    [7, 33, "주문", "Incantations"],
    [7, 34, "앞으로의 공부", "Further Study"],
    [8, 35, "전경 원판", "Jeon-gyeong (Korean original)"],
    [8, 36, "용어 사전", "Glossary"]
  ],

  /* ───────── 한국어 ───────── */
  ko: {
    appName: "교화 길잡이",
    appSub: "신입 후각 기본교화",
    chapters: {
      1: {
        title: "음과 양",
        pages: [
          {
            id: "1-1", sec: "1. 보이는 것과 보이지 않는 것", tag: "음양의 예",
            core: "이 세상에는 눈에 보이는 것과 눈에 보이지 않는 것이 있음",
            blocks: [
              { t: "table", head: ["양(陽)", "음(陰)"], rows: [
                ["눈에 보이는 것", "눈에 보이지 않는 것"],
                ["남자", "여자"],
                ["육신", "정신(영혼)"],
                ["사람", "{{sinmyeong|신}}"],
                ["자손", "조상님"]
              ] },
              { t: "list", items: [
                "이 세상은 눈에 보이는 것과 눈에 보이지 않는 것이 있음",
                "이 세상의 모든 것은 {{eumyang|음과 양}}의 조화로 되어 있음"
              ] }
            ],
            src: "강의록 p1 · 0. 음·양의 예",
            q: { q: "사람과 신, 자손과 조상님 가운데 음(陰)에 해당하는 것은?", a: "신과 조상님 (눈에 보이지 않는 쪽)" }
          },
          {
            id: "1-2", sec: "2. 정리", tag: "한눈에 정리",
            core: "모든 것은 음과 양의 조화임",
            blocks: [
              { t: "list", items: [
                { x: "보이는 쪽 = 양", sub: ["남자, 육신, 사람, 자손"] },
                { x: "보이지 않는 쪽 = 음", sub: ["여자, 정신(영혼), 신, 조상님"] },
                "양과 음은 서로 짝을 이루어 조화를 이룸",
                "다음 장: 보이지 않는 세계, 곧 사람이 죽은 뒤의 세계로 이어짐"
              ] }
            ],
            src: "강의록 p1",
            q: { q: "육신과 짝을 이루는 음(陰)은?", a: "정신(영혼)" }
          }
        ]
      },
      2: {
        title: "사람이 죽으면: 명부와 하늘의 층",
        pages: [
          {
            id: "2-1", sec: "1. 명부전의 49일 심판", tag: "하늘의 조상신과 땅의 자손",
            core: "사람이 죽으면 명부전에 가서 49일 동안 심판을 받음",
            blocks: [
              { t: "list", items: [
                "사람이 죽으면 {{myeongbujeon|명부전}}에 가서 49일 동안 심판을 받게 됨",
                "심판의 근거: 살아 있을 때 선행을 많이 했는지, 죄를 지었는지를 {{maningyeong|만인경}}이라는 거울을 통해 봄",
                "심판관: {{yeomra|염라대왕}} 등의 심판관께서 공명정대하게 심판함",
                "심판의 결과: 그 사람이 생활하게 될 {{cheung|하늘의 층}}이 결정됨",
                "하늘의 층: 1천부터 9천까지 있음"
              ] },
              { t: "note", title: "함께 나온 곳 · 49일의 순서", x: "인간이 죽으면 3일간 이승에서 머물다가 {{saja|명부사자}}의 인도로 저승의 명부전에 들어감. 한 대왕마다 7일씩 차례로 제7대왕에 이르기까지 49일간 생전의 선업과 악업의 심판을 받음" }
            ],
            src: "강의록 p1 · 1. 하늘의 조상신과 땅의 자손 / 주문 p4 · 명부시왕",
            q: { q: "명부전에서 생전의 선행과 죄를 비추어 보는 거울의 이름은?", a: "만인경" }
          },
          {
            id: "2-2", sec: "2. 죽는 것도 때가 있음", tag: "상제님 말씀 (만화)",
            core: "죽는 것도 때가 있고, 각기 닦은 공덕에 따라 데려가는 모습이 다름",
            blocks: [
              { t: "quote", who: "상제님께서 말씀하시기를", x: "죽는 것도 때가 있나니 그 도수를 넘겨도 못쓰는 것이요, 너무 일러도 못쓰는 것이니라. 나의 명으로 명부사자가 데려오는 것이니" },
              { t: "img", src: "img/ch2_myeongbu_1.jpg", cap: "“○○○와 △△△를 거두어 오너라.” · “분부대로 거행하겠나이다.”" },
              { t: "quote", x: "각기 닦은 공덕에 따라 방망이로 뒷덜미를 쳐서 끌고 오는 사람도 있고, 가마에 태워서 모셔 오는 사람도 있느니라." },
              { t: "img", src: "img/ch2_myeongbu_2.jpg", cap: "“살아서 나쁜 짓만 골라 한 놈! 가자!” · “싫습니다. 놓아주세요. 흑흑!” · “공덕을 많이 쌓으신 분, 가마에 오르시지요.”" },
              { t: "quote", x: "또 하늘에 가면 그 사람의 조상 가운데에서도 웃어른이 있어서 철부지 아이들에게 천자문을 가르치듯 새로 가르치나니 사람은 죽어 신명(神明)이 되어서도 공부를 계속하느니라." },
              { t: "img", src: "img/ch2_myeongbu_3.jpg", cap: "“죽으면 다 끝나는 줄 알았는데… 또 공부를 하다니…” · “펼치거라.”" },
              { t: "list", items: [
                "죽는 때: 정해진 도수가 있어 넘겨도 안 되고 너무 일러도 안 됨",
                "데려가는 이: 상제님의 명으로 {{saja|명부사자}}가 데려옴",
                "데려가는 모습: 각기 닦은 공덕에 따라 다름 (끌려가는 사람 / 가마에 모셔지는 사람)",
                "죽은 뒤: 조상 가운데 웃어른이 새로 가르침. {{sinmyeong|신명}}이 되어서도 공부를 계속함"
              ] }
            ],
            src: "잘못된 언행 경계 p19 (만화)",
            q: { q: "공덕을 많이 쌓은 사람은 어떻게 모셔 가는가?", a: "가마에 태워서 모셔 감" }
          },
          {
            id: "2-3", sec: "3. 하늘의 층 ① 9천 ~ 6천", tag: "하늘의 층 · 위쪽",
            core: "가장 높은 9천에는 하느님이 계심",
            blocks: [
              { t: "layer", n: "9천", tone: 0, x: "하느님 (=미륵부처, 상제님, 하나님 아버지)", sub: "모든 신명계와 인간계 천지만물을 주관하시는 전지전능한 하느님이 계시는 하늘의 가장 높은 곳" },
              { t: "group", title: "8천 · 7천 · 6천 = {{gogeup|고급 영계}}", x: "부처, 보살, 진인, 성인과 같이 인간들을 제도하고 진리를 남기신 고급 신명들의 위치", items: [
                { n: "8천", tone: 1, x: "석가모니, 공자, 예수" },
                { n: "7천", tone: 1, x: "499나한보살, 72현인군자, 12사도제자" },
                { n: "6천", tone: 1, x: "예언가, 대사급", sub: "예: 노스트라다무스, 격암 남사고, 에드가 케이시 등" }
              ] }
            ],
            src: "강의록 p2 · 하늘의 층 표",
            q: { q: "8천·7천·6천을 함께 부르는 이름은?", a: "고급 영계" }
          },
          {
            id: "2-4", sec: "4. 하늘의 층 ② 5천 ~ 3천", tag: "하늘의 층 · 조상님의 하늘",
            core: "5천은 조상님들이 가장 가고 싶어하는 곳임",
            blocks: [
              { t: "layer", n: "5천", tone: 2, x: "조상님들이 가장 가고 싶어하는 곳" },
              { t: "layer", n: "4천 · 3천", tone: 3, x: "조상님들이 힘이 있어서 후손들을 도울 수 있는 곳", sub: "후손들의 정성, 덕으로 올려 줄 수 있음" },
              { t: "note", title: "※ 표의 구조", x: "원문 표에서 4천과 3천은 한 칸으로 묶여 있음" }
            ],
            src: "강의록 p2 · 하늘의 층 표",
            q: { q: "조상님들이 힘이 있어 후손들을 도울 수 있는 곳은 몇 천인가?", a: "4천과 3천" }
          },
          {
            id: "2-5", sec: "5. 하늘의 층 ③ 중천(2천 · 1천)", tag: "중천(中天) · 어떤 곳인가",
            core: "2천과 1천은 중천이며, 원과 한이 많은 조상이 있는 곳임",
            blocks: [
              { t: "layer", n: "2천 · 1천", tone: 4, x: "{{jungcheon|중천(中天)}}" },
              { t: "list", items: [
                "원 많고 한 많은 조상이 있는 곳, 춥고 배고픈 어둠",
                "인간으로 말하면 살 집이 없음",
                "원한 맺혀 죽은 조상들의 영혼이 천상에 가지 못하고 갈 곳이 없어 후손들을 찾아 헤매는 곳",
                "이곳에 계신 조상신들의 죄업, 원한, 고통의 {{yeongpa|영파}}가 자손들에게 영향을 주어 우환, 고통, 질병, 사업 부진, 가정 불화, 교통사고 등이 일어남"
              ] },
              { t: "note", title: "※ 표의 구조", x: "원문 표에서 2천과 1천은 ‘중천’ 한 칸으로 묶여 있음" }
            ],
            src: "강의록 p2 · 하늘의 층 표 (중천 왼쪽 칸)",
            q: { q: "중천에 있는 조상신들의 영파는 자손에게 어떤 일을 일으키는가?", a: "우환, 고통, 질병, 사업 부진, 가정 불화, 교통사고 등" }
          },
          {
            id: "2-6", sec: "6. 중천의 조상을 위해 후손이 할 일", tag: "중천 · 후손의 역할",
            core: "후손이 덕을 쌓아야 중천의 조상님이 좋은 하늘로 가심",
            blocks: [
              { t: "list", items: [
                "후손이 공을 들여주어 중천에 있던 조상신들이 좋은 하늘로 갈 수 있는 다리를 놓아줘야 함",
                "후손이 이곳에서 {{deok|덕}}을 쌓아줌으로써 중천에 있던 원한 많은 조상신들이 좋은 하늘로 갈 수 있게끔 법도가 짜여져 있음",
                { x: "후손이 이곳에서 덕을 쌓아주면 조상신의 죄업과 원한의 정도에 따라 서서히 좋은 하늘로 가심", sub: [
                  "3천 이상의 좋은 하늘로 가시면 자손을 많이 도와줄 수 있음",
                  "집안의 먹구름(조상신들의 죄업, 원한, 고통의 영파)을 걷어내어 집안이 잘 풀리고 가정 화목, 원만한 삶이 됨"
                ] },
                "집안이 잘 풀리고, 부모님과 조상님께 효를 행하는 것이 사람이 마땅히 해야 할 근본 도리",
                "여기는 사람의 도리를 배우는 곳이고, 덕을 쌓는 곳이고, 집안에 복이 오도록 하는 곳"
              ] }
            ],
            src: "강의록 p2 · 하늘의 층 표 (중천 오른쪽 칸)",
            q: { q: "조상님이 몇 천 이상의 하늘로 가시면 자손을 많이 도와줄 수 있는가?", a: "3천 이상" }
          },
          {
            id: "2-7", sec: "7. 죽으면 그만이 아님", tag: "하늘의 이치",
            core: "사람이 죽으면 그만이 아니라 선행과 악행에 따라 심판을 받음",
            blocks: [
              { t: "list", items: [
                "나라를 위해 헌신하다가 전란 중에 숨진 이순신, 일제강점기로부터 우리 민족을 구해내고자 목숨을 아끼지 않은 안중근 열사의 죽음이 헛되이 지나가는 것은 하늘의 이치가 아님",
                "도를 잘 모르는 현대인들 중 일부는 사람이 죽으면 그만이라고 착각하고 있음",
                { x: "죽으면 그만이라면 다음 물음에 답할 수 없음", sub: [
                  "도덕적인 삶을 살 이유가 어디에 있는가",
                  "석가모니나 예수께서 수도를 애써 할 이유가 어디에 있는가",
                  "타인을 위해 봉사하는 삶이 무슨 가치가 있는가"
                ] },
                "일하지 않고 공부하지 않고 놀고먹고 즐기기만 하는 사람을 좋지 않은 시각으로 보는 것도 죽으면 그만이 아니기 때문임",
                "사람이 죽으면 명부전에 가서 현생에 살았던 바, 그 선행과 악행을 정확히 가려 심판을 받고, 그 결과에 따라 서로 다른 천상계에서 생활을 하게 됨"
              ] }
            ],
            src: "강의록 p9 · 6. 상제님의 큰 계획 / 우주의 이치 p37–38 (같은 글)",
            q: { q: "사람이 죽으면 그 결과에 따라 어디에서 생활하게 되는가?", a: "서로 다른 천상계" }
          },
          {
            id: "2-8", sec: "8. 천상계의 구조", tag: "보이지 않는 세계",
            core: "천상계는 수직으로 9천, 수평으로 36천이 있음",
            blocks: [
              { t: "list", items: [
                "{{cheonsang|천상계(신명계)}}: 수직으로 1천(天) 지옥부터 9천(天)까지 있고, 수평으로 36천(天)이 있음",
                "인간계는 신명계의 모습을 본뜬 것이라고 상제께서 말씀하심",
                "그러므로 신명계에 있는 물질문명이나 삶의 모습이 인간계보다 더 복잡하고 세련될 수도 있음. 단지 눈에만 안 보일 뿐임",
                "비유: 인간의 눈에는 가시광선 영역만 보이고 적외선과 자외선 영역은 안 보이지만, 적외선과 자외선 영역은 존재함",
                "현대 과학기술이 인간에게 준 가장 큰 착각: 인간의 감각기관으로 인식할 수 없어서 증명할 수 없는 것을 ‘없다’라고 자의적으로 오해한다는 점"
              ] }
            ],
            src: "강의록 p9 / 우주의 이치 p38 (같은 글)",
            q: { q: "눈에 보이지 않아도 존재한다는 것을 보여 주는 비유는?", a: "적외선과 자외선 영역" }
          },
          {
            id: "2-9", sec: "9. 혼과 넋", tag: "사람의 몸",
            core: "사람의 몸은 혼과 넋으로 구성되어 있음",
            blocks: [
              { t: "table", head: ["", "{{hon|혼(魂)}}", "{{neok|넋(魄)}}"], rows: [
                ["죽은 뒤 가는 곳", "하늘", "땅"],
                ["되는 것", "신(神)", "4대가 지난 후 귀(鬼)"],
                ["4대가 지나면", "영(靈)도 되고 선(仙)도 됨", "귀(鬼)가 됨"]
              ] },
              { t: "list", items: [
                "상제께서 밝히시기를, 사람의 몸은 혼과 넋으로 구성되어 있음",
                "인간이 죽으면 혼은 하늘로 가서 신이 되어 4대가 지나면 영도 되고 선도 됨",
                "넋은 땅으로 가서 4대가 지난 후 귀가 됨",
                "여기서 {{gwisin|귀신(鬼神)}}이라는 말이 나오게 됨",
                "그래서 조상선령신 제사를 4대, 곧 고조까지 지내드림"
              ] }
            ],
            src: "강의록 p9 / 우주의 이치 p38 (같은 글)",
            q: { q: "조상 제사를 4대(고조)까지 지내는 까닭은?", a: "혼은 신이 되어 4대가 지나면 영·선이 되고, 넋은 4대가 지난 후 귀가 되기 때문" }
          },
          {
            id: "2-10", sec: "10. 명부시왕 ① 명부와 무가의 시왕", tag: "명부시왕(冥府十王)",
            core: "명부는 세 분 하느님의 명을 받들어 인간 세상을 다스리는 신명계 관청이며, 열 분의 왕이 계심",
            blocks: [
              { t: "list", items: [
                "{{siwang|명부시왕}}: 명부는 세 분 하느님의 명을 받들어 인간 세상을 다스리는 신명계 관청이며, 열 분의 왕이 계심",
                "무속, 불교, 도교에서 한결같이 시왕을 이야기하고 있으나 각각 맡은 역할이 다름"
              ] },
              { t: "table", cap: "무가(巫歌)에서의 명칭과 역할", head: ["전", "대왕", "관장하는 곳"], rows: [
                ["제1전", "태광대왕", "한빙지옥과 극락세계"],
                ["제2전", "초광대왕", "금수지옥과 연화세계"],
                ["제3전", "송제대왕", "거해지옥과 화장세계"],
                ["제4전", "오관대왕", "거해지옥과 화장세계"],
                ["제5전", "염라대왕", "독사지옥과 만월세계"],
                ["제6전", "변성대왕", "조설지옥과 승음세계"],
                ["제7전", "태산대왕", "암흑지옥과 법세세계"],
                ["제8전", "평등대왕", "철망지옥과 무세계"],
                ["제9전", "도시대왕", "풍도지옥과 무량세계"],
                ["제10전", "오도전륜대왕", "호탕지옥과 유리광음"]
              ] }
            ],
            src: "주문 p4 · 명부시왕 / 주문 p15–16 · 진법주 풀이",
            q: { q: "명부에는 몇 분의 왕이 계시는가?", a: "열 분 (명부시왕)" }
          },
          {
            id: "2-11", sec: "11. 명부시왕 ② 불교의 시왕", tag: "명부시왕(冥府十王)",
            core: "불교에서 명부는 지장보살이 관장하며, 열 시왕도 지장보살이 거느림",
            blocks: [
              { t: "list", items: [
                "불교에서 보면 명부는 {{jijang|지장보살}}이 관장함. 따라서 명부의 열 시왕도 지장보살이 거느림"
              ] },
              { t: "table", head: ["차례", "대왕", "관장하는 지옥"], rows: [
                ["제1", "진광대왕", "도산지옥"],
                ["제2", "초강대왕", "화탕지옥"],
                ["제3", "송제대왕", "한기지옥"],
                ["제4", "오관대왕", "검수지옥"],
                ["제5", "염라대왕", "발설지옥"],
                ["제6", "변성대왕", "독사지옥"],
                ["제7", "태산대왕", "대애지옥"],
                ["제8", "평등대왕", "거해지옥"],
                ["제9", "도시대왕", "거해지옥"],
                ["제10", "전륜대왕", "흑암지옥"]
              ] },
              { t: "note", title: "무가와 불교의 차이", x: "무가에서 불려지는 열 시왕과 불교의 명부전에 모셔지는 열 시왕들의 이름이 비슷하지만, 이들이 관장하는 지옥에는 차이가 있음" }
            ],
            src: "주문 p16 · 진법주 풀이",
            q: { q: "불교에서 명부를 관장하는 분은?", a: "지장보살" }
          },
          {
            id: "2-12", sec: "12. 명부시왕 ③ 도교의 시왕", tag: "명부시왕(冥府十王)",
            core: "도교의 시왕은 전(殿)마다 맡은 죄와 일이 정해져 있음",
            blocks: [
              { t: "table", head: ["전", "대왕", "맡은 일"], rows: [
                ["제1전", "태광대왕", "현명궁의 진광광으로 혼백을 신고하는 것과 생사와 수명을 관장함"],
                ["제2전", "초광대왕", "보명궁이라 하고 바다 아래에 있으며, 16군데의 작은 지옥에 망자의 혼을 넣어 형벌을 줌"],
                ["제3전", "송제대왕", "큰 바다에 있으며 검은 파리 대지옥과 16군데의 작은 지옥이 있음"],
                ["제4전", "오관대왕", "큰 바다 동쪽 아래에 있으며 사기나 거짓말을 하는 사람들을 관장함"],
                ["제5전", "염라대왕", "귀왕으로 지옥의 왕임"],
                ["제6전", "변성대왕", "간음이나 도적질한 자들을 관장함"],
                ["제7전", "태산대왕", "귀신을 관장하는 신지로 불교도와 도교도의 범죄를 관장함"],
                ["제8전", "평등대왕", "중요한 범죄자를 관장하며 아비지옥을 맡고 있음"],
                ["제9전", "도시대왕", "불효하고 불제하며 사악하고 거짓을 잘 꾸미는 자들을 관장함"],
                ["제10전", "전륜대왕", "불교의 명부신으로 육도윤회를 담당함"]
              ] },
              { t: "list", items: [
                "이 가운데 불교의 명부신은 염라대왕, 평등대왕, 전륜대왕이고, 그 이외에는 도교의 명부신들임"
              ] }
            ],
            src: "주문 p16–17 · 진법주 풀이",
            q: { q: "도교의 시왕 가운데 지옥의 왕(귀왕)은?", a: "제5전 염라대왕" }
          },
          {
            id: "2-13", sec: "13. 하늘의 층 한눈에", tag: "정리 · 이동 지도",
            core: "하늘의 층은 1천부터 9천까지, 모두 아홉 층임",
            blocks: [
              { t: "map", rows: [
                ["9천", "하느님 (상제님)", "2-3", 0],
                ["8천", "석가모니 · 공자 · 예수", "2-3", 1],
                ["7천", "499나한보살 · 72현인군자 · 12사도제자", "2-3", 1],
                ["6천", "예언가 · 대사급", "2-3", 1],
                ["5천", "조상님들이 가장 가고 싶어하는 곳", "2-4", 2],
                ["4천", "후손들을 도울 수 있는 곳", "2-4", 3],
                ["3천", "후손들을 도울 수 있는 곳", "2-4", 3],
                ["2천", "중천", "2-5", 4],
                ["1천", "중천", "2-5", 4]
              ] },
              { t: "note", title: "사용법", x: "층을 누르면 그 층의 자세한 설명이 있는 쪽으로 이동함" }
            ],
            src: "강의록 p1–2",
            q: { q: "하늘의 층은 모두 몇 층인가?", a: "1천부터 9천까지 아홉 층" }
          }
        ]
      }
    },
    glossary: {
      eumyang: { w: "음양", h: "陰陽", d: "이 세상의 모든 것을 이루는 두 짝. 눈에 보이는 쪽이 양, 눈에 보이지 않는 쪽이 음이며, 모든 것은 음과 양의 조화로 되어 있음", s: "강의록 p1" },
      sinmyeong: { w: "신명", h: "神明", d: "눈에 보이지 않는 세계의 신. 사람은 죽어 신명이 되어서도 공부를 계속함", s: "강의록 p1 / 잘못된 언행 경계 p19" },
      myeongbujeon: { w: "명부전", h: "冥府殿", d: "사람이 죽으면 가서 49일 동안 생전의 선행과 죄를 심판받는 곳", s: "강의록 p1, p9 / 주문 p4" },
      maningyeong: { w: "만인경", h: "萬人鏡", d: "명부전에서 살아 있을 때 선행을 많이 했는지, 죄를 지었는지를 비추어 보는 거울", s: "강의록 p1" },
      yeomra: { w: "염라대왕", h: "閻羅大王", d: "명부의 심판관. 무가에서는 제5전 대왕(독사지옥과 만월세계), 불교에서는 제5 대왕(발설지옥), 도교에서는 제5전의 귀왕으로 지옥의 왕", s: "강의록 p1 / 주문 p15–17" },
      cheung: { w: "하늘의 층", h: "", d: "명부전의 심판으로 정해지는, 그 사람이 생활하게 될 하늘. 1천부터 9천까지 아홉 층이 있음", s: "강의록 p1–2" },
      gogeup: { w: "고급 영계", h: "高級靈界", d: "8천·7천·6천. 부처, 보살, 진인, 성인과 같이 인간들을 제도하고 진리를 남기신 고급 신명들의 위치", s: "강의록 p2" },
      jungcheon: { w: "중천", h: "中天", d: "2천과 1천. 원 많고 한 많은 조상이 있는 곳, 춥고 배고픈 어둠. 원한 맺혀 죽은 조상들의 영혼이 갈 곳이 없어 후손들을 찾아 헤매는 곳", s: "강의록 p2" },
      yeongpa: { w: "영파", h: "靈波", d: "조상신들의 죄업, 원한, 고통이 자손에게 미치는 영향. 우환, 질병, 사업 부진, 가정 불화, 교통사고 등의 원인이 됨. 집안의 먹구름", s: "강의록 p2" },
      deok: { w: "덕", h: "德", d: "후손이 쌓아 중천의 조상신들이 좋은 하늘로 갈 수 있게 하는 것. 자세한 종류는 4장 ‘덕을 쌓는 길’에서 다룸", s: "강의록 p2" },
      saja: { w: "명부사자", h: "冥府使者", d: "명부시왕으로부터 명을 받아 인간의 혼령을 인도하는 사자. 상제님의 명으로 데려오며, 각기 닦은 공덕에 따라 끌고 오기도 하고 가마에 태워 모셔 오기도 함", s: "주문 p5 / 잘못된 언행 경계 p19" },
      cheonsang: { w: "천상계(신명계)", h: "天上界", d: "수직으로 1천 지옥부터 9천까지, 수평으로 36천이 있음. 인간계는 신명계의 모습을 본뜬 것", s: "강의록 p9" },
      hon: { w: "혼", h: "魂", d: "사람의 몸을 이루는 하나. 죽으면 하늘로 가서 신(神)이 되어 4대가 지나면 영(靈)도 되고 선(仙)도 됨", s: "강의록 p9" },
      neok: { w: "넋", h: "魄", d: "사람의 몸을 이루는 하나. 죽으면 땅으로 가서 4대가 지난 후 귀(鬼)가 됨", s: "강의록 p9" },
      gwisin: { w: "귀신", h: "鬼神", d: "넋이 된 귀(鬼)와 혼이 된 신(神)을 합한 말", s: "강의록 p9" },
      siwang: { w: "명부시왕", h: "冥府十王", d: "세 분 하느님의 명을 받들어 인간 세상을 다스리는 신명계 관청인 명부의 열 분 왕. 무속, 불교, 도교에서 각각 맡은 역할이 다름", s: "주문 p4, p15–17" },
      jijang: { w: "지장보살", h: "地藏菩薩", d: "불교에서 명부를 관장하는 보살. 명부의 열 시왕을 거느림", s: "주문 p16" }
    }
  },

  /* ───────── English (번역 초안) ───────── */
  en: {
    appName: "Gyohwa Guide",
    appSub: "Basic teaching for new members",
    chapters: {
      1: {
        title: "Yin and Yang",
        pages: [
          {
            id: "1-1", sec: "1. The seen and the unseen", tag: "Examples of yin and yang",
            core: "In this world there are things seen by the eye and things unseen",
            blocks: [
              { t: "table", head: ["Yang (陽)", "Yin (陰)"], rows: [
                ["What the eye can see", "What the eye cannot see"],
                ["Man", "Woman"],
                ["Body", "Mind (soul)"],
                ["Human being", "{{sinmyeong|Spirit}}"],
                ["Descendants", "Ancestors"]
              ] },
              { t: "list", items: [
                "This world has things that are seen and things that are unseen",
                "Everything in this world is made of the harmony of {{eumyang|yin and yang}}"
              ] }
            ],
            src: "Lecture notes p1 · 0. Examples of yin and yang",
            q: { q: "Among human/spirit and descendants/ancestors, which belong to yin?", a: "Spirits and ancestors (the unseen side)" }
          },
          {
            id: "1-2", sec: "2. Summary", tag: "At a glance",
            core: "Everything is the harmony of yin and yang",
            blocks: [
              { t: "list", items: [
                { x: "The seen side = yang", sub: ["man, body, human being, descendants"] },
                { x: "The unseen side = yin", sub: ["woman, mind (soul), spirit, ancestors"] },
                "Yang and yin form pairs and make harmony",
                "Next chapter: the unseen world, the world after a person dies"
              ] }
            ],
            src: "Lecture notes p1",
            q: { q: "What yin pairs with the body?", a: "The mind (soul)" }
          }
        ]
      },
      2: {
        title: "When a Person Dies: Myeongbu and the Layers of Heaven",
        pages: [
          {
            id: "2-1", sec: "1. The 49-day judgment at Myeongbu Hall", tag: "Ancestral spirits in heaven, descendants on earth",
            core: "When a person dies, they go to Myeongbu Hall and are judged for 49 days",
            blocks: [
              { t: "list", items: [
                "When a person dies, they go to {{myeongbujeon|Myeongbu Hall}} and are judged for 49 days",
                "Basis of judgment: whether they did many good deeds or committed sins while alive is seen through a mirror called {{maningyeong|Maningyeong}}",
                "Judges: judges such as {{yeomra|King Yeomra}} judge fairly and justly",
                "Result: the {{cheung|layer of heaven}} where that person will live is decided",
                "Layers of heaven: from the First Heaven to the Ninth Heaven"
              ] },
              { t: "note", title: "Also found · the order of the 49 days", x: "When a person dies, they stay in this world for 3 days, then are led by the {{saja|messenger of Myeongbu}} into Myeongbu Hall of the other world. Before each king in turn, for 7 days each up to the 7th king, they are judged for 49 days on the good and bad deeds of their lifetime" }
            ],
            src: "Lecture notes p1 / Incantations p4",
            q: { q: "What is the mirror that shows one's good deeds and sins at Myeongbu Hall?", a: "Maningyeong" }
          },
          {
            id: "2-2", sec: "2. Even death has its time", tag: "Words of Sangje-nim (comic)",
            core: "Even death has its time, and how one is taken differs by the merit each has cultivated",
            blocks: [
              { t: "quote", who: "Sangje-nim said,", x: "Even death has its time. It is not good to pass that degree, nor is it good to be too early. By my command the messenger of Myeongbu brings them." },
              { t: "img", src: "img/ch2_myeongbu_1.jpg", cap: "“Bring ○○○ and △△△.” · “I will carry out your order.”" },
              { t: "quote", x: "According to the merit each has cultivated, some are struck on the back of the neck with a club and dragged, and some are carried in a palanquin." },
              { t: "img", src: "img/ch2_myeongbu_2.jpg", cap: "“You who did only bad deeds while alive! Let's go!” · “No, please let me go!” · “You who built much merit, please get into the palanquin.”" },
              { t: "quote", x: "And in heaven there is an elder among that person's ancestors, who teaches them anew as one teaches the Thousand Character Classic to young children. Even after death, as a spirit, a person continues to study." },
              { t: "img", src: "img/ch2_myeongbu_3.jpg", cap: "“I thought everything ended at death… and now more study…” · “Open it.”" },
              { t: "list", items: [
                "Time of death: there is a set degree; it must not be passed nor come too early",
                "Who takes them: the {{saja|messenger of Myeongbu}}, by the command of Sangje-nim",
                "How they are taken: it differs by cultivated merit (dragged / carried in a palanquin)",
                "After death: an elder ancestor teaches anew; even as a {{sinmyeong|spirit}} one continues to study"
              ] }
            ],
            src: "Guarding Against Wrong Words and Deeds p19 (comic)",
            q: { q: "How is a person who built much merit taken?", a: "Carried in a palanquin" }
          },
          {
            id: "2-3", sec: "3. Layers of heaven ① Ninth to Sixth", tag: "Upper layers",
            core: "God dwells in the highest, the Ninth Heaven",
            blocks: [
              { t: "layer", n: "9th", tone: 0, x: "God (= Maitreya Buddha, Sangje-nim, God the Father)", sub: "The highest place in heaven, where the almighty God who governs all things of the spirit world and the human world dwells" },
              { t: "group", title: "8th · 7th · 6th = {{gogeup|the high spirit realm}}", x: "The place of high spirits such as Buddhas, bodhisattvas, true persons and sages, who saved human beings and left the truth", items: [
                { n: "8th", tone: 1, x: "Shakyamuni, Confucius, Jesus" },
                { n: "7th", tone: 1, x: "499 Arhat Bodhisattvas, 72 Wise Sages, 12 Apostles" },
                { n: "6th", tone: 1, x: "Prophets, great masters", sub: "e.g. Nostradamus, Gyeokam Nam Sa-go, Edgar Cayce" }
              ] }
            ],
            src: "Lecture notes p2 · table of the layers of heaven",
            q: { q: "What are the 8th, 7th and 6th Heavens called together?", a: "The high spirit realm" }
          },
          {
            id: "2-4", sec: "4. Layers of heaven ② Fifth to Third", tag: "The heavens of ancestors",
            core: "The Fifth Heaven is where ancestors most wish to go",
            blocks: [
              { t: "layer", n: "5th", tone: 2, x: "The place ancestors most wish to go" },
              { t: "layer", n: "4th · 3rd", tone: 3, x: "Where ancestors have power and can help their descendants", sub: "Descendants' devotion can be offered up as merit" },
              { t: "note", title: "※ Table structure", x: "In the original table the 4th and 3rd Heavens share one cell" }
            ],
            src: "Lecture notes p2",
            q: { q: "In which heavens can ancestors help their descendants?", a: "The 4th and 3rd Heavens" }
          },
          {
            id: "2-5", sec: "5. Layers of heaven ③ Jungcheon (2nd · 1st)", tag: "What Jungcheon is",
            core: "The 2nd and 1st Heavens are Jungcheon, where ancestors full of grievance dwell",
            blocks: [
              { t: "layer", n: "2nd · 1st", tone: 4, x: "{{jungcheon|Jungcheon (中天, the Middle Heaven)}}" },
              { t: "list", items: [
                "A place of ancestors with many grievances and much sorrow; a cold, hungry darkness",
                "In human terms, having no house to live in",
                "A place where the souls of ancestors who died with grievances cannot go to heaven, have nowhere to go, and wander looking for their descendants",
                "The {{yeongpa|spiritual waves}} of sin, grievance and pain of the ancestral spirits here affect descendants, causing troubles, suffering, illness, business failure, family discord, traffic accidents and more"
              ] },
              { t: "note", title: "※ Table structure", x: "In the original table the 2nd and 1st Heavens share one cell, ‘Jungcheon’" }
            ],
            src: "Lecture notes p2 (left cell of Jungcheon)",
            q: { q: "What do the spiritual waves of ancestors in Jungcheon cause for descendants?", a: "Troubles, suffering, illness, business failure, family discord, traffic accidents, etc." }
          },
          {
            id: "2-6", sec: "6. What descendants must do for ancestors in Jungcheon", tag: "The role of descendants",
            core: "When descendants accumulate merit, ancestors in Jungcheon go to better heavens",
            blocks: [
              { t: "list", items: [
                "Descendants must devote effort and build a bridge so that ancestral spirits in Jungcheon can go to a good heaven",
                "The law is so arranged that, by descendants accumulating {{deok|merit}} here, ancestral spirits full of grievance in Jungcheon can go to a good heaven",
                { x: "When descendants accumulate merit here, ancestral spirits gradually go to good heavens according to the degree of their sins and grievances", sub: [
                  "Once they reach the 3rd Heaven or above, they can greatly help their descendants",
                  "They clear away the family's dark clouds (the spiritual waves of sin, grievance and pain), so the family prospers and life becomes harmonious and peaceful"
                ] },
                "For the family to prosper and to practice filial piety to parents and ancestors is the fundamental duty of a person",
                "This is a place to learn the duty of a person, to accumulate merit, and to bring blessings to the family"
              ] }
            ],
            src: "Lecture notes p2 (right cell of Jungcheon)",
            q: { q: "From which heaven upward can ancestors greatly help descendants?", a: "The 3rd Heaven and above" }
          },
          {
            id: "2-7", sec: "7. Death is not the end", tag: "The principle of heaven",
            core: "Death is not the end; one is judged according to good and bad deeds",
            blocks: [
              { t: "list", items: [
                "It is not the principle of heaven that the deaths of Yi Sun-sin, who died in war devoted to his country, and of the martyr An Jung-geun, who did not spare his life to save our people from Japanese rule, pass in vain",
                "Some modern people who do not know the Dao mistakenly think that when a person dies, that is the end",
                { x: "If death were the end, these questions could not be answered", sub: [
                  "Why live a moral life?",
                  "Why would Shakyamuni or Jesus strive to cultivate?",
                  "What value is there in a life of serving others?"
                ] },
                "We look unfavorably on people who only play, eat and enjoy without working or studying, because death is not the end",
                "When a person dies, they go to Myeongbu Hall, where the good and bad deeds of this life are exactly judged, and according to the result they live in different heavenly realms"
              ] }
            ],
            src: "Lecture notes p9 / Principles of the Universe p37–38",
            q: { q: "Where does a person live after death according to the result?", a: "In different heavenly realms" }
          },
          {
            id: "2-8", sec: "8. The structure of the heavenly realm", tag: "The unseen world",
            core: "The heavenly realm has nine heavens vertically and 36 heavens horizontally",
            blocks: [
              { t: "list", items: [
                "{{cheonsang|Heavenly realm (spirit world)}}: vertically from the 1st Heaven, hell, to the 9th Heaven, and horizontally 36 heavens",
                "Sangje-nim said the human world is modeled on the spirit world",
                "So the material civilization and life of the spirit world may be more complex and refined than the human world; it is only unseen by the eye",
                "Analogy: the human eye sees only visible light, not infrared or ultraviolet, yet infrared and ultraviolet exist",
                "The greatest illusion modern science has given people: arbitrarily assuming that what cannot be perceived by the senses, and so cannot be proven, ‘does not exist’"
              ] }
            ],
            src: "Lecture notes p9 / Principles of the Universe p38",
            q: { q: "What analogy shows that unseen things still exist?", a: "Infrared and ultraviolet light" }
          },
          {
            id: "2-9", sec: "9. Hon and neok", tag: "The human body",
            core: "The human being is made of hon (魂) and neok (魄)",
            blocks: [
              { t: "table", head: ["", "{{hon|Hon (魂)}}", "{{neok|Neok (魄)}}"], rows: [
                ["Goes after death to", "Heaven", "Earth"],
                ["Becomes", "Sin (神, spirit)", "Gwi (鬼) after four generations"],
                ["After four generations", "Also becomes yeong (靈) and seon (仙)", "Becomes gwi (鬼)"]
              ] },
              { t: "list", items: [
                "As Sangje-nim revealed, the human being is made of hon and neok",
                "When a person dies, hon goes to heaven and becomes sin; after four generations it also becomes yeong and seon",
                "Neok goes to the earth and after four generations becomes gwi",
                "From this comes the word {{gwisin|gwisin (鬼神)}}",
                "That is why ancestral rites are held for four generations, up to the great-great-grandparents"
              ] }
            ],
            src: "Lecture notes p9 / Principles of the Universe p38",
            q: { q: "Why are ancestral rites held for four generations?", a: "Because hon becomes yeong and seon, and neok becomes gwi, after four generations" }
          },
          {
            id: "2-10", sec: "10. The Ten Kings ① Myeongbu and the kings in shaman songs", tag: "The Ten Kings of Myeongbu",
            core: "Myeongbu is the office of the spirit world that governs the human world by the command of the three Gods, with ten kings",
            blocks: [
              { t: "list", items: [
                "{{siwang|The Ten Kings of Myeongbu}}: Myeongbu is an office of the spirit world that governs the human world by the command of the three Gods; there are ten kings",
                "Shamanism, Buddhism and Taoism all speak of the ten kings, but their roles differ"
              ] },
              { t: "table", cap: "Names and roles in shaman songs", head: ["Hall", "King", "Governs"], rows: [
                ["1st", "Taegwang", "Ice Hell and the Land of Bliss"],
                ["2nd", "Chogwang", "Beast Hell and the Lotus World"],
                ["3rd", "Songje", "Geohae Hell and the Flower World"],
                ["4th", "Ogwan", "Geohae Hell and the Flower World"],
                ["5th", "Yeomra", "Viper Hell and the Full-Moon World"],
                ["6th", "Byeonseong", "Joseol Hell and the Seungeum World"],
                ["7th", "Taesan", "Dark Hell and the Beopse World"],
                ["8th", "Pyeongdeung", "Iron-Net Hell and the Mu World"],
                ["9th", "Dosi", "Pungdo Hell and the Boundless World"],
                ["10th", "Odo Jeonryun", "Hotang Hell and Yurigwangeum"]
              ] }
            ],
            src: "Incantations p4, p15–16",
            q: { q: "How many kings are in Myeongbu?", a: "Ten" }
          },
          {
            id: "2-11", sec: "11. The Ten Kings ② in Buddhism", tag: "The Ten Kings of Myeongbu",
            core: "In Buddhism, Myeongbu is governed by Jijang Bodhisattva, who leads the ten kings",
            blocks: [
              { t: "list", items: [
                "In Buddhism, Myeongbu is governed by {{jijang|Jijang (Ksitigarbha) Bodhisattva}}, who therefore leads the ten kings"
              ] },
              { t: "table", head: ["Order", "King", "Hell governed"], rows: [
                ["1", "Jingwang", "Knife-Mountain Hell"],
                ["2", "Chogang", "Boiling-Water Hell"],
                ["3", "Songje", "Cold Hell"],
                ["4", "Ogwan", "Sword-Tree Hell"],
                ["5", "Yeomra", "Tongue-Pulling Hell"],
                ["6", "Byeonseong", "Viper Hell"],
                ["7", "Taesan", "Daeae Hell"],
                ["8", "Pyeongdeung", "Geohae Hell"],
                ["9", "Dosi", "Geohae Hell"],
                ["10", "Jeonryun", "Dark Hell"]
              ] },
              { t: "note", title: "Shaman songs vs. Buddhism", x: "The names of the ten kings in shaman songs and in Buddhist Myeongbu halls are similar, but the hells they govern differ" }
            ],
            src: "Incantations p16",
            q: { q: "Who governs Myeongbu in Buddhism?", a: "Jijang Bodhisattva" }
          },
          {
            id: "2-12", sec: "12. The Ten Kings ③ in Taoism", tag: "The Ten Kings of Myeongbu",
            core: "In Taoism each hall has set sins and duties",
            blocks: [
              { t: "table", head: ["Hall", "King", "Duty"], rows: [
                ["1st", "Taegwang", "Receives reports of souls and governs life, death and lifespan"],
                ["2nd", "Chogwang", "Under the sea; punishes the dead in 16 small hells"],
                ["3rd", "Songje", "In the great sea; the Black-Fly Hell and 16 small hells"],
                ["4th", "Ogwan", "Under the eastern sea; governs swindlers and liars"],
                ["5th", "Yeomra", "King of ghosts, king of hell"],
                ["6th", "Byeonseong", "Governs adulterers and thieves"],
                ["7th", "Taesan", "Governs ghosts and the crimes of Buddhists and Taoists"],
                ["8th", "Pyeongdeung", "Governs grave criminals; in charge of Avici Hell"],
                ["9th", "Dosi", "Governs the unfilial, the wicked and deceivers"],
                ["10th", "Jeonryun", "A Buddhist king of Myeongbu; in charge of rebirth in the six realms"]
              ] },
              { t: "list", items: [
                "Among them, Yeomra, Pyeongdeung and Jeonryun are Buddhist kings of Myeongbu; the others are Taoist"
              ] }
            ],
            src: "Incantations p16–17",
            q: { q: "Which Taoist king is the king of hell?", a: "King Yeomra of the 5th Hall" }
          },
          {
            id: "2-13", sec: "13. The layers of heaven at a glance", tag: "Summary · map",
            core: "There are nine layers of heaven, from the 1st to the 9th",
            blocks: [
              { t: "map", rows: [
                ["9th", "God (Sangje-nim)", "2-3", 0],
                ["8th", "Shakyamuni · Confucius · Jesus", "2-3", 1],
                ["7th", "499 Arhats · 72 Sages · 12 Apostles", "2-3", 1],
                ["6th", "Prophets · great masters", "2-3", 1],
                ["5th", "Where ancestors most wish to go", "2-4", 2],
                ["4th", "Where ancestors can help descendants", "2-4", 3],
                ["3rd", "Where ancestors can help descendants", "2-4", 3],
                ["2nd", "Jungcheon", "2-5", 4],
                ["1st", "Jungcheon", "2-5", 4]
              ] },
              { t: "note", title: "How to use", x: "Tap a layer to go to the page that explains it" }
            ],
            src: "Lecture notes p1–2",
            q: { q: "How many layers of heaven are there?", a: "Nine, from the 1st to the 9th" }
          }
        ]
      }
    },
    glossary: {
      eumyang: { w: "Yin and yang (eumyang)", h: "陰陽", d: "The two partners that make up everything. The seen side is yang, the unseen side is yin; everything is the harmony of the two", s: "Lecture notes p1" },
      sinmyeong: { w: "Sinmyeong (spirit)", h: "神明", d: "A spirit of the unseen world. Even after death, as a spirit, a person continues to study", s: "Lecture notes p1 / Wrong Words p19" },
      myeongbujeon: { w: "Myeongbu Hall", h: "冥府殿", d: "Where a person goes after death to be judged for 49 days on the good deeds and sins of their life", s: "Lecture notes p1, p9 / Incantations p4" },
      maningyeong: { w: "Maningyeong", h: "萬人鏡", d: "The mirror at Myeongbu Hall that shows whether one did many good deeds or sins while alive", s: "Lecture notes p1" },
      yeomra: { w: "King Yeomra", h: "閻羅大王", d: "A judge of Myeongbu; the 5th king in shaman songs and Buddhism, and in Taoism the king of ghosts and of hell", s: "Lecture notes p1 / Incantations p15–17" },
      cheung: { w: "Layers of heaven", h: "", d: "The heaven where a person will live, decided by judgment at Myeongbu Hall; nine layers from the 1st to the 9th", s: "Lecture notes p1–2" },
      gogeup: { w: "High spirit realm", h: "高級靈界", d: "The 8th, 7th and 6th Heavens; the place of high spirits who saved human beings and left the truth", s: "Lecture notes p2" },
      jungcheon: { w: "Jungcheon (Middle Heaven)", h: "中天", d: "The 2nd and 1st Heavens; a cold, hungry darkness where ancestors who died with grievances wander looking for descendants", s: "Lecture notes p2" },
      yeongpa: { w: "Spiritual waves (yeongpa)", h: "靈波", d: "The influence of ancestral spirits' sin, grievance and pain on descendants; the family's dark clouds", s: "Lecture notes p2" },
      deok: { w: "Merit (deok)", h: "德", d: "What descendants accumulate so that ancestors in Jungcheon can go to good heavens. Kinds of merit are covered in Chapter 4", s: "Lecture notes p2" },
      saja: { w: "Messenger of Myeongbu", h: "冥府使者", d: "The messenger who, by order of the Ten Kings, leads human souls; some are dragged, some carried in a palanquin, according to merit", s: "Incantations p5 / Wrong Words p19" },
      cheonsang: { w: "Heavenly realm", h: "天上界", d: "Nine heavens vertically, from the 1st (hell) to the 9th, and 36 horizontally; the human world is modeled on it", s: "Lecture notes p9" },
      hon: { w: "Hon", h: "魂", d: "Part of a person that goes to heaven at death and becomes sin (spirit); after four generations also yeong and seon", s: "Lecture notes p9" },
      neok: { w: "Neok", h: "魄", d: "Part of a person that goes to the earth at death and after four generations becomes gwi", s: "Lecture notes p9" },
      gwisin: { w: "Gwisin", h: "鬼神", d: "A word combining gwi (from neok) and sin (from hon)", s: "Lecture notes p9" },
      siwang: { w: "Ten Kings of Myeongbu", h: "冥府十王", d: "The ten kings of Myeongbu, the spirit-world office that governs the human world by the command of the three Gods", s: "Incantations p4, p15–17" },
      jijang: { w: "Jijang Bodhisattva", h: "地藏菩薩", d: "The bodhisattva who governs Myeongbu in Buddhism and leads the ten kings", s: "Incantations p16" }
    }
  }
};

/* 3장부터는 data/chNN.js 파일이 이 함수로 장을 더함 */
window.addChapter = function (n, ko, en, glossKo, glossEn) {
  const D = window.APP_DATA;
  D.ko.chapters[n] = ko; D.en.chapters[n] = en || ko;
  Object.assign(D.ko.glossary, glossKo || {});
  Object.assign(D.en.glossary, glossEn || {});
};
