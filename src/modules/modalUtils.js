import { useDisclosure } from "@chakra-ui/react";

// 모달 열기/닫기를 관리하는 커스텀 훅
export const useModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return { isOpen, onOpen, onClose };
};
