
import './../css/profile.css'

function ProfileWrap() {

    function introduceLink(url) {
        window.open(`${url}`, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className='profileWrap'>
            <div className='profileHead'>
                <h6>Profile _</h6>
            </div>
            <div className='profileBody'>
                {/* //////////////////////// */}
                <div className='introduceWrap'>
                    <div className='introduceHead'>
                        <h6>Language Skill_</h6>
                    </div>
                    <div className='introduceBody'>
                        <div className='introduceSection'>
                            <h6>1. Javascript</h6>
                            <div className='introduceTag'>
                                <p>모달창, 탭, 슬라이드</p>
                                <p>이벤트 처리</p>
                                <p>정규식을 통한 데이터 검증</p>
                                <p>form을 통한 HTTP요청</p>
                                <p>로컬스토리지를 통한 데이터 저장</p>
                                <p>var,const,let 구분</p>
                                <p>function,Arrow function 구분</p>
                                <p>Promise,async,await</p>
                                <p>데이터핸들링 (Array,Object)</p>
                            </div>
                        </div>
                        <div className='introduceSection'>
                            <h6>2. jQuery</h6>
                            <div className='introduceTag'>
                                <p>이벤트</p>
                                <p>Javascript 기본 기능</p>
                            </div>
                        </div>
                        <div className='introduceSection'>
                            <h6>3. Typescript</h6>
                            <div className='introduceTag'>
                                <p>원시타입 | 객체타입</p>
                                <p>타입조합 (유니온/교차타입)</p>
                                <p>타입가드 처리</p>
                            </div>
                        </div>
                        <div className='introduceSection'>
                            <h6>4. Vue</h6>
                            <div className='introduceTag'>
                                <p>데이터바인딩</p>
                                <p>반복문(v-for)</p>
                                <p>v-if</p>
                                <p>이벤트핸들링(@event) 통한 데이터 변경</p>
                                <p>Component</p>
                                <p>Props</p>
                                <p>vue-router</p>
                            </div>
                        </div>
                        <div className='introduceSection'>
                            <h6>5. React</h6>
                            <div className='introduceTag'>
                                <p>useState</p>
                                <p>Component | props</p>
                                <p>map을 통한 div 반복</p>
                                <p>react router</p>
                                <p>style-components</p>
                                <p>Lifecycle(mount,update,unmount)</p>
                                <p>Lifecycle hook (useEffect)</p>
                                <p>Redux toolkit</p>
                            </div>
                        </div>
                        <div className='introduceSection'>
                            <h6>6. Node.js(Express) / MongoDB</h6>
                            <div className='introduceTag'>
                                <p>insert,update,find,delete를 통해 DB데이터 핸들링</p>
                                <p>try-catch / throw Erorr를 통한 에러(예외)처리 </p>
                                <p>method-override</p>
                                <p>URL params</p>
                                <p>query string</p>
                                <p>$exists,$set, $unset, $inc,projection 등등 node.js 명령어를 통한 가독성</p>
                                <p>Transaction을 통한 실행단위 설정을 통해 잘못된 데이터 방지</p>
                                <p>Passport 를 통한 회원가입 기능</p>
                                <p>DB indexes 이해 및 설정</p>
                            </div>
                        </div>
                        <div className='introduceSection'>
                            <h6>7. 더 공부할 내용들</h6>
                            <div className='introduceTag'>
                                <p>Next.js</p>
                                <p>Javascript ES6 Object Class Prototype 등등</p>
                                <p>Typescript generics 및 TSX 내 Type 등등</p>
                                <p>CS 지식</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //////////////////////// */}
                <div className='introduceWrap'>
                    <div className='introduceHead'>
                        <h6>About me_</h6>
                    </div>
                    <div className='introduceBody'>
                        <div className='introduceSection'>
                            <h6>1. Introduce</h6>
                            <div className='introduceTag'>
                                <p>1991.08.08</p>
                                <p>도유현</p>
                                <p>경기도 의정부시</p>
                                <p>dyh910@gmail.com</p>
                                <p>010-5650-8323</p>
                            </div>
                        </div>
                        <div className='introduceSection'>
                            <h6>2. Career</h6>
                            <div className='introduceTag'>
                                <p>개발직무 경력이 없습니다.</p>
                            </div>
                        </div>
                        <div className='introduceSection'>
                            <h6>3. Link</h6>
                            <div className='introduceTag introduceTagLink'>
                                <p onClick={() => introduceLink('https://hero-es.tistory.com/')}>Tistory</p>
                                <p onClick={() => introduceLink('https://github.com/taurenHorde')}>Github</p>
                            </div>
                        </div>
                        <div className='introduceSection'>
                            <h6>4. Personality</h6>
                            <div className='introduceTag'>
                                <p>INFJ</p>
                                <p>조용</p>
                                <p>친화</p>
                                <p>배려</p>
                            </div>
                        </div>
                        <div className='introduceSection'>
                            <h6>5. strength</h6>
                            <div className='introduceTag'>
                                <p>자기객관화</p>
                                <p>노력</p>
                                <p>끈기</p>
                                <p>구글링</p>
                                <p>적극</p>
                            </div>
                        </div>
                        <div className='introduceSection'>
                            <h6>6. Weakness</h6>
                            <div className='introduceTag'>
                                <p>유연</p>
                            </div>
                        </div>
                        <div className='introduceSection'>
                            <h6>7. PrepareToWork</h6>
                            <div className='introduceTag'>
                                <p>공부</p>
                                <p>팀 단위 프로젝트</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileWrap;


