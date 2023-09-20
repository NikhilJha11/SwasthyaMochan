import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { darkGreen } from '../sharedStyles';
import { RootTabParamList, RootTabScreenProps } from '../types';
import { ChatStack } from './ChatStack';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#34bccc',
          height: 90,
        },
        tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
      }}
      initialRouteName='TabTwo'
    >
      <BottomTab.Screen
        name='TabOne'
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Appointment',
          tabBarIcon: ({ color }) => (
            <Feather name='calendar' size={24} color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name='info-circle'
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />

      <BottomTab.Screen
        name='TabTwo'
        component={TabTwoScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather name='home' size={24} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name='ChatStack'
        component={ChatStack}
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='chat-bubble-outline' size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='TabThree'
        component={TabThreeScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Feather name='user' size={24} color={color} />
          ),
          tabBarBadge: 1,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
