import React, { useState } from 'react';

const MemberInput = ({ onAddMember }) => {
  const [name, setName] = useState('');

  const handleAddMember = () => {
    if (name.trim()) {
      onAddMember(name);
      setName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="멤버 이름을 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddMember}>멤버 초대</button>
    </div>
  );
};

export default MemberInput;