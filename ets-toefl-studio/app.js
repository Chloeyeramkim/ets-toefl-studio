const views = document.querySelectorAll(".view");
const navItems = document.querySelectorAll(".nav-item");
const dailyPlan = document.querySelector("#dailyPlan");

const planItems = [
  { skill: "Reading", task: "Complete the Words: 반쪽 단어를 문맥/품사로 복원", time: "8 min" },
  { skill: "Reading", task: "Read in Daily Life: 공지, 메시지, 웹글의 목적/세부내용 파악", time: "10 min" },
  { skill: "Listening", task: "개정형 짧은 응답, 캠퍼스 대화, 강의 노트테이킹", time: "12 min" },
  { skill: "Writing", task: "Build a Sentence 후 Email 또는 Academic Discussion 작성", time: "15 min" },
  { skill: "Speaking", task: "Listen and Repeat 후 Interview 답변 45초 구조화", time: "10 min" },
];

const officialFormat = [
  {
    section: "Reading",
    tasks: "Complete the Words, Read in Daily Life, Read an Academic Passage",
    train: "문맥 어휘, 짧은 실생활 텍스트, 학술 지문 핵심/세부/추론",
  },
  {
    section: "Listening",
    tasks: "Listen and Respond, Listen to a Conversation, Listen to an Announcement, Listen to an Academic Talk",
    train: "화자 의도, 태도, 세부정보, 강의 구조를 짧게 메모",
  },
  {
    section: "Writing",
    tasks: "Build a Sentence, Write an Email, Write for an Academic Discussion",
    train: "정확한 문장, 목적에 맞는 이메일 톤, 주장-근거-예시",
  },
  {
    section: "Speaking",
    tasks: "Listen and Repeat, Take an Interview",
    train: "청취 후 반복, 억양, 즉답 구조, 자연스러운 전달력",
  },
  {
    section: "Scoring",
    tasks: "1-6 scale in 0.5 increments",
    train: "2026-01-21부터 1-6 점수. 전환기에는 0-120 비교 점수도 함께 제공",
  },
  {
    section: "Adaptive",
    tasks: "Updated adaptive test experience",
    train: "Reading/Listening은 실력에 맞게 난도가 조정되는 흐름에 대비",
  },
];

const readingVocab = [
  {
    word: "contextual",
    meaning: "문맥상의, 맥락과 관련된",
    example: "Contextual blanks require you to infer meaning from nearby words.",
    source: "RC Day 1 · Task 1 Contextual Blanks",
    synonyms: ["context-based", "situational"],
    options: ["문맥상의", "우연한", "반대되는"],
  },
  {
    word: "blank",
    meaning: "빈칸, 공백",
    example: "Choose the word that best completes the blank.",
    source: "RC Day 1 · Contextual Blanks",
    synonyms: ["gap", "space"],
    options: ["빈칸", "결론", "반례"],
  },
  {
    word: "fact",
    meaning: "사실, 본문에 직접 제시된 정보",
    example: "A fact question asks for information stated in the passage.",
    source: "RC Day 1 · Fact & Negative Fact",
    synonyms: ["stated detail", "given information"],
    options: ["사실", "추측", "주제문"],
  },
  {
    word: "negative fact",
    meaning: "본문과 일치하지 않는 정보 찾기",
    example: "Negative fact questions often ask which option is NOT mentioned.",
    source: "RC Day 1 · Fact & Negative Fact",
    synonyms: ["not stated", "except question"],
    options: ["본문과 일치하지 않는 정보", "가장 중요한 주장", "동의어 찾기"],
  },
  {
    word: "paraphrasing",
    meaning: "바꿔 말하기, 같은 뜻을 다른 표현으로 나타내기",
    example: "Wrong choices may distort the passage through misleading paraphrasing.",
    source: "RC Day 1 · 수업자료 키워드",
    synonyms: ["rewording", "restatement"],
    options: ["바꿔 말하기", "소리 내어 읽기", "문장 삭제"],
  },
  {
    word: "causal relationship",
    meaning: "인과관계",
    example: "A wrong answer can reverse the causal relationship in the passage.",
    source: "RC Day 1 · 인과관계 오류",
    synonyms: ["cause and effect", "causation"],
    options: ["인과관계", "시간 순서", "비교 대상"],
  },
  {
    word: "chronological",
    meaning: "시간 순서에 따른",
    example: "Check whether the option matches the chronological order of events.",
    source: "RC Day 1 · 시간관계 오류",
    synonyms: ["sequential", "time-order"],
    options: ["시간 순서에 따른", "논리적으로 불가능한", "감정적인"],
  },
  {
    word: "argument structure",
    meaning: "논항 구조, 주장과 근거의 짜임",
    example: "Some incorrect choices change the argument structure.",
    source: "RC Day 1 · 논항구조 불일치",
    synonyms: ["claim-support structure", "reasoning structure"],
    options: ["주장과 근거의 짜임", "문법 시제", "발음 강세"],
  },
];

const hackersResearch = [
  {
    section: "Updated Reading",
    course: "Hackers TOEFL Reading 6th Edition",
    teacher: "박보라",
    format: "50일, 28강, 평균 40분",
    focus: "개정 Reading의 Complete the Words와 Task 2/3, Actual Test 2회까지 이어지는 정규 커리큘럼",
    source: "https://prep.hackers.com/?c=lec%2Ftoefl&lec_id=26965&r=prep&sub=detail",
  },
  {
    section: "Updated Listening",
    course: "Hackers TOEFL Listening 6th Edition",
    teacher: "박나연(Anne Park)",
    format: "50일, 31강, 평균 40분",
    focus: "개정 Listening Task 1~4와 Actual Test 2회 구성. 노트테이킹, 섹션별 듣기 스킬, 실전 풀이 흐름에 맞춤",
    source: "https://prep.hackers.com/?c=lec%2Ftoefl&lec_id=26964&r=prep&sub=detail",
  },
  {
    section: "Updated Speaking",
    course: "Hackers TOEFL Speaking 7th Edition",
    teacher: "Jane",
    format: "50일, 26강, 평균 30분",
    focus: "2026년 1월 21일 개정 토플 대비 교재 기반. Listen and Repeat/Interview형 응답 훈련으로 확장 가능",
    source: "https://prep.hackers.com/?c=lec%2Ftoefl&lec_id=26966&r=prep&sub=detail",
  },
  {
    section: "Updated Writing",
    course: "Hackers Updated TOEFL Writing 6th Edition",
    teacher: "김다은",
    format: "50일, 26강, 평균 40분",
    focus: "Build a Sentence, 이메일/토론형 Writing에 필요한 문장 정확도와 표현 학습으로 연결",
    source: "https://prep.hackers.com/?c=lec%2Ftoefl&lec_id=26967&r=prep&sub=detail",
  },
  {
    section: "Updated Vocabulary",
    course: "Hackers Vocabulary",
    teacher: "해커스 어학연구소",
    format: "기출 어휘집 기반 권장 교재",
    focus: "Complete the Words, Daily Life, Academic Passage에 바로 쓰는 문맥 어휘 학습 축으로 활용",
    source: "https://m.hackers.ac/contents/landing/produceLecture?program=TOEFL",
  },
  {
    section: "Course Path",
    course: "입문 65+ → 기본 75+ → 중급/정규 → 컴퓨터 실전",
    teacher: "해커스어학원",
    format: "레벨별 종합반/단과반",
    focus: "입문은 노트테이킹과 문장 분석, 기본은 유형 분석과 표현/억양, 정규는 실전 전략 중심",
    source: "https://m.hackers.ac/contents/landing/produceLecture?program=TOEFL",
  },
];

const classBoardTasks = [
  {
    subject: "RC",
    day: "Day 1",
    teacher: "김정윤",
    posted: "2026.06.05",
    title: "정규후반부 Day 1 수업 자료",
    tasks: [
      "첨부 PDF 2606_정규후반부_DAY1-protected.pdf 열기",
      "수업 시간에 안내된 PDF 비밀번호로 자료 확인",
      "예습용이 아니라 수업 중 열어보는 자료로 표시되어 있으므로 수업 흐름에 맞춰 확인",
      "수업 후 자료의 Fact & Negative Fact 키워드와 예문을 숙제 리뷰에 연결",
    ],
    note: "첨부파일은 보호된 PDF입니다. 비밀번호는 앱에 저장하지 않습니다.",
    url: "https://www.hackers.ac/class-board/HackersTOEFL_1/7738966?no_lesson=469813&jijum=1001&cat=&opendays=&p=1",
    attachmentUrl: "https://www.hackers.ac/attachment/download/3481281",
    attachmentName: "2606_정규후반부_DAY1-protected.pdf",
    passwordLabel: "Reading PDF password saved",
    password: "mignon29@@",
  },
  {
    subject: "RC",
    day: "Day 1",
    teacher: "김정윤",
    posted: "2026.06.05",
    title: "정규후반부 Day 1 숙제",
    tasks: [
      "주교재 Task 1 Contextual Blanks p.48-51 풀이 및 리뷰",
      "주교재 Task 3 Fact & Negative Fact p.212-221 풀이 및 리뷰",
      "Hackers Vocabulary Day 17-18 한글 의미와 동의어 암기",
      "다음 수업 쪽지시험 대비 15개 단어 복습",
      "다음 수업부터 사용할 노트북 또는 태블릿 준비",
    ],
    note: "수업 자료 비밀번호는 수업 시간에만 안내. 자료 문의는 이메일로 처리.",
    url: "https://www.hackers.ac/class-board/HackersTOEFL_1/7739727?no_lesson=469813&jijum=1001&cat=&opendays=&p=1",
  },
  {
    subject: "LC",
    day: "Day 2",
    teacher: "김지연",
    posted: "2026.06.05",
    title: "DAY 2 진도 예습",
    tasks: [
      "Task 1 예습",
      "Section 2 p.64-65 예습",
      "p.68-69 예습",
      "문제 풀이 전 지문/음원 구조를 미리 훑고 수업에서 확인",
    ],
    note: "LC 공지에 따르면 결석 시 녹음파일 제공이 되지 않으므로 현강 출석 관리가 중요.",
    url: "https://www.hackers.ac/class-board/HackersTOEFL_1/7738708?no_lesson=469813&jijum=1001&cat=&opendays=&p=1",
  },
  {
    subject: "WRT",
    day: "Day 1",
    teacher: "Julien Choi",
    posted: "2026.06.05",
    title: "DAY 1 진도 및 과제",
    tasks: [
      "수업 진도: 주교재 p.258-261 확인",
      "수업 진도: 부교재 p.73-77 확인",
      "주교재 p.187-195 구문영작 완료",
      "주교재 p.262-269 아웃라인 작성",
      "부교재 p.77까지 완료",
    ],
    note: "Writing은 구문영작과 아웃라인을 분리해서 제출 전 점검하는 흐름이 효율적.",
    url: "https://www.hackers.ac/class-board/HackersTOEFL_1/7739115?no_lesson=469813&jijum=1001&cat=&opendays=&p=1",
  },
  {
    subject: "SPK",
    day: "Day 1",
    teacher: "Kate최",
    posted: "2026.06.05",
    title: "Day 1 숙제 & 복습",
    tasks: [
      "Updated TOEFL Speaking 유형과 Task 1 Listen & Repeat 복습",
      "수업시간 녹음 7문장을 다시 듣고 빠진 단어/틀린 표현 표시",
      "주교재 p.86-87 Task 1 Power Test 2 복습",
      "Scoring guide로 스스로 점수 기록",
      "두 번째 녹음과 비교해 발음, 억양, 정확도 개선 여부 확인",
      "주교재 음원으로 Task 1 Power Test 2를 10회 이상 듣고 따라 말하기",
    ],
    note: "첨부: SPK Rubrics 한글 PDF. 스스로 점수 기록용으로 앱에 rubric 체크리스트를 붙이면 좋음.",
    url: "https://www.hackers.ac/class-board/HackersTOEFL_1/7739700?no_lesson=469813&jijum=1001&cat=&opendays=&p=1",
  },
];

const actualTests = {
  reading: [
    {
      type: "Complete the Words",
      passage:
        "Campus libraries are changing rapidly. Many now provide digital workst___ where students can edit videos, join online meetings, and access research databases. These spaces help students collab___ on projects that combine writing, data, and media.",
      questions: [
        {
          prompt: "Which pair best completes the missing words?",
          options: ["stations / collaborate", "stationary / collaboration", "statements / collided"],
          answer: 0,
          explain: "workstations는 장소/장비를 뜻하고, students can collaborate 구조가 자연스럽습니다.",
        },
      ],
    },
    {
      type: "Read in Daily Life",
      passage:
        "Message from the Student Health Center: Flu vaccination appointments are available next week. Students who cannot visit during regular hours may attend the evening clinic on Thursday from 6 to 8 p.m. Please bring your student ID and arrive ten minutes early to complete the consent form.",
      questions: [
        {
          prompt: "Why is the evening clinic mentioned?",
          options: [
            "To offer an option for students with daytime conflicts",
            "To replace all regular appointments next week",
            "To collect student IDs before registration",
          ],
          answer: 0,
          explain: "regular hours에 방문하기 어려운 학생을 위한 대안 시간입니다.",
        },
        {
          prompt: "What should students do before receiving the vaccine?",
          options: ["Pay a laboratory fee", "Complete a consent form", "Call their professor"],
          answer: 1,
          explain: "arrive ten minutes early to complete the consent form가 단서입니다.",
        },
      ],
    },
    {
      type: "Read an Academic Passage",
      passage:
        "In environmental science, a feedback loop occurs when the result of a process influences the process itself. For example, melting Arctic ice reduces the amount of sunlight reflected back into space. As darker ocean water absorbs more heat, additional ice melts. This pattern is important because it can accelerate changes that initially appear gradual.",
      questions: [
        {
          prompt: "What is the passage mainly about?",
          options: [
            "How a process can intensify through its own effects",
            "Why ocean water reflects more sunlight than ice",
            "How scientists measure temperatures in the Arctic",
          ],
          answer: 0,
          explain: "feedback loop의 정의와 Arctic ice 예시 모두 자기 강화 과정을 설명합니다.",
        },
        {
          prompt: "The word accelerate is closest in meaning to",
          options: ["slow down", "speed up", "measure carefully"],
          answer: 1,
          explain: "gradual changes가 더 빠르게 진행된다는 문맥입니다.",
        },
      ],
    },
  ],
  listening: [
    {
      type: "Campus Conversation",
      audio:
        "Student: I saw a notice that the writing center is fully booked this week. Advisor: It is busy before finals, but some same day appointments open each morning. Student: So I should check the system early? Advisor: Exactly. Also, the center posts short grammar videos if you only need quick help.",
      questions: [
        {
          prompt: "What problem does the student have?",
          options: ["The writing center has no regular openings", "The grammar videos are unavailable", "The final exam was moved earlier"],
          answer: 0,
          explain: "fully booked this week가 문제이고, same-day appointments가 해결책입니다.",
        },
        {
          prompt: "What does the advisor suggest?",
          options: ["Canceling the assignment", "Checking the system in the morning", "Visiting a different campus"],
          answer: 1,
          explain: "some same day appointments open each morning이 핵심입니다.",
        },
      ],
    },
    {
      type: "Academic Talk",
      audio:
        "Professor: Today we are discussing citizen science, research projects that include volunteers from the public. One advantage is scale. Scientists can collect far more observations when many people report bird sightings or local weather patterns. However, researchers must train volunteers carefully so that the data remains reliable.",
      questions: [
        {
          prompt: "What is the main idea of the talk?",
          options: [
            "Public volunteers can expand research, but training matters",
            "Bird sightings are less useful than weather reports",
            "Professional scientists should avoid public data",
          ],
          answer: 0,
          explain: "advantage is scale와 train volunteers carefully가 중심입니다.",
        },
        {
          prompt: "Why does the professor mention training?",
          options: ["To improve data reliability", "To reduce the number of scientists", "To teach volunteers university history"],
          answer: 0,
          explain: "so that the data remains reliable이 직접 단서입니다.",
        },
      ],
    },
  ],
  vocab: [
    {
      prompt: "The word reliable in an academic talk is closest in meaning to",
      options: ["dependable", "temporary", "expensive"],
      answer: 0,
      explain: "reliable data는 믿을 수 있는 데이터입니다.",
    },
    {
      prompt: "Choose the best word: Students should _____ the deadline before sending the email.",
      options: ["clarify", "consume", "reflect"],
      answer: 0,
      explain: "deadline을 명확히 확인한다는 의미로 clarify가 맞습니다.",
    },
    {
      prompt: "Which expression best fits an academic discussion?",
      options: ["This supports the professor's point because...", "Hey, that's kinda cool.", "I don't know anything."],
      answer: 0,
      explain: "토론형 Writing/Speaking에서는 수업 맥락 연결 표현이 유용합니다.",
    },
  ],
  writing: {
    sentence: "Arrange these ideas into one strong sentence: universities / should / offer / AI study workshops / because / students need / responsible habits",
    prompt:
      "Academic Discussion: Some students use AI tools to summarize readings before class. Is this a helpful study strategy or a problem for learning? Explain your opinion with a reason and an example.",
    model:
      "I think AI summaries can be helpful if universities teach students how to use them responsibly. For example, a first-year student might use a summary to preview a difficult article, but still read the original text before discussion. This approach saves time while preserving active learning.",
  },
  speaking: {
    repeat: "The writing center offers short appointments for students who need help organizing their ideas.",
    prompt: "Interview: Tell me about one campus service you would use often and explain why it would help you.",
    model:
      "I would use the writing center often because it gives students direct feedback on their ideas. For example, if I had to write a discussion post, a tutor could help me organize my reason and example more clearly. That would make me more confident before submitting my work.",
  },
};

function getDoneSet() {
  return new Set(JSON.parse(localStorage.getItem("donePlan") || "[]"));
}

function saveDoneSet(done) {
  localStorage.setItem("donePlan", JSON.stringify([...done]));
}

function updateBand() {
  const completed = getDoneSet().size;
  const score = Math.min(4.6, 3.8 + completed * 0.16).toFixed(1);
  document.querySelector("#bandScore").textContent = `${score} / 6`;
}

function renderPlan() {
  const done = getDoneSet();
  dailyPlan.innerHTML = "";

  planItems.forEach((item, index) => {
    const row = document.createElement("article");
    row.className = `plan-step ${done.has(index) ? "done" : ""}`;
    row.innerHTML = `
      <span class="step-index">${index + 1}</span>
      <div>
        <strong>${item.skill}</strong>
        <span>${item.task}</span>
      </div>
      <button class="check-button" type="button" aria-label="Mark ${item.skill} complete">${done.has(index) ? "✓" : item.time}</button>
    `;

    row.querySelector("button").addEventListener("click", () => {
      const nextDone = getDoneSet();
      if (nextDone.has(index)) {
        nextDone.delete(index);
      } else {
        nextDone.add(index);
      }
      saveDoneSet(nextDone);
      renderPlan();
      updateBand();
    });

    dailyPlan.append(row);
  });
}

function showView(id) {
  views.forEach((view) => view.classList.toggle("active", view.id === id));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === id));
}

navItems.forEach((item) => {
  item.addEventListener("click", () => showView(item.dataset.view));
});

document.querySelector("#startPlan").addEventListener("click", () => {
  showView("reading");
});

document.querySelector("#resetProgress").addEventListener("click", () => {
  localStorage.removeItem("donePlan");
  renderPlan();
  updateBand();
});

document.querySelectorAll(".question-block").forEach((block) => {
  const feedback = block.parentElement.querySelector(".feedback");
  block.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const isCorrect = button.dataset.choice === block.dataset.answer;
      block.querySelectorAll("button").forEach((choice) => choice.classList.remove("correct", "wrong"));
      button.classList.add(isCorrect ? "correct" : "wrong");
      feedback.textContent = isCorrect
        ? "정답입니다. enviro___는 environment, recog___는 recognize가 자연스럽습니다."
        : "다시 볼 포인트: 앞뒤 품사를 확인하세요. a new academic environment / Students must recognize 구조입니다.";
    });
  });
});

document.querySelector("#playLecture").addEventListener("click", () => {
  const message = new SpeechSynthesisUtterance(
    "The professor says that students should not memorize every detail. Instead, they should identify the main idea, the speaker's purpose, and one important example."
  );
  message.lang = "en-US";
  speechSynthesis.cancel();
  speechSynthesis.speak(message);
});

document.querySelector("#compareNotes").addEventListener("click", () => {
  const notes = document.querySelector("#listeningNotes").value.toLowerCase();
  const hits = ["main", "purpose", "example", "detail", "memorize"].filter((word) => notes.includes(word));
  document.querySelector("#noteFeedback").textContent =
    hits.length >= 3
      ? "좋아요. 개정 LC에서 필요한 main idea, purpose, example 축을 잘 잡았습니다."
      : "개정 LC 노트는 main idea, speaker purpose, example/detail 네 칸으로 나누면 안정적입니다.";
});

document.querySelector("#scoreWriting").addEventListener("click", () => {
  const answer = document.querySelector("#writingAnswer").value.trim();
  const wordCount = answer ? answer.split(/\s+/).length : 0;
  const hasReason = /because|since|reason|for example|example|therefore|however/i.test(answer);
  const rows = [
    ["Task", wordCount >= 45 ? "주장과 설명량이 충분합니다." : "최소 45단어 이상으로 주장과 근거를 확장하세요."],
    ["Structure", hasReason ? "연결어가 보여서 논리 흐름이 좋습니다." : "because, for example, however 같은 연결 장치를 넣어보세요."],
    ["Next edit", "첫 문장에 명확한 입장을 쓰고, 마지막 문장에 학생에게 주는 효과를 정리하세요."],
  ];

  document.querySelector("#writingRubric").innerHTML = rows
    .map(([label, text]) => `<div class="rubric-row"><strong>${label}</strong><span>${text}</span></div>`)
    .join("");
});

let recording = false;
let remaining = 45;
let timerId;

document.querySelector("#recordToggle").addEventListener("click", () => {
  const button = document.querySelector("#recordToggle");
  const state = document.querySelector("#recordState");
  const timer = document.querySelector("#timer");

  recording = !recording;
  button.classList.toggle("recording", recording);
  button.textContent = recording ? "Stop" : "Record";
  state.textContent = recording ? "Recording" : "Ready";

  clearInterval(timerId);
  if (!recording) {
    remaining = 45;
    timer.textContent = "00:45";
    return;
  }

  timerId = setInterval(() => {
    remaining -= 1;
    timer.textContent = `00:${String(Math.max(remaining, 0)).padStart(2, "0")}`;
    if (remaining <= 0) {
      clearInterval(timerId);
      recording = false;
      button.classList.remove("recording");
      button.textContent = "Record";
      state.textContent = "Time is up";
      remaining = 45;
    }
  }, 1000);
});

const htmlEscape = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));

function getCustomVocab() {
  return JSON.parse(localStorage.getItem("customReadingVocab") || "[]");
}

function getHardWordSet() {
  return new Set(JSON.parse(localStorage.getItem("hardReadingWords") || "[]"));
}

function saveHardWordSet(words) {
  localStorage.setItem("hardReadingWords", JSON.stringify([...words]));
}

function getAllReadingVocab() {
  return [...readingVocab, ...getCustomVocab()];
}

function renderVocab() {
  const hardWords = getHardWordSet();
  const items = getAllReadingVocab();
  document.querySelector("#vocabGrid").innerHTML = items
    .map(
      (item) => `
        <article class="vocab-card">
          <div class="actual-meta">
            <span class="tag">RC</span>
            <span class="tag">${hardWords.has(item.word) ? "Hard" : "Study"}</span>
          </div>
          <strong>${htmlEscape(item.word)}</strong>
          <p>${htmlEscape(item.meaning)}</p>
          ${
            item.synonyms?.length
              ? `<p class="synonym-line"><b>Synonyms:</b> ${item.synonyms.map(htmlEscape).join(", ")}</p>`
              : ""
          }
          <p><em>${htmlEscape(item.example)}</em></p>
          <span class="vocab-source">${htmlEscape(item.source || "Custom reading word")}</span>
          <button class="hard-toggle ${hardWords.has(item.word) ? "active" : ""}" data-word="${htmlEscape(item.word)}" type="button">
            ${hardWords.has(item.word) ? "Hard word saved" : "Mark as hard"}
          </button>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".hard-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const next = getHardWordSet();
      if (next.has(button.dataset.word)) {
        next.delete(button.dataset.word);
      } else {
        next.add(button.dataset.word);
      }
      saveHardWordSet(next);
      renderVocab();
      renderHardVocabTest();
    });
  });
}

function bindVocabControls() {
  document.querySelector("#addHardWord").addEventListener("click", () => {
    const wordInput = document.querySelector("#customWord");
    const meaningInput = document.querySelector("#customMeaning");
    const synonymsInput = document.querySelector("#customSynonyms");
    const exampleInput = document.querySelector("#customExample");
    const word = wordInput.value.trim();
    const meaning = meaningInput.value.trim();
    const synonyms = synonymsInput.value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    if (!word || !meaning) return;

    const custom = getCustomVocab().filter((item) => item.word.toLowerCase() !== word.toLowerCase());
    custom.push({
      word,
      meaning,
      synonyms,
      example: exampleInput.value.trim() || "Added from Reading assignment review.",
      source: "Manual hard word",
      options: [meaning, "반대 의미", "관련 없는 의미"],
    });
    localStorage.setItem("customReadingVocab", JSON.stringify(custom));

    const hardWords = getHardWordSet();
    hardWords.add(word);
    saveHardWordSet(hardWords);

    wordInput.value = "";
    meaningInput.value = "";
    synonymsInput.value = "";
    exampleInput.value = "";
    renderVocab();
    renderHardVocabTest();
  });
}

function renderHardVocabTest() {
  const hardWords = getHardWordSet();
  const testItems = getAllReadingVocab().filter((item) => hardWords.has(item.word));
  const container = document.querySelector("#vocabActual");

  if (!testItems.length) {
    container.innerHTML = `
      <div class="actual-set">
        <article class="actual-card">
          <p class="actual-passage">어려운 단어로 표시한 단어가 아직 없습니다. Vocabulary 카드에서 Mark as hard를 눌러 테스트 목록을 만드세요.</p>
        </article>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="actual-set">
      ${testItems
        .map((item, index) => {
          const options = item.options || [item.meaning, "문맥과 맞지 않는 뜻", "반대 의미"];
          return `
            <article class="actual-card hard-test-card">
              <div class="actual-meta"><span class="tag">Hard word</span><span class="tag">${htmlEscape(item.source || "Reading")}</span></div>
              <div class="actual-question" data-answer="0">
                <h3>${index + 1}. ${htmlEscape(item.word)}</h3>
                <p class="actual-passage">${htmlEscape(item.example)}</p>
                ${options
                  .map((option, optionIndex) => `<button class="actual-option" data-choice="${optionIndex}" type="button">${htmlEscape(option)}</button>`)
                  .join("")}
                <p class="feedback"></p>
              </div>
            </article>
          `;
        })
        .join("")}
      <button class="primary-button score-hard-vocab" type="button">Score hard words</button>
      <div class="score-line" aria-live="polite"></div>
    </div>
  `;

  const answers = {};
  container.querySelectorAll(".actual-question").forEach((block, index) => {
    const buttons = block.querySelectorAll(".actual-option");
    const feedback = block.querySelector(".feedback");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const choice = Number(button.dataset.choice);
        answers[index] = choice;
        buttons.forEach((option) => option.classList.remove("correct", "wrong"));
        button.classList.add(choice === 0 ? "correct" : "wrong");
        buttons[0].classList.add("correct");
        feedback.textContent = choice === 0 ? "정답입니다." : "다시 암기하세요. 이 단어는 Reading 과제에서 어려운 단어로 저장된 항목입니다.";
      });
    });
  });

  container.querySelector(".score-hard-vocab").addEventListener("click", () => {
    const correct = Object.values(answers).filter((choice) => choice === 0).length;
    container.querySelector(".score-line").textContent = `${correct}/${testItems.length} correct · hard words only`;
  });
}

function renderFormat() {
  document.querySelector("#formatGrid").innerHTML = officialFormat
    .map(
      (item) => `
        <article class="format-card">
          <span class="tag">${item.section}</span>
          <strong>${item.tasks}</strong>
          <p>${item.train}</p>
        </article>
      `
    )
    .join("");
}

function renderResearch() {
  document.querySelector("#researchGrid").innerHTML = hackersResearch
    .map(
      (item) => `
        <article class="research-card">
          <span class="tag">${item.section}</span>
          <strong>${item.course}</strong>
          <p><b>담당/출처:</b> ${item.teacher}</p>
          <p><b>구성:</b> ${item.format}</p>
          <p>${item.focus}</p>
          <a class="source-link" href="${item.source}" target="_blank" rel="noreferrer">Source page</a>
        </article>
      `
    )
    .join("");
}

function renderClassBoard() {
  const completed = JSON.parse(localStorage.getItem("classBoardDone") || "{}");
  const tasks = classBoardTasks;
  const container = document.querySelector("#classBoardGrid");
  const dayNumber = (day) => Number((day.match(/\d+/) || ["99"])[0]);
  const subjectOrder = { RC: 1, LC: 2, WRT: 3, SPK: 4, VOC: 5 };
  const typeOrder = ["자료", "진도", "예습", "숙제", "복습", "암기", "준비"];
  const groups = tasks.reduce((acc, item) => {
    acc[item.day] = acc[item.day] || [];
    acc[item.day].push(item);
    return acc;
  }, {});

  const taskKey = (item, taskIndex) => `${item.subject}-${item.day}-${item.title}-${taskIndex}`;
  const escapeHtml = (value) =>
    value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
  const classifyTask = (task) => {
    if (/PDF|첨부|자료|비밀번호|열기/.test(task)) return "자료";
    if (/진도|확인/.test(task)) return "진도";
    if (/예습|미리/.test(task)) return "예습";
    if (/풀이|풀고|숙제|완료|구문영작|아웃라인/.test(task)) return "숙제";
    if (/복습|리뷰|녹음|따라 말하기|비교|점수/.test(task)) return "복습";
    if (/암기|단어|쪽지시험/.test(task)) return "암기";
    if (/준비|지참/.test(task)) return "준비";
    return "학습";
  };
  const workspacePrompt = (item) => {
    const prompts = {
      RC: "오답 근거, 헷갈린 paraphrase, 페이지별 리뷰 메모",
      LC: "main idea / purpose / detail / attitude 노트",
      WRT: "구문영작, 아웃라인, 수정할 표현",
      SPK: "녹음 점수, 빠진 단어, 억양/정확도 메모",
      VOC: "암기 안 된 단어와 동의어",
    };
    return prompts[item.subject] || "과제 메모";
  };
  const renderWorkspace = (item) => {
    const key = `workspace-${item.subject}-${item.day}-${item.title}`;
    const saved = localStorage.getItem(key) || "";
    return `
      <div class="workspace-box">
        <strong>${item.subject} workspace</strong>
        <p>${workspacePrompt(item)}</p>
        <textarea data-workspace-key="${escapeHtml(key)}" placeholder="${escapeHtml(workspacePrompt(item))}">${escapeHtml(saved)}</textarea>
      </div>
    `;
  };

  container.innerHTML = Object.entries(groups)
    .sort(([dayA], [dayB]) => dayNumber(dayA) - dayNumber(dayB))
    .map(([day, items]) => {
      const taskTotal = items.reduce((sum, item) => sum + item.tasks.length, 0);
      const doneTotal = items.reduce(
        (sum, item) => sum + item.tasks.filter((_, taskIndex) => completed[taskKey(item, taskIndex)]).length,
        0
      );
      const percent = taskTotal ? Math.round((doneTotal / taskTotal) * 100) : 0;
      const typeSummary = [...new Set(items.flatMap((item) => item.tasks.map(classifyTask)))]
        .sort((a, b) => typeOrder.indexOf(a) - typeOrder.indexOf(b))
        .filter(Boolean);
      const flow = typeSummary.length ? typeSummary : ["자료", "진도", "숙제", "복습"];
      return `
        <section class="day-group">
          <div class="day-header">
            <strong>${day}</strong>
            <span>${items.length} subjects · ${doneTotal}/${taskTotal} tasks</span>
          </div>
          <div class="day-overview">
            <div class="progress-box">
              <strong>${percent}%</strong>
              <p>Day completion</p>
              <div class="progress-bar"><span style="width: ${percent}%"></span></div>
            </div>
            <div class="study-flow">
              <strong>오늘의 학습 순서</strong>
              <ul class="flow-list">
                ${flow
                  .map(
                    (type, index) => `
                      <li>
                        <span class="flow-index">${index + 1}</span>
                        <span>${type}</span>
                      </li>
                    `
                  )
                  .join("")}
              </ul>
            </div>
          </div>
          <div class="day-card-grid">
            ${items
              .sort((a, b) => (subjectOrder[a.subject] || 99) - (subjectOrder[b.subject] || 99))
              .map(
                (item) => `
                  <article class="classboard-card">
                    <div class="actual-meta">
                      <span class="tag">${item.subject}</span>
                      <span class="tag">${item.day}</span>
                    </div>
                    <strong>${item.title}</strong>
                    <p>${item.teacher} · ${item.posted}</p>
                    <ul class="task-list">
                      ${item.tasks
                        .map((task, taskIndex) => {
                          const key = taskKey(item, taskIndex);
                          const taskType = classifyTask(task);
                          return `
                            <li>
                              <input type="checkbox" data-task-key="${key}" ${completed[key] ? "checked" : ""} />
                              <span class="task-line">
                                <span class="task-type">${taskType}</span>
                                <span>${task}</span>
                              </span>
                            </li>
                          `;
                        })
                        .join("")}
                    </ul>
                    <p>${item.note}</p>
                    ${item.url ? `<a class="source-link" href="${item.url}" target="_blank" rel="noreferrer">Open board post</a>` : ""}
                    ${item.attachmentUrl ? `<a class="source-link" href="${item.attachmentUrl}" target="_blank" rel="noreferrer">Open attachment</a>` : ""}
                    ${item.password ? `<button class="copy-password" data-password="${item.password}" type="button">${item.passwordLabel || "Copy password"}</button>` : ""}
                    ${renderWorkspace(item)}
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");

  container.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const next = JSON.parse(localStorage.getItem("classBoardDone") || "{}");
      next[checkbox.dataset.taskKey] = checkbox.checked;
      localStorage.setItem("classBoardDone", JSON.stringify(next));
      renderClassBoard();
    });
  });

  container.querySelectorAll("[data-workspace-key]").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      localStorage.setItem(textarea.dataset.workspaceKey, textarea.value);
    });
  });

  container.querySelectorAll(".copy-password").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.password);
        button.textContent = "Password copied";
      } catch {
        button.textContent = `Password: ${button.dataset.password}`;
      }
    });
  });
}

function renderObjectiveSet(containerId, items, storageKey) {
  const container = document.querySelector(containerId);
  const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
  let questionIndex = 0;

  container.innerHTML = `
    <div class="actual-set">
      ${items
        .map(
          (item, itemIndex) => `
            <article class="actual-card">
              <div class="actual-meta"><span class="tag">${item.type || "Question"}</span></div>
              ${item.passage ? `<p class="actual-passage">${item.passage}</p>` : ""}
              ${item.audio ? `<div class="audio-box"><button class="play-button actual-play" data-audio="${item.audio}" type="button">▶</button><div><strong>${item.type}</strong><p>Play once, take notes, then answer.</p></div></div>` : ""}
              ${(item.questions || [item])
                .map((question) => {
                  const key = questionIndex++;
                  return `
                    <div class="actual-question" data-key="${key}" data-answer="${question.answer}" data-explain="${question.explain}">
                      <h3>${question.prompt}</h3>
                      ${question.options
                        .map((option, optionIndex) => `<button class="actual-option" data-choice="${optionIndex}" type="button">${option}</button>`)
                        .join("")}
                      <p class="feedback">${saved[key] === undefined ? "" : question.explain}</p>
                    </div>
                  `;
                })
                .join("")}
            </article>
          `
        )
        .join("")}
      <button class="primary-button score-actual" type="button">Score this set</button>
      <div class="score-line" aria-live="polite"></div>
    </div>
  `;

  container.querySelectorAll(".actual-question").forEach((block) => {
    const key = block.dataset.key;
    const answer = Number(block.dataset.answer);
    const feedback = block.querySelector(".feedback");
    const buttons = block.querySelectorAll(".actual-option");

    if (saved[key] !== undefined) {
      buttons.forEach((button) => {
        const choice = Number(button.dataset.choice);
        button.classList.toggle("correct", choice === answer);
        button.classList.toggle("wrong", choice === Number(saved[key]) && choice !== answer);
      });
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        saved[key] = Number(button.dataset.choice);
        localStorage.setItem(storageKey, JSON.stringify(saved));
        buttons.forEach((choiceButton) => choiceButton.classList.remove("correct", "wrong"));
        const choice = Number(button.dataset.choice);
        button.classList.add(choice === answer ? "correct" : "wrong");
        buttons[answer].classList.add("correct");
        feedback.textContent = block.dataset.explain;
      });
    });
  });

  container.querySelectorAll(".actual-play").forEach((button) => {
    button.addEventListener("click", () => {
      const message = new SpeechSynthesisUtterance(button.dataset.audio);
      message.lang = "en-US";
      speechSynthesis.cancel();
      speechSynthesis.speak(message);
    });
  });

  container.querySelector(".score-actual").addEventListener("click", () => {
    const blocks = [...container.querySelectorAll(".actual-question")];
    const correct = blocks.filter((block) => Number(saved[block.dataset.key]) === Number(block.dataset.answer)).length;
    const total = blocks.length;
    const band = Math.max(1, Math.min(6, 1 + (correct / total) * 5)).toFixed(1);
    container.querySelector(".score-line").textContent = `${correct}/${total} correct · estimated band ${band}/6`;
  });
}

function renderProductionTests() {
  document.querySelector("#writingActual").innerHTML = `
    <div class="actual-set">
      <article class="actual-card">
        <div class="actual-meta"><span class="tag">Build a Sentence</span><span class="tag">Academic Discussion</span></div>
        <p class="actual-passage">${actualTests.writing.sentence}</p>
        <p class="prompt">${actualTests.writing.prompt}</p>
        <textarea id="actualWritingAnswer" rows="8" placeholder="120~170 words 목표. 주장, 이유, 예시, 수업 맥락 연결을 포함하세요."></textarea>
        <button class="primary-button" id="actualWritingScore" type="button">Score writing</button>
        <div class="rubric" id="actualWritingRubric"></div>
        <div class="model-box"><strong>Model direction:</strong> ${actualTests.writing.model}</div>
      </article>
    </div>
  `;

  document.querySelector("#speakingActual").innerHTML = `
    <div class="actual-set">
      <article class="actual-card">
        <div class="actual-meta"><span class="tag">Listen and Repeat</span><span class="tag">Interview</span></div>
        <div class="audio-box">
          <button class="play-button" id="actualRepeatPlay" type="button">▶</button>
          <div><strong>Repeat sentence</strong><p>${actualTests.speaking.repeat}</p></div>
        </div>
        <p class="prompt">${actualTests.speaking.prompt}</p>
        <textarea id="actualSpeakingScript" rows="7" placeholder="45초 답변 스크립트를 적으세요. answer → reason → example 순서"></textarea>
        <button class="primary-button" id="actualSpeakingScore" type="button">Check response</button>
        <div class="rubric" id="actualSpeakingRubric"></div>
        <div class="model-box"><strong>Model direction:</strong> ${actualTests.speaking.model}</div>
      </article>
    </div>
  `;

  document.querySelector("#actualWritingScore").addEventListener("click", () => {
    const answer = document.querySelector("#actualWritingAnswer").value.trim();
    const words = answer ? answer.split(/\s+/).length : 0;
    const hasOpinion = /i think|i believe|in my opinion|should|helpful|problem/i.test(answer);
    const hasExample = /for example|for instance|such as/i.test(answer);
    document.querySelector("#actualWritingRubric").innerHTML = [
      ["Length", words >= 90 ? `${words} words · 하루 학습량 기준 충분` : `${words} words · 90단어 이상으로 확장`],
      ["Position", hasOpinion ? "입장이 보입니다." : "첫 문장에 명확한 입장을 넣으세요."],
      ["Support", hasExample ? "예시가 포함됐습니다." : "for example로 구체 사례를 추가하세요."],
    ]
      .map(([label, text]) => `<div class="rubric-row"><strong>${label}</strong><span>${text}</span></div>`)
      .join("");
  });

  document.querySelector("#actualRepeatPlay").addEventListener("click", () => {
    const message = new SpeechSynthesisUtterance(actualTests.speaking.repeat);
    message.lang = "en-US";
    speechSynthesis.cancel();
    speechSynthesis.speak(message);
  });

  document.querySelector("#actualSpeakingScore").addEventListener("click", () => {
    const script = document.querySelector("#actualSpeakingScript").value.trim();
    const words = script ? script.split(/\s+/).length : 0;
    const hasService = /center|library|advisor|service|tutor|office|resource/i.test(script);
    const hasReason = /because|so|help|useful|for example/i.test(script);
    document.querySelector("#actualSpeakingRubric").innerHTML = [
      ["Fluency target", words >= 55 ? `${words} words · 45초 답변량에 적절` : `${words} words · 55단어 안팎으로 확장`],
      ["Task answer", hasService ? "캠퍼스 자원이 분명합니다." : "어떤 service/resource인지 먼저 말하세요."],
      ["Development", hasReason ? "이유나 예시가 있습니다." : "because + example 구조를 넣으세요."],
    ]
      .map(([label, text]) => `<div class="rubric-row"><strong>${label}</strong><span>${text}</span></div>`)
      .join("");
  });
}

renderPlan();
renderFormat();
renderVocab();
bindVocabControls();
renderHardVocabTest();
renderResearch();
renderClassBoard();
renderObjectiveSet("#readingActual", actualTests.reading, "actualReadingDay1");
renderObjectiveSet("#listeningActual", actualTests.listening, "actualListeningDay1");
renderProductionTests();
updateBand();
