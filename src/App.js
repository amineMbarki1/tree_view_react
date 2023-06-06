import "./App.css";
import TreeView from "./TreeView";

const data = [
  {
    label: "Folder 1",
    children: [
      {
        label: "Sub-folder 1",
        children: [
          { label: "Sub-folder 1.2", children: [{ label: "FIle 1.1" }] },
        ],
      },
      { label: "File 2" },
    ],
  },
  { label: "File 2" },
];

function App() {
  return (
    <div className="App">
      <TreeView data={data} />
    </div>
  );
}

export default App;
