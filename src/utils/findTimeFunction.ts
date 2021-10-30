/* eslint-disable no-restricted-syntax */
/* eslint-disable no-loop-func */
import { addMinutes, isBefore } from 'date-fns';

interface event {
  start: {
    dateTime: Date;
  };
  end: {
    dateTime: Date;
  };
  description: string;
}

interface requisitionResponse {
  items: [event];
}

interface user {
  email: string;
  googleCalendar: requisitionResponse;
}

interface algorithmInput {
  users: user[];
  minTime: Date;
  maxTime: Date;
  eventName: string;
  duration: number;
  eventLvl: number;
}

interface algorithmReturnType {
  time: Date;
  lvlSum: number;
}

// usefull functions ------------------------------------------------------------

const getEventLvl = (eventElement: event | null): number => {
  if (eventElement === null) {
    return 0;
  }
  const eventDescription = eventElement.description;
  const descriptionSplited = eventDescription.split('eventLvl: ');
  if (descriptionSplited.length > 1) {
    const lvlAsChar = descriptionSplited[1].charAt(0);
    return Number(lvlAsChar);
  }
  return 1;
};

const getEventAtATime = (time: Date, userElement: user): event | null => {
  const userCalendar = userElement.googleCalendar;
  const events = userCalendar.items;
  for (const eventElement of events) {
    if (isBefore(eventElement.start.dateTime, time) && isBefore(time, eventElement.end.dateTime)) {
      return eventElement;
    }
  }
  return null;
};

export { };
