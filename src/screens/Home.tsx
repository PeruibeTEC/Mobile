import React from 'react';
import { ScrollView } from 'react-native';
import { Header } from '../components/Header/Header';
import { Post } from '../components/Post/Post';

import fonts from '../styles/fonts';

export function Home() {
  return (
    <ScrollView style={{ backgroundColor: 'white' }} stickyHeaderIndices={[0]}>
      <Header title="Home" />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
}
