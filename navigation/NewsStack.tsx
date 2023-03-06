import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsScreen from '../screens/NewsScreen';
import { NewsStackParamList } from '../types';

const Stack = createNativeStackNavigator<NewsStackParamList>();

export function NewsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='NewsScreen' component={NewsScreen} />
    </Stack.Navigator>
  );
}
