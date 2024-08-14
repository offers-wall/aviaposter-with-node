import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const mainWrap = (theme: Theme) => css`
  margin: 0 auto;
  max-width: 80%;
  color: ${theme.palette.text.secondary};
  background-color: ${theme.palette.background.paper};
`;

export const fields = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

export const fieldsGroup = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  ${theme.breakpoints.up('md')} {
    flex-direction: row;
  }

  ${theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;

export const input = (theme: Theme) => css`
  margin-bottom: 28px;
  min-width: 40%;
  height: 60px;

  & .MuiInputBase-root {
    fieldset {
      border-color: ${theme.palette.secondary.main};
    }
  }
`;

export const button = css`
  display: flex;
  justify-content: flex-end;
`;
