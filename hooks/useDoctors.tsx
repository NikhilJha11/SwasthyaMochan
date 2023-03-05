import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type Doctor = {
  doctorId: number;
  name: string;
  specialization: string;
  locationId: number;
};

export const useDoctors = ({
  locationId = 1,
  enabled = false,
}: {
  locationId?: number;
  enabled?: boolean;
}) => {
  return useQuery({
    queryKey: ['doctors', locationId],
    queryFn: async () => {
      const response = await axios.get(
        `https://lachs.informatik.tu-chemnitz.de/planspiel/v1/doctors?locationId=${locationId}`
      );
      const res2 = (await response.data) as Doctor[];

      return res2;
    },
    enabled,
  });
};
