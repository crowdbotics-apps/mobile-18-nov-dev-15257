import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen014630Navigator from '../features/CopyOfBlankScreen014630/navigator';
import BlankScreen014627Navigator from '../features/BlankScreen014627/navigator';
import BlankScreen014617Navigator from '../features/BlankScreen014617/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen014630: { screen: CopyOfBlankScreen014630Navigator },
BlankScreen014627: { screen: BlankScreen014627Navigator },
BlankScreen014617: { screen: BlankScreen014617Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
