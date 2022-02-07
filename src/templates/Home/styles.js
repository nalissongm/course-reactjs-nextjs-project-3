import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  ${({ fontSize }) => css`
    font-size: ${fontSize};
  `}
`;
