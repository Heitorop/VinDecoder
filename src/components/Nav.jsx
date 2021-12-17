/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const Nav = () => {
  const router = useNavigate();
  const [value, setValue] = useState("");
  const [int, setInt] = useState(false);

  function check(val) {
    const v = Number(val);
    if (v < 0) {
      setInt(true);
    } else {
      setInt(false);
    }
  }

  return (
    <nav>
      <MyButton className='nav-btn' onClick={() => router("/")}>
        Form
      </MyButton>
      <MyButton className='nav-btn' onClick={() => router("/variables")}>
        Variables
      </MyButton>
      <MyButton
        className='nav-btn'
        disabled={int}
        onClick={() => router(`/variables/${value}`)}>
        Go to :{" "}
      </MyButton>
      <div className='nav__input-wrapper'>
        <MyInput
          type='number'
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            check(value);
          }}
        />
        {int && <h2>Only &gt;= 0</h2>}
      </div>
    </nav>
  );
};

export default Nav;
