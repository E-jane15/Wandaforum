import React, { createContext, useState, useContext, useEffect } from 'react';

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

const QuestionContext = createContext();

// Load saved questions from localStorage
const getSavedQuestions = () => {
  const saved = localStorage.getItem('savedQuestions');
  return saved ? JSON.parse(saved) : [];
};

const getAskedQuestions = () => {
  const asked = localStorage.getItem('askedQuestions');
  console.log("Loaded askedQuestions from localStorage:", asked); // Debugging
  return asked ? JSON.parse(asked) : [];
};

export const QuestionProvider = ({ children }) => {
  const getAskedQuestions = () => {
    const asked = localStorage.getItem('askedQuestions');
    return asked ? JSON.parse(asked) : [];
  };
  
    const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
    const [savedQuestions, setSavedQuestions] = useState(getSavedQuestions());
    const [askedQuestions, setAskedQuestions] = useState(getAskedQuestions()); // Load asked questions
  
    // Save to localStorage whenever savedQuestions or askedQuestions changes
    useEffect(() => {
      localStorage.setItem('savedQuestions', JSON.stringify(savedQuestions));
    }, [savedQuestions]);
  
    useEffect(() => {
      console.log("QuestionProvider State - askedQuestions:", askedQuestions); // Debugging
    }, [askedQuestions]);

    const addQuestion = (newQuestion) => {
      const questionWithMetadata = {
        ...newQuestion,
        id: Date.now(),
        timestamp: new Date(),
        likes: 0,
        replies: []
      };
      setQuestions(prev => [...prev, questionWithMetadata]);
      setAskedQuestions(prev => {
        const updatedAskedQuestions = [...prev, questionWithMetadata];
        console.log("Updated Asked Questions:", updatedAskedQuestions); // Debugging
        return updatedAskedQuestions;
      });
    };

  const saveQuestion = (question) => {
    setSavedQuestions(prev => {
      const exists = prev.some(q => q.id === question.id);
      if (exists) return prev;
      return [...prev, question];
    });
  };

  const removeSavedQuestion = (questionId) => {
    setSavedQuestions(prev => prev.filter(q => q.id !== questionId));
  };

  const filterQuestions = (filters) => {
    return questions.filter(question => {
      const matchesTags = !filters.tags?.length || 
        filters.tags.some(tag => question.tags?.includes(tag));
      return matchesTags;
    }).sort((a, b) => {
      switch(filters.sortBy) {
        case 'likes':
          return (b.likes || 0) - (a.likes || 0);
        case 'answers':
          return (b.replies?.length || 0) - (a.replies?.length || 0);
        case 'latest':
        default:
          return new Date(b.timestamp) - new Date(a.timestamp);
      }
    });
  };

  const likeQuestion = (questionId) => {
    setQuestions(prev => 
      prev.map(q => 
        q.id === questionId
          ? { ...q, likes: (q.likes || 0) + 1 }
          : q
      )
    );
    // Also update the like count in saved questions
    setSavedQuestions(prev =>
      prev.map(q =>
        q.id === questionId
          ? { ...q, likes: (q.likes || 0) + 1 }
          : q
      )
    );
  };

  const addReply = (questionId, replyText) => {
    const newReply = {
      id: Date.now(),
      text: replyText,
      timestamp: new Date()
    };

    setQuestions(prev =>
      prev.map(q =>
        q.id === questionId
          ? { ...q, replies: [...(q.replies || []), newReply] }
          : q
      )
    );

    // Also update replies in saved questions
    setSavedQuestions(prev =>
      prev.map(q =>
        q.id === questionId
          ? { ...q, replies: [...(q.replies || []), newReply] }
          : q
      )
    );
  };

  return (
    
      <QuestionContext.Provider value={{
        questions,
        savedQuestions,
        askedQuestions, // Add askedQuestions to the context value
        addQuestion,
        saveQuestion,
        removeSavedQuestion,
        filterQuestions,
        likeQuestion,
        addReply
      }}>
       
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestions = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error('useQuestions must be used within a QuestionProvider');
  }
  return {
    ...context,
    askedQuestions: context.askedQuestions || [] 
  };
};