import axios from "axios";
import { useMutation, useQuery } from "react-query";


export const useAddAppointment = async () => {
    return useMutation({
        mutationKey: ["addApp"],
        mutationFn: async () => {
        const res = axios.post(
          "https://lachs.informatik.tu-chemnitz.de/planspiel/v1/addappointment", {appointmentId:1,patientId:1,isPreliminaryCheckup:true}
        );
        return (await res).data;
      },
    });
  }