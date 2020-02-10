import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { restaurants } from './restaurants'
import { users } from './users'
import { orders } from './orders'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    restaurants,
    users,
    orders
  });
