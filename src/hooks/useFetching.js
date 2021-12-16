/** @format */

import { useState } from "react";

export const useFetching = (callback) => {
  const [error, setError] = useState("");

  const fetching = async (...args) => {
    try {
      await callback(...args);
    } catch (e) {
      setError(e.message);
    }
  };
  return [fetching, error];
};
