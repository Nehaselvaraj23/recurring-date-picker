import { create } from 'zustand';

type Frequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface RecurrenceState {
  frequency: Frequency;
  interval: number;
  weekdays: string[];
  nthWeek: number;
  nthDay: string;
  startDate: string | null;
  endDate: string | null;
  setState: (data: Partial<RecurrenceState>) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  frequency: 'weekly',
  interval: 1,
  weekdays: [],
  nthWeek: 1,
  nthDay: 'Monday',
  startDate: null,
  endDate: null,
  setState: (data) => set((state) => ({ ...state, ...data })),
}));
