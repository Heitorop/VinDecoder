/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import req from "../store/LatestRequests.js";

const RequestsBlock = observer(({ setInputVal }) => {
  return (
    <div className='requestBlock'>
      {req.requests.length > 0 ? <h3>History of requests</h3> : null}
      {req.requests.map((r) => (
        <p
          className='requestBlock__parameter'
          key={r.key}
          onClick={() => setInputVal(r.request)}>
          {r.request}
        </p>
      ))}
    </div>
  );
});

export default RequestsBlock;
