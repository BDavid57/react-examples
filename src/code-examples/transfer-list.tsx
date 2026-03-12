import { useState } from "react";

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
  const [langList, setLangList] = useState(languages);
  const [libList, setLibList] = useState(libraries);

  const moveSelectedLangs = () => {
    const langs = langList.filter((el) => !el.checked);
    const selectedLangs = langList.filter((el) => el.checked);

    const updateSelected = selectedLangs.map((el) => {
      el.checked = !el.checked;

      return el;
    });

    setLibList((prev) => [...prev, ...updateSelected]);
    setLangList(langs);
  };

  const moveSelectedLibs = () => {
    const libs = libList.filter((el) => !el.checked);
    const selectedLibs = libList.filter((el) => el.checked);

    const updateSelected = selectedLibs.map((el) => {
      el.checked = !el.checked;

      return el;
    });

    setLangList((prev) => [...prev, ...updateSelected]);
    setLibList(libs);
  };

  const moveAllLangs = () => {
    if (langList.length === 0) {
      return;
    }

    setLibList((prev) => [...prev, ...langList]);
    setLangList([]);
  };

  const moveAllLibs = () => {
    if (libList.length === 0) {
      return;
    }

    setLangList((prev) => [...prev, ...libList]);
    setLibList([]);
  };

  const updateLanguages = (index: number) => {
    const newLangs = langList.map((el, i) => {
      if (index === i) {
        el.checked = !el.checked;
      }

      return el;
    });

    setLangList(newLangs);
  };

  const updateLibraries = (index: number) => {
    const newLibs = libList.map((el, i) => {
      if (index === i) {
        el.checked = !el.checked;
      }

      return el;
    });

    setLibList(newLibs);
  };

  return (
    <div style={{ display: "flex", border: "1px solid black" }}>
      <div style={{ padding: "25px" }}>
        {langList.map((el, index) => {
          return (
            <div>
              <input
                type="checkbox"
                checked={el.checked}
                onChange={() => updateLanguages(index)}
              />
              {el.content}
            </div>
          );
        })}
      </div>
      <div
        style={{
          padding: "25px 25px",
          borderLeft: "1px solid black",
          borderRight: "1px solid black",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <button onClick={moveAllLibs}>{"<<"}</button>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <button onClick={moveSelectedLibs}>{"<"}</button>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <button onClick={moveSelectedLangs}>{">"}</button>
        </div>
        <div>
          <button onClick={moveAllLangs}>{">>"}</button>
        </div>
      </div>
      <div style={{ padding: "25px" }}>
        {libList.map((el, index) => {
          return (
            <div>
              <input
                type="checkbox"
                checked={el.checked}
                onChange={() => updateLibraries(index)}
              />
              {el.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
