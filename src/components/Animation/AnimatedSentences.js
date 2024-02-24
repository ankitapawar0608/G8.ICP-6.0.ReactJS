import React, { useState, useEffect } from 'react';

const AnimatedSentences = ({ sentences, speed }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedSentence, setDisplayedSentence] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedSentence(sentences[currentSentenceIndex]);
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, speed);

    return () => clearInterval(interval);
  }, [currentSentenceIndex, sentences, speed]);

  return <span>{displayedSentence}</span>;
};

export default AnimatedSentences;
