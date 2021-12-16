/** @format */

import React, { useState, useEffect } from "react";
import VariablesService from "../API/VariablesService";
import { useFetching } from "../hooks/useFetching";

export const VariablesDescription = () => {
  const [description, setDescription] = useState([]);

  const [fetchDescription, varErrorD] = useFetching(async () => {
    const response = await VariablesService.getDescription();
    setDescription(response.data.Results);
    console.log(description);
  });

  useEffect(() => {
    fetchDescription();
  }, []);
  return (
    <div className='resultsOfUncoding'>
      {description.map((variable, i) => (
        <div key={variable.ID} className='object'>
          <p className='object__string'>DataType : {variable.DataType}</p>
          <p className='object__string'>GroupName : {variable.GroupName}</p>
          <p className='object__string'>ID :{variable.ID}</p>
          <p className='object__string'>
            <b>Name :</b> {variable.Name}
          </p>
        </div>
      ))}
    </div>
  );
};
