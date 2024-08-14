import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import * as generalClasses from '@/styles/general';
import * as classes from './styles';
import { Review } from '../reviewsData';

export default function ReviewCard({ review, className }: { review: Review; className?: string }) {
  const { name, age, feedback, rating } = review;

  return (
    <div
      className={className}
      css={classes.slide}>
      <Typography
        component='h2'
        css={generalClasses.bold}
        sx={{ textTransform: 'uppercase' }}
        variant='h5'>
        {name}
      </Typography>
      <Typography
        component='h2'
        css={generalClasses.bold}
        sx={{ textTransform: 'uppercase' }}
        variant='body1'>
        {age}
      </Typography>
      <Typography
        component='p'
        textAlign='left'
        variant='body2'>
        {feedback}
      </Typography>
      <div css={classes.rating}>
        <Rating
          id={name}
          name='read-only'
          value={rating}
          readOnly
        />
      </div>
    </div>
  );
}

ReviewCard.defaultProps = {
  className: null,
};
