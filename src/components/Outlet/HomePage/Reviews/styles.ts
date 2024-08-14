import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const section = (theme: Theme) => css`
  margin-top: 0px;
  background-color: ${theme.palette.background.paper};
`;

export const swiper = (theme: Theme) => css`
  .swiper-button-next,
  .swiper-button-prev {
    border-radius: 100%;
    background-color: ${theme.palette.secondary.main};

    &::after {
      font-size: 15px;
      font-weight: 700;
    }
  }

  .swiper-button-next {
    padding: 24px;
    top: 90%;
    right: 44%;

    &::after {
      color: ${theme.palette.primary.main};
    }
  }

  .swiper-button-prev {
    padding: 22px;
    border: 2px solid ${theme.palette.secondary.main};
    top: 90%;
    left: 44%;
    background-color: transparent;

    &::after {
      color: ${theme.palette.text.secondary};
    }
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    background-color: ${theme.palette.secondary.main};
    opacity: 1;
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: ${theme.palette.primary.main};
  }
`;
