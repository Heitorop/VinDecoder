/** @format */

import React from "react";

export const ListOfVar = ({ posts }) => {
  return (
    <div className='resultsOfUncoding'>
      {posts.map((variable, i) => (
        <div key={variable.VariableId + "-" + i} className='object'>
          <p className='object__string'>
            {variable.Variable} : {variable.Value}
          </p>
        </div>
      ))}
    </div>
  );
};
