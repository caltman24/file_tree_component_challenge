import { useState } from "react";
import rootFolder from "./rootFolder";
import "./App.css";

interface IEntry {
  name: string;
  children?: IEntry[];
}

interface IEntryProps {
  entry: IEntry;
  depth: number;
}

const Entry = ({ entry, depth }: IEntryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const depthPaddingStyle = { paddingLeft: `${depth * 10}px ` };

  return (
    <div className="entry">
      {entry.children ? (
        <button
          className="entry-button"
          onClick={() => {
            return setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? "- " : "+ "}
          {entry.name}
        </button>
      ) : (
        <div>{entry.name}</div>
      )}

      {isOpen && (
        <div style={depthPaddingStyle}>
          {entry.children?.map((entry) => (
            <Entry entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {rootFolder.children.map((entry) => (
        <Entry entry={entry} depth={2} />
      ))}
    </div>
  );
}

export default App;
