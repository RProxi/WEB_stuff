import { create } from 'zustand';

const useRevenueStore = create((set) => ({
    count: 0,
    buyPainting: () => set((state) => ({ count: state.count + 1})),
}));

export default useRevenueStore;