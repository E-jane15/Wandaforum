import React from 'react';
import QuestionCard from './QuestionCard';

const INITIAL_QUESTIONS = [
  {
    id: 1,
    title: 'Best Practices for React State Management',
    content: 'What are the most efficient ways to manage state in large React applications? Are hooks always the best solution?',
    tags: ['React', 'Web Development', 'Frontend'],
    likes: 42,
    timestamp: new Date('2024-01-15T10:30:00')
  },
  {
    id: 2,
    title: 'Docker vs Kubernetes for Microservices',
    content: 'Looking for insights on when to use Docker and when to transition to Kubernetes for microservices architecture.',
    tags: ['DevOps', 'Cloud', 'Containers'],
    likes: 35,
    timestamp: new Date('2024-01-20T14:45:00')
  },
  {
    id: 3,
    title: 'Machine Learning Interview Preparation',
    content: 'What key topics should I focus on when preparing for ML engineering interviews?',
    tags: ['Machine Learning', 'Backend', 'Interviews'],
    likes: 28,
    timestamp: new Date('2024-01-22T09:15:00')
  }
];

const PrePostedQuestions = () => {
  return (
    <>
      {INITIAL_QUESTIONS.map(question => (
        <QuestionCard 
          key={question.id} 
          question={question} 
        />
      ))}
    </>
  );
};

export default PrePostedQuestions;