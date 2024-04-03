import React from 'react'

interface QuestionProps {
  question: string;
  choices: string[];
  selectedAnswer: string | null;
  correctAnswer: string;
  disabled: boolean;
  onAnswerClick: (choice: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, choices, selectedAnswer, correctAnswer, disabled, onAnswerClick }) => {
  return (
    <>
      <div>
        <div>{question}</div>
        <div>
          {choices.map((choice, index) => (
            <>
            
            <button
              key={index}
              onClick={() => !disabled && onAnswerClick(choice)} 
              style={{ 
                  cursor: disabled ? 'not-allowed' : 'pointer', 
                  color: selectedAnswer === choice && selectedAnswer !== correctAnswer ? 'red' : 'inherit', 
                  background: (selectedAnswer && choice === correctAnswer) ? 'green' : '' }}
            >
              {choice}
            </button>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Question