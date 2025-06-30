/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

export const RankingItem = ({ rank, product }) => (
  <div css={css`display:flex; flex-direction:column; width:150px`}>
    <span css={css`${theme.typography.h1}; width:24px; text-align:center;`}>{rank}</span>
    <img
      src={product.imageURL}
      alt={product.name}
      css={css`width:150px; height:150px; border-radius:5px; margin:0 8px;`}
    />
    <div css={css`
        flex:1; 
        `}>
      <p css={css`${theme.typography.body}; margin:0;`}>{product.name}</p>
      <p css={css`${theme.typography.caption}; color:${theme.colors.gray200}; margin:4px 0 0;`}>{product.brandInfo.name}</p>
    </div>
    <p css={css`${theme.typography.body};`}>{product.price.sellingPrice.toLocaleString()}원</p>
  </div>
);