import useAsync from '../useAsync';

import * as authApi from '../../services/authApi';

export default function useSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp
  } = useAsync((data) => authApi.signUp(data), false);

  return {
    signUpLoading,
    signUpError,
    signUp
  };
}