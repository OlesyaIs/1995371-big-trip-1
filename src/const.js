const TIME_FORMAT = 'HH:mm';
const SHORT_DATE_FORMAT = 'MMM DD';
const FULL_DATE_FORMAT = 'DD/MM/YY HH:mm';
const DAY_MONTH_FORMAT = 'DD MMM';
const DAY_ONLY_FORMAT = 'DD';
const FLATPICKR_DATE_FORMAT = 'd/m/y H:i';

const ButtonFavoriteClassName = {
  BASE: 'event__favorite-btn',
  ACTIVE: 'event__favorite-btn--active',
};

const EditValidatorSettingClassName = {
  ERROR_TEXT_PARENT: 'event__field-group',
  ERROR_TEXT: 'event__validation-error'
};

const EditPointInputId = {
  DESTINATION: 'event-destination-1',
  PRICE: 'event-price-1',
  STARTTIME: 'event-start-time-1',
  ENDTIME: 'event-end-time-1'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const EmptyListMessage = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.PAST]: 'There are no past events now',
};

const TypePack = {
  TAXI: {
    type: 'taxi',
    price: 20,
  },
  BUS: {
    type: 'bus',
    price: 10,
  },
  TRAIN: {
    type: 'train',
    price: 10,
  },
  SHIP: {
    type: 'ship',
    price: 10,
  },
  DRIVE: {
    type: 'drive',
    price: 20,
  },
  FLIGHT: {
    type: 'flight',
    price: 160,
  },
  CHECK_IN: {
    type: 'check-in',
    price: 600,
  },
  SIGHTSEEING: {
    type: 'sightseeing',
    price: 180,
  },
  RESTAURANT: {
    type: 'restaurant',
    price: 10,
  },
};

const SortType = {
  DAY: {
    type: 'day',
    title: 'Day',
    isDefault: true,
    isDisabled: false,
  },
  EVENT: {
    type: 'event',
    title: 'Event',
    isDefault: false,
    isDisabled: true,
  },
  TIME: {
    type: 'time',
    title: 'Time',
    isDefault: false,
    isDisabled: false,
  },
  PRICE: {
    type: 'price',
    title: 'Price',
    isDefault: false,
    isDisabled: false,
  },
  OFFER: {
    type: 'offer',
    title: 'Offers',
    isDefault: false,
    isDisabled: true,
  }
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const PointEditMode = {
  ADD: 'ADD',
  EDIT: 'EDIT'
};

const ResetEditPointMode = {
  RERENDER: 'RERENDER',
  CLOSE: 'CLOSE'
};

const ValidateErrorMessage = {
  REQUIRE_DATE: 'Необходимо заполнить дату',
  INKNOWN_DESTINATION: 'Необходимо выбрать пункт из списка'
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  POINT: 'POINT',
  BOARD: 'BOARD',
  BOARD_WITH_INFO: 'BOARD_WITH_INFO',
  FILTERS_WITH_BOARD: 'FILTERS_WITH_BOARD',
  FULL: 'FULL',
  INIT: 'INIT'
};

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

const EndPoint = {
  BASE: 'https://20.objects.htmlacademy.pro/big-trip',
  POINTS: 'points',
  DESTINATIONS: 'destinations',
  OFFERS: 'offers'
};

const UiBlockerTime = {
  LOWERLIMIT: 350,
  UPPERLIMIT: 1000,
};

export {
  ButtonFavoriteClassName,
  EditValidatorSettingClassName,
  EditPointInputId,
  ValidateErrorMessage,
  FilterType,
  TypePack,
  SortType,
  EmptyListMessage,
  Mode,
  PointEditMode,
  ResetEditPointMode,
  TIME_FORMAT,
  SHORT_DATE_FORMAT,
  FULL_DATE_FORMAT,
  DAY_MONTH_FORMAT,
  DAY_ONLY_FORMAT,
  FLATPICKR_DATE_FORMAT,
  UserAction,
  UpdateType,
  Method,
  EndPoint,
  UiBlockerTime
};
