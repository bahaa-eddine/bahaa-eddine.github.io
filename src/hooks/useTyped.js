import { useEffect, useRef, useState } from 'react';

export const useTyped = (strings, options = {}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  const typeSpeed = options.typeSpeed || 100;
  const deleteSpeed = options.deleteSpeed || 50;
  const delayBetween = options.delayBetween || 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[currentIndex];

      if (!isDeleting) {
        if (currentText !== currentString) {
          setCurrentText(currentString.substring(0, currentText.length + 1));
          timeoutRef.current = setTimeout(handleTyping, typeSpeed);
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        if (currentText !== '') {
          setCurrentText(currentString.substring(0, currentText.length - 1));
          timeoutRef.current = setTimeout(handleTyping, deleteSpeed);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, typeSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, currentIndex, isDeleting, strings, typeSpeed, deleteSpeed, delayBetween]);

  return currentText;
};
