import React, {ReactNode, ReactElement} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

interface IIProps {
  data: any[];
  item: React.FC;
}

const style = {
  flex: 1,
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: '#ffffff',
};

export const HorizontalList = ({item, data}: IIProps): ReactElement | null => {
  if (data.length < 1) {
    return null;
  }
  const Component = item;
  return (
    <ScrollView
      style={{style}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {data.map((values, idx) => (
        <Component key={idx} {...values} />
      ))}
    </ScrollView>
  );
};

export const VerticalList = ({item, data}: IIProps): ReactElement | null => {
  const items = data.length;
  if (items < 1) {
    return null;
  }
  const Component = item;
  return (
    <View>
      {data.map((values, idx) => (
        <Component key={idx} {...values} divider={idx !== items - 1} />
      ))}
    </View>
  );
};
