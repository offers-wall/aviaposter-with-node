export interface FieldType {
  label: string;
  name: string;
  placeholder: string;
  validation: string;
}

export interface Form {
  title: string;
  field1: FieldType;
  field2: FieldType;
  field3: FieldType;
  field4: FieldType;
  message: string;
  button: string;
}

export const form: Form = {
  title: 'Have a question? Ask!',
  field1: {
    label: 'Name',
    name: 'name',
    placeholder: 'Enter Your Name',
    validation: 'Required',
  },
  field2: {
    label: 'Subject',
    name: 'subject',
    placeholder: 'Enter Subject',
    validation: 'Required',
  },
  field3: {
    label: 'Email Address',
    name: 'email',
    placeholder: 'Enter Your Email',
    validation: 'Required',
  },
  field4: {
    label: 'Message',
    name: 'message',
    placeholder: 'Enter Your Message',
    validation: 'Required',
  },
  message: 'Your answer was sent',
  button: 'Submit',
};
