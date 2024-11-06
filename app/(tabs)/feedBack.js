import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function feedBack() {
  const [selectedRating, setSelectedRating] = useState(null);
  const router = useRouter();

  //criando os emojis
  const ratings = [
    { label: 'Péssimo', icon: 'emoticon-sad', color: '#FF0000' },
    { label: 'Ruim', icon: 'emoticon-sad-outline', color: '#FF4500' },
    { label: 'Neutro', icon: 'emoticon-neutral-outline', color: '#FFD700' },
    { label: 'Bom', icon: 'emoticon-happy-outline', color: '#00FF00' },
    { label: 'Excelente', icon: 'emoticon-excited-outline', color: '#00FF7F' },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>
        O que você achou do Carnaval 2024?
      </Text>
      <View style={styles.ratingContainer}>
        {ratings.map((rating, index) => (
          <TouchableOpacity
            key={index}
            style={styles.ratingItem}
            onPress={() => setSelectedRating(rating.label)}
          >
            <MaterialCommunityIcons
              name={rating.icon}
              size={40}
              color={rating.color}
            />
            <Text style={styles.ratingLabel}>{rating.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedRating && (
        <Text style={styles.selectedText}>
          Você selecionou: {selectedRating}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B286D',
    justifyContent: 'center',
    paddingHorizontal: 32,
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
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  ratingItem: {
    alignItems: 'center',
  },
  ratingLabel: {
    color: 'white',
    fontSize: 14,
    marginTop: 8,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
