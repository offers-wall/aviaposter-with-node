import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const card = (theme: Theme) => css`
  border-radius: 4px;
  background-color: ${theme.palette.secondary.main};
`;

export const image = css`
  /* border-radius: 4px; */
`;

export const cardContent = css`
  padding: 10px;
`;

export const wrap = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const cardActions = css`
  padding: 0;
`;

export const button = css`
  margin-top: auto;
`;
