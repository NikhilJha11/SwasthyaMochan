import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';

export const useHasOnboarded = () => {
  return useQuery({
    queryKey: ['hasOnboarded'],
    queryFn: async () => {
      const credentials = await AsyncStorage.getItem('hasOnboarded');

      return credentials;
    },
  });
};
