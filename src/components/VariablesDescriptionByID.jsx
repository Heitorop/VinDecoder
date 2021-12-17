/** @format */

import React, { useEffect } from "react";
import { useParams } from "react-router";
import { fetchDescription } from "../API/fetchDescription";
import descr from "../store/VariablesStore.js";

const VariablesDescriptionByID = () => {
  const params = useParams();

  useEffect(() => {
    fetchDescription();
  }, []);

  return (
    <div className='resultsOfUncoding'>
      {descr.descError && <h2>Error</h2>}
      {descr.description.map((variable) => (
        <div key={variable.ID}>
          {variable.ID.toString() === params.id && (
            <div className='object' key={variable.ID}>
              <p className='object__string'>DataType : {variable.DataType}</p>
              <p className='object__string'>GroupName : {variable.GroupName}</p>
              <p className='object__string'>ID :{variable.ID}</p>
              <p className='object__string'>
                <b>Name :</b> {variable.Name}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VariablesDescriptionByID;
