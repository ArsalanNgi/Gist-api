import React, { useCallback, useRef } from 'react';
import throttle from "lodash/throttle";
import styled from 'styled-components';
import Octicon from 'react-octicon';
import PropTypes from "prop-types";

const Search = ({ onSearch }) => {

  const onThrottleChange = useRef(
    throttle(value => {
      console.log(value);
      onSearch(value);
    }, 500)
  ).current;

  const onInputChange = useCallback((event) => {
    const value = event.target.value;
    onThrottleChange(value);
  }, []);

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input data-testid="search-input" placeholder="Search Gists for the username" onChange={onInputChange} />
      </InputBox>
    </Wrapper>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};


const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search;
