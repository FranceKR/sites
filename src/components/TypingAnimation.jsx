import React from 'react';

const TypingAnimation = () => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentPhase, setCurrentPhase] = React.useState('typing-france');
  
  const text1 = 'France Khalil';
  const text2 = 'prans kalil';
  
  React.useEffect(() => {
    let timeout;
    
    if (currentPhase === 'typing-france') {
      if (displayText.length < text1.length) {
        timeout = setTimeout(() => setDisplayText(text1.slice(0, displayText.length + 1)), 150);
      } else {
        timeout = setTimeout(() => setCurrentPhase('pause-france'), 2000);
      }
    } else if (currentPhase === 'pause-france') {
      timeout = setTimeout(() => setCurrentPhase('deleting-france'), 1000);
    } else if (currentPhase === 'deleting-france') {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 80);
      } else setCurrentPhase('typing-prans');
    } else if (currentPhase === 'typing-prans') {
      if (displayText.length < text2.length) {
        timeout = setTimeout(() => setDisplayText(text2.slice(0, displayText.length + 1)), 150);
      } else timeout = setTimeout(() => setCurrentPhase('pause-prans'), 2000);
    } else if (currentPhase === 'pause-prans') {
      timeout = setTimeout(() => setCurrentPhase('deleting-prans'), 1000);
    } else if (currentPhase === 'deleting-prans') {
      if (displayText.length > 0) timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 80);
      else setCurrentPhase('typing-france');
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, currentPhase]);
  
  const isItalic = currentPhase.includes('prans');
  
  return (
    <h1 className={`text-5xl sm:text-6xl md:text-7xl font-serif ${isItalic ? 'italic' : ''}`} 
        style={{ fontFamily: 'Playfair Display, serif', minHeight: '1.2em' }}>
      {displayText}<span className="animate-pulse">|</span>
    </h1>
  );
};

export default TypingAnimation;
