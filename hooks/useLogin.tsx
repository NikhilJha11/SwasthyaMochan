import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQuery } from '@tanstack/react-query';

const setCredentials = async () => {
  await AsyncStorage.setItem(
    'credentials',
    JSON.stringify({ email: 'suat', password: 'asdasdas' })
  );
};
export type LoginParams = {
  password: string;
};

export const useLogin = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const credentials = await AsyncStorage.getItem('credentials');

      return credentials;
    },
  });
};
