import React from 'react';
import { FlatList, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { RestaurantCard } from '../RestaurantCard';

import { Container, SessionHeader, SessionName, SeeAllItems } from './styles';

interface SessionProps {
  sessionName: string;
}

const Session: React.FC<SessionProps> = ({ sessionName }) => {
  const navigation = useNavigation();
  function handleNavigateToDetailRestaurant() {
    navigation.navigate('DetailRestaurant');
  }

  const fakeData = [
    {
      key: 1,
      title: 'Pizza Hut',
      image:
        'https://1.bp.blogspot.com/-mhR8kkBYld0/X4fDBqsAtJI/AAAAAAAB1AU/IkaOj4MUb8MiQiCAiD7sRsY_QukQs4FbwCLcBGAsYHQ/s16000/pizza%2Blogo%2B1.jpg',
    },
    {
      key: 2,
      title: 'Pizza Hut com nome muito grandeee',
      image:
        'https://1.bp.blogspot.com/-mhR8kkBYld0/X4fDBqsAtJI/AAAAAAAB1AU/IkaOj4MUb8MiQiCAiD7sRsY_QukQs4FbwCLcBGAsYHQ/s16000/pizza%2Blogo%2B1.jpg',
    },
    {
      key: 3,
      title: 'Pizza Hut',
      image:
        'https://1.bp.blogspot.com/-mhR8kkBYld0/X4fDBqsAtJI/AAAAAAAB1AU/IkaOj4MUb8MiQiCAiD7sRsY_QukQs4FbwCLcBGAsYHQ/s16000/pizza%2Blogo%2B1.jpg',
    },
    {
      key: 4,
      title: 'Pizza Hut',
      image:
        'https://1.bp.blogspot.com/-mhR8kkBYld0/X4fDBqsAtJI/AAAAAAAB1AU/IkaOj4MUb8MiQiCAiD7sRsY_QukQs4FbwCLcBGAsYHQ/s16000/pizza%2Blogo%2B1.jpg',
    },
  ];
  return (
    <Container>
      <SessionHeader>
        <SessionName>{sessionName}</SessionName>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
          }}
        >
          <SeeAllItems>Ver todas Pizzarias</SeeAllItems>
          <Icon name="chevron-right" size={16} color="#929fb1" />
        </View>
      </SessionHeader>

      <FlatList
        data={fakeData}
        keyExtractor={item => String(item.key)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <RestaurantCard
            onPress={handleNavigateToDetailRestaurant}
            restaurantName={item.title}
            imageUrl={item.image}
          />
        )}
      />
    </Container>
  );
};

export { Session };
