import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const slide = (theme: Theme) => css`
  margin: 100px 0px;
  padding: 50px 40px;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: ${theme.palette.secondary.main};
`;

export const rating = (theme: Theme) => css`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: ${theme.palette.background.paper};

  & .MuiRating-icon {
    color: ${theme.palette.primary.main};
  }
`;
