import { useState } from 'react';

export enum LOGIN_STATE_ENUM {
  LOGIN = 1,
  REGISTER,
  RESET_PASSWORD,
}

export type FormPageProps = {
  switchPage: (page: LOGIN_STATE_ENUM) => void;
};

const useLogin = () => {
  const [loginState, setLoginState] = useState(LOGIN_STATE_ENUM.LOGIN);
  const changeState = (state: LOGIN_STATE_ENUM) => {
    setLoginState(state);
  };

  return {
    loginState,
    changeState,
  };
};

export default useLogin;
