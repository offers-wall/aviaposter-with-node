import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const bold = css`
  font-weight: 600;
`;

export const desktop = (theme: Theme) => css`
  ${theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const mobile = (theme: Theme) => css`
  ${theme.breakpoints.up('md')} {
    display: none;
  }
`;

export const outletPadding = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    padding: 8% 5%;
  }

  ${theme.breakpoints.down('sm')} {
    padding: 30px 15px;
  }
`;

export const layoutPadding = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    padding: 2% 5%;
  }

  ${theme.breakpoints.down('sm')} {
    padding: 15px;
  }
`;

export const layoutMargin = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    margin: 8% 0px;
  }

  ${theme.breakpoints.down('sm')} {
    margin: 30px 0px;
  }
`;

export const sectionWithBackgroundImage = css`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`;
