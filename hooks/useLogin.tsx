import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const setCredentials = async () => {
  await AsyncStorage.setItem(
    'credentials',
    JSON.stringify({ email: 'suat', password: 'asdasdas' })
  );
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['user'],
    mutationFn: async () => {
      await AsyncStorage.setItem(
        'credentials',
        JSON.stringify({ email: 'suat', password: 'asdasdas' })
      );

      const credentials = await AsyncStorage.getItem('credentials');
      console.log('credentials are ', credentials);

      return credentials;
    },
    onSuccess: () => queryClient.invalidateQueries(['user']),
  });
};
