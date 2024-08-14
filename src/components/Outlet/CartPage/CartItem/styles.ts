import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const mainWrap = (theme: Theme) => css`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: ${theme.palette.text.disabled};

  ${theme.breakpoints.up('sm')} {
    flex-direction: row;
  }

  ${theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;

export const image = css`
  border-radius: 4px;
`;

export const wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const field = (theme: Theme) => css`
  width: 75px;

  & .MuiInputBase-formControl {
    background-color: ${theme.palette.primary.contrastText};
  }

  & .MuiOutlinedInput-notchedOutline {
    border-width: 0;
  }

  & .MuiFormLabel-root {
    color: ${theme.palette.text.primary};
  }
`;
