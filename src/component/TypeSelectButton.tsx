import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface SelectionButtonProps {
  SelectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const SelectionButton: React.FC<SelectionButtonProps> = ({ setSelectedCategory , SelectedCategory }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => setSelectedCategory('All')}>
        <LinearGradient colors={
        SelectedCategory === 'All'
          ? ['#00a2ff', '#3e04aa']
          : ['#2c2c2c', '#101113']
      }style={styles.button}>
          <Text style={styles.btnText}>All</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelectedCategory('Road')}>
        <LinearGradient colors={
        SelectedCategory === 'Road'
          ? ['#00a2ff', '#3e04aa']
          : ['#2c2c2c', '#101113']
      } style={styles.button}>
          <Image source={require('../assets/image/Road.png')} style={styles.btnImage} />
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelectedCategory('Mountain')}>
        <LinearGradient colors={
        SelectedCategory === 'Mountain'
          ? ['#00a2ff', '#3e04aa']
          : ['#2c2c2c', '#101113']
      } style={styles.button}>
          <Image source={require('../assets/image/Mountain.png')} style={styles.btnImage} />
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelectedCategory('Accessory')}>
        <LinearGradient colors={
        SelectedCategory === 'Accessory'
          ? ['#00a2ff', '#3e04aa']
          : ['#2c2c2c', '#101113']
      } style={styles.button}>
          <Image source={require('../assets/image/Accessory.png')} style={styles.btnImage} />
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelectedCategory('Electric')}>
        <LinearGradient colors={
        SelectedCategory === 'Electric'
          ? ['#00a2ff', '#3e04aa']
          : ['#2c2c2c', '#101113']
      } style={styles.button}>
          <Image source={require('../assets/image/Electric.png')} style={styles.btnImage} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default SelectionButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginStart: 10,
    marginTop: 40,
    transform: [{ rotate: '-8deg' }],
  },
  button: {
    transform: [{ rotate: '8deg' }],
    width: 60,
    height: 60,
    borderRadius: 10,
    opacity: 0.6,
    marginRight: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
  btnImage: {
    padding: 10,
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: 15,
  },
});

