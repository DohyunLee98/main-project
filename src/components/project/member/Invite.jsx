import React from 'react';
import useMembers from '../../../modules/useMembers';
import MemberInput from './MemberInput';
import MemberList from './MemberList';

const Invite = () => {
  const { members, addMember, removeMember, changeRole } = useMembers();

  return (
    <div>
      <h1>멤버 초대</h1>
      <MemberInput onAddMember={addMember} />
      <MemberList members={members} onRemoveMember={removeMember} onChangeRole={changeRole} />
  
    </div>
  );
};

export default Invite;