import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function layoutScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>Carnaval</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="pencil" size={40} color="white" />
          <Text style={styles.buttonText}>Modificar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="checkbox-marked-outline" size={40} color="white" />
          <Text style={styles.buttonText}>Coletar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="chart-pie" size={40} color="white" />
          <Text style={styles.buttonText}>Relatório</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B286D',
    paddingHorizontal: 32,
    paddingTop: 50,
  },
  backText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#37205A',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '30%',
  },
  buttonText: {
    color: 'white',
    marginTop: 8,
    fontSize: 16,
  },
});
