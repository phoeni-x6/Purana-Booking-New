"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Lang = "en" | "de";
type Dosha = "vata" | "pitta" | "kapha";
type Scores = Record<Dosha, number>;

type Answer = {
  id: string;
  text: Record<Lang, string>;
  dosha?: Dosha;
};

type Question = {
  id: number;
  title: Record<Lang, string>;
  answers: Answer[];
};

const copy = {
  en: {
    eyebrow: "PURANA AYURVEDA · FREE DOSHA QUIZ",
    title: "Discover your Ayurvedic constitution",
    intro:
      "Explore the qualities that may be most familiar to you with this short, reflective quiz.",
    free: "FREE · ABOUT 2 MINUTES · NO SIGN-UP",
    hint: "Answer based on how you have been for most of your life — not only how you feel today.",
    start: "Start the quiz",
    back: "Back",
    next: "Continue",
    question: "Question",
    of: "of",
    resultEyebrow: "YOUR FIRST RESULT",
    resultTitle: "Your preliminary constitution",
    resultNote:
      "Seven scored answers can offer only a rough indication. Your result is a starting point for reflection, not a definitive assessment.",
    consultationTitle: "Get to know your constitution in more depth",
    consultationText:
      "Book a 45-minute online consultation with Lakshani to discuss your individual needs.",
    consultationPrice: "45 minutes · €45",
    book: "Book an online consultation",
    resetTitle: "Prefer to start at home?",
    resetText:
      "Explore Gentle Reset for a simple, guided wellness routine.",
    resetLink: "Discover Gentle Reset",
    restart: "Take the quiz again",
    disclaimer:
      "This quiz is for general wellness information only. It is not a medical diagnosis and does not replace individual professional advice.",
    goalTitle: "What would you most like right now?",
    goalIntro:
      "This final question is not scored. It helps us understand what visitors are looking for.",
    goals: [
      "More energy",
      "Restful sleep",
      "A calmer mind",
      "Feeling lighter",
      "A healthy daily routine",
    ],
    qualities: "Traditional qualities",
    vata: "Vata",
    pitta: "Pitta",
    kapha: "Kapha",
    tridosha: "Balanced",
    vataText:
      "Often associated in Ayurveda with movement, lightness, creativity and change.",
    pittaText:
      "Often associated in Ayurveda with warmth, focus, intensity and transformation.",
    kaphaText:
      "Often associated in Ayurveda with steadiness, stability, patience and nourishment.",
    balancedText:
      "Your answers are relatively evenly distributed across Vata, Pitta and Kapha.",
    twoDosha: "Your answers suggest a combination of two doshas.",
    oneDosha: "Your answers lean more strongly towards one dosha.",
    choose: "Please select an answer to continue.",
    resultVataPitta:
      "Your answers lean towards Vata-Pitta, combining movement and creativity with focus and intensity.",
    resultPittaVata:
      "Your answers lean towards Pitta-Vata, combining focus and intensity with movement and creativity.",
    resultVataKapha:
      "Your answers lean towards Vata-Kapha, combining movement and creativity with steadiness and stability.",
    resultKaphaVata:
      "Your answers lean towards Kapha-Vata, combining steadiness and stability with movement and creativity.",
    resultPittaKapha:
      "Your answers lean towards Pitta-Kapha, combining focus and intensity with steadiness and stability.",
    resultKaphaPitta:
      "Your answers lean towards Kapha-Pitta, combining steadiness and stability with focus and intensity.",
    goalSelected: "Your current focus",
  },
  de: {
    eyebrow: "PURANA AYURVEDA · KOSTENLOSES DOSHA-QUIZ",
    title: "Entdecken Sie Ihre ayurvedische Konstitution",
    intro:
      "Entdecken Sie mit diesem kurzen Quiz, welche Eigenschaften Ihnen besonders vertraut sein könnten.",
    free: "KOSTENLOS · CA. 2 MINUTEN · OHNE ANMELDUNG",
    hint: "Antworten Sie so, wie Sie den größten Teil Ihres Lebens waren – nicht nur, wie Sie sich heute fühlen.",
    start: "Quiz starten",
    back: "Zurück",
    next: "Weiter",
    question: "Frage",
    of: "von",
    resultEyebrow: "IHR ERSTES ERGEBNIS",
    resultTitle: "Ihre vorläufige Konstitution",
    resultNote:
      "Sieben bewertete Antworten geben nur eine erste Orientierung. Das Ergebnis dient der Selbstreflexion und ist keine abschließende Beurteilung.",
    consultationTitle: "Lernen Sie Ihre Konstitution besser kennen",
    consultationText:
      "Buchen Sie eine 45-minütige Online-Beratung mit Lakshani, um Ihre individuellen Bedürfnisse zu besprechen.",
    consultationPrice: "45 Minuten · 45 €",
    book: "Online-Beratung buchen",
    resetTitle: "Möchten Sie lieber zu Hause beginnen?",
    resetText:
      "Entdecken Sie Gentle Reset für eine einfache, begleitete Wellness-Routine.",
    resetLink: "Gentle Reset entdecken",
    restart: "Quiz erneut starten",
    disclaimer:
      "Dieses Quiz dient ausschließlich allgemeinen Wellness-Informationen. Es ist keine medizinische Diagnose und ersetzt keine individuelle fachliche Beratung.",
    goalTitle: "Was wünschen Sie sich gerade am meisten?",
    goalIntro:
      "Diese letzte Frage wird nicht bewertet. Sie hilft uns zu verstehen, wonach Besucher suchen.",
    goals: [
      "Mehr Energie",
      "Erholsamer Schlaf",
      "Ein ruhigerer Geist",
      "Mich leichter fühlen",
      "Eine gesunde tägliche Routine",
    ],
    qualities: "Traditionelle Eigenschaften",
    vata: "Vata",
    pitta: "Pitta",
    kapha: "Kapha",
    tridosha: "Ausgeglichen",
    vataText:
      "Wird im Ayurveda häufig mit Bewegung, Leichtigkeit, Kreativität und Veränderung verbunden.",
    pittaText:
      "Wird im Ayurveda häufig mit Wärme, Fokus, Intensität und Umwandlung verbunden.",
    kaphaText:
      "Wird im Ayurveda häufig mit Beständigkeit, Stabilität, Geduld und Nährung verbunden.",
    balancedText:
      "Ihre Antworten verteilen sich relativ gleichmäßig auf Vata, Pitta und Kapha.",
    twoDosha: "Ihre Antworten deuten auf eine Kombination aus zwei Doshas hin.",
    oneDosha: "Ihre Antworten tendieren stärker zu einem Dosha.",
    choose: "Bitte wählen Sie eine Antwort, um fortzufahren.",
    resultVataPitta:
      "Ihre Antworten tendieren zu Vata-Pitta und verbinden Bewegung und Kreativität mit Fokus und Intensität.",
    resultPittaVata:
      "Ihre Antworten tendieren zu Pitta-Vata und verbinden Fokus und Intensität mit Bewegung und Kreativität.",
    resultVataKapha:
      "Ihre Antworten tendieren zu Vata-Kapha und verbinden Bewegung und Kreativität mit Beständigkeit und Stabilität.",
    resultKaphaVata:
      "Ihre Antworten tendieren zu Kapha-Vata und verbinden Beständigkeit und Stabilität mit Bewegung und Kreativität.",
    resultPittaKapha:
      "Ihre Antworten tendieren zu Pitta-Kapha und verbinden Fokus und Intensität mit Beständigkeit und Stabilität.",
    resultKaphaPitta:
      "Ihre Antworten tendieren zu Kapha-Pitta und verbinden Beständigkeit und Stabilität mit Fokus und Intensität.",
    goalSelected: "Ihr aktueller Schwerpunkt",
  },
};

const questions: Question[] = [
  {
    id: 1,
    title: {
      en: "How would you describe your body build?",
      de: "Wie würden Sie Ihren Körperbau beschreiben?",
    },
    answers: [
      {
        id: "q1-vata",
        dosha: "vata",
        text: {
          en: "Slim and light — I find it hard to gain weight",
          de: "Schlank und leicht – ich nehme nur schwer zu",
        },
      },
      {
        id: "q1-pitta",
        dosha: "pitta",
        text: {
          en: "Medium and athletic — my weight stays fairly stable",
          de: "Mittel und sportlich – mein Gewicht bleibt relativ stabil",
        },
      },
      {
        id: "q1-kapha",
        dosha: "kapha",
        text: {
          en: "Solid and strong — I gain weight easily",
          de: "Kräftig und stabil – ich nehme leicht zu",
        },
      },
    ],
  },
  {
    id: 2,
    title: {
      en: "How is your appetite usually?",
      de: "Wie ist Ihr Appetit normalerweise?",
    },
    answers: [
      {
        id: "q2-vata",
        dosha: "vata",
        text: {
          en: "It changes — sometimes very hungry, sometimes I forget to eat",
          de: "Er schwankt – manchmal habe ich großen Hunger, manchmal vergesse ich zu essen",
        },
      },
      {
        id: "q2-pitta",
        dosha: "pitta",
        text: {
          en: "Strong — I get irritable if I miss a meal",
          de: "Ausgeprägt – ich werde gereizt, wenn ich eine Mahlzeit auslasse",
        },
      },
      {
        id: "q2-kapha",
        dosha: "kapha",
        text: {
          en: "Steady — I can easily skip a meal",
          de: "Beständig – ich kann problemlos eine Mahlzeit auslassen",
        },
      },
    ],
  },
  {
    id: 3,
    title: {
      en: "How do you usually sleep?",
      de: "Wie schlafen Sie normalerweise?",
    },
    answers: [
      {
        id: "q3-vata",
        dosha: "vata",
        text: {
          en: "Lightly — I wake up easily and my thoughts keep turning",
          de: "Leicht – ich wache schnell auf und meine Gedanken kreisen weiter",
        },
      },
      {
        id: "q3-pitta",
        dosha: "pitta",
        text: {
          en: "Well, but fairly short — I wake up alert and clear",
          de: "Gut, aber eher kurz – ich wache wach und klar auf",
        },
      },
      {
        id: "q3-kapha",
        dosha: "kapha",
        text: {
          en: "Deeply and long — getting up is hard",
          de: "Tief und lange – das Aufstehen fällt mir schwer",
        },
      },
    ],
  },
  {
    id: 4,
    title: {
      en: "Which weather do you feel best in?",
      de: "Bei welchem Wetter fühlen Sie sich am wohlsten?",
    },
    answers: [
      {
        id: "q4-vata",
        dosha: "vata",
        text: {
          en: "Warm and sunny — I am often cold",
          de: "Warm und sonnig – mir ist oft kalt",
        },
      },
      {
        id: "q4-pitta",
        dosha: "pitta",
        text: {
          en: "Cool and fresh — heat bothers me",
          de: "Kühl und frisch – Hitze macht mir zu schaffen",
        },
      },
      {
        id: "q4-kapha",
        dosha: "kapha",
        text: {
          en: "Warm and dry — damp, grey days slow me down",
          de: "Warm und trocken – feuchte, graue Tage bremsen mich",
        },
      },
    ],
  },
  {
    id: 5,
    title: {
      en: "Your skin and hair tend to be …",
      de: "Ihre Haut und Haare sind meistens …",
    },
    answers: [
      {
        id: "q5-vata",
        dosha: "vata",
        text: {
          en: "Dry, with fine hair and cool hands and feet",
          de: "Trocken, mit feinem Haar und kühlen Händen und Füßen",
        },
      },
      {
        id: "q5-pitta",
        dosha: "pitta",
        text: {
          en: "Warm and sensitive; skin reddens easily",
          de: "Warm und empfindlich; die Haut rötet sich schnell",
        },
      },
      {
        id: "q5-kapha",
        dosha: "kapha",
        text: {
          en: "Smooth and soft, with thick, full hair",
          de: "Glatt und weich, mit kräftigem, vollem Haar",
        },
      },
    ],
  },
  {
    id: 6,
    title: {
      en: "Under stress, you tend to …",
      de: "Unter Stress neigen Sie dazu, …",
    },
    answers: [
      {
        id: "q6-vata",
        dosha: "vata",
        text: {
          en: "Worry and feel restless",
          de: "zu grübeln und unruhig zu werden",
        },
      },
      {
        id: "q6-pitta",
        dosha: "pitta",
        text: {
          en: "Become impatient or irritable",
          de: "ungeduldig oder gereizt zu werden",
        },
      },
      {
        id: "q6-kapha",
        dosha: "kapha",
        text: {
          en: "Withdraw and look for rest",
          de: "mich zurückzuziehen und Ruhe zu suchen",
        },
      },
    ],
  },
  {
    id: 7,
    title: {
      en: "How do you usually work and learn?",
      de: "Wie arbeiten und lernen Sie normalerweise?",
    },
    answers: [
      {
        id: "q7-vata",
        dosha: "vata",
        text: {
          en: "Quickly and creatively, with many ideas — but I also forget quickly",
          de: "Schnell und kreativ, mit vielen Ideen – aber ich vergesse auch schnell",
        },
      },
      {
        id: "q7-pitta",
        dosha: "pitta",
        text: {
          en: "Focused and goal-oriented — I like to take the lead",
          de: "Konzentriert und zielorientiert – ich übernehme gern die Führung",
        },
      },
      {
        id: "q7-kapha",
        dosha: "kapha",
        text: {
          en: "Calmly and steadily — slow to start, but I remember well",
          de: "Ruhig und beständig – ich brauche etwas Anlauf, merke mir aber viel",
        },
      },
    ],
  },
];

const doshas: Dosha[] = ["vata", "pitta", "kapha"];

const initialScores = (): Scores => ({
  vata: 0,
  pitta: 0,
  kapha: 0,
});

function shuffle<T>(items: T[]): T[] {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function classify(scores: Scores, firstAnswer?: Dosha) {
  const ranked = [...doshas].sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = ranked;
  const highest = scores[first];
  const lowest = scores[third];

  if (highest - lowest <= 1) {
    return {
      key: "tridosha",
      titleKey: "tridosha",
      descriptionKey: "balancedText",
    };
  }

  if (highest - scores[second] <= 1) {
    const tied = [first, second];

    // Use question 1 as the tie-breaker if it belongs to the tied pair.
    const primary =
      firstAnswer && tied.includes(firstAnswer) ? firstAnswer : first;
    const secondary = tied.find((dosha) => dosha !== primary)!;

    const key = `${primary}-${secondary}`;

    return {
      key,
      titleKey: key,
      descriptionKey: `result${primary[0].toUpperCase()}${primary.slice(1)}${secondary[0].toUpperCase()}${secondary.slice(1)}`,
    };
  }

  return {
    key: first,
    titleKey: first,
    descriptionKey: `${first}Text`,
  };
}

function trackQuizEvent(
  event: string,
  data: Record<string, string | number> = {},
) {
  if (typeof window === "undefined") return;

  /*
   * Connect this consent check to your actual cookie banner.
   * This example only sends events when the site sets
   * the cookie "analytics_consent=true".
   */
  const analyticsAccepted = document.cookie
    .split("; ")
    .some((cookie) => cookie === "analytics_consent=true");

  if (!analyticsAccepted) return;

  const win = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
  };

  win.dataLayer?.push({ event, ...data });
}

export default function DoshaQuiz() {
  const [lang, setLang] = useState<Lang>("en");
  const [screen, setScreen] = useState<"start" | "questions" | "goal" | "result">(
    "start",
  );
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [goal, setGoal] = useState<number | null>(null);
  const [notice, setNotice] = useState("");
  const [orderedQuestions, setOrderedQuestions] = useState<Question[]>(questions);
  const resultHeading = useRef<HTMLHeadingElement>(null);

  const t = copy[lang];

  const scores = useMemo(() => {
    const next = initialScores();

    questions.forEach((question) => {
      const answerId = answers[question.id];
      const answer = question.answers.find((item) => item.id === answerId);

      if (answer?.dosha) next[answer.dosha] += 1;
    });

    return next;
  }, [answers]);

  const result = useMemo(() => {
    const firstAnswer = questions[0].answers.find(
      (answer) => answer.id === answers[1],
    )?.dosha;

    return classify(scores, firstAnswer);
  }, [answers, scores]);

  const currentQuestion = orderedQuestions[questionIndex];
  const selectedAnswer = currentQuestion
    ? answers[currentQuestion.id]
    : undefined;

  const resultTitle =
    t[result.titleKey as keyof typeof t] ?? t.vata;

  const resultDescription =
    t[result.descriptionKey as keyof typeof t] ?? t.vataText;

  useEffect(() => {
    if (screen === "result") resultHeading.current?.focus();
  }, [screen]);

  function startQuiz() {
    setOrderedQuestions(
      questions.map((question) => ({
        ...question,
        answers: shuffle(question.answers),
      })),
    );
    setQuestionIndex(0);
    setAnswers({});
    setGoal(null);
    setNotice("");
    setScreen("questions");
    trackQuizEvent("quiz_start");
  }

  function selectAnswer(answer: Answer) {
    if (!currentQuestion) return;

    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: answer.id,
    }));
    setNotice("");

    trackQuizEvent("quiz_answer", {
      question_number: currentQuestion.id,
    });

    // Move forward after the answer is selected.
    window.setTimeout(() => {
      setQuestionIndex((previous) => {
        const next = previous + 1;

        if (next >= orderedQuestions.length) {
          setScreen("goal");
          return previous;
        }

        return next;
      });
    }, 180);
  }

  function goBack() {
    setNotice("");

    if (screen === "goal") {
      setScreen("questions");
      setQuestionIndex(orderedQuestions.length - 1);
      return;
    }

    setQuestionIndex((previous) => Math.max(0, previous - 1));
  }

  function showResult() {
    setScreen("result");

    trackQuizEvent("quiz_result", {
      result_key: result.key,
      goal: goal === null ? "not_selected" : String(goal),
    });
  }

  const bookingUrl = `/online?${new URLSearchParams({
    from: "quiz",
    type: result.key,
  }).toString()}`;

  const goalUrl = "/online/gentle-reset";

  return (
    <section className="min-h-[70vh] bg-[var(--cream)] px-4 py-12 text-[var(--text)] sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-[720px]">
        {/* Language selection */}
        <div className="mb-7 flex justify-end gap-2">
          {(["en", "de"] as Lang[]).map((language) => (
            <button
              key={language}
              type="button"
              onClick={() => setLang(language)}
              aria-pressed={lang === language}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                lang === language
                  ? "border-[var(--forest)] bg-[var(--forest)] text-white"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--forest-dark)] hover:border-[var(--forest)]"
              }`}
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] shadow-xl shadow-[var(--forest-dark)]/[0.06]">
          {/* START */}
          {screen === "start" && (
            <div className="relative overflow-hidden px-6 py-10 sm:px-12 sm:py-14">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[var(--gold)]/40" />
              <div className="pointer-events-none absolute -right-5 -top-5 h-36 w-36 rounded-full border border-[var(--forest)]/15" />

              <div className="relative">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brown)]">
                  {t.eyebrow}
                </p>

                <h1 className="max-w-xl font-[var(--font-heading)] text-4xl font-normal leading-tight text-[var(--forest-dark)] sm:text-5xl">
                  {t.title}
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-muted)]">
                  {t.intro}
                </p>

                <p className="mt-6 inline-flex rounded-full border border-[var(--border)] bg-[var(--cream)] px-4 py-2 text-[10px] font-bold tracking-[0.13em] text-[var(--forest-dark)]">
                  {t.free}
                </p>

                <div className="mt-8 rounded-[var(--radius-md)] border-l-4 border-[var(--gold)] bg-[var(--cream)] px-5 py-4">
                  <p className="text-sm leading-7 text-[var(--text-muted)]">
                    {t.hint}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={startQuiz}
                  className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--forest-dark)] px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--forest)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 sm:w-auto"
                >
                  {t.start}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          )}

          {/* QUESTIONS */}
          {screen === "questions" && currentQuestion && (
            <div className="px-5 py-7 sm:px-10 sm:py-10">
              <div className="mb-8">
                <div className="mb-3 flex items-center justify-between gap-3 text-xs font-semibold text-[var(--text-muted)]">
                  <span>
                    {t.question} {questionIndex + 1} {t.of}{" "}
                    {orderedQuestions.length}
                  </span>
                  <span>
                    {Math.round(
                      ((questionIndex + 1) / orderedQuestions.length) * 100,
                    )}
                    %
                  </span>
                </div>

                <div
                  role="progressbar"
                  aria-label={`${t.question} ${questionIndex + 1} ${t.of} ${orderedQuestions.length}`}
                  aria-valuemin={0}
                  aria-valuemax={orderedQuestions.length}
                  aria-valuenow={questionIndex + 1}
                  className="h-2 overflow-hidden rounded-full bg-[var(--surface-dark)]"
                >
                  <div
                    className="h-full rounded-full bg-[var(--forest)] transition-all duration-300"
                    style={{
                      width: `${((questionIndex + 1) / orderedQuestions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brown)]">
                {t.eyebrow}
              </p>

              <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-normal leading-tight text-[var(--forest-dark)] sm:text-4xl">
                {currentQuestion.title[lang]}
              </h2>

              <div className="mt-8 space-y-3">
                {currentQuestion.answers.map((answer) => {
                  const isSelected = selectedAnswer === answer.id;

                  return (
                    <button
                      key={answer.id}
                      type="button"
                      onClick={() => selectAnswer(answer)}
                      aria-pressed={isSelected}
                      className={`flex min-h-14 w-full items-center gap-4 rounded-[var(--radius-md)] border px-4 py-4 text-left text-sm leading-6 transition sm:px-5 sm:text-base ${
                        isSelected
                          ? "border-[var(--forest)] bg-[var(--surface-dark)] text-[var(--forest-dark)]"
                          : "border-[var(--border)] bg-white text-[var(--text)] hover:border-[var(--forest)] hover:bg-[var(--cream)]"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          isSelected
                            ? "border-[var(--forest)] bg-[var(--forest)] text-white"
                            : "border-[var(--border)] bg-transparent"
                        }`}
                      >
                        {isSelected && <span className="text-xs">✓</span>}
                      </span>
                      <span>{answer.text[lang]}</span>
                    </button>
                  );
                })}
              </div>

              {notice && (
                <p role="status" className="mt-4 text-sm text-[var(--terracotta)]">
                  {notice}
                </p>
              )}

              <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-5">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={questionIndex === 0}
                  className="rounded-full px-4 py-3 text-sm font-semibold text-[var(--forest)] transition hover:bg-[var(--cream)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ← {t.back}
                </button>

                <span className="text-xs text-[var(--text-muted)]">
                  {questionIndex + 1} / {orderedQuestions.length}
                </span>
              </div>
            </div>
          )}

          {/* UN-SCORED GOAL QUESTION */}
          {screen === "goal" && (
            <div className="px-5 py-8 sm:px-10 sm:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brown)]">
                {t.eyebrow}
              </p>

              <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-normal leading-tight text-[var(--forest-dark)] sm:text-4xl">
                {t.goalTitle}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                {t.goalIntro}
              </p>

              <div className="mt-7 space-y-3">
                {t.goals.map((item, index) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setGoal(index)}
                    aria-pressed={goal === index}
                    className={`flex min-h-14 w-full items-center gap-4 rounded-[var(--radius-md)] border px-4 py-4 text-left text-sm transition sm:text-base ${
                      goal === index
                        ? "border-[var(--forest)] bg-[var(--surface-dark)] text-[var(--forest-dark)]"
                        : "border-[var(--border)] bg-white hover:border-[var(--forest)]"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        goal === index
                          ? "border-[var(--forest)] bg-[var(--forest)] text-white"
                          : "border-[var(--border)]"
                      }`}
                    >
                      {goal === index && "✓"}
                    </span>
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-8 flex flex-col-reverse justify-between gap-3 border-t border-[var(--border)] pt-5 sm:flex-row">
                <button
                  type="button"
                  onClick={goBack}
                  className="rounded-full px-5 py-3 text-sm font-semibold text-[var(--forest)] hover:bg-[var(--cream)]"
                >
                  ← {t.back}
                </button>

                <button
                  type="button"
                  onClick={showResult}
                  className="rounded-full bg-[var(--forest-dark)] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[var(--forest)]"
                >
                  {t.next} →
                </button>
              </div>
            </div>
          )}

          {/* RESULT */}
          {screen === "result" && (
            <div className="px-5 py-8 sm:px-10 sm:py-12">
              <div className="rounded-[var(--radius-lg)] bg-[var(--forest-dark)] px-6 py-8 text-[var(--cream)] sm:px-9 sm:py-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  {t.resultEyebrow}
                </p>

                <h2
                  ref={resultHeading}
                  tabIndex={-1}
                  className="mt-4 font-[var(--font-heading)] text-4xl font-normal leading-tight text-[var(--cream)] outline-none sm:text-5xl"
                >
                  {resultTitle}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[var(--cream)]/85">
                  {resultDescription}
                </p>
              </div>

              <div className="mt-7 rounded-[var(--radius-md)] border border-[var(--border)] bg-white p-5">
                <p className="text-sm font-semibold text-[var(--forest-dark)]">
                  {t.qualities}
                </p>

                <div className="mt-4 space-y-4">
                  {doshas.map((dosha) => (
                    <div key={dosha}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="font-semibold text-[var(--forest-dark)]">
                          {t[dosha]}
                        </span>
                        <span className="text-[var(--text-muted)]">
                          {scores[dosha]} / 7
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-dark)]">
                        <div
                          className="h-full rounded-full bg-[var(--forest)]"
                          style={{
                            width: `${(scores[dosha] / 7) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-[var(--text-muted)]">
                {t.resultNote}
              </p>

              {goal !== null && (
                <div className="mt-4 rounded-[var(--radius-md)] bg-[var(--cream)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brown)]">
                    {t.goalSelected}
                  </p>
                  <p className="mt-1 text-sm text-[var(--forest-dark)]">
                    {t.goals[goal]}
                  </p>
                </div>
              )}

              {/* Main conversion */}
              <div className="mt-7 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--cream)] p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brown)]">
                  {t.consultationPrice}
                </p>

                <h3 className="mt-3 font-[var(--font-heading)] text-2xl text-[var(--forest-dark)] sm:text-3xl">
                  {t.consultationTitle}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  {t.consultationText}
                </p>

                <a
                  href={bookingUrl}
                  onClick={() =>
                    trackQuizEvent("quiz_cta_consult", {
                      result_key: result.key,
                    })
                  }
                  className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--forest-dark)] px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-[var(--forest)] sm:w-auto"
                >
                  {t.book}
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              {/* Secondary CTA */}
              <div className="mt-4 rounded-[var(--radius-lg)] border border-[var(--border)] p-6">
                <h3 className="font-[var(--font-heading)] text-xl text-[var(--forest-dark)]">
                  {t.resetTitle}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                  {t.resetText}
                </p>

                <a
                  href={goalUrl}
                  onClick={() =>
                    trackQuizEvent("quiz_cta_reset", {
                      result_key: result.key,
                    })
                  }
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--forest)] hover:text-[var(--brown)]"
                >
                  {t.resetLink}
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              <button
                type="button"
                onClick={startQuiz}
                className="mt-7 w-full rounded-full border border-[var(--forest)] px-6 py-4 text-sm font-semibold text-[var(--forest)] transition hover:bg-[var(--cream)]"
              >
                {t.restart}
              </button>

              <p className="mt-6 text-center text-xs leading-6 text-[var(--text-muted)]">
                {t.disclaimer}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}