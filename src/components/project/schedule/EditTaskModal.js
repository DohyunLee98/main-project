import React, { useState, useEffect } from "react";
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

function EditTaskModal({ isOpen, onClose, task, onSave, onDelete }) {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (task) {
      setName(task.name || "");

      // task.start와 task.end를 문자열로 받아 처리
      const startDateTime = new Date(task.start);
      const endDateTime = new Date(task.end);

      // Date 객체를 yyyy-MM-dd 형식의 문자열로 변환
      setStart(startDateTime.toISOString().split("T")[0]);
      setEnd(endDateTime.toISOString().split("T")[0]);

      setProgress(task.progress || 0);
    }
  }, [task]);

  const handleSave = () => {
    const updatedTask = {
      ...task,
      name: name,
      start: start + "T00:00:00", // 저장 시 시간을 00:00:00으로 설정하여 LocalDateTime 형식으로 변환
      end: end + "T23:59:59", // 저장 시 시간을 23:59:59으로 설정하여 LocalDateTime 형식으로 변환
      progress: parseInt(progress, 10), // progress 값을 정수로 변환
    };
    onSave(updatedTask);
    onClose();
  };

  return (
    <ChakraProvider>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Task 수정</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Task 이름</FormLabel>
              <Input
                placeholder="Task 이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
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

            <FormControl mt={4}>
              <FormLabel>진행도 (%)</FormLabel>
              <Input
                type="number"
                min={0}
                max={100}
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" onClick={onDelete} mr="auto">
              삭제
            </Button>
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

export default EditTaskModal;
