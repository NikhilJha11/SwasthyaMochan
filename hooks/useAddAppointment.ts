import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export type AddAppointmentParams = {
  appointmentId: number;
  patientId: number;
  isPreliminaryCheckup: boolean;
};

export const useAddAppointment = async () => {
  return useMutation({
    mutationKey: ['addApp'],
    mutationFn: async (params: AddAppointmentParams) => {
      return axios.post(
        'https://lachs.informatik.tu-chemnitz.de/planspiel/v1/addappointment',
        params
      );
    },
  });
};
