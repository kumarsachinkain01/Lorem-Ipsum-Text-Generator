import React, { useState, useEffect } from 'react';
import Options from './Component/Options';
import Output from './Component/Output';
import "./App.css"

const App = () => {
  const [paragraph, setParagraph] = useState([]);
  const [tag, setTag] = useState('p');
  const [inputValue, setInputValue] = useState(1);
  const [includeHtml, setIncludeHtml] = useState('Yes');

  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`

    fetch(url)
      .then(res => res.json())
      .then(data => setParagraph(data));
  }, [inputValue]);

  return (
    <div className='App'>
      <div className="container">
        <div className="title">
          <h1>Lorem Ipsum Text Generator</h1>
        </div>
        <Options
          includeHtml={includeHtml}
          setIncludeHtml={setIncludeHtml}
          inputValue={inputValue}
          setInputValue={setInputValue}
          tag={tag}
          setTag={setTag}
        />
        <Output paragraph={paragraph} tag={tag} includeHtml={includeHtml} />
      </div>
    </div>
  );
}

export default App;
