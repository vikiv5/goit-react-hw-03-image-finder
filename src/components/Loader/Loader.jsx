import { Audio } from 'react-loader-spinner'


import { Spinner } from './Loader.styled';

export const Loader = ()=> {
  return (
    <Spinner>
      <Audio height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  />
    </Spinner>
  );
}
