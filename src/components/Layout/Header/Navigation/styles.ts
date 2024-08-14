import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const button = (theme: Theme) => css`
  text-align: center;
  color: ${theme.palette.text.primary};
  text-transform: capitalize;

  ${theme.breakpoints.up('md')} {
    font-size: 21px;
  }

  ${theme.breakpoints.between('sm', 'md')} {
    font-size: 18px;
  }

  ${theme.breakpoints.down('sm')} {
    font-size: 10px;
  }
`;

export const buttonGroup = (theme: Theme) => css`
  display: flex;
  gap: 20px;
  border: none;
  justify-content: center;
  color: ${theme.palette.text.secondary};
  background-color: ${theme.palette.secondary.main};
  border-radius: 10px;
  transition: 0.3s ease;

  & .MuiButton-root {
    font-size: 16px;
    border-radius: 10px;
    padding: 8px 16px;
    transition: background-color 0.3s ease;
    border-right: none;
  }

  & .MuiButton-root:hover {
    background-color: ${theme.palette.primary.main};
  }

  & .MuiButton-text {
    color: ${theme.palette.text.primary};
  }
`;
