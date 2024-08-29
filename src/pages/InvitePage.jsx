import React from 'react';
import MemberInput from '../components/project/MemberInput';
import MemberList from '../components/project/MemberList';
import useMembers from '../modules/useMembers';

const InvitePage = () => {
  const { members, addMember, removeMember, changeRole } = useMembers();

  return (
    <div>
      <h1>멤버 초대</h1>
      <MemberInput onAddMember={addMember} />
      <MemberList members={members} onRemoveMember={removeMember} onChangeRole={changeRole} />
  
    </div>
  );
};

export default InvitePage;