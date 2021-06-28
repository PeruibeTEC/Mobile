import React from 'react';
import { ScrollView, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { RestaurantCard } from '../RestaurantCard';

import { Container, SessionHeader, SessionName, SeeAllItems } from './styles';

interface SessionProps {
  sessionName: string;
}

const Session: React.FC<SessionProps> = ({ sessionName }) => {
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
          <SeeAllItems>Ver tudo</SeeAllItems>
          <Icon name="chevron-right" size={16} color="#929fb1" />
        </View>
      </SessionHeader>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <RestaurantCard
          restaurantName="Pizza Hut"
          imageUrl="https://1.bp.blogspot.com/-mhR8kkBYld0/X4fDBqsAtJI/AAAAAAAB1AU/IkaOj4MUb8MiQiCAiD7sRsY_QukQs4FbwCLcBGAsYHQ/s16000/pizza%2Blogo%2B1.jpg"
        />
        <RestaurantCard
          restaurantName="Um nome qualquer grande"
          imageUrl="https://1.bp.blogspot.com/-mhR8kkBYld0/X4fDBqsAtJI/AAAAAAAB1AU/IkaOj4MUb8MiQiCAiD7sRsY_QukQs4FbwCLcBGAsYHQ/s16000/pizza%2Blogo%2B1.jpg"
        />
        <RestaurantCard
          restaurantName="Pizza Hut"
          imageUrl="https://1.bp.blogspot.com/-mhR8kkBYld0/X4fDBqsAtJI/AAAAAAAB1AU/IkaOj4MUb8MiQiCAiD7sRsY_QukQs4FbwCLcBGAsYHQ/s16000/pizza%2Blogo%2B1.jpg"
        />
        <RestaurantCard
          restaurantName="Pizza Hut"
          imageUrl="https://1.bp.blogspot.com/-mhR8kkBYld0/X4fDBqsAtJI/AAAAAAAB1AU/IkaOj4MUb8MiQiCAiD7sRsY_QukQs4FbwCLcBGAsYHQ/s16000/pizza%2Blogo%2B1.jpg"
        />
        <RestaurantCard
          restaurantName="Pizza Hut"
          imageUrl="https://1.bp.blogspot.com/-mhR8kkBYld0/X4fDBqsAtJI/AAAAAAAB1AU/IkaOj4MUb8MiQiCAiD7sRsY_QukQs4FbwCLcBGAsYHQ/s16000/pizza%2Blogo%2B1.jpg"
        />
      </ScrollView>
    </Container>
  );
};

export { Session };
