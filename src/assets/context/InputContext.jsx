import { useReducer, createContext } from "react";
import {
  heightToImperial,
  heightToMetric,
  weightToImperial,
  weightToMetric,
  convertImperial,
} from "../utilities/imperial-coverter";
import PropTypes from "prop-types";

export const InputContext = createContext(null);

function reducer(state, { type, payload }) {
  const { value, unit } = payload;
  let newState = {};

  switch (type) {
    case "UPDATE": {
      switch (unit) {
        case "kg": {
          [newState.st, newState.lbs] = weightToImperial(value);
          break;
        }
        case "cm": {
          [newState.ft, newState.in] = heightToImperial(value);
          break;
        }
        case "ft":
          newState.cm = heightToMetric(value, state.in);
          break;

        case "in":
          newState.cm = heightToMetric(state.ft, value);
          break;

        case "st":
          newState.kg = weightToMetric(value, state.lbs);
          break;

        case "lbs":
          newState.kg = weightToMetric(state.st, value);
          break;

        default:
          throw new Error("Unknown unit.");
      }
      break;
    }
    case "CONVERT": {
      switch (unit) {
        case "in": {
          const [ft, inch] = convertImperial(value, unit);
          newState = { ft: +state.ft + ft, in: inch };
          break;
        }
        case "lbs": {
          const [st, lbs] = convertImperial(value, unit);
          newState = { st: +state.st + st, lbs: lbs };
          break;
        }
        default:
          return state;
      }
      break;
    }
    default:
      throw new Error("Unknown action type.");
  }
  return { ...state, [unit]: +value, ...newState };
}

export default function InputContextProvider({ children }) {
  return (
    <InputContext.Provider
      value={useReducer(reducer, {
        kg: "",
        cm: "",
        st: "",
        lbs: "",
        ft: "",
        in: "",
      })}
    >
      {children}
    </InputContext.Provider>
  );
}

InputContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
