import React, { ReactElement, useState } from 'react';
import { SafeAreaView } from 'react-native';

import {
  ContainerSession,
  TimeInfo,
  IsOpenNow,
  OpenHours,
  Divider,
  Events,
  ClockIcon,
} from './styles';

export function TimeSession({ openTime, closeTime }): ReactElement {
  const date = new Date();
  const hours = date.getHours();

  const [isOpen, setIsOpen] = useState(true);

  if (hours <= openTime && hours >= closeTime) {
    setIsOpen(true);
  }

  return (
    <SafeAreaView>
      <ContainerSession>
        <ClockIcon isOpen={isOpen} name="clock" />
        <TimeInfo>
          <IsOpenNow isOpen={isOpen}>
            {isOpen ? 'Aberto Agora!' : 'Fechado Agora!'}
          </IsOpenNow>
          <OpenHours isOpen={isOpen}>
            {isOpen
              ? `Aberto das ${openTime}:00 - ${closeTime}:00`
              : 'Ver horários'}
          </OpenHours>
        </TimeInfo>
        <Divider />
        <Events>Eventos</Events>
      </ContainerSession>
    </SafeAreaView>
  );
}
