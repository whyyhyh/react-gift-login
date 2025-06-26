/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { theme } from '@/styles/theme';


export const FriendSelectionSection = () => (
  <section css={css`padding:16px; background:${theme.colors.gray100};`}>
    <h2 css={css`${theme.typography.h1}; margin-bottom:8px;`}>선물할 친구를 선택해주세요.</h2>
    <div css={css`display:flex; gap:12px; overflow-x:auto;`}>

    </div>
  </section>
);