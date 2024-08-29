import { useState } from "react"; // React의 useState 훅을 import합니다.

const useMembers = () => {
  const [members, setMembers] = useState([
    { name: "성현빈", role: "스트리머" },
    { name: "이중섭", role: "PD" },
  ]);

  // addMember 함수는 새로운 멤버를 추가하는 함수
  const addMember = (name) => {
    // 현재 members 배열에 새로운 멤버 객체를 추가하고, 역할은 기본적으로 "역할 선택"으로 설정
    setMembers([...members, { name, role: "역할 선택" }]);
  };

  // removeMember 함수는 특정 인덱스의 멤버를 제거하는 함수
  const removeMember = (index) => {
    // members 배열을 필터링하여 지정된 인덱스를 제외한 나머지 멤버들로 새로운 배열을  생성
    setMembers(members.filter((_, i) => i !== index));
  };

  // changeRole 함수는 특정 멤버의 역할을 변경하는 함수
  const changeRole = (index, role) => {
    // members 배열을 복사하여 새로운 배열을 만들고, 지정된 인덱스의 멤버의 역할을 변경합
    const updatedMembers = [...members];
    updatedMembers[index].role = role;

    setMembers(updatedMembers);
  };

  return { members, addMember, removeMember, changeRole };
};

export default useMembers;
