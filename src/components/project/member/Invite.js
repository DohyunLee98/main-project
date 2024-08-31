import React from "react";
import useMembers from "../../../modules/useMembers";
import MemberInput from "./MemberInput";
import MemberList from "./MemberList";
import "../../../styles/ProjectPage.css";

const Invite = () => {
  const { members, addMember, removeMember, changeRole } = useMembers();

  return (
    <div className="invite-container">
      <h1 className="invite-header">멤버 초대</h1>
      <div className="member-input-container">
        <MemberInput onAddMember={addMember} />
      </div>
      <div className="member-list-container">
        <MemberList
          members={members}
          onRemoveMember={removeMember}
          onChangeRole={changeRole}
        />
      </div>
    </div>
  );
};

export default Invite;
