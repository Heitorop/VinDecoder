/** @format */

import React from "react";

const ListOfVar = ({ posts }) => (
  <div className='resultsOfUncoding'>
    {posts.map((varia) => (
      <div key={`${varia.VariableId}-${Date.now()}`} className='object'>
        <p className='object__string'>
          {varia.Variable} : {varia.Value}
        </p>
      </div>
    ))}
  </div>
);

export default ListOfVar;
