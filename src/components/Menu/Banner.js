import bannerImg from "../../images/banner.svg";
import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
`;
