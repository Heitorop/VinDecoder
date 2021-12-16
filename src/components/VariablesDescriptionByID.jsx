/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import VariablesService from "../API/VariablesService";
import { useFetching } from "../hooks/useFetching";

export const VariablesDescriptionByID = () => {
  const params = useParams();
  const [description, setDescription] = useState([]);

  const [fetchDescription, varErrorD] = useFetching(async () => {
    const response = await VariablesService.getDescription();
    setDescription(response.data.Results);
  });

  useEffect(() => {
    fetchDescription();
  }, []);
  console.log(params.id, description);
  return (
    <div className='resultsOfUncoding'>
      {varErrorD && <h2>Error</h2>}
      {description.map((variable, i) => (
        <div key={variable.ID}>
          {variable.ID.toString() === params.id ? (
            <div className='object' key={variable.ID}>
              <p className='object__string'>DataType : {variable.DataType}</p>
              <p className='object__string'>GroupName : {variable.GroupName}</p>
              <p className='object__string'>ID :{variable.ID}</p>
              <p className='object__string'>
                <b>Name :</b> {variable.Name}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};
