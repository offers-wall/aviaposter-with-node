import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material';
import Container from '@/components/Outlet/Container';
import * as generalClasses from '@/styles/general';
import ReviewCard from './ReviewCard';
import { reviews } from './reviewsData';
import * as classes from './styles';

interface Props {
  className?: string;
}

export default function Reviews({ className }: Props) {
  const isExtraLarge = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  return (
    <section
      className={className}
      css={[classes.section, generalClasses.outletPadding]}>
      <Container>
        <div css={generalClasses.desktop}>
          <Swiper
            css={classes.swiper}
            loop={false}
            navigation
            modules={[Navigation]}
            slidesPerView={isExtraLarge ? 3 : 2}
            spaceBetween={46}>
            {reviews.reviews.map((review) => (
              <SwiperSlide key={review.name}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div css={generalClasses.mobile}>
          <Swiper
            css={classes.swiper}
            loop={false}
            modules={[Pagination]}
            slidesPerView='auto'
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}>
            {reviews.reviews.map((review) => (
              <SwiperSlide key={review.name}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

Reviews.defaultProps = {
  className: null,
};
