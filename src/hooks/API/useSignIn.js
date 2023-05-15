import useAsync from '../useAsync';

import * as authApi from '../../services/authApi';

export default function useSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn
  } = useAsync(({ email, password }) => authApi.signIn({ email, password }), false);

  return {
    signInLoading,
    signInError,
    signIn
  };
}