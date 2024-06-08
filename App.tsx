/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import rudderClient from '@rudderstack/rudder-sdk-react-native';
import clevertap from "@rudderstack/rudder-integration-clevertap-react-native";
const CleverTap = require('clevertap-react-native');
const config = {
  dataPlaneUrl : "DataPlane", 
  logLevel: 3,
  trackAppLifecycleEvents: true,
  recordScreenViews:true,
  withFactories: [clevertap]
};
rudderClient.setup("Key", config);

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  function onLogin() {
    
    // var props = {
    //   Identity : '021288'
  
    // };
    // console.log(JSON.stringify(props));
  
    // CleverTap.onUserLogin(props);
    rudderClient.identify("021288",{
      name: "Name Surname",
      email: "email@clevertap.com",
      phone: "+919869357572",
    },{})
  
  }
  
  function submitAction(){
    rudderClient.track("RuuderStack Action", {
      Clicked_Rush_delivery_Button: true,
      total_value: 2000,
      revenue: 2000,
    });
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Login">
          <Button
            title="Submit Profile"
            color="green"
            onPress={() => {
              onLogin()
              
            }}></Button>
          </Section>
          <Section title="Action">
          <Button
            title="Submit Action"
            color="blue"
            onPress={() => {
              submitAction()
              
            }}></Button>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
