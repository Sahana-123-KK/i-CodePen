import React, { useEffect, useState } from "react";

const PREFIX = "CODEPEN-CLONE";

const useLocalStoragehook = (key, initialvalue) => {
  let prefixkey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const json = localStorage.getItem(prefixkey);
    if (null != json) {
      return JSON.parse(json);
    }
    if (typeof initialvalue === "function") {
      return initialvalue();
    } else {
      return initialvalue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixkey, JSON.stringify(value));
  }, [prefixkey, value]);

  return [value, setValue];
};

export default useLocalStoragehook;
