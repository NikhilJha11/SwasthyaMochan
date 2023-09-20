import { Image, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Avatar, Button, Menu } from 'react-native-paper';
import { darkGreen } from '../sharedStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';

type Props = {
  showAvatar?: boolean;
  showLanguage?: boolean;
};

const OneHealAppBar = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

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
        <Avatar.Image source={require('../assets/images/eSanjeevani icon.png')} />
      ) : null}

      <View style={{ backgroundColor: darkGreen }}>
        <Image
          source={require('../assets/images/eSanjeevani icon.png')}
          style={{ width: 150, height: 50 }}
          resizeMode='contain'
        />
      </View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button onPress={openMenu} textColor='#285454'>
            <Ionicons name='earth' /> {t("language")}
          </Button>
        }
      >
        <Menu.Item onPress={() => i18n.changeLanguage('en')} title='EN' />
        <Menu.Item onPress={() => i18n.changeLanguage('de')} title='DE' />
        <Menu.Item onPress={() => i18n.changeLanguage('ar')} title='AR' />
        <Menu.Item onPress={() => i18n.changeLanguage('es')} title='ES' />
        <Menu.Item onPress={() => i18n.changeLanguage('ml')} title='ML' />
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
    backgroundColor: '#34bccc',
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
