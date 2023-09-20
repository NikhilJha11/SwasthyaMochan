import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type News = {
  title: string;
  content: string;
};

export const useNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const response = await axios.get(
        `https://lachs.informatik.tu-chemnitz.de/planspiel/v1/news`
      );
      const res2 = (await response.data) as News[];

      return res2;
    },
  });
};
