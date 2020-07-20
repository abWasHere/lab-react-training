import React from 'react';

const Greetings = (props) => {
  const languages = {
    fr: 'Bonjour',
    de: 'Hallo',
    es: 'Hola',
    en: 'Hello',
  };

  return (
    <div className="text-box">
      {languages[props.lang]} {props.children}
    </div>
  );
};

export default Greetings;
