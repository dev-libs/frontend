import React, { useState } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import styled from "styled-components";

const CategoryBtn = styled.button`
  border-radius: 6px;
  border: 1px solid #6a9955;
  background-color: #ededed;
  color: #6a9955;
  width: 7%;
  margin: 5px;
  padding: 5px;
`;

const Category2Btn = styled.button`
  border-radius: 6px;
  border: 1px solid #7bdcfe;
  background-color: #ededed;
  color: #7bdcfe;
  width: 7%;
  margin: 5px;
  padding: 5px;
`;

const Category3Btn = styled.button`
  border-radius: 6px;
  border: 1px solid #568ca1;
  background-color: #ededed;
  color: #568ca1;
  width: 7%;
  margin: 5px;
  padding: 5px;
`;

const PlayBtn = styled.button`
  background-color: #ededed;
  color: #007ACC;
  border-radius: 6px;
  width: 6%;
  margin: 5px;
  padding: 5px;
  align-items: center;
`;

const MadlibPage = props => {
  const [play, setPlay] = useState(false);
  const [form, setForm] = useState(false);
  console.log(props.story);

  return (
    <div>
      hello world
      {props.test}
      <PlayBtn onClick={() => setPlay(true)}>Play</PlayBtn>
      {play && (
        <div>
          <CategoryBtn
            onClick={() => {
              props.getData(1);
              setForm(!form);
            }}
          >
            {" "}
            General{" "}
          </CategoryBtn>
          <Category2Btn onClick={() => props.getData(3)}>JS</Category2Btn>
          <Category3Btn onClick={() => props.getData(3)}>Python</Category3Btn>
        </div>
      )}
      {form && (
        <form>
          <input placeholder="adjective" type="text" name="adjective" />
          <input placeholder="noun" type="text" name="noun" />
          <input placeholder="verb" type="text" name="verb" />
          <input placeholder="noun" type="text" name="noun" />
          <button>submit your words</button>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    test: state.test,
    story: state.story,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(MadlibPage);
