import React from 'react';

const MemberList = ({ members, onRemoveMember, onChangeRole }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>참여중인 멤버</th>
            <th>역할</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>
                <select value={member.role} onChange={(e) => onChangeRole(index, e.target.value)}>
                  <option value="스트리머">스트리머</option>
                  <option value="PD">PD</option>
                  <option value="편집자">편집자</option>
                </select>
              </td>
              <td>
                <button onClick={() => onRemoveMember(index)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;