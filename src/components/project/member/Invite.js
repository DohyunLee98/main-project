import React from "react";
import useMembers from "../../../modules/useMembers";
import MemberInput from "./MemberInput";
import MemberList from "./MemberList";
import "../../../styles/ProjectPage.css";

const Invite = () => {
  const { members, addMember, removeMember, changeRole } = useMembers();

  return (
    <div className="invite-container">
      <div className="schedule-header">
        <h2>●멤버 관리</h2>
      </div>
      <hr />
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
