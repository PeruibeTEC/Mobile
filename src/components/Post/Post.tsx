import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Feather from '@expo/vector-icons/FontAwesome5';

import {
  Container,
  Name,
  TimeToPost,
  ProfilePhoto,
  ContentContainer,
  Legend,
  PostPhoto,
  IconsContainer,
} from './styles';

interface HeaderProps {
  name: string;
  profile_image: string;
  hours: string;
  legend?: string;
  image?: string;
  comment: string;
  likes: string;
}

export function Post({
  name,
  profile_image,
  hours,
  legend,
  image,
  comment,
  likes,
}: HeaderProps) {
  return (
    <>
      <Container>
        <View style={{ width: '20%' }}>
          <ProfilePhoto source={{ uri: `${profile_image}` }} />
        </View>
        <ContentContainer>
          <Name>{name} </Name>
          <TimeToPost>• {hours}h</TimeToPost>
          {legend && <Legend>{legend}</Legend>}
          {image && <PostPhoto source={{ uri: `${image}` }} />}
          <IconsContainer>
            <TouchableOpacity>
              <Feather
                iconStyle={{ padding: 10 }}
                name="comment"
                color={'#404B5A'}
                size={15}
              >
                ⠀{comment}
              </Feather>
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="heart" color={'#404B5A'} size={15}>
                ⠀{likes}
              </Feather>
            </TouchableOpacity>
          </IconsContainer>
        </ContentContainer>
      </Container>
    </>
  );
}
