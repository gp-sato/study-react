import { useCallback, useState } from 'react'

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("５文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback((e) => {
    setArray((prevArray) => {
      if (prevArray.includes(text)) {
        alert("同じ要素が既に存在しています。");
        return prevArray;
      }

      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};