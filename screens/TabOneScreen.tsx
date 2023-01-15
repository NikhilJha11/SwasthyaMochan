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
import {
  darkGreen,
  darkGreen000,
  darkGreen050,
  darkGreen100,
} from '../sharedStyles';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [chips, setChips] = useState(CHIPS);
  const [locations, setLocations] = useState(LOCATIONS);
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

    console.log('chosenChip is ', chosenChip?.name);
    console.log('filtered is ', filteredDoctors);
  };
  console.log(value);

  useEffect(() => {
    filterDoctors();
  }, [chips, value]);

  console.log('doctors are ,', doctors);

  return (
    <OneHealSafeArea statusBar='light'>
      <OneHealAppBar />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Searchbar
              placeholder='Search...'
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={styles.search}
            />
            <Text style={styles.or} variant='bodyMedium'>
              OR
            </Text>

            <DepartmentChips chips={chips} setChips={setChips} />
            <LocationFilter
              locations={locations}
              setLocations={setLocations}
              setValue={setValue}
              value={value}
              visible={visible}
              setVisible={setVisible}
            />

            <View style={styles.doctorContainer}>
              {loading ? (
                <ActivityIndicator animating color={darkGreen} size='large' />
              ) : !doctors ? (
                <Text>No doctors found</Text>
              ) : doctors.length === 0 ? (
                <NotFound />
              ) : (
                doctors.map((doctor) => {
                  return (
                    <Doctor
                      department={doctor.department}
                      name={doctor.name}
                      image={doctor.image}
                      key={doctor.id}
                      location={doctor.location}
                      id={doctor.id}
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
    borderWidth: 1,
    borderColor: 'red',
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
