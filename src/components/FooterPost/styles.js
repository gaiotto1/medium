import styled from 'styled-components';

import save from "../../assets/save.svg";
import saved from "../../assets/saved.svg";
import edit from "../../assets/write.svg";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0px;
  margin-top: 20px;
  border-bottom: 1px solid #E6E6E6;
`;

export const ContainerTags = styled.div`
  a {
    padding: 4px 14px;
    background-color: #F2F2F2;
    border-radius: 10px;
    color: #292929;
    display: block;
    float: left;
    font-size: 13px;
    margin: 5px 3px;

    &:last-child {
      margin-right: 15px;
    }

    &:hover {
      background-color: #292929;
      color: #F2F2F2;
    }
  }
`;

export const ButtonSave = styled.button`
  width: 23px;
  height: 20.4px;
  background-image: url(${save});
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  margin-top: 6px;
  cursor: pointer;

  // if saved true
  ${props => props.saved &&`
    background-image: url(${saved});
  `}
`;

export const ButtonEdit = styled.button`
  width: 23px;
  height: 22.4px;
  background-image: url(${edit});
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  margin-top: 6px;
  margin-left: 10px;
  cursor: pointer;
`;