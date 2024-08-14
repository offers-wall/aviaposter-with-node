import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const mainWrap = (theme: Theme) => css`
  background-color: ${theme.palette.secondary.main};
`;

export const wrap = (theme: Theme) => css`
  display: flex;
  gap: 50px;

  ${theme.breakpoints.up('lg')} {
    flex-direction: row;
    justify-content: space-between;
  }

  ${theme.breakpoints.down('lg')} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
