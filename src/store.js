import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'



let pageProjectComponets = createSlice({
    name: 'pageProjectComponets',
    initialState: {
        6: function Projectpage6() {
            const siteUrl = 'https://web-baseball-front-lyol1hka657e54ef.sel5.cloudtype.app/';
            const githubUrlFront = 'https://github.com/taurenHorde/baseball_front';
            const githubUrlBack = 'https://github.com/taurenHorde/baseball_back';
            const navigate = useNavigate();
            const [option, setOption] = useState(0)
            return (
                <div className='ProjectpageWrap'>
                    <div className='projectpageHead'>
                        <h6>BaseBall Team_ 6
                            <button
                                onClick={() => navigate('/')}
                            >메인으로</button>
                        </h6>
                        <p>야구 팀을 만들어 팀원과 게스트를 구하는 사이트</p>
                        <div className='proJectpageHeadButton'>
                            <button
                                onClick={() => window.open(siteUrl, '_blnck')}
                            >BaseBall</button>
                            <button
                                onClick={() => window.open(githubUrlFront, '_blnck')}
                            >github(front)</button>
                            <button
                                onClick={() => window.open(githubUrlBack, '_blnck')}
                            >github(back)</button>
                        </div>
                    </div>
                    <div className='projectpageBody'>
                        {/* ------------------------------------------- */}
                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Language / Library</h6>
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <h6>1. Front </h6>
                                    <p>React Typescript Moment React-Calendar </p>
                                </div>
                                <div className='projectpagePartSection'>
                                    <h6>2. Back </h6>
                                    <p>Node.js Express MongoDB Passport.js bcrypt connect-mongo Moment</p>
                                </div>
                            </div>
                        </div>

                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Function</h6>
                                <div className='red-dot dot' />
                                <div className='blue-dot dot' />
                                <div className='green-dot dot' />
                            </div>
                            <div className='projectpagePartOption'>
                                {['회원가입 및 로그인', '게스트', '팀', '게시물', '마이페이지'].map((val, idx) =>
                                    <div key={idx}
                                        className={option === idx ? "option" : " "}
                                        onClick={() => setOption(idx)}
                                    ><p>{val}</p></div>)}
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection ProjectpageYoutube'>
                                    <iframe
                                        className='iframeTube'
                                        src="https://www.youtube.com/embed/M4-l7xbbEH8"
                                        title="포트폴리오6"
                                        // frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowfullScreen>
                                    </iframe>
                                </div>
                                {[
                                    <div className='projectpagePartSection'>
                                        <h6>1. 회원가입 및 로그인 구현 (00:00 ~ 00:53)</h6>
                                        <p>ㆍ사용자 입력 데이터를 클라이언트에서 검증을 한 후 이상이 있으면 useState 변경을 통해 사용자에게 css animation 과 text로 재 입력 요구 기능. </p>
                                        <p>ㆍ입력 데이터가 이상이 없으면 Post 요청을 통하여 아이디 및 닉네임 중복 확인을 한 후 중복데이터가 있을 시 text 로 재 입력 요구 기능. </p>
                                        <p>ㆍ서식 및 중복 검증에 이상이 없으면 Post 요청을 통하여 <span className='red'>Passport를 통해 가입을 진행</span>, 비밀번호는 <span className='red'>bcrypt 라이브러리</span>를 통하여 보안성 증대.</p>
                                    </div>
                                    ,
                                    <div className='projectpagePartSection'>
                                        <h6>2. 게스트 (00:54 ~ 06:57)</h6>
                                        <p>- 모집 글 작성 시</p>
                                        <p>ㆍ작성 버튼 클릭 시 & 작성 페이지 마운트 시 서버로 로그인 상태인지 확인 후 비 로그인 상태면 로그인 창으로 이동 기능 구현</p>
                                        <p>ㆍInput(text) 내 줄이 추가 될때마다 높이가 자동으로 조정 되는 기능 구현 ( 트위터 방식 ) </p>
                                        <p>ㆍInput(time) 오늘 기준으로 <span className='blue'>이전 날짜로 경기 일자를 설정하면 막는 기능</span> 구현</p>
                                        <p>ㆍselect 선택에 따라 다른 <span className='blue'>select 내 option 조정 기능 구현 (예)모집성별이 여성일 경우 - 모집실력은 최대 2부까지로 제한 등등</span> </p>
                                        <p>ㆍ이미 선택한 select가 다른 <span className='blue'>select에 의하여 선택 할 수 없는 경우엔 value 를 강제적으로 초기화를 하여 잘못된 입력을 막는 기능 구현</span> </p>
                                        <p>ㆍ사용자 입력 데이터를 클라이언트에서 검증을 한 후 이상이 있으면 useState 변경을 통해 사용자에게 text로 재 입력 요구 기능. </p>
                                        <br />
                                        <p>- 게시판 내 필터기능</p>
                                        <p>ㆍ기본 정렬값은 서버에서 find()<span className='red'>.sort()</span>.toArray()를 통해 기본 정렬 구현 (정렬1:모집중/종료 | 정렬2:경기시간) </p>
                                        <p>ㆍ필터 내 일자는 전체보기와 시작일(오늘) 기준으로 + 2주까지 필터 설정 구현 (state와 Moment 기능내 <span className='red'>add기능</span>을 통해 구현) </p>
                                        <p>ㆍ위치,포지션,레벨등 필터 구현. 2개 항목 이상에서 필터를 실행 할 경우 모두 해당되는 게시물 출력되게 구현 </p>
                                        <p>ㆍ위치,포지션,레벨등 <span className='blue'>필터 실행 상태에서 날짜 필터까지 변경을 하더라도 기존 필터가 무너지지 않고 자연스레 적용</span>되어 사용자의 불편을 줄이고자 함</p>
                                        <p>ㆍ위와 반대로 필터를 하나씩 종료를 해도 남아 있는 필터는 적용이 되도록 구현</p>
                                        <br />
                                        <p>- 게스트 모집 포스트 페이지 내</p>
                                        <p>ㆍ<span className='red'>KaKao Map API</span>를 사용하여 해당 경기장의 위치를 지도로 확인 가능 및 <span className='blue'>지도 클릭시 자동으로 KaKao map-길찾기-도착지(경기장)설정</span>으로 통해 이용자 편의 증대</p>
                                        <p>ㆍdisplay flex 를 통하여 자연스러운 반응형 페이지 구현</p>
                                        <p>ㆍ비로그인시 지원을 막아 잘못된 데이터가 저장 되는 경우를 막고, 로그인 상태에선 하나 이상의 포지션을 선택 해야지만 지원이 가능 기능 구현</p>
                                        <p>ㆍ게스트 신청 시 사용자가 희망하는 포지션을 중복 클릭하여 지원 할 수 있는 기능과 <span className='blue'>해당 포지션이 이미 구인이 끝난 경우 지원을 막는 기능</span> 구현</p>
                                        <p>ㆍ로그인 상태인 유저가 페이지 진입하면 <span className='blue'>관리자,지원중인유저 인지 확인 후 상황에 맞게 버튼을 바꿔 잘못된 지원을 막는 기능</span> 구현</p>
                                        <p>ㆍ위와 같은 경우 지원 버튼만 숨기면 되는지 아니면 <span className='green'>버튼 클릭시 검증(프론트)와 Post 이후 검증(서버)에 대한 필요성</span> 고민</p>
                                        <br />
                                        <p>- 게스트 모집 관리자 페이지 내</p>
                                        <p>ㆍ신청현황 과 확정인원으로 구분 짓고 현재 해당되는 인원이 몇 명인지 포지션 별로 몇 건/ 몇 명중에 몇 명이 구인 됬는지 표기</p>
                                        <p>ㆍ<span className='red'>styled-components를 사용</span>하여 현재 유저가 신청 한 포지션에 따라 background-color 를 자동으로 설정 기능 구현</p>
                                        <p>ㆍ5명 단위로 끊어서 분할 하여 나눠서 확인 할 수 있도록 기능 구현 (신청 현황 밑 현재페이지와 페이지 번호)</p>
                                        <p>ㆍ신청현황/확정인원 제목 밑 <span className='blue'>포지션 클릭 시 해당 포지션 유저만 보이게 필터 기능</span> 구현</p>
                                        <p>ㆍ함수를 각각 자식component(신청/확정 인원정보) props로 내려 <span className='blue'>변동(수락/거절등)이 생길 경우 함수를 통해 확인 후 새로이 데이터를 GET요청</span>을 하여 변동할 수 있도록 함</p>
                                        <p>ㆍ한 포지션에서 모집인원만큼 모집을 완료한 경우 해당 포지션은 수락을 막는 기능 구현</p>
                                        <p>ㆍ모집 종료시 신청 대기중인원은 자동으로 거절 처리 구현</p>
                                    </div>
                                    ,
                                    <div className='projectpagePartSection'>
                                        <h6>3. 팀 (06:58 ~ 10:43)</h6>
                                        <p>- 창단 시</p>
                                        <p>ㆍ팀 만들기 버튼 클릭 시 서버로 로그인 상태인지 확인 후 비 로그인 상태면 로그인 창으로 이동 기능 구현</p>
                                        <p>ㆍModal을 통하여 팀 정보를 6단계에 걸쳐서 입력 하도록 함</p>
                                        <p>ㆍ팀이름과 URL는 클라이언트에서 서식을 확인 후 서식이 맞다면 서식과 함께 중복여부를 API에서 재 확인을 하여 잘못된 데이터 입력을 방지</p>
                                        <p>ㆍ입력 완료시 자동으로 팀 페이지로 이동 기능 구현</p>
                                        <br />
                                        <p>- 팀 페이지 내</p>
                                        <p>ㆍdisplay flex 를 통하여 자연스러운 반응형 페이지 구현</p>
                                        <p>ㆍ로그인 상태인 유저가 페이지 진입하면 <span className='blue'>관리자,지원중인유저 인지 확인 후 상황에 맞게 버튼을 바꿔 잘못된 지원을 막는 기능</span> 구현</p>
                                        <p>ㆍ위와 같은 경우 지원 버튼만 숨기면 되는지 아니면 <span className='green'>버튼 클릭시 검증(프론트)와 Post 이후 검증(서버)에 대한 필요성</span> 고민</p>
                                        <br />
                                        <p>- 팀 정보수정(관리자페이지)</p>
                                        <p>ㆍ팀 만들 때 입력했던 모든 데이터를 수정 할 수 있도록 구현</p>
                                        <p>ㆍ변경 하고나서 수정 이전에 기존 값으로 되 돌릴 수 있는 원래대로 버튼 구현</p>
                                        <p>ㆍ팀 이름과 URL는 팀을 만들 때와 같이 서식 확인 후 중복확인 기능 구현과 모든 부분에서 미 입력된 데이터가 있는지 클라이언트에서 검증 기능 구현</p>
                                        <p>ㆍ중복확인 후 바로 update 요청이 이루어지는 방식이 아니기에 중복 체크 이후에는 입력 자체를 막아 잘못된 데이터 저장을 방지 (원래대로/다시변경하기 기능 구현)</p>
                                        <br />
                                        <p>- 팀원 관리(관리자페이지)</p>
                                        <p>ㆍ신청대기 인원이 있을 경우 신청대기 필터 옆에 인원이 보이는 기능 구현</p>
                                        <p>ㆍ팀원 데이터 변경 기능 구현(신청대기인원 수락/거절 | 팀원 등급변경/강제탈퇴)</p>
                                        <p>ㆍ팀원 정렬 기능 구현 (가입일,등급,닉네임)</p>
                                        <p>ㆍ팀원 검색 기능 구현 (닉네임)</p>
                                    </div>
                                    ,
                                    <div className='projectpagePartSection'>
                                        <h6>4. 게시물 (10:43 ~ )</h6>
                                        <p>- 창단 시</p>
                                        <p>ㆍ게시물 작성 버튼 클릭 시 서버로 로그인 상태인지 확인 후 비 로그인 상태면 로그인 창으로 이동 기능 구현</p>
                                        <br />
                                        <p>- 게시판 내 필터 기능</p>
                                        <p>ㆍ자유/후기/질문 말머리를 통해 필터 기능 구현</p>
                                        <br />
                                        <p>- 게시물 내 </p>
                                        <p>ㆍ페이지 마운드 시 데이터를 가져올 때 조회수+ 기능 구현</p>
                                        <p>ㆍ좋아요 기능 구현</p>
                                        <p>ㆍ댓글 기능 구현</p>
                                    </div>
                                    ,
                                    <div className='projectpagePartSection'>
                                        <h6>5. 마이페이지 (각각 파트별로 들어가있습니다.)</h6>
                                        <p>- 페이지 내</p>
                                        <p>ㆍreact-calendar 를 통해 나의 일정을 바로 확인 할 수 있는 기능 구현</p>
                                        <p>ㆍ알림을 통해 변동사항을 체크 할 수 있도록 하여 사용자의 편의성을 확보</p>
                                        <p>ㆍ내가 속한 팀을 메뉴에 배치하여 바로 팀 페이지로 이동 할 수 있도록 편의성을 확보</p>
                                        <p>ㆍ신청내역 및 작성 내역을 통해 나의 활동 내역을 확인 가능</p>
                                    </div>
                                ].map((val, idx) => {
                                    if (option === idx) return <>{val}</>
                                    return;
                                })}
                            </div>
                        </div>
                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>그 외 기능</h6>
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <h6>1. 데이터의 검증처리 </h6>
                                    <p>
                                        validation.js 라는 파일을 따로 만들어 Jol 를 사용하여 게스트 , 팀 , 게시물 작성시 데이터 검증을 API 단계에서 한번 진행했습니다.
                                    </p>
                                </div>
                                <div className='projectpagePartSection'>
                                    <h6>2. Transaction 사용 </h6>
                                    <p>
                                        한번의 POST 요청으로 최소 1개에서 최대 4개의 서로 다른 DB.collection이 insert,update,delete등 이 되는데 데이터 변경에 누락이 되지 않도록<br />
                                        Transaction을 사용하여 처리했습니다. (콜백방식을 사용했습니다. - https://www.mongodb.com/ko-kr/docs/drivers/node/v4.14/fundamentals/transactions/)
                                    </p>
                                </div>
                                <div className='projectpagePartSection'>
                                    <h6>2. Middleware </h6>
                                    <p>총 4개의 미들웨어를 활용하여 중복된 코드를 생략했습니다.</p>
                                    <p>Router를 구분하여 가독성을 높히도록 노력했습니다.</p>
                                </div>
                                <div className='projectpagePartSection'>
                                    <h6>4. 예외 처리</h6>
                                    <p>이용자는 개발자가 의도 한 대로 이용하지 않는다' 라는 문장을 생각하며 잘못된 상황에 따른 예외처리를 설정하였습니다.</p>
                                </div>
                            </div>
                        </div>
                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>API , Database 구조 보기</h6>
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <h6>1. API</h6>
                                    <p>
                                        현재 제작중입니다. 클릭 시 이미지 파일을 새창에서 열 예정입니다.
                                    </p>
                                </div>
                                <div className='projectpagePartSection'>
                                    <h6>2. Transaction 사용 </h6>
                                    <p>
                                        현재 제작중입니다. 클릭 시 이미지 파일을 새창에서 열 예정입니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        },
        5: function Projectpage5() {
            const siteUrl = 'https://web-diary-front-lyol1hka657e54ef.sel5.cloudtype.app/login';
            const navigate = useNavigate();
            const [option, setOption] = useState(0)
            return (
                <div className='ProjectpageWrap'>
                    <div className='projectpageHead'>
                        <h6>BaseBall Diary_ 5
                            <button
                                onClick={() => navigate('/')}
                            >메인으로</button>
                        </h6>
                        <p>야구 직관기록을 남기는 사이트</p>
                        <div className='proJectpageHeadButton'>
                            <button
                                onClick={() => window.open(siteUrl, '_blnck')}
                            >BaseBall_Diary</button>
                        </div>
                    </div>
                    <div className='projectpageBody'>
                        {/* ------------------------------------------- */}
                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Language / Library</h6>
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <h6>1. Front </h6>
                                    <p>React Moment React-Calendar </p>
                                </div>
                                <div className='projectpagePartSection'>
                                    <h6>2. Back </h6>
                                    <p>Node.js Express MongoDB Passport.js bcrypt connect-mongo Moment</p>
                                </div>
                            </div>
                        </div>

                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Function</h6>
                                <div className='red-dot dot' />
                                <div className='blue-dot dot' />
                                <div className='green-dot dot' />
                            </div>
                            <div className='projectpagePartOption'>
                                {['회원가입 및 로그인', '개인정보 수정', '다이어리'].map((val, idx) =>
                                    <div key={idx}
                                        className={option === idx ? "option" : " "}
                                        onClick={() => setOption(idx)}
                                    ><p>{val}</p></div>)}

                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection ProjectpageYoutube'>
                                    <iframe
                                        src="https://www.youtube.com/embed/zeX2BVDARNs"
                                        title="포트폴리오5"
                                        // frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowfullScreen>
                                    </iframe>
                                </div>
                                {[
                                    <div className='projectpagePartSection'>
                                        <h6>1. 회원가입 및 로그인 구현 (00:00 ~ 01:12) </h6>
                                        <p>ㆍ사용자가 데이터를 입력하면 즉각적인 검증을 잘 못된 데이터를 useState 변경을 통해 사용자에게 css animation 과 text로 재 입력 요구  </p>
                                        <p>ㆍ상용 서비스 회원가입처럼 동의사항 체크 기능 구현 (필수 동의사항 미 체크시 가입 방지)  </p>
                                        <p>ㆍ서식 및 중복 검증에 이상이 없으면 Post 요청을 통하여 <span className='red'>Passport를 통해 가입을 진행</span>, 비밀번호는 <span className='red'>bcrypt 라이브러리</span>를 통하여 보안성 증대.</p>
                                    </div>
                                    ,
                                    <div className='projectpagePartSection'>
                                        <h6>2. 개인정보 수정 (01:13 ~ 01:55)</h6>
                                        <p>ㆍ닉네임, 비밀번호, 응원팀 변경 기능 구현</p>
                                    </div>
                                    ,
                                    <div className='projectpagePartSection'>
                                        <h6>3. 다이어리 (01:56 ~)</h6>
                                        <p>- 작성 시 </p>
                                        <p>ㆍ기존의 설정 해 놓은 응원팀, 내가 고른 응원팀,상대편팀에 따라서 다른 데이터들의 option이 변경되어 사용자의 편의 확보 (css 변경 ,disable 처리 등) </p>
                                        <br />
                                        <p>- 나의 다이어리 페이지 내</p>
                                        <p>ㆍ작성,달력,통계 탭으로 구분하여 각각의 페이지를 마운드 기능을 구현</p>
                                        <p>ㆍ달력) React-calendar 를 통하여 나의 기록을 한 번에 확인 가능</p>
                                        <p>ㆍ통계) 나의 승률, 팀별전적 등등 다양한 기준으로 통계 확인 가능</p>
                                    </div>
                                ].map((val, idx) => {
                                    if (option === idx) return <>{val}</>
                                    return;
                                })}
                            </div>

                        </div>
                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Consideration</h6>
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <h6>1. 데이터의 예외처리 </h6>
                                    <p>
                                        데이터의 예외처리의 방법을 status에 맞게 처리를 하려고 노력했습니다.
                                    </p>
                                </div>
                                <div className='projectpagePartSection'>
                                    <h6>2. 데이터 검증 위치 </h6>
                                    <p>
                                        데이터의 검증을 프론트와 백 두 곳에서 진행 되었습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Desired things</h6>
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <h6></h6>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        4: function Projectpage4() {
            const navigate = useNavigate();
            const siteUrl = 'https://taurenhorde.github.io/pokemon/';
            const githubUrl = 'https://github.com/taurenHorde/pokemon';
            return (
                <div className='ProjectpageWrap'>
                    <div className='projectpageHead'>
                        <h6>PokeMon_ 4
                            <button
                                onClick={() => navigate('/')}
                            >메인으로</button>
                        </h6>
                        <p>포켓몬스터(1세대)를 6마리 고르는 사이트</p>
                        <div className='proJectpageHeadButton'>
                            <button
                                onClick={() => window.open(siteUrl, '_blnck')}
                            >Pokemon</button>
                            <button
                                onClick={() => window.open(githubUrl, '_blnck')}
                            >github</button>
                        </div>
                    </div>
                    <div className='projectpageBody'>
                        {/* ------------------------------------------- */}
                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Language / Library</h6>
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <p>React Redux-Toolkit  React-Bootstrap</p>
                                </div>
                            </div>
                        </div>

                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Function</h6>
                                <div className='red-dot dot' />
                                <div className='blue-dot dot' />
                                <div className='green-dot dot' />
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection ProjectpageYoutube'>
                                    <iframe
                                        src="https://www.youtube.com/embed/okJ1FB7gnCk"
                                        title="포트폴리오4"
                                        // frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowfullScreen>
                                    </iframe>
                                </div>
                                <div className='projectpagePartSection'>
                                    <p>ㆍReact-bootstrap을 통해 button, table 활용</p>
                                    <p>ㆍRedux-toolkit 데이터 저장,변경,삭제 기능을 통해 사용자가 입력한 데이터를 핸들링 </p>
                                    <p>ㆍ포켓몬 데이터 내 있는 속성을 기준으로 필터기능 구현 </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        },
        3: function Projectpage3() {
            const navigate = useNavigate();
            const siteUrl = 'https://taurenhorde.github.io/vue-dog/';
            const githubUrl = 'https://github.com/taurenHorde/vue-dog';
            return (
                <div className='ProjectpageWrap'>
                    <div className='projectpageHead'>
                        <h6>Dog_ 3
                            <button
                                onClick={() => navigate('/')}
                            >메인으로</button>
                        </h6>
                        <p>본인의 강아지 사진을 올리는 사이트</p>
                        <div className='proJectpageHeadButton'>
                            <button
                                onClick={() => window.open(siteUrl, '_blnck')}
                            >Dog</button>
                            <button
                                onClick={() => window.open(githubUrl, '_blnck')}
                            >github</button>
                        </div>
                    </div>
                    <div className='projectpageBody'>
                        {/* ------------------------------------------- */}
                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Language / Library</h6>
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <p>Vue</p>
                                </div>
                            </div>
                        </div>

                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Function</h6>
                                <div className='red-dot dot' />
                                <div className='blue-dot dot' />
                                <div className='green-dot dot' />
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <p>ㆍ데이터바인딩,반복문,이벤트핸들링 기능 구현</p>
                                    <p>ㆍcreateObjectURL 사용하여 사진 등록 기능을 구현 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        2: function Projectpage2() {
            const navigate = useNavigate();
            const siteUrl = 'https://taurenhorde.github.io/emotion/';
            const githubUrl = 'https://github.com/taurenHorde/emotion';
            return (
                <div className='ProjectpageWrap'>
                    <div className='projectpageHead'>
                        <h6>Emotion_ 2
                            <button
                                onClick={() => navigate('/')}
                            >메인으로</button>
                        </h6>
                        <p>명언을 보여주는 사이트</p>
                        <div className='proJectpageHeadButton'>
                            <button
                                onClick={() => window.open(siteUrl, '_blnck')}
                            >Emotion</button>
                            <button
                                onClick={() => window.open(githubUrl, '_blnck')}
                            >github</button>
                        </div>
                    </div>
                    <div className='projectpageBody'>
                        {/* ------------------------------------------- */}
                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Language / Library</h6>
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <p>Javascript / jQuery</p>
                                </div>
                            </div>
                        </div>

                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Function</h6>
                                <div className='red-dot dot' />
                                <div className='blue-dot dot' />
                                <div className='green-dot dot' />
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <p>ㆍScroll-y 값에 따라 해당 div의 transform을 변경하여 우측에서 좌측으로 이동하는 기능 구현</p>
                                </div>
                            </div>
                        </div>
                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Special note</h6>
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <p>ㆍwidth 1920  전체화면에서 확인 부탁드립니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        1: function Projectpage1() {
            const navigate = useNavigate();
            const siteUrl = 'https://taurenhorde.github.io/mummumi/';
            const githubUrl = 'https://github.com/taurenHorde/mummumi';
            return (
                <div className='ProjectpageWrap'>
                    <div className='projectpageHead'>
                        <h6>멈뭄미_ 1
                            <button
                                onClick={() => navigate('/')}
                            >메인으로</button>
                        </h6>
                        <p>일반적인 사이트 메인페이지 html/css 구조 구성</p>
                        <div className='proJectpageHeadButton'>
                            <button
                                onClick={() => window.open(siteUrl, '_blnck')}
                            >멈뭄미</button>
                            <button
                                onClick={() => window.open(githubUrl, '_blnck')}
                            >github</button>
                        </div>
                    </div>
                    <div className='projectpageBody'>
                        {/* ------------------------------------------- */}
                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Language / Library</h6>
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <p>Javascript</p>
                                </div>
                            </div>
                        </div>

                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>Function</h6>
                                <div className='red-dot dot' />
                                <div className='blue-dot dot' />
                                <div className='green-dot dot' />
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <p>ㆍ메뉴 hover 시 메뉴 확장 기능</p>
                                    <p>ㆍScroll-y 시 메뉴 Fix 및 css 변경 기능</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        0: function Projectpage0() {
            const navigate = useNavigate();
            return (
                <div className='ProjectpageWrap'>
                    <div className='projectpageHead'>
                        <h6>잘못된 접근입니다.</h6>
                        <p>잘못된 접근입니다.</p>
                    </div>
                    <div className='projectpageBody'>
                        {/* ------------------------------------------- */}
                        <div className='projectpagePartWarp'>
                            <div className='projectpagePartHead'>
                                <h6>해당 URL의 포트폴리오는 존재하지 않습니다.</h6>
                            </div>
                            <div className='projectpagePartBody'>
                                <div className='projectpagePartSection'>
                                    <p>뒤로가기 또는 하단에 있는 버튼을 눌러 메인페이지로 이동하시길 바랍니다.</p>
                                    <button
                                        onClick={() => navigate('/')}
                                        style={{ width: '200px', margin: '5px', padding: '5px', fontSize: '0.8rem' }}>
                                        메인페이지로 </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
})

let mainProjectComponets = createSlice({
    name: 'mainProjectComponets',
    initialState: [
        function ProjectWrap7(navi) {
            const project_number = 7;
            return (
                <>
                    <div className='projectHead'>
                        <h6>끝이 없는 끝말잇기 사이트_ 7 (제작중)</h6>
                    </div>
                    <div className='projectBody'>
                        <div className='projectSection'>
                            <h6>Description</h6>
                            <p>접속하는 모두가 진행하는 끝말잇기 (그냥끝첫말만 맞으면 ok)</p>
                        </div>
                        <div className='projectSection'>
                            <h6>Language / Library</h6>
                            <p>
                                <span>React</span>
                                <span>Typescript</span>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>MongoDB</span>
                            </p>
                        </div>
                        <div className='projectSection'>
                            <h6>Function</h6>
                            <p>Socket.io를 활용 </p>
                            <p>페이지 하나로 구현</p>
                            <p>재치있는 단어 또는 문장에게 남길 수 있는 감정표현 (카카오톡 기능처럼)</p>
                        </div>
                        <div className='projectSection'>
                            <h6>Consideration</h6>
                            <p>api, DB구조 작업을 해보니 기획 과정에서 API,DB 더 나아가 Router등 개발에 대한 기획을 완벽히 해야 중복된 데이터, 작업을 줄일 수 있다고 느꼈습니다.</p>
                        </div>
                    </div>
                    <div className='projectfooter'>
                        <button
                        // onClick={() => navi(project_number)}
                        >제작중</button>
                    </div>
                </>
            )
        },

        function ProjectWrap6(navi) {
            const project_number = 6;
            return (
                <>
                    <div className='projectHead'>
                        <h6>BaseBall Team_ 6</h6>
                    </div>
                    <div className='projectBody'>
                        <div className='projectSection'>
                            <h6>Description</h6>
                            <p>야구 팀을 만들어 팀원과 게스트를 구하는 사이트</p>
                        </div>
                        <div className='projectSection'>
                            <h6>Language / Library</h6>
                            <p>
                                <span>React</span>
                                <span>Typescript</span>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>MongoDB</span>
                                <span>Passport.js</span>
                                <span>KaKao Api</span>
                            </p>
                        </div>
                        <div className='projectSection'>
                            <h6>Function</h6>
                            <p>Transaction을 사용하여 DB 상태 변화 시 잘못된 변화를 방지</p>
                            <p>Moment을 사용하여 인스타그램 알림시간 형식 구현 (OO분전 / OO시간전)</p>
                            <p>React-Calendar를 통해 일정을 달력으로 관리 기능 구현 등등...</p>
                            <p>같은 작업이 필요한 Api는 Middleware 묶어서 가독성을 높힘</p>
                            <p>외부 API(kakao map)을 사용하여 경기장 위치를 지도로 구현</p>
                        </div>
                        <div className='projectSection'>
                            <h6>Consideration</h6>
                            <p>api, DB구조 작업을 해보니 기획 과정에서 API,DB 더 나아가 Router등 개발에 대한 기획을 완벽히 해야 중복된 데이터, 작업을 줄일 수 있다고 느꼈습니다.</p>
                        </div>
                    </div>
                    <div className='projectfooter'>
                        <button
                            onClick={() => navi(project_number)}
                        >자세히보기</button>
                    </div>
                </>
            )
        },

        function ProjectWrap5(navi) {
            const project_number = 5;
            return (
                <>
                    <div className='projectHead'>
                        <h6>BaseBall Diary_ 5</h6>
                    </div>
                    <div className='projectBody'>
                        <div className='projectSection'>
                            <h6>Description</h6>
                            <p>야구 직관기록을 남기는 사이트</p>
                        </div>
                        <div className='projectSection'>
                            <h6>Language / Library</h6>
                            <p>
                                <span>React</span>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>MongoDB</span>
                                <span>Passport.js</span>
                            </p>
                        </div>
                        <div className='projectSection'>
                            <h6>Function</h6>
                            <p>React-Calendar를 통해 일정을 달력으로 관리 기능 구현</p>
                            <p>사용자의 입력을 즉각적으로 서식체크를 하여 잘못된 데이터 저장 방지</p>
                        </div>
                        <div className='projectSection'>
                            <h6>Consideration</h6>
                            <p>프론트/서버 어디에서 데이터 검증을 해야하는게 좋은 지 많이 고민을 했습니다.</p>
                            <p>HTTP 요청 시 에러(예외)처리를 어떤 식으로 해야 관리가 용이 한지 많은 고민을 했습니다.</p>
                        </div>
                    </div>
                    <div className='projectfooter'>
                        <button
                            onClick={() => navi(project_number)}
                        >자세히보기</button>
                    </div>
                </>
            )
        },

        function ProjectWrap4(navi) {
            const project_number = 4;
            return (
                <>
                    <div className='projectHead'>
                        <h6>PokeMon_ 4</h6>
                    </div>
                    <div className='projectBody'>
                        <div className='projectSection'>
                            <h6>Description</h6>
                            <p>포켓몬스터(1세대)를 6마리 고르는 사이트</p>
                        </div>
                        <div className='projectSection'>
                            <h6>Language / Library</h6>
                            <p>
                                <span>React</span>
                                <span>Redux Toolkit</span>
                                <span>React Bootstrap</span>
                            </p>
                        </div>
                        <div className='projectSection'>
                            <h6>Function</h6>
                            <p>Redux Toolkit에 저장된 데이터 핸들링(CRUD) 기능 구현 </p>
                            <p>React Bootstrap을 사용하여 간단하게 테이블을 구현</p>
                        </div>
                        <div className='projectSection'>
                            <h6>Consideration</h6>
                            <p>Redux Toolkit이 편리하지만 어떤 상황에서 사용해야 좋은지 생각을 해봤습니다. </p>
                        </div>
                    </div>
                    <div className='projectfooter'>
                        <button
                            onClick={() => navi(project_number)}
                        >자세히보기</button>
                    </div>
                </>
            )
        },

        function ProjectWrap3(navi) {
            const project_number = 3;
            return (
                <>
                    <div className='projectHead'>
                        <h6>Dog_ 3</h6>
                    </div>
                    <div className='projectBody'>
                        <div className='projectSection'>
                            <h6>Description</h6>
                            <p>본인의 강아지 사진을 올리는 사이트</p>
                        </div>
                        <div className='projectSection'>
                            <h6>Language / Library</h6>
                            <p>
                                <span>Vue</span>
                            </p>
                        </div>
                        <div className='projectSection'>
                            <h6>Function</h6>
                            <p>Vue - 데이터바인딩,반복문,이벤트핸들링 기능 구현 </p>
                            <p>createObjectURL 사용하여 사진 등록 기능을 구현</p>
                        </div>
                        <div className='projectSection'>
                            <h6>Consideration</h6>
                            <p>Vue는 데이터 바인딩, 반복문이 간편하고 가독성이 좋다고 생각했습니다. </p>
                            <p>데이터 이름 아래 componets,props,methods 등등 한 눈에 볼 수 있어 이 또한 가독성이 좋다고 생각했습니다.</p>
                            <p>JS Class-Constructor 방식처럼 데이터를 핸들링할 수 있다는 점이 신기했습니다. (모든 데이터와 데이터가 변경될 수 있는 사항을 다 만들어 놓고 실행만 할 수 있는 방식)</p>
                        </div>
                    </div>
                    <div className='projectfooter'>
                        <button
                            onClick={() => navi(project_number)}
                        >자세히보기</button>
                    </div>
                </>
            )
        },

        function ProjectWrap2(navi) {
            const project_number = 2;
            return (
                <>
                    <div className='projectHead'>
                        <h6>Emotion_ 2</h6>
                    </div>
                    <div className='projectBody'>
                        <div className='projectSection'>
                            <h6>Description</h6>
                            <p>명언을 보여주는 사이트</p>
                        </div>
                        <div className='projectSection'>
                            <h6>Language / Library</h6>
                            <p>
                                <span>Javascript / jQuery</span>
                            </p>
                        </div>
                        <div className='projectSection'>
                            <h6>Function</h6>
                            <p>Scroll-y 값에 따라 해당 div의 transform을 변경하여 우측에서 좌측으로 이동하는 기능 구현</p>
                        </div>
                    </div>
                    <div className='projectfooter'>
                        <button
                            onClick={() => navi(project_number)}
                        >자세히보기</button>
                    </div>
                </>
            )
        },

        function ProjectWrap1(navi) {
            const project_number = 1;
            return (
                <>
                    <div className='projectHead'>
                        <h6>멈뭄미_ 1</h6>
                    </div>
                    <div className='projectBody'>
                        <div className='projectSection'>
                            <h6>Description</h6>
                            <p>일반적인 사이트 메인페이지 html/css 구조 구성</p>
                        </div>
                        <div className='projectSection'>
                            <h6>Language / Library</h6>
                            <p>
                                <span>Javascript</span>
                            </p>
                        </div>
                        <div className='projectSection'>
                            <h6>Function</h6>
                            <p>메뉴 hover 시 메뉴 확장 기능</p>
                            <p>Scroll-y 시 메뉴 Fix 및 css 변경 기능</p>
                        </div>
                    </div>
                    <div className='projectfooter'>
                        <button
                            onClick={() => navi(project_number)}
                        >자세히보기</button>
                    </div>
                </>
            )
        },

        // function ProjectWrap0(navi) {
        //     const project_number = 7;
        //     return (
        //         <>

        //         </>
        //     )
        // }
    ]
})







export default configureStore({
    reducer: {
        pageProjectComponets: pageProjectComponets.reducer,
        mainProjectComponets: mainProjectComponets.reducer
    }
}) 