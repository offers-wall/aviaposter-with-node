import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const cart = (theme: Theme) => css`
  background-color: ${theme.palette.text.secondary};

  ${theme.breakpoints.up('lg')} {
    display: flex;
  }

  ${theme.breakpoints.down('lg')} {
    display: block;
  }
`;

export const cartBox = (theme: Theme) => css`
  position: relative;

  ${theme.breakpoints.up('lg')} {
    padding: 60px;
    width: 60%;
  }

  ${theme.breakpoints.down('lg')} {
    padding: 20px;
    width: 100%;
  }
`;

export const title = css`
  margin-bottom: 26px;
`;

export const divider = css`
  margin-bottom: 24px;
`;

export const wrap = css`
  display: flex;
`;

export const items = css`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const subTotal = css`
  position: absolute;
  bottom: 0;
  right: 10px;
`;

export const paymentBox = (theme: Theme) => css`
  background-color: ${theme.palette.background.paper};
  color: ${theme.palette.text.secondary};

  ${theme.breakpoints.up('lg')} {
    padding: 60px;
    width: 40%;
  }

  ${theme.breakpoints.down('lg')} {
    padding: 20px;
    width: 100%;
  }
`;

export const button = css`
  position: absolute;
  bottom: 0;
  left: 10px;
`;
