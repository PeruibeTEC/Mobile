import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Feather from '@expo/vector-icons/FontAwesome5';

import {
  Container,
  Name, 
  TimeToPost, 
  ProfilePhoto, 
  ContentContainer,
  Legend,
  PostPhoto,
  IconsContainer
} from './styles';

export function Post(){
  return (
    <>
      <Container>
        <View style={{width: '20%'}}>
          <ProfilePhoto source={{ uri: 'https://avatars.githubusercontent.com/u/51277667?v=4' }} />
        </View>
        <ContentContainer>
          <Name>Pedro Henrique  </Name>
          <TimeToPost>•  10h</TimeToPost>
          <Legend>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem, obcaecati quae facilis enim iusto nam laboriosam itaque dolorum eveniet quibusdam. Possimus sed alias nisi hic accusantium ullam velit ab!
          </Legend>
          <PostPhoto source={{ uri: 'https://cdn4.ecycle.com.br/cache/images/2021-04/50-650-o-que-e-paisagem.jpg' }} />
          <IconsContainer>
            <TouchableOpacity>
              <Feather iconStyle={{padding: 10}} name="comment" color={"#404B5A"} size={15}>
              ⠀27
              </Feather>
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="heart" color={"#404B5A"} size={15}>
              ⠀312
              </Feather>
            </TouchableOpacity>
          </IconsContainer>
        </ContentContainer>
      </Container>
    </>
  );
}
