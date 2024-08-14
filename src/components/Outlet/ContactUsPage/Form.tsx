import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Formik, Form as FormikForm, Field } from 'formik';
import { TextField } from 'formik-mui';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import Button from '@/components/Outlet/Button';
import SnackBar from '@/components/SnackBar';
import baseUrl from '@/constants/baseUrl';
import * as generalClasses from '@/styles/general';
import { form } from './formData';
import * as classes from './styles';

interface Props {
  className?: string;
}

const INITIAL_FORM_VALUES = {
  name: '',
  subject: '',
  email: '',
  message: '',
};

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required(form.field1.validation),
  subject: yup.string().required(form.field2.validation),
  email: yup.string().email().required(form.field3.validation),
  message: yup.string().required(form.field4.validation),
});

export default function Form({ className }: Props) {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (values: typeof INITIAL_FORM_VALUES) => {
    axios
      .post(baseUrl, values)
      .then(() => {
        setIsSnackbarOpen(true);
      })
      .catch((error) => {
        throw new Error('Error submitting form:', error);
      });
    router.push('/submission-success');
  };

  return (
    <section className={className}>
      <div css={[classes.mainWrap, generalClasses.outletPadding]}>
        <Formik<typeof INITIAL_FORM_VALUES>
          initialValues={INITIAL_FORM_VALUES}
          onSubmit={handleSubmit}
          validationSchema={VALIDATION_SCHEMA}>
          {() => (
            <FormikForm>
              <Typography
                component='legend'
                css={generalClasses.semibold}
                sx={{ mb: '25px' }}
                textAlign='center'
                variant='h3'>
                {form.title}
              </Typography>
              <div css={classes.fields}>
                <div css={classes.fieldsGroup}>
                  <Field
                    color='secondary'
                    component={TextField}
                    css={classes.input}
                    {...form.field1}
                  />
                  <Field
                    color='secondary'
                    component={TextField}
                    css={classes.input}
                    {...form.field2}
                  />
                </div>
                <div css={classes.fieldsGroup}>
                  <Field
                    color='secondary'
                    component={TextField}
                    css={classes.input}
                    {...form.field3}
                  />
                  <Field
                    color='secondary'
                    component={TextField}
                    css={classes.input}
                    {...form.field4}
                  />
                </div>
              </div>
              <Button
                css={classes.button}
                text={form.button}
                size='large'
                type='submit'
              />
            </FormikForm>
          )}
        </Formik>
      </div>
      <SnackBar
        isOpen={isSnackbarOpen}
        onClose={() => setIsSnackbarOpen(false)}
        message={form.message}
      />
    </section>
  );
}

Form.defaultProps = {
  className: null,
};
