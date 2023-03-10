import { Feather } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import CTABig from '../components/CTABig';

import OneHealSafeArea from '../components/OneHealSafeArea';
import ProfileButton from '../components/ProfileButton';
import ProfileButtons from '../components/ProfileButtons';
import ProfileTop from '../components/ProfileTop';
import { View } from '../components/Themed';
import { darkGreen, darkGreen000 } from '../sharedStyles';
import { RootTabScreenProps } from '../types';

export default function TabThreeScreen({
  navigation,
}: RootTabScreenProps<'TabThree'>) {
  return (
    <OneHealSafeArea statusBar='dark'>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <ProfileTop />
          <ProfileButtons />
          <CTABig
            text='LOGOUT'
            icon='logout'
            onPress={() => console.log('hi')}
          />
        </ScrollView>
      </View>
    </OneHealSafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
});
