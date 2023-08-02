"use client";
import create from "zustand";
import createContext from "zustand/context";
import {useStore} from '@/store/store';
import { ReactNode } from "react";

const { Provider } = createContext();

export default function ZustandProvider({ children }: {children: ReactNode}) {
  return <Provider createStore={() => useStore}>{children}</Provider>;
}