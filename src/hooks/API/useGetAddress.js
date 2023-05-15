import useAsync from '../useAsync';

import * as addressApi from '../../services/addressApi';

export default function useGetAddress() {
  const {
    loading: getAddressLoading,
    error: getAddressError,
    act: getAddress
  } = useAsync(() => addressApi.findAddress(), false);

  return {
    getAddressLoading,
    getAddressError,
    getAddress
  };
}