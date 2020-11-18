import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen114652Navigator from '../features/BlankScreen114652/navigator';
import BlankScreen214650Navigator from '../features/BlankScreen214650/navigator';
import CopyOfBlankScreen014644Navigator from '../features/CopyOfBlankScreen014644/navigator';
import BlankScreen114642Navigator from '../features/BlankScreen114642/navigator';
import BlankScreen014627Navigator from '../features/BlankScreen014627/navigator';
import BlankScreen014617Navigator from '../features/BlankScreen014617/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen114652: { screen: BlankScreen114652Navigator },
BlankScreen214650: { screen: BlankScreen214650Navigator },
CopyOfBlankScreen014644: { screen: CopyOfBlankScreen014644Navigator },
BlankScreen114642: { screen: BlankScreen114642Navigator },
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
