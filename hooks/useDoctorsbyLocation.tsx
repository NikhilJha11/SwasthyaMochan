import { useLocations } from '../hooks/useLocations';
import { useDoctors } from '../hooks/useDoctors';


export const useDoctorsByLocation = (locationId) => {
  const { data: doctors, isLoading: isLoadingDoctors } = useDoctors({
    locationId: locationId,
    enabled: Boolean(locationId),
  });

  return { doctors, isLoadingDoctors };
};