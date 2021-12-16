/** @format */

import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import req from "../store/LatestRequests.js";

export const RequestsBlock = observer(({ setInputVal }) => {
  useEffect(() => {
    req.autoRender();
  }, []);
  return (
    <div className='requestBlock'>
      {req.requests.length > 0 ? <h3>History of requests</h3> : null}
      {req.requests.map((req) => (
        <p
          className='requestBlock__parameter'
          key={req.key}
          onClick={() => setInputVal(req.request)}>
          {req.request}
        </p>
      ))}
    </div>
  );
});
