import React, { useState, useEffect } from "react";
import NoticeForm from "./Notice/NoticeForm";
import NoticeList from "./Notice/NoticeList";
import "../../styles/ProjectPage.css";

const Title = () => {
  const [title, setTitle] = useState("식빵고양이 님의 페이지입니다.");
  const [notices, setNotices] = useState([
    { title: "제대로 열리는지?", content: "테스트중", date: "08-30 12:00" },
    { title: "공지사항1", content: "내용1", date: "01-01 12:00" },
    { title: "공지사항2", content: "내용2", date: "01-02 13:00" },
    { title: "공지사항3", content: "내용3", date: "01-03 14:00" },
    { title: "공지사항4", content: "내용4", date: "01-04 15:00" },
    { title: "공지사항5", content: "내용5", date: "01-05 16:00" },
    { title: "공지사항6", content: "내용6", date: "01-06 17:00" },
    { title: "공지사항7", content: "내용7", date: "01-07 18:00" },
    { title: "공지사항8", content: "내용8", date: "01-08 19:00" },
    { title: "공지사항9", content: "내용9", date: "01-09 20:00" },
    { title: "공지사항10", content: "내용10", date: "01-10 21:00" },
    { title: "공지사항11", content: "내용11", date: "01-11 22:00" },
    { title: "공지사항12", content: "내용12", date: "01-12 23:00" },
    { title: "공지사항13", content: "내용13", date: "01-13 10:00" },
    { title: "공지사항14", content: "내용14", date: "01-14 11:00" },
    { title: "공지사항15", content: "내용15", date: "01-15 12:00" },
    { title: "공지사항16", content: "내용16", date: "01-16 13:00" },
    { title: "공지사항17", content: "내용17", date: "01-17 14:00" },
    { title: "공지사항18", content: "내용18", date: "01-18 15:00" },
    { title: "공지사항19", content: "내용19", date: "01-19 16:00" },
    { title: "공지사항20", content: "내용20", date: "01-20 17:00" },
    { title: "공지사항21", content: "내용21", date: "01-21 12:00" },
    { title: "공지사항22", content: "내용22", date: "01-22 13:00" },
    { title: "공지사항23", content: "내용23", date: "01-23 14:00" },
    { title: "공지사항24", content: "내용24", date: "01-24 15:00" },
    { title: "공지사항25", content: "내용25", date: "01-25 16:00" },
    { title: "공지사항26", content: "내용26", date: "01-26 17:00" },
    { title: "공지사항27", content: "내용27", date: "01-27 18:00" },
    { title: "공지사항28", content: "내용28", date: "01-28 19:00" },
    { title: "공지사항29", content: "내용29", date: "01-29 20:00" },
    { title: "공지사항30", content: "내용30", date: "01-30 21:00" },
    { title: "공지사항31", content: "내용31", date: "01-31 22:00" },
    { title: "공지사항32", content: "내용32", date: "02-01 10:00" },
    { title: "공지사항33", content: "내용33", date: "02-02 11:00" },
    { title: "공지사항34", content: "내용34", date: "02-03 12:00" },
    { title: "공지사항35", content: "내용35", date: "02-04 13:00" },
    { title: "공지사항36", content: "내용36", date: "02-05 14:00" },
    { title: "공지사항37", content: "내용37", date: "02-06 15:00" },
    { title: "공지사항38", content: "내용38", date: "02-07 16:00" },
    { title: "공지사항39", content: "내용39", date: "02-08 17:00" },
    { title: "공지사항40", content: "내용40", date: "02-09 18:00" },
    { title: "공지사항41", content: "내용41", date: "02-10 19:00" },
    { title: "공지사항42", content: "내용42", date: "02-11 20:00" },
    { title: "공지사항43", content: "내용43", date: "02-12 21:00" },
    { title: "공지사항44", content: "내용44", date: "02-13 22:00" },
    { title: "공지사항45", content: "내용45", date: "02-14 23:00" },
  ]); // 공지사항 1~45 예시 데이터
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [expandedIndex, setExpandedIndex] = useState(0); // 가장 최신 공지의 인덱스를 열림 상태로 관리

  const noticesPerPage = 5; // 한 페이지에 보여줄 공지사항 수

  // 페이지가 로드될 때 가장 최신 공지를 열림 상태로 설정
  useEffect(() => {
    setExpandedIndex(0); // 페이지 로드 시 첫 번째 공지사항을 열림 상태로 설정
  }, []);

  // 공지사항을 추가하는 함수
  const handleAddNotice = (notice) => {
    setNotices([notice, ...notices]); // 새 공지사항을 맨 앞에 추가하여 최신 공지가 위로 오게 함
    setShowForm(false); // 폼 닫기
    setExpandedIndex(0); // 새 공지를 추가하면 그것이 최신이므로 인덱스를 0으로 설정하여 열림 상태 유지
  };

  // 공지사항을 삭제하는 함수
  const handleDeleteNotice = (index) => {
    const updatedNotices = notices.filter((_, i) => i !== index); // 인덱스가 일치하지 않는 요소만 남김
    setNotices(updatedNotices); // 상태 업데이트

    // 삭제 후에 가장 최신의 공지를 다시 열림 상태로 유지
    if (index === expandedIndex) {
      setExpandedIndex(null); // 삭제한 공지가 열려 있던 경우, 닫음
    } else if (index < expandedIndex) {
      setExpandedIndex(expandedIndex - 1); // 삭제한 공지보다 뒤에 있는 공지는 인덱스를 줄임
    }
  };

  // 공지사항을 수정하는 함수
  const handleUpdateNotice = (index, updatedNotice) => {
    const updatedNotices = notices.map(
      (notice, i) => (i === index ? updatedNotice : notice) // 해당 인덱스의 공지사항만 수정
    );
    setNotices(updatedNotices); // 상태 업데이트
  };

  // 현재 페이지에 해당하는 공지사항만 반환하는 함수
  const getCurrentPageNotices = () => {
    const startIndex = (currentPage - 1) * noticesPerPage;
    const endIndex = startIndex + noticesPerPage;
    return notices.slice(startIndex, endIndex); // 현재 페이지에 해당하는 공지사항만 반환
  };

  // 특정 페이지로 이동하는 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // 현재 페이지 번호를 설정
  };

  // 총 페이지 수 계산
  const totalPages = Math.ceil(notices.length / noticesPerPage);

  // 현재 페이지 그룹 계산 (5개씩 그룹핑)
  const currentGroup = Math.ceil(currentPage / 5);
  const startPage = (currentGroup - 1) * 5 + 1;
  const endPage = Math.min(currentGroup * 5, totalPages);

  return (
    <div
      style={{
        width: "400px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Title</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 style={{ margin: "0" }}>Notice</h4>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{ marginBottom: "10px" }}
        >
          {showForm ? "폼 닫기" : "추가"}
        </button>
      </div>
      {showForm && (
        <NoticeForm
          onAddNotice={handleAddNotice}
          onCancel={() => setShowForm(false)}
        />
      )}
      <NoticeList
        notices={getCurrentPageNotices()} // 현재 페이지의 공지사항만 전달
        expandedIndex={expandedIndex} // 열려 있는 공지사항의 인덱스 전달
        setExpandedIndex={setExpandedIndex} // NoticeList에서 열림 상태를 제어할 수 있도록 콜백 전달
        onDeleteNotice={handleDeleteNotice}
        onUpdateNotice={handleUpdateNotice}
      />
      {/* 페이징 버튼 */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {/* 이전 버튼: 현재 그룹이 첫 번째 그룹이 아닐 때만 표시 */}
        {currentGroup > 1 && (
          <button
            onClick={() => handlePageChange(startPage - 1)}
            style={{ marginRight: "5px" }}
          >
            이전
          </button>
        )}
        {/* 페이지 번호 버튼 */}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <button
            key={startPage + i}
            onClick={() => handlePageChange(startPage + i)}
            style={{
              marginRight: "5px",
              fontWeight: currentPage === startPage + i ? "bold" : "normal",
            }}
          >
            {startPage + i}
          </button>
        ))}
        {/* 다음 버튼: 현재 그룹의 마지막 페이지가 전체 페이지 수보다 작을 때만 표시 */}
        {endPage < totalPages && (
          <button onClick={() => handlePageChange(endPage + 1)}>다음</button>
        )}
      </div>
    </div>
  );
};

export default Title;
