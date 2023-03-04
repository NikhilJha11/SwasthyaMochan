import { Image, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Avatar, Button, Menu } from 'react-native-paper';
import { darkGreen } from '../sharedStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import i18n from '../i18n';

type Props = {
  showAvatar?: boolean;
  showLanguage?: boolean;
};

const OneHealAppBar = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const insets = useSafeAreaInsets();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View
      style={[
        styles.welcomer,
        { paddingTop: insets.top * 1.2, marginTop: -insets.top },
      ]}
    >
      {props.showAvatar ? (
        <Avatar.Image source={require('../assets/images/avatar.jpg')} />
      ) : null}

      <View style={{ backgroundColor: darkGreen }}>
        <Image
          source={require('../assets/images/logo-reverted.png')}
          style={{ width: 150, height: 50 }}
          resizeMode='contain'
        />
      </View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button onPress={openMenu} textColor='#fff'>
            <Ionicons name='earth' /> EN
          </Button>
        }
      >
        <Menu.Item onPress={() => i18n.changeLanguage('en')} title='EN' />
        <Menu.Item onPress={() => i18n.changeLanguage('de')} title='DE' />
      </Menu>
    </View>
  );
};

export default OneHealAppBar;

const styles = StyleSheet.create({
  welcomer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: darkGreen,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.65,
    elevation: 5,
    zIndex: 3,
  },
});
