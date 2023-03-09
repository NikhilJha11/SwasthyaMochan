import { useDoctorsByLocation } from "./useDoctorsbyLocation";


export function getDoctorsByLocation(locations) {
  const doctorsByLocation = [];

  locations?.forEach((location) => {
    try {
      const { doctors } = useDoctorsByLocation(location.locationId);
      if (doctors) {
        doctorsByLocation.push({
          locationId: location.locationId,
          doctors: doctors
        });
      }
    } catch (error) {
      console.error(`Error fetching doctors for location ${location.locationId}:`, error);
    }
  });

  return doctorsByLocation;
}