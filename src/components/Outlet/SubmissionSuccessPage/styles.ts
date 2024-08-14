import { Theme } from '@mui/material';
import { css } from '@emotion/react';

export const wrap = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: ${theme.palette.text.secondary};
`;
