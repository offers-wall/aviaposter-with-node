import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const headerWrap = (theme: Theme) => css`
  background-color: ${theme.palette.background.paper};
`;

export const menuWrap = (theme: Theme) => css`
  display: flex;
  align-items: center;
  ${theme.breakpoints.down('md')} {
    width: 100px;
  }
`;

export const background = (theme: Theme) => css`
  background-color: ${theme.palette.background.default};
`;

export const cartIcon = (theme: Theme) => css`
  position: relative;
  border-radius: 4px;
  background-color: ${theme.palette.primary.main};
`;

export const cartCount = (theme: Theme) => css`
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  top: -30%;
  right: -15%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  font-size: 14px;
  background-color: ${theme.palette.text.primary};
  color: ${theme.palette.background.paper};
`;

export const menuIcon = (theme: Theme) => css`
  border-radius: 4px;
  background-color: ${theme.palette.secondary.main};
`;
