import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
} from "@chakra-ui/react";
import AddTaskModal from "./AddTaskModal";
import AddTodoModal from "./AddTodoModal";

function AddScheduleModal({ isOpen, onClose, addTask, addTodo, defaultDate }) {
  const [showOptions, setShowOptions] = useState(true);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showTodoModal, setShowTodoModal] = useState(false);

  // 모달이 닫힐 때 상태 초기화
  useEffect(() => {
    if (!isOpen) {
      setShowOptions(true);
      setShowTaskModal(false);
      setShowTodoModal(false);
    }
  }, [isOpen]);

  const handleAddTaskClick = () => {
    setShowOptions(false);
    setShowTaskModal(true);
  };

  const handleAddTodoClick = () => {
    setShowOptions(false);
    setShowTodoModal(true);
  };

  const handleCancelClick = () => {
    setShowOptions(true);
    setShowTaskModal(false);
    setShowTodoModal(false);
    onClose();
  };

  return (
    <ChakraProvider>
      <Modal isOpen={isOpen} onClose={handleCancelClick}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>스케줄 추가</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {showOptions && (
              <VStack spacing={4}>
                <Button colorScheme="blue" onClick={handleAddTaskClick}>
                  Task 추가
                </Button>
                <Button colorScheme="green" onClick={handleAddTodoClick}>
                  Todo 추가
                </Button>
                <Button variant="ghost" onClick={handleCancelClick}>
                  취소
                </Button>
              </VStack>
            )}
            {showTaskModal && (
              <AddTaskModal
                isOpen={showTaskModal}
                onClose={handleCancelClick}
                addTask={addTask}
                defaultDate={defaultDate}
              />
            )}
            {showTodoModal && (
              <AddTodoModal
                isOpen={showTodoModal}
                onClose={handleCancelClick}
                addTodo={addTodo}
                defaultDate={defaultDate}
              />
            )}
          </ModalBody>
          {!showOptions && !showTaskModal && !showTodoModal && (
            <ModalFooter>
              <Button colorScheme="blue" onClick={handleCancelClick}>
                완료
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default AddScheduleModal;
