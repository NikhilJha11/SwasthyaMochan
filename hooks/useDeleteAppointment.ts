import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteAppointment = async () => {
  return useMutation({
    mutationKey: ['delApp'],
    mutationFn: async () => {
      const res = axios.post(
        'https://lachs.informatik.tu-chemnitz.de/planspiel/v1/deleteappointment',
        { appointmentId: 1, patientId: 1, isPreliminaryCheckup: true }
      );
      return (await res).data;
    },
  });
};
