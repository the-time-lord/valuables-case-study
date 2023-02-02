import { createContext, useContext } from 'react';
import { valuablesList } from '../navigation/valuablesList';
import { Valuable } from '../types/Valuable';

export type ValuablesContent = {
  valuables: Valuable[];
  setValuables: (context: Valuable[]) => void;
};

export const ValuableContext = createContext<ValuablesContent>({
  valuables: valuablesList,
  setValuables: () => {},
});

export const useValuableContext = () => useContext(ValuableContext);
