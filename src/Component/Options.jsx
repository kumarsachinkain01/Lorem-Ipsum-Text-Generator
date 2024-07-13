import React from 'react';

const Options = (props) => {
  const { includeHtml, setIncludeHtml, inputValue, setInputValue, tag, setTag } = props;

  return (
    <div>
      <div className="options">
        <div className="wrapper">
          <div className="optionsContainer">
            <div className="paragraphs">
              <p>Paragraphs:</p>
              <input
                type="number"
                min="1"
                max="10"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div className="tags">
              <p>Tags:</p>
              <select value={tag} onChange={(e) => setTag(e.target.value)}>
                <option value="p">&lt;p&gt;</option>
                <option value="h1">&lt;h1&gt;</option>
                <option value="h2">&lt;h2&gt;</option>
                <option value="h3">&lt;h3&gt;</option>
                <option value="h4">&lt;h4&gt;</option>
                <option value="h5">&lt;h5&gt;</option>
                <option value="h6">&lt;h6&gt;</option>
                <option value="span">&lt;span&gt;</option>
              </select>
            </div>
            <div className="include">
              <p>Include HTML:</p>
              <select value={includeHtml} onChange={(e) => setIncludeHtml(e.target.value)}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Options;
