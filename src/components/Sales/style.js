import styled from "styled-components";
const SalesWrapper = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
  .header {
    font-weight: 500;
    font-size: 24px;
    padding-bottom: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .more {
      color: red;
      font-size: 14px;
    }
  }
  :hover {
    .nav {
      opacity: 1;
    }
  }
`;
export const SlideNavWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 10;
  opacity: 0;
  transition: opacity 1s;
  div {
    cursor: pointer;
    svg {
      color: orange;
    }
  }
  div:nth-child(1) {
    position: absolute;
    top: -50px;
    left: 36px;
  }
  div:nth-child(2) {
    position: absolute;
    top: -50px;
    right: 36px;
  }
`;
export default SalesWrapper;
