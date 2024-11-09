import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import EventCard from '../components/EventCard/EventCard';
import { getRandomEvents } from '../services/getEventsService';
import CustomButton from '../components/CustomButton/CustomButton';

const HomeScreen = () => {
  const handlePress = () => {
    console.log('Button Pressed!');
  };

  const categories = [
    { id: '1', name: 'Conciertos' },
    { id: '2', name: 'Exposiciones' },
    { id: '3', name: 'Deportes' },
    { id: '4', name: 'Teatro' },
    { id: '5', name: 'Tecnología' },
    { id: '6', name: 'Cultura' },
  ];

  const [events, setEvents] = useState([]);

  // Fetch random events when the screen loads
  useEffect(() => {
    fetchRandomEvents();
  }, []);

  // Function to fetch random events
  const fetchRandomEvents = () => {
    const fetchedEvents = getRandomEvents();
    setEvents(fetchedEvents);
  };


  return (
    <ImageBackground
      source={require('../assets/Focos.jpg')} 
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Eventos en tu ciudad</Text>
          <CustomButton title="Añadir evento" onPress={handlePress} />
        </View>

        {/* Categories */}
        <View style={styles.categories}>
          <Text style={styles.sectionTitle}>Categorías</Text>
          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.categoryItem}>
                <Text style={styles.categoryText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Featured Events */}
        <View style={styles.featuredEvents}>
          <Text style={styles.sectionTitle}>Eventos destacados</Text>
          <FlatList
            data={events}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <EventCard 
              title={item.title}
              date={item.date}
              image={item.image}
            />
            )}
          />
        </View>
       <CustomButton  title="Cargar nuevos eventos" onPress={fetchRandomEvents} />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the entire screen
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional overlay for better text contrast
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 10,
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Text color for better contrast
  },
  addButton: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categories: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginLeft: 10
  },
  categoryItem: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 16,
  },
  categoryText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  featuredEvents: {
    marginTop: 20,
  },
  fetchButton: {
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  fetchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
