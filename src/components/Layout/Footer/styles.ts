import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const footer = (theme: Theme) => css`
  background-color: ${theme.palette.background.paper};
  color: ${theme.palette.text.primary};
`;

export const privacyTermsWrap = css`
  margin-top: 15px;
`;

export const wrap = (theme: Theme) => css`
  display: flex;
  align-items: flex-end;

  ${theme.breakpoints.up('md')} {
    flex-direction: row;
    justify-content: space-between;
    gap: 42px;
  }

  ${theme.breakpoints.down('md')} {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 28px;
  }
`;

export const navWrap = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  img {
    width: 80%;
  }
  ${theme.breakpoints.up('md')} {
    order: 1;
  }

  ${theme.breakpoints.down('md')} {
    order: 2;
  }
`;

export const contactsWrap = (theme: Theme) => css`
  ${theme.breakpoints.up('md')} {
    order: 2;
  }

  ${theme.breakpoints.down('md')} {
    order: 1;
  }
`;

export const logo = (theme: Theme) => css`
  ${theme.breakpoints.up('md')} {
    margin-bottom: 22px;
  }

  ${theme.breakpoints.down('md')} {
    margin: 0 auto 22px;
  }
`;

export const contact = css`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const copyRight = (theme: Theme) => css`
  margin-top: 14px;

  ${theme.breakpoints.down('sm')} {
    font-size: 10px;
  }
`;
