import { useState } from "react";

type Item = {
  content: string;
  checked: boolean;
}

type State = {
  left: Item[];
  right: Item[]
}

const languages = [
  { content: "HTML", checked: false },
  { content: "JavaScript", checked: false },
  { content: "CSS", checked: false },
  { content: "TypeScript", checked: false },
];

const libraries = [
  { content: "React", checked: false },
  { content: "Angular", checked: false },
  { content: "Vue", checked: false },
  { content: "Svelte", checked: false },
];

export const TransferList = () => {
  const [lists, setLists] = useState<State>({
    left: languages,
    right: libraries
  });

  const moveItems = (from: keyof State, to: keyof State, onlySelected = false) => {
    setLists((prev) => {
      const moving = onlySelected
        ? prev[from].filter((item: Item) => item.checked)
        : prev[from];

      const remaining = onlySelected
        ? prev[from].filter((item: Item) => !item.checked)
        : [];

      return {
        ...prev,
        [from]: remaining,
        [to]: [
          ...prev[to],
          ...moving.map((item: Item) => ({ ...item, checked: false }))
        ]
      };
    });
  };

  const toggleItem = (list: keyof State, index: number) => {
    setLists((prev) => ({
      ...prev,
      [list]: prev[list].map((item: Item, i: number) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    }));
  };

  const renderList = (listName: keyof State) => {
    return lists[listName].map((item: Item, index: number) => (
      <div key={item.content}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => toggleItem(listName, index)}
        />
        {item.content}
      </div>
    ))
  };

  return (
    <div style={{ display: "flex", border: "1px solid black" }}>
      <div style={{ padding: "25px" }}>
        {renderList("left")}
      </div>
      <div
        style={{
          padding: "25px 25px",
          borderLeft: "1px solid black",
          borderRight: "1px solid black",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <button onClick={() => moveItems("right", "left")}>{"<<"}</button>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <button onClick={() => moveItems("right", "left", true)}>{"<"}</button>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <button onClick={() => moveItems("left", "right", true)}>{">"}</button>
        </div>
        <div>
          <button onClick={() => moveItems("left", "right")}>{">>"}</button>
        </div>
      </div>
      <div style={{ padding: "25px" }}>
        {renderList("right")}
      </div>
    </div>
  );
}
