import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

const UserProfile = ({onLogout}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Logout" onPress={onLogout} />
      </View>
      <Image
        source={{uri: 'https://placekitten.com/200/200'}}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Hello, Team 11!</Text>
      <Text style={styles.name}>You have ordered 11 items in past 3 days</Text>
      <Text style={styles.text}>Order Details: </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
  },
});

export default UserProfile;
