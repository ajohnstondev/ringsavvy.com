import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
  width: 100%;

  ${({ horizontal }) =>
    horizontal &&
    css`
      display: flex;

      @media ${({ theme }) => theme.global.mediaQueries.md} {
        flex-direction: column;
      }
    `}
`;

export const Heading = styled.div`
  max-width: 780px;
  width: 100%;

  ${({ horizontal }) =>
    horizontal &&
    css`
      width: 40%;
    `}

  ${({ primary }) =>
    primary &&
    css`
      width: 100%;
      max-width: 500px;
    `}

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    width: 100%;
  }
`;

export const Content = styled.div`
  max-width: 780px;

  ${({ horizontal }) =>
    horizontal &&
    css`
      width: 60%;
    `}

  ${({ primary }) =>
    primary &&
    css`
      margin-left: auto;
      max-width: 580px;
    `}

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    width: 100%;
  }
`;
