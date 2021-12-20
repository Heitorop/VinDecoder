/** @format */

import React from "react";

const ListOfVar = ({ posts }) => (
  <div className='resultsOfUncoding'>
    {posts.map((varia) => (
      <div
        key={`${varia.VariableId}-${Date.now()}`}
        className='resultsOfUncoding__component'>
        <p className='resultsOfUncoding__component-string'>
          {varia.Variable} : {varia.Value}
        </p>
      </div>
    ))}
  </div>
);

export default ListOfVar;
