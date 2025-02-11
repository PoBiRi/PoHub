import styled from 'styled-components';
function MainSection(props) {
  return (
    <div>
      <InfoBox>메인페이지입니다</InfoBox>
      <SectionContianer>
        2/11 업데이트<br/>
        <div style={{paddingLeft: '12px', fontSize: '24px'}}>
          - 댓글 기능 추가 완료
        </div><br/>

        2/10 업데이트<br/>
        <div style={{paddingLeft: '12px', fontSize: '24px'}}>
          - 게시글 삭제 기능 구현<br/>
          - 작성자 본인 제외 삭제 불가
        </div><br/>
    
        2/9 업데이트<br/>
        <div style={{paddingLeft: '12px', fontSize: '24px'}}>
          - SSL인증서 적용 완료
            https로 접근 가능<br/>
          - 서버 db 매일 오전 1시 백업<br/>
          - 비밀번호 찾기 기능 구현<br/>
          - https로 변경하며 고장난 부분 보수
        </div><br/>
    
        2/8 업데이트<br/>
        <div style={{paddingLeft: '12px', fontSize: '24px'}}>
          - 파일 저장명 한글 깨짐 문제 해결
        </div><br/>
    
        1/16 업데이트<br/>
        <div style={{paddingLeft: '12px', fontSize: '24px'}}>
          - 회원가입 구현<br/>
          - 버그 있을 수 있음
        </div><br/>
    
        1/14<br/>
        <div style={{paddingLeft: '12px', fontSize: '24px'}}>
          - 회원가입 구현 중
        </div><br/>
    
        1/9<br/>
        <div style={{paddingLeft: '12px', fontSize: '24px'}}>
          - 게시글에 이제 첨부된 파일이 표기<br/>
          - 첨부 파일 저장 가능
        </div><br/>
    
        1/8<br/>
        <div style={{paddingLeft: '12px', fontSize: '24px'}}>
         - 게시글 사진 첨부 가능<br/>
         - 총 5개 파일 첨부 가능<br/>
         - 5개 파일 총합 500MB까지 업로드 가능<br/>
         - 현재 이미지 외 파일은 서버에 저장만되고 표기되지 않음
        </div>
      </SectionContianer>
    </div>
  )
}

export default MainSection;

const InfoBox = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  height: 64px;
  margin-bottom: 16px;
  padding-left: 4px;
  justify-content: space-between;
`;

const SectionContianer = styled.section`
  height: calc(100vh - 176px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  word-break: break-word;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: #217af4;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, .1);
  }
`;