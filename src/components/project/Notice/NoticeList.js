import React, { useState } from "react";

const NoticeList = ({
  notices,
  expandedIndex,
  setExpandedIndex,
  onDeleteNotice,
  onUpdateNotice,
}) => {
  const [editIndex, setEditIndex] = useState(null); // 수정 중인 공지사항의 인덱스를 저장하는 상태
  const [editTitle, setEditTitle] = useState(""); // 수정 중인 공지사항의 제목 상태
  const [editContent, setEditContent] = useState(""); // 수정 중인 공지사항의 내용 상태

  // 공지사항 확장/축소 토글 함수
  const handleToggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // 현재 확장된 공지사항이면 축소하고, 아니면 확장
    setEditIndex(null); // 수정 모드를 해제합니다.
  };

  // 공지사항 수정 모드 활성화 함수
  const handleEditClick = (index, notice) => {
    setEditIndex(index); // 수정할 공지사항의 인덱스를 설정
    setEditTitle(notice.title); // 수정할 공지사항의 제목을 설정
    setEditContent(notice.content); // 수정할 공지사항의 내용을 설정
  };

  // 공지사항 수정 완료 함수
  const handleUpdateClick = () => {
    onUpdateNotice(editIndex, {
      // 수정된 공지사항 정보를 부모 컴포넌트로 전달
      title: editTitle,
      content: editContent,
      date: new Date().toLocaleString("ko-KR", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }), // 수정된 시간 업데이트
    });
    setEditIndex(null); // 수정 모드 해제
    setExpandedIndex(null); // 확장 모드 해제
  };

  return (
    <div>
      {notices.map((notice, index) => (
        <div
          key={index}
          style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}
        >
          {editIndex === index ? ( // 수정 모드일 경우
            <>
              {/* 수정 모드의 제목 입력 필드 */}
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                style={{ width: "100%", marginBottom: "5px" }}
              />
              {/* 수정 모드의 내용 입력 필드 */}
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                style={{ width: "100%", marginBottom: "5px" }}
              />
              {/* 수정 완료 버튼 */}
              <button
                onClick={handleUpdateClick}
                style={{ marginRight: "5px" }}
              >
                수정 완료
              </button>
              {/* 수정 취소 버튼 */}
              <button onClick={() => setEditIndex(null)}>취소</button>
            </>
          ) : (
            <>
              {/* 공지사항 제목과 날짜 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h5
                  style={{ margin: "0 0 5px 0", cursor: "pointer" }}
                  onClick={() => handleToggleExpand(index)}
                >
                  {notice.title}
                </h5>
                <span style={{ fontSize: "0.75em", color: "#888" }}>
                  {notice.date}
                </span>
              </div>
              {expandedIndex === index && ( // 확장된 상태일 경우 내용 표시
                <div>
                  <p style={{ margin: "0 0 5px 0", color: "#777" }}>
                    {notice.date}
                  </p>
                  <p style={{ margin: "0 0 5px 0" }}>{notice.content}</p>
                  {/* 수정 버튼 */}
                  <button
                    onClick={() => handleEditClick(index, notice)}
                    style={{ marginRight: "5px" }}
                  >
                    수정
                  </button>
                  {/* 삭제 버튼 */}
                  <button
                    onClick={() => onDeleteNotice(index)}
                    style={{ marginRight: "5px" }}
                  >
                    삭제
                  </button>
                  {/* 닫기 버튼 */}
                  <button onClick={() => setExpandedIndex(null)}>닫기</button>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default NoticeList;
