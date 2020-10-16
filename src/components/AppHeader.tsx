import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { globalStyles } from '../assets/globals';

const AppHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Ionicons name="ios-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.logoWrap}>
        <Image style={styles.logoImg} source={require('../assets/logo.png')} />
      </View>
      <View>
        <Text style={globalStyles.defaultText}>Skip Here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 23,
  },
  logoWrap: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    margin: 2,
    height: '50px',
  },
  logoImg: {
    flex: 1,
    height: '45%',
    width: '45%',
  },
});

export default AppHeader;
