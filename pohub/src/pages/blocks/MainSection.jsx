function MainSection(props) {
  return (
    <div>
      메인페이지입니다.<br/><br/>

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
    </div>
  )
}

export default MainSection;