// Simple Types
const message: string = 'Hello World';
const isLoading: boolean = true;
const amount: number = 245;









































// Arrays
const userIds: number[] = [1, 2, 3, 4, 5, 6];
const ids: Array<number> = [1, 2, 3, 4, 5, 6];

















































// Functions

// Okay
const setSomeId: (id: number) => void = (id) => {
  // do something
}

// Better
type IDSetter = (id: number) => void;

const setId: IDSetter = (id) => {
  // do something
}

// Declare the type when used
type DynamicValueSetter<T = number> = (value: T) => void;

const stringValueSetter: DynamicValueSetter<string> = (someString) => {
  // do something
}
const numValueSetter: DynamicValueSetter<number> = (someNum) => {
  // do something
}
const boolValueSetter: DynamicValueSetter<boolean> = (someBool) => {
  // do something
}
const defaultValueSetter: DynamicValueSetter = (id) => {
  // do something
}































// Objects
interface Address {
  city: string;
  state: string;
  street: string;
  zipcode: string;
}
interface User {
  address?: Address;
  age: number;
  id: number;
  name: string;
}

const user2: User = {
  age: 34,
  id: 2,
  name: 'Austin',
};

type FontColor = 'primary' | 'secondary' | 'error';

const fontColors: {
  [key in FontColor]: string;
} = {
  error: '#ff0000',
  primary: '#231323',
  secondary: '#6b29a3',
}

type SetUser = (user: User) => void;

const setUser: SetUser = (user) => {
  // do something with the user object
}













































// Enums
enum Responses {
  No,
  Yes,
  Maybe,
}

console.log('Response[0] =', Responses[0]) // No
console.log('Response.No =', Responses.No) // 0

enum KeyCodes {
  Enter = 13,
  Tab = 9,
  Space = 32,
  Shift = 16,
  Escape = 27,
}

console.log('KeyCodes[13] =', KeyCodes[13]); // Enter
console.log('KeyCodes.Enter =', KeyCodes.Enter); // 13


























































// Redux Actions
type ActionType = 'GET_USER' | 'SET_USER';
interface State { }
interface ActionPayload { }
interface Action {
  payload: ActionPayload;
  type: ActionType;
}
type Reducer = (state: State, action: Action) => State;

const actions: {
  [key in ActionType]: Reducer;
} = {
  GET_USER: (state, action) => ({ ...state }),
  SET_USER: (state, action) => ({ ...state }),
}
