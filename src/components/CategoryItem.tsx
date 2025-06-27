/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

export const CategoryItem = ({ name, image }) => (
  <div css={css`flex:1; text-align:center; padding:8px;`}>
    <img src={image} alt={name} css={css`width:56px; height:56px; border-radius:8px;`} />
    <p css={css`${theme.typography.caption}; margin-top:4px;`}>{name}</p>
  </div>
);