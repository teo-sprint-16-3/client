import "./mypage.scss";

const MyPage = () => {
  return (
    <section className="myPageContainer">
      <h2 className="myPageTit">마이페이지</h2>
      <div className="myPageContents">
        <div className="myPageMyImg">
          <span>사진</span>
        </div>
        <div className="myPageInfoWrap">
          <p className="myPageMyNickname">
            용맹한 여행자 <strong>닉네임</strong>
          </p>
          <span className="myPageBadgeNotice">
            0번 더 여행시 <strong>대륙의 정복자</strong> 뱃지를 얻을 수 있어요
          </span>
        </div>
        <div className="myPageStatWrap">
          <dl>
            <dt>총 여행국가</dt>
            <dd>
              <button>000개국</button>
            </dd>
          </dl>
          <dl>
            <dt>총 여행일</dt>
            <dd>
              <button>000일</button>
            </dd>
          </dl>
          <dl>
            <dt>총 페이지</dt>
            <dd>
              <button>000개</button>
            </dd>
          </dl>
        </div>
      </div>
      <button className="myPageGetBadgeStatus">
        <div className="myPageBadgeImg" />
        <span>획득 뱃지</span>
      </button>
      <button className="myPageShareBtn">공유하기 btn</button>
    </section>
  );
};

export default MyPage;
