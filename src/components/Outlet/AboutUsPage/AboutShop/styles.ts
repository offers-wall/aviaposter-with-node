import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const section = (theme: Theme) => css`
  position: relative;
  color: ${theme.palette.text.secondary};
`;

export const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 42px;
  max-width: 800px;
`;
