function formatText(text: string): React.ReactNode {
  return text.split("\n").map((line, lineIndex) => {
    const lineTexts: string[] = line.split("@");
    return (
      <p key={lineIndex}>
        {lineTexts.map((text, textIndex) => {
          if (textIndex % 2 === 0) {
            // This part is normal
            return text;
          } else {
            // This part contains a hyperlink
            const [displayText, url]: [string, string] = [text.slice(0, text.lastIndexOf(" ")), text.slice(text.lastIndexOf(" ") + 1)];
            return (
              <a href={url} target='_blank' rel='noopener noreferrer'>
                {displayText}
              </a>
            );
          }
        })}
      </p>
    );
  });
}

export default formatText;
