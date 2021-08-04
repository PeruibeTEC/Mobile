import React, { ReactElement } from 'react';
import { ScrollView, LogBox } from 'react-native';

import { Header } from '../../components/Header/Header';
import { TitleImage } from '../../components/TitleImage';
import { Content } from '../../components/Content';
import { Items } from './components/Items';
import { Button } from '../../components/Button';
import { Time, Border, Warning, Container } from './styles';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

interface TheftItemsProps {
  time?: string;
}

export function TheftItems({ time }: TheftItemsProps): ReactElement {
  time = '2 horas atrás';
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Header onBackScreen title="Detalhes do Incidente" />
      <TitleImage
        title="Assalto a Mão Armada"
        image="https://static.lared.cl/wp-content/uploads/2019/09/05102425/20160927185301_740x3705509366827156214087-700x366.jpg"
      />
      {time && <Time>{time}</Time>}
      <Content
        title="Assalto no Ribamar"
        street="R.Eduardo Linardi"
        number="880"
        description="Eu estava andando com minha filha e com meu pai no bairro
         Ribamar,descendo a rua do postinho, quando dois homens brancos começaram
         a nos seguir,logo depois eles apontaram a arma para gente e levaram tudo
         de nós."
      />
      <Border />
      <Items />
      <Border />
      <Container>
        <Warning>Achou algum dos itens acima ?</Warning>
        {/* TODO: create a function to open cellphone */}
        <Button title="Entrar em Contato" onPress={() => {}} />
      </Container>
    </ScrollView>
  );
}
