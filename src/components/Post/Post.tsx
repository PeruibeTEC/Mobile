import React, { ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import {
  Container,
  Name,
  TimeToPost,
  ProfilePhoto,
  ContentContainer,
  Caption,
  PostPhoto,
  IconsContainer,
  HeadContainer,
} from './styles';

interface HeaderProps {
  name: string;
  profile_image: string;
  hours: string;
  caption?: string;
  image?: string;
  comment: string;
  likes: string;
}

function Head({ profile_image, name, hours }) {
  return (
    <>
      <ProfilePhoto source={{ uri: `${profile_image}` }} />
      <Name>{name} </Name>
      <TimeToPost>• {hours}h</TimeToPost>
    </>
  );
}

export function Post({
  name,
  profile_image,
  hours,
  caption,
  image,
  comment,
  likes,
}: HeaderProps): ReactElement {
  return (
    <>
      <Container>
        <HeadContainer>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Head hours={hours} name={name} profile_image={profile_image} />
            <View
              style={{
                justifyContent: 'space-between',
              }}
            >
              <Feather name="more-vertical" color="#6D808F" size={24} />
            </View>
          </View>
          {caption && <Caption>{caption}</Caption>}
        </HeadContainer>
        {image && <PostPhoto source={{ uri: `${image}` }} />}
        <ContentContainer>
          <IconsContainer>
            <TouchableOpacity activeOpacity={0.6}>
              <Feather name="heart" color="#6D808F" size={16}>
                ⠀{likes}
              </Feather>
            </TouchableOpacity>
            <TouchableOpacity style={{ left: 24 }} activeOpacity={0.6}>
              <Feather
                iconStyle={{ padding: 10 }}
                name="message-circle"
                color="#6D808F"
                size={16}
              >
                ⠀{comment}
              </Feather>
            </TouchableOpacity>
          </IconsContainer>
        </ContentContainer>
      </Container>
    </>
  );
}
