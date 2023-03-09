import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const usePatientsAppointments = ({
    patientid = 1,
    enabled = false
  }: {
    patientid?: number,
    enabled:boolean
  }) =>{
    //console.log(`https://lachs.informatik.tu-chemnitz.de/planspiel/v1/patients/${patientid}/appointments`) ;
  return useQuery({
    queryKey: ['patientsAppointments'],
    queryFn: async () => {
      const response = await axios.get(
        `https://lachs.informatik.tu-chemnitz.de/planspiel/v1/patients/${patientid}/appointments`
      );
      const res2 = await response.data;
      //console.log(res2)

      return res2;
    },
    enabled
  },    );
};

export const usePatientsLabreports = (patientid : number) => {
    const url = 'https://lachs.informatik.tu-chemnitz.de/planspiel/v1/patients/{patientid}/labreports';
    const apiUrl = url.replace('{patientid}', patientid.toString());
  return useQuery({
    queryKey: ['patientsLabreports'],
    queryFn: async () => {
      const response = await axios.get(
        apiUrl
      );
      const res2 = await response.data;

      return res2;
    },
  });
};



export const usePatientsprescriptions = (patientid : number) => {
    const url = 'https://lachs.informatik.tu-chemnitz.de/planspiel/v1/patients/{patientid}/prescriptions';
    const apiUrl = url.replace('{patientid}', patientid.toString());
  return useQuery({
    queryKey: ['patientsprescriptions'],
    queryFn: async () => {
      const response = await axios.get(
        apiUrl
      );
      const res2 = await response.data;

      return res2;
    },
  });
};
