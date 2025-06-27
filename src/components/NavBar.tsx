/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

export const NavBar = () => (
  <nav
    css={css`
      display: flex;
      align-items: center;
      padding: 16px;
      /* background: ${theme.colors.primary}; */
      background: white;

    `}
  >
    <h1 css={css`${theme.typography.h1}; margin: 0 auto;`}>선물하기</h1>
  </nav>
);