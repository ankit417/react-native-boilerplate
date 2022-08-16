import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import EnIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {useDispatch} from '@src/store';
import {useAuth} from '@src/auth';
import {EventsRoute} from '@src/screens/events';
import {logout} from '@src/screens/login/login.slice';

import {styles} from './drawer.style';

interface MenuItem {
  name: String;
  badge: boolean;
  icon: JSX.Element;
}

interface MenuList {
  menu: Array<MenuItem>;
}

const DRAWER_CONTENT = [
  {
    name: 'Events',
    badge: false,
    icon: <Fa5Icon name="clipboard-list" size={20} />,
  },
  {
    name: 'Status Board',
    badge: false,
    icon: <EnIcon name="bar-graph" size={20} />,
  },
  {
    name: 'Notice Board',
    badge: false,
    icon: <Fa5Icon name="comment-dots" size={20} />,
  },
  {
    name: 'TimeSheet',
    badge: false,
    icon: <MaterialIcon name="av-timer" size={20} />,
  },
  {
    name: 'Notifications',
    badge: true,
    icon: <FaIcon name="dot-circle-o" size={20} />,
  },
  {
    name: 'Tasks',
    badge: false,
    icon: <MaterialIcon name="list-alt" size={20} />,
  },
  {
    name: 'Search',
    badge: false,
    icon: <FaIcon name="search" size={20} />,
  },
  {
    name: 'Create Job',
    badge: false,
    icon: <EnIcon name="new-message" size={20} />,
  },
  {
    name: 'Health & Safety',
    badge: false,
    icon: <Fa5Icon name="briefcase-medical" size={20} />,
  },
];

const HELP_MENU = [
  {
    name: 'Settings',
    badge: false,
    icon: <MaterialIcon name="settings" size={20} />,
  },
  {
    name: 'Contact Us',
    badge: false,
    icon: <FaIcon name="life-bouy" size={20} />,
  },
];

const Drawer = createDrawerNavigator();
const DrawerRoute = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerComponent}
      screenOptions={{drawerType: 'slide', headerShown: false}}>
      <Drawer.Screen
        name="EventsTab"
        options={{title: 'Events'}}
        component={EventsRoute}
      />
    </Drawer.Navigator>
  );
};

const DrawerHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerIcon}>
        <Fa5Icon name="dog" size={40} color={'#FFF'} />
      </View>
      <Text style={styles.headerText}>Smart Plan</Text>
    </View>
  );
};

const DrawerHeaderDescription = () => {
  return (
    <View style={styles.headerDescriptionContainer}>
      <View style={styles.headerDescriptionLogo}>
        <View style={styles.logoWrapper}>
          <Text style={styles.logoText}>JF</Text>
        </View>
        <Text style={styles.logoDescriptionText}>JFDS</Text>
      </View>
      <View style={styles.headerDescriptionContent}>
        <Text style={styles.descriptionParagraph}>
          Here's how you are tracking with your free plan
        </Text>
        <Text style={styles.dayLeftText}>(1 day left)</Text>
        <Text style={styles.invoiceText}>0/3 Invoices</Text>
        <Text style={styles.jobText}>5/10 Jobs</Text>
      </View>
    </View>
  );
};

const HrLine = () => {
  return <View style={styles.hrline} />;
};

const DrawerContent = (props: MenuList) => {
  const dispatch = useDispatch();
  const auth = useAuth();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    auth.logOut();
  }, [dispatch, auth]);

  return (
    <>
      {props.menu.map((item: any, index: number) => {
        return (
          <View key={index} style={styles.menuItem}>
            <View style={styles.menuContent}>
              <View style={styles.menuLeft}>
                <View style={styles.menuIcon}>{item.icon}</View>
                <Text style={styles.menuText}>{item.name}</Text>
              </View>
              {item.badge && <Text style={styles.badgeText}>24</Text>}
            </View>
            <HrLine />
          </View>
        );
      })}
      <View style={styles.sectionDividerLabel}>
        <Text style={styles.sectionText}>Help</Text>
      </View>
      <HrLine />
      {HELP_MENU.map((item, index) => {
        return (
          <View key={index} style={styles.menuItem}>
            <View style={styles.menuContent}>
              <View style={styles.menuLeft}>
                <View style={styles.menuIcon}>{item.icon}</View>
                <Text style={styles.menuText}>{item.name}</Text>
              </View>
              {item.badge && <Text>24</Text>}
            </View>
            <HrLine />
          </View>
        );
      })}
      <View style={styles.sectionDividerLabel}>
        <Text style={styles.sectionText}>v2.2.6</Text>
      </View>
      <HrLine />
      <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
        <View style={styles.menuContent}>
          <View style={styles.menuLeft}>
            <View style={styles.menuIcon}>
              <MaterialIcon name="logout" size={20} />
            </View>
            <Text style={styles.menuText}>Log out</Text>
          </View>
        </View>
        <HrLine />
      </TouchableOpacity>
      <View style={styles.extraGapHeight} />
    </>
  );
};

// Mark - DrawerComponent
const DrawerComponent = () => {
  return (
    <View style={styles.container}>
      <DrawerHeader />
      <ScrollView>
        <DrawerHeaderDescription />
        <HrLine />
        <DrawerContent menu={DRAWER_CONTENT} />
      </ScrollView>
    </View>
  );
};

export {DrawerRoute};
