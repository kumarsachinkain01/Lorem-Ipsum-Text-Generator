import React from 'react';

const Output = (props) => {
  const { paragraph, tag, includeHtml } = props;

  return (
    <div>
      <div className="output">
        {includeHtml === "Yes" ? (
          paragraph.map((sentence, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: `<${tag}>${sentence}</${tag}>` }} />
          ))
        ) : (
          paragraph.map((sentence, index) => <p key={index}>{sentence}</p>)
        )}
      </div>
    </div>
  );
}

export default Output;
