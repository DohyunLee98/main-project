import React, { useState } from "react";
import {
  ChakraProvider,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

function AddTaskModal({ isOpen, onClose, addTask, defaultDate }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(defaultDate || "");
  const [end, setEnd] = useState(defaultDate || "");

  // Task 저장 함수
  const handleSave = () => {
    const taskData = {
      title,
      start,
      end,
    };

    console.log("Saving Task: ", taskData);

    if (title.trim() !== "") {
      addTask(taskData);
      onClose();
    }
  };

  return (
    <ChakraProvider>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Task 추가</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>제목</FormLabel>
              <Input
                placeholder="Task 이름을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>시작 날짜</FormLabel>
              <Input
                type="date"
                value={start}
                onChange={(e) => setStart(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>종료 날짜</FormLabel>
              <Input
                type="date"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              취소
            </Button>
            <Button colorScheme="blue" ml={3} onClick={handleSave}>
              저장
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default AddTaskModal;
