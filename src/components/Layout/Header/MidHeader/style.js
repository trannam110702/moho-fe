import styled from "styled-components";
const MidHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  #header-logo {
    width: 200px;
    height: 55px;
    margin: 0 12px;
  }
`;
export const SearchBar = styled.div`
  height: 42px;
  flex: 1 1 auto;
  margin: 0 36px;
  max-width: 500px;
  input {
    height: inherit;
    color: #434343;
    border: 1px solid #ececec;
    font-size: 13px;
    font-weight: 500;
    padding: 0 40px 0 20px;
    margin: 0;
    display: inline-block;
    border-radius: 4px;
    width: calc(100% - 52px);
  }
  button {
    height: inherit;
    width: 52px;
    background: #434343;
    color: white;
    border-radius: 4px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const UtilityBar = styled.div`
  display: flex;
  margin: 0 12px;
  a {
    padding: 10px;
    svg {
      scale: 1.3;
    }
  }
`;
export default MidHeaderWrapper;
