import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useAuth = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const credentials = await AsyncStorage.getItem('credentials');

      console.log('auth are ', credentials);

      return credentials;
    },
    // onSuccess: () => queryClient.invalidateQueries(['user']),
  });
};
