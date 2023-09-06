import styled from "styled-components";
const SliderWrapper = styled.div`
  position: relative;
  .slide {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    min-width: 300px;
    width: 100%;
    padding-top: 31.25%;
    z-index: 1;
  }
  .swiper-pagination {
    bottom: 54px;
  }
`;
export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default SliderWrapper;
