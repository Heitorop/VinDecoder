/** @format */

import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import req from "../store/LatestRequests.js";

export const RequestsBlock = observer(() => {
  useEffect(() => {
    req.autoRender();
  }, []);
  return (
    <div className='requestBlock'>
      {req.requests.map((req) => (
        <p key={req.key}>{req.request}</p>
      ))}
    </div>
  );
});
