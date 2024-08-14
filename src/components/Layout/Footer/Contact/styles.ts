import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = css`
  display: flex;
  gap: 30px;
`;

export const icon = (theme: Theme) => css`
  color: ${theme.palette.primary.main};
`;
