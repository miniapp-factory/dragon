"use client";

import { useState } from "react";
import { dragons } from "@/lib/dragons";
import DragonResult from "./dragon-result";

const questions = [
  {
    question: "What is your favorite color?",
    options: [
      { text: "Red", dragon: 0 },
      { text: "Blue", dragon: 1 },
      { text: "Green", dragon: 2 },
    ],
  },
  {
    question: "What is your preferred terrain?",
    options: [
      { text: "Mountains", dragon: 0 },
      { text: "Forests", dragon: 1 },
      { text: "Deserts", dragon: 2 },
    ],
  },
  {
    question: "What is your favorite food?",
    options: [
      { text: "Meat", dragon: 0 },
      { text: "Plants", dragon: 1 },
      { text: "Minerals", dragon: 2 },
    ],
  },
  {
    question: "What is your personality?",
    options: [
      { text: "Brave", dragon: 0 },
      { text: "Wise", dragon: 1 },
      { text: "Mischief", dragon: 2 },
    ],
  },
  {
    question: "What is your favorite activity?",
    options: [
      { text: "Flying", dragon: 0 },
      { text: "Swimming", dragon: 1 },
      { text: "Hiding", dragon: 2 },
    ],
  },
];

export default function DragonQuiz() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<typeof dragons[0] | null>(null);

  const handleAnswer = (dragonIndex: number) => {
    const newAnswers = [...answers, dragonIndex];
    setAnswers(newAnswers);
    if (newAnswers.length === questions.length) {
      const counts = newAnswers.reduce((acc, d) => {
        acc[d] = (acc[d] || 0) + 1;
        return acc;
      }, {} as Record<number, number>);
      const most = Object.entries(counts).reduce((a, b) =>
        (b[1] > a[1] ? b : a)
      )[0];
      setResult(dragons[Number(most)]);
    }
  };

  if (result) {
    return <DragonResult dragon={result} />;
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      {questions.map((q, i) => (
        <div key={i} className="flex flex-col gap-2">
          <span className="font-semibold">{q.question}</span>
          <div className="flex gap-2">
            {q.options.map((opt, j) => (
              <button
                key={j}
                className="px-4 py-2 bg-primary text-primary-foreground rounded"
                onClick={() => handleAnswer(opt.dragon)}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
