import React from 'react';
import useStyles from './WelcomeTitle.styles';

interface Text {
  title: string;
  text: string;
}

const WelcomeTitle = ({ text, title }: Text) => {
  const { container, textTitleFont, textContentFont } = useStyles();

  return (
    <div className={container}>
      <h1 className={textTitleFont}>{title}</h1>
      <h1 className={textContentFont}>{text}</h1>
    </div>
  );
};

export default WelcomeTitle;
