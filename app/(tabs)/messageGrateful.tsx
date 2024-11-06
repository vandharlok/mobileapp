import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function messageGrateful() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Obrigado por participar da pesquisa!
        {"\n"}
        Aguardamos você no próximo ano! 
      </Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginBottom: 24,
  }
});
