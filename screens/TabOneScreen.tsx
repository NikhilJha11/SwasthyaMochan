import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {
  ActivityIndicator,
  Avatar,
  Button,
  Dialog,
  FAB,
  Portal,
  RadioButton,
  Searchbar,
  Text,
  TextInput,
} from 'react-native-paper';
import CTABig from '../components/CTABig';
import DepartmentChips from '../components/DepartmentChips';
import Doctor from '../components/Doctor';
import LocationFilter from '../components/LocationFilter';
import NotFound from '../components/NotFound';
import OneHealAppBar from '../components/OneHealAppBar';

import OneHealSafeArea from '../components/OneHealSafeArea';
import { CHIPS, DOCTORS, LOCATIONS } from '../helpers/statics';
import { useDoctors } from '../hooks/useDoctors';
import { useLocations } from '../hooks/useLocations';
import { darkGreen, darkGreen100 } from '../sharedStyles';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [chips, setChips] = useState(CHIPS);
  const [location, setLocation] = useState(0);
  const [doctors, setDoctors] = useState<
    | {
        id: number;
        name: string;
        department: string;
        location: string;
        image: any;
      }[]
    | []
  >();
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const { data: dataLocations, isLoading: isLoadingLocations } = useLocations();
  const { data: dataDoctors, isLoading: isLoadingDoctors } = useDoctors({
    locationId: location,
    enabled: Boolean(location),
  });
  let chosenLocation: string | undefined;
  let chosenLocationName: string | undefined;
  if (location) {
    chosenLocation = dataLocations.find(
      (el: { locationId: number }) => el.locationId === location
    ).city;
    chosenLocationName = dataLocations.find(
      (el: { locationId: number }) => el.locationId === location
    ).locationName;
  }

  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    setLoading(true);

    new Promise(() =>
      setTimeout(() => {
        setLoading(false);
        setDoctors(DOCTORS);
      }, 2000)
    );
  }, []);

  const filterDoctors = () => {
    let chosenChip = chips.find((chip) => chip.choosen);
    let filteredDoctors = DOCTORS;

    if (doctors && chosenChip && !value) {
      filteredDoctors = DOCTORS.filter(
        (doctor) => doctor.department === chosenChip?.name
      );
      setDoctors(filteredDoctors);
    } else if (doctors && value && !chosenChip) {
      filteredDoctors = DOCTORS.filter((doctor) => doctor.location === value);
      setDoctors(filteredDoctors);
    } else if (doctors && value && chosenChip) {
      filteredDoctors = DOCTORS.filter(
        (doctor) => doctor.department === chosenChip?.name
      );
      filteredDoctors = filteredDoctors.filter(
        (doctor) => doctor.location === value
      );
      setDoctors(filteredDoctors);
    } else if (filteredDoctors.length === 0) {
      setDoctors(undefined);
    } else {
      setDoctors(DOCTORS);
    }
  };

  useEffect(() => {
    filterDoctors();
  }, [chips, value]);

  return (
    <OneHealSafeArea statusBar='light'>
      <OneHealAppBar />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <LocationFilter
              locations={dataLocations}
              setLocation={setLocation}
              location={location}
              visible={visible}
              setVisible={setVisible}
            />
            {!location ? (
              <Text variant='bodyLarge' style={{ fontStyle: 'italic' }}>
                <MaterialCommunityIcons
                  name='information'
                  size={24}
                  color={darkGreen}
                />{' '}
                Please choose a location to see doctors.
              </Text>
            ) : null}
            {/* <DepartmentChips chips={chips} setChips={setChips} /> */}

            <View style={styles.doctorContainer}>
              {!location ? null : isLoadingDoctors ? (
                <ActivityIndicator animating color={darkGreen} size='large' />
              ) : !dataDoctors ? (
                <Text>No doctors found</Text>
              ) : dataDoctors.length === 0 ? (
                <NotFound />
              ) : (
                dataDoctors.map((doctor) => {
                  return (
                    <Doctor
                      specialization={doctor.specialization}
                      name={doctor.name}
                      key={doctor.doctorId}
                      locationId={doctor.locationId}
                      doctorId={doctor.doctorId}
                      chosenLocation={chosenLocation}
                      chosenLocationName={chosenLocationName}
                    />
                  );
                })
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      {value ? (
        <FAB
          icon='delete'
          style={styles.fab}
          onPress={() => setValue('')}
          label='Reset Filters'
          color={'#fff'}
        />
      ) : null}
    </OneHealSafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  topSection: {
    marginTop: 20,
  },
  doctorContainer: {
    marginTop: 20,
  },
  search: {
    backgroundColor: darkGreen100,
    marginVertical: 20,
  },
  or: { textAlign: 'center', marginBottom: 20 },
  fab: {
    position: 'absolute',
    margin: 16,
    right: Dimensions.get('window').width / 4,
    bottom: 0,
    backgroundColor: darkGreen,
  },
});
