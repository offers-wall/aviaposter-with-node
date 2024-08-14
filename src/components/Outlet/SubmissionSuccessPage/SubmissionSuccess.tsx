import Typography from '@mui/material/Typography';
import Animation from '@/components/Outlet/Animation';
import { Routes } from '@/components/Layout/Footer/footerData';
// eslint-disable-next-line import/extensions
import animation from '@/lotties/animation.json';
import meta from '@/constants/meta';
import * as generalClasses from '@/styles/general';
import * as classes from './styles';
import { submissionSuccess } from './submissionSuccessData';

export default function SubmissionSuccess() {
  return (
    <div css={[classes.wrap, generalClasses.outletPadding]}>
      <Animation
        animationData={animation}
        path={Routes.Home_Page}
      />
      <Typography
        variant='h2'
        component='h2'
        css={generalClasses.bold}>
        {submissionSuccess.header}
      </Typography>
      <Typography
        variant='h5'
        component='p'>
        {submissionSuccess.thankYouText}
      </Typography>
      <Typography
        variant='h6'
        component='p'>
        Best regards, {meta.title} team!
      </Typography>
    </div>
  );
}
