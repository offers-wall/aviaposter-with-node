import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const title = (theme: Theme) => css`
  margin-bottom: 38px;
  color: ${theme.palette.text.secondary};
`;

export const wrap = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;

  ${theme.breakpoints.up('sm')} {
    flex-direction: row;
  }

  ${theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;

export const section = css`
  margin: 0 auto;
  width: 80%;
`;
