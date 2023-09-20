import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: async () => {
      const response = await axios.get(
        'https://lachs.informatik.tu-chemnitz.de/planspiel/v1/locations'
      );
      const res2 = await response.data;

      return res2;
    },
  });
};
