import React, { useEffect, useState } from "react";

const useLocalStorageVal = (key) => {
  const [value, setValue] = useState();
  const data = localStorage.getItem(key);
};

export default useLocalStorageVal;
