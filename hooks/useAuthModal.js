import { IoMdSpeedometer } from "react-icons/io";
import { create } from "zustand";

const useAuthModel = create((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useAuthModel;