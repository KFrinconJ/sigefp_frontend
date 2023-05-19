export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

// Interfaces para los Inputs

interface BaseInputProps {
  id: string;
  label: string;
  value: string;
  name: string;
  htmlFor: string;
  onChange: (value: string) => void;
}

//Input Type Select

export interface SelectFieldProps extends BaseInputProps {
  apiUrl: string;
}

export interface Option {
  id: string;
  title: string;
}
