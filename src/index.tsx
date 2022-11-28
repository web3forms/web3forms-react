const useWeb3forms = <T extends {}>({
  access_key,
  settings = {},
  onSuccess,
  onError,
}: {
  access_key: string;
  settings?: any;
  onSuccess: (successMessage: string, data: Response<T>) => void;
  onError: (errorMessage: string, data: Response<T>) => void;
}) => {
  const submit = async (formData: T) => {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key,
        ...settings,
        ...formData,
      }),
    });
    const data: Response<T> = await response.json();
    if (data.success === true) {
      onSuccess(data.message, data);
    } else {
      onError(data.message, data);
    }
  };
  return {
    submit,
  };
};

export default useWeb3forms;

interface Response<T> {
  success: boolean;
  message: string;
  data: T;
}
