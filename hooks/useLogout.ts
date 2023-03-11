import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLogout = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await AsyncStorage.removeItem('credentials');
      await AsyncStorage.removeItem('hasOnboarded');
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['user'] }),
  });
};
