import { useState } from 'react';
import { usePayPalScriptReducer, PayPalButtons } from '@paypal/react-paypal-js';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Spinner from '@mui/material/CircularProgress';
import { Theme } from '@mui/material';
import SnackBar from '@/components/SnackBar';

function StyledDivider() {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <Divider sx={{ flex: 1, bgcolor: (theme: Theme) => theme.palette.text.secondary }} />
      <Box
        sx={{
          m: '20px 0px',
          p: '0 2%',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: '700',
        }}>
        or
      </Box>
      <Divider sx={{ flex: 1, bgcolor: (theme: Theme) => theme.palette.text.secondary }} />
    </Box>
  );
}

export default function PayPalCheckOut() {
  const [{ isPending }] = usePayPalScriptReducer();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);

  return isPending ? (
    <Box display='flex'>
      <Spinner />
    </Box>
  ) : (
    <Box
      sx={{
        width: '70%',
        m: '0 auto',
      }}>
      <PayPalButtons fundingSource='paypal' />
      <StyledDivider />
      <PayPalButtons fundingSource='card' />
      <SnackBar
        isOpen={isSnackbarOpen}
        onClose={() => setIsSnackbarOpen(false)}
        message='Thank you for payment!'
      />
    </Box>
  );
}
