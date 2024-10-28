import { createSelectorFunctions } from 'auto-zustand-selectors-hook';
import { create } from 'zustand';

export type IMenuMobileStore = {
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
};

const useBaseMenuMobileStore = create<IMenuMobileStore>((set) => ({
  isOpen: false,
  setIsOpen: (data) => set(() => ({ isOpen: data })),
}));

export const useMenuMobileStore = createSelectorFunctions(useBaseMenuMobileStore);
