import { create } from 'zustand';

interface UIState {
  isLoginModalOpen: boolean;
  isSignupModalOpen: boolean;
  currentTab: string;
  isLoading: boolean;
  errorMessage: string | null;
  setLoginModalOpen: (isOpen: boolean) => void;
  setSignupModalOpen: (isOpen: boolean) => void;
  setCurrentTab: (tab: string) => void;
  setLoading: (isLoading: boolean) => void;
  setErrorMessage: (message: string | null) => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isLoginModalOpen: false,
  isSignupModalOpen: false,
  currentTab: 'home',
  isLoading: false,
  errorMessage: null,

  setLoginModalOpen: (isOpen) => set({ isLoginModalOpen: isOpen }),
  setSignupModalOpen: (isOpen) => set({ isSignupModalOpen: isOpen }),
  setCurrentTab: (tab) => set({ currentTab: tab }),
  setLoading: (isLoading) => set({ isLoading }),
  setErrorMessage: (message) => set({ errorMessage: message }),
}));
