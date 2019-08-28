import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getData, postData } from "../actions";

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
  border: 1px solid #820000;
  background-color: #ededed;
  color: #820000;
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
  color: #007acc;
  border: 1px solid #007acc;
  border-radius: 6px;
  width: 6%;
  margin: 5px;
  padding: 5px;
  align-items: center;
`;

const LogoutBtn = styled.button`
  background-color: #ededed;
  color: #ce9178;
  border: 1px solid #ce9178;
  border-radius: 6px;
  width: 6%;
  margin: 5px;
  padding: 5px;
  align-items: center;
`;

const Submit = styled.button`
  background-color: #ededed;
  font-size: 1rem;
  color: #46c404;
  border: 1px solid #46c404;
  border-radius: 6px;
  width: 11%;
  height: 11%;
  margin: 5px;
  padding: 8px 3px;
  align-items: center;
`;

const PartOfSpeech = styled.label`
    margin-right: 10px;
`;

const PartOfSpeechContainer = styled.div`
    align-content: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const MadlibPage = props => {
  const types = {
    Noun: 1,
    Verb: 2,
    Adjective: 3,
    Adverb: 4,
    Number: 5,
    Color: 6
  };
  const dataSetUp = e => {
    e.preventDefault();
    const data = [];
    for (let i = 0; i < wordTypes.length; i++) {
      data.push({
        lib_id: libId,
        type_id: types[wordTypes[i]],
        answer: userAnswer[i],
        order: i
      });
    }
    console.log(data);
    props.postData(data);
  };
  const [libId, setLibId] = useState(null);
  const [play, setPlay] = useState(false);
  const [form, setForm] = useState(false);
  const [userAnswer, setUserAnswer] = useState({});
  console.log(props.story.story);
  const story = props.story.story;
  console.log(story);
  let wordTypes = [];
  let badCharacters = ["(", ")", ",", ".", "!", ";", "?", ":"];
  if (story) wordTypes = story.split(" ").filter(word => word.includes("("));
  if (wordTypes.length > 0) {
    wordTypes = wordTypes.map(word => {
      return word
        .split("")
        .filter(letter => !badCharacters.includes(letter))
        .join("")
        .toLowerCase();
    });
  }
  console.log(wordTypes);

  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };
  return (
    <div>
      hello world
      <LogoutBtn onClick={logout}>Log Out</LogoutBtn>
      {props.test}
      <PlayBtn onClick={() => setPlay(true)}>Play</PlayBtn>
      {play && (
        <div>
          <CategoryBtn
            onClick={() => {
              props.getData(1);
              setLibId(1);
              setForm(!form);
            }}
          >
            General
          </CategoryBtn>

          <Category2Btn
            onClick={() => {
              setLibId(2);
              props.getData(2);
            }}
          >
            JS
          </Category2Btn>

          <Category3Btn
            onClick={() => {
              setLibId(3);
              props.getData(3);
            }}
          >
            Python
          </Category3Btn>
        </div>
      )}
      <form onSubmit={dataSetUp}>
        {form &&
          wordTypes.map((wordType, i) => {
            return (
              <PartOfSpeechContainer key={i}>
                <PartOfSpeech>{wordType}</PartOfSpeech>
                <input
                  name={i}
                  value={userAnswer[i]}
                  onChange={e => {
                    setUserAnswer({
                      ...userAnswer,
                      [e.target.name]: e.target.value
                    });
                  }}
                />
              </PartOfSpeechContainer>
            );
          })}
        <Submit>Submit your Words</Submit>
      </form>
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
  { getData, postData }
)(MadlibPage);
