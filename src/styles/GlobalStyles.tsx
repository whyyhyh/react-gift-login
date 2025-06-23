/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
      /* Reset CSS */
      *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html, body, #root {
        width: 100%;
        height: 100%;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      /* 필요하면 여기 추가로 스타일 초기화 */
    `}
  />
);
