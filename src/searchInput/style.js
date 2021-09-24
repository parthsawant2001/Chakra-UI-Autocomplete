import styled from "styled-components";

export const SuggestContainer = styled.div`
  height: 240px;
  width: 242px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
