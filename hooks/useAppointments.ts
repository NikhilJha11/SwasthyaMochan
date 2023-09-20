import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type Appointment = {
  doctorId: number;
  locationId: number;
  timeSlotId: number;
  startDate: string;
};

export const useAppointments = ({
  doctorId = 1,
  enabled = false,
}: {
  doctorId?: number;
  enabled?: boolean;
}) => {
  return useQuery({
    queryKey: ['appointments', doctorId],
    queryFn: async () => {
      const response = await axios.get(
        `https://lachs.informatik.tu-chemnitz.de/planspiel/v1/appointments?doctorId=${doctorId}`
      );
      const res2 = (await response.data) as Appointment[];

      return res2;
    },
    enabled,
  });
};
