import React from "react";
import { Modal as RNModal, View, Pressable, Text } from "react-native";
import { MotiView, AnimatePresence } from "moti";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal = ({ isVisible, onClose, title, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <RNModal transparent visible={isVisible} animationType="none">
          <View className="flex-1 justify-end bg-black/40">
            <Pressable className="flex-1" onPress={onClose} />
            <MotiView
              from={{ translateY: 300, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: 300, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="bg-white dark:bg-[#1C1C1E] rounded-t-[40px] p-8 pb-12 shadow-2xl"
            >
              <View className="w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full self-center mb-6" />
              {title && (
                <Text className="text-2xl font-bold mb-6 text-black dark:text-white font-[PlusJakartaSans-Bold]">
                  {title}
                </Text>
              )}
              {children}
            </MotiView>
          </View>
        </RNModal>
      )}
    </AnimatePresence>
  );
};
