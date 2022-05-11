import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  console.log('[option]');
  return <div className="OptionsContainer">{title} xxPage</div>;
};

chrome.storage.sync.get('color', ({ color }) => {
  document.body.style.backgroundColor = color;
});

export default Options;
