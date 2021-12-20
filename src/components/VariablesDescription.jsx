/** @format */

import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { fetchDescription } from "../API/fetchDescription";
import descr from "../store/VariablesStore.js";
import MyLoader from "../UI/loader/MyLoader";

const VariablesDescription = observer(() => {
  useEffect(() => {
    fetchDescription();
  }, []);
  return (
    <div className='resultsOfUncoding'>
      {descr.variLoading && <MyLoader />}
      {descr.description.map((variable) => (
        <div key={variable.ID} className='resultsOfUncoding__component'>
          <p className='resultsOfUncoding__component-string'>
            DataType : {variable.DataType}
          </p>
          <p className='resultsOfUncoding__component-string'>
            GroupName : {variable.GroupName}
          </p>
          <p className='resultsOfUncoding__component-string'>
            ID :{variable.ID}
          </p>
          <p className='resultsOfUncoding__component-string'>
            <b>Name :</b> {variable.Name}
          </p>
        </div>
      ))}
    </div>
  );
});

export default VariablesDescription;
