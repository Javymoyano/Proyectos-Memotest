import React, { useEffect, useState } from "react";

const ICONS = [
  "https://icongr.am/devicon/c-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/git-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/mongodb-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export default function Juego() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === ICONS.length) {
      alert("You Win!");
      setGuessed([]);
      ICONS.sort(() => Math.random() - 0.5);
    }
  }, [guessed]);
  return (
    <>
      <h1>Memotest</h1>

      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr)) ",
          gap: 20,
        }}
      >
        {ICONS.map((image) => {
          const [, url] = image.split("|");
          return (
            <li
              key={image}
              onClick={() =>
                selected.length < 2 &&
                setSelected((selected) => selected.concat(image))
              }
              style={{
                cursor: "pointer",
                padding: 12,
                border: "1px solid #666",
                borderRadius: 12,
              }}
            >
              {selected.includes(image) || guessed.includes(image) ? (
                <img src={url} alt="icon" />
              ) : (
                <img
                  key={image}
                  alt=""
                  src={
                    "https://icongr.am/clarity/cursor-hand-click.svg?size=120&color=ffffff"
                  }
                />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
