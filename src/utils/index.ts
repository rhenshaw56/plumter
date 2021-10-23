import {format} from 'date-fns';

export const wait = (time: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export const getDateTimeString = (timeStamp: number) => {
  const TIME_FORMAT = 'd MMM, HH:mm aaa';
  return format(new Date(timeStamp), TIME_FORMAT);
};
