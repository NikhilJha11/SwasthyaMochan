import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {
  AnimatedFAB,
  Avatar,
  Button,
  Card,
  Checkbox,
  Switch,
  Text,
} from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const LeftContent = (props) => <Avatar.Icon {...props} icon='folder' />;

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [date, setDate] = useState(new Date());

  console.log('date is , ', date);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={styles.separator}
          lightColor='#eee'
          darkColor='rgba(255,255,255,0.1)'
        />
        <EditScreenInfo path='/screens/TabOneScreen.tsx' />
        <Button
          icon='camera'
          mode='contained'
          onPress={() => console.log('Pressed')}
          loading
        >
          Press me
        </Button>
        <Checkbox status={'checked'} />
        <Switch value={true} onValueChange={() => console.log('hi0')} />
        <Card>
          <Card.Title
            title='Card Title'
            subtitle='Card Subtitle'
            left={LeftContent}
          />
          <Card.Content>
            <Text variant='titleLarge'>Card title</Text>
            <Text variant='bodyMedium'>Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});
