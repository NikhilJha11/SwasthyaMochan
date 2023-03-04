import { useQuery } from '@tanstack/react-query';

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: async () => {
      const response = await fetch(
        'https://lachs.informatik.tu-chemnitz.de/planspiel/v1/locations'
      );

      return response;
    },
  });
};
