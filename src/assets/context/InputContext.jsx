import { useReducer, createContext } from "react";
import {
  heightToImperial,
  heightToMetric,
  weightToImperial,
  weightToMetric,
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
          const IN_in_FT = 12;
          return {
            ...state,
            ft: +state.ft + Math.floor(value / IN_in_FT),
            in: value % IN_in_FT,
          };
        }
        case "lbs": {
          const LB_in_ST = 14;
          return {
            ...state,
            st: +state.st + Math.floor(value / LB_in_ST),
            lbs: value % LB_in_ST,
          };
        }
        default:
          return state;
      }
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
