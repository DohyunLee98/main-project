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
  RadioGroup,
  Radio,
  Stack,
  Button,
} from "@chakra-ui/react";
import { handleAddEvent } from "../../../modules/todoUtils";

function AddTodoModal({ isOpen, onClose, addEvent, defaultDate }) {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(defaultDate || "");
  const [endDate, setEndDate] = useState(defaultDate || "");
  const [time, setTime] = useState({ start: "", end: "" });
  const [status, setStatus] = useState("not_started");

  return (
    <ChakraProvider>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>스케줄 추가</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>제목</FormLabel>
              <Input
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>시작 날짜</FormLabel>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>종료 날짜</FormLabel>
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>시간</FormLabel>
              <Stack direction="row" spacing={4}>
                <Input
                  type="time"
                  value={time.start}
                  onChange={(e) => setTime({ ...time, start: e.target.value })}
                />
                <Input
                  type="time"
                  value={time.end}
                  onChange={(e) => setTime({ ...time, end: e.target.value })}
                />
              </Stack>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>상태</FormLabel>
              <RadioGroup onChange={setStatus} value={status}>
                <Stack direction="row">
                  <Radio value="not_started">시작 전</Radio>
                  <Radio value="in_progress">진행 중</Radio>
                  <Radio value="completed">완료</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              취소
            </Button>
            <Button
              colorScheme="blue"
              ml={3}
              onClick={() =>
                handleAddEvent(
                  title,
                  startDate,
                  endDate,
                  time,
                  status,
                  addEvent,
                  onClose
                )
              }
            >
              저장
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default AddTodoModal;
