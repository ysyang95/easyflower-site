import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <main className="policy-container">
            {/* 헤더 */}
            <div className="policy-header">
                <Link href="/" className="back-btn">← 뒤로</Link>
                <h1 className="policy-title">개인정보처리방침</h1>
            </div>

            {/* 개인정보처리방침 내용 */}
            <div className="policy-content privacy-content">
                <p className="policy-text">
                    <strong>(주)이지플라워</strong>(이하 "회사")는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                </p>

                <h2 className="policy-section-title">제1조 (개인정보의 처리 목적)</h2>
                <p className="policy-text">
                    회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                <ul className="policy-list">
                    <li><strong>재화 또는 서비스 제공:</strong> 화환 주문 처리, 배송 서비스 제공, 콘텐츠 제공, 맞춤서비스 제공</li>
                    <li><strong>고객 관리:</strong> 본인확인, 고객 상담 및 불만처리, 페이백 적립금 관리, 고지사항 전달</li>
                    <li><strong>마케팅 및 광고 활용:</strong> 신규 서비스 안내, 이벤트 및 광고성 정보 제공 (동의 시)</li>
                </ul>

                <h2 className="policy-section-title">제2조 (개인정보의 처리 및 보유 기간)</h2>
                <p className="policy-text">
                    ① 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                </p>
                <p className="policy-text">
                    ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                </p>
                <ul className="policy-list">
                    <li><strong>고객 관리:</strong> 서비스 이용계약 또는 회원가입 해지시까지 (단, 관계 법령 위반에 따른 수사·조사 등이 진행중인 경우에는 해당 수사·조사 종료 시까지)</li>
                    <li><strong>재화 또는 서비스 제공:</strong> 재화·서비스 공급완료 및 요금결제·정산 완료시까지</li>
                </ul>
                <p className="policy-text">
                    ③ 관계법령에 따른 보존기간:
                </p>
                <ul className="policy-list">
                    <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
                    <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)</li>
                    <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
                    <li>표시·광고에 관한 기록: 6개월 (전자상거래법)</li>
                    <li>통신비밀보호법에 따른 통신사실확인자료: 3개월~12개월</li>
                </ul>

                <h2 className="policy-section-title">제3조 (처리하는 개인정보의 항목)</h2>
                <p className="policy-text">
                    회사는 서비스 제공을 위해 다음과 같은 개인정보 항목을 처리합니다.
                </p>
                <ul className="policy-list">
                    <li><strong>필수항목:</strong> 주문자명, 연락처(휴대전화번호), 배송지 주소, 수취인명, 수취인 연락처</li>
                    <li><strong>선택항목:</strong> 이메일 주소, 경조사 문구</li>
                    <li><strong>자동수집항목:</strong> 서비스 이용기록, 접속 IP 정보, 접속 일시</li>
                </ul>

                <h2 className="policy-section-title">제4조 (개인정보의 제3자 제공)</h2>
                <p className="policy-text">
                    ① 회사는 원칙적으로 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서 처리하며, 정보주체의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.
                </p>
                <p className="policy-text">
                    ② 다만, 다음의 경우에는 개인정보를 제3자에게 제공할 수 있습니다.
                </p>
                <ul className="policy-list">
                    <li>정보주체가 사전에 동의한 경우</li>
                    <li>법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우</li>
                    <li>정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우</li>
                </ul>
                <p className="policy-text">
                    ③ 배송 업무를 위해 배송업체(화환 배송사)에 필요한 정보(수취인명, 연락처, 주소)를 제공합니다.
                </p>

                <h2 className="policy-section-title">제5조 (개인정보의 파기절차 및 방법)</h2>
                <p className="policy-text">
                    ① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                </p>
                <p className="policy-text">
                    ② 파기절차: 불필요한 개인정보는 개인정보 무단 유출 방지를 위해 지체없이 파기합니다.
                </p>
                <p className="policy-text">
                    ③ 파기방법: 전자적 파일 형태의 정보는 복구 및 재생되지 않도록 기록을 파기하며, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각합니다.
                </p>

                <h2 className="policy-section-title">제6조 (정보주체와 법정대리인의 권리·의무 및 행사방법)</h2>
                <p className="policy-text">
                    ① 정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                </p>
                <p className="policy-text">
                    ② 권리 행사는 회사에 대해 「개인정보 보호법」 시행령 제41조 제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.
                </p>
                <p className="policy-text">
                    ③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
                </p>
                <p className="policy-text">
                    ④ 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 「개인정보 보호법」 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
                </p>

                <h2 className="policy-section-title">제7조 (개인정보의 안전성 확보조치)</h2>
                <p className="policy-text">
                    회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                </p>
                <ul className="policy-list">
                    <li><strong>관리적 조치:</strong> 내부관리계획 수립·시행, 개인정보 취급 직원의 최소화 및 교육</li>
                    <li><strong>기술적 조치:</strong> 개인정보처리시스템 등의 접근권한 관리 (비밀번호 설정 등), 보안프로그램 설치</li>
                </ul>

                <h2 className="policy-section-title">제8조 (개인정보 자동 수집 장치의 설치·운영 및 거부)</h2>
                <p className="policy-text">
                    회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다. 이용자는 웹브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 이 경우 맞춤 서비스 이용에 어려움이 있을 수 있습니다.
                </p>

                <h2 className="policy-section-title">제9조 (개인정보 보호책임자)</h2>
                <p className="policy-text">
                    회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="privacy-contact-box">
                    <p><strong>개인정보 보호책임자</strong></p>
                    <p>성명: 홍석준</p>
                    <p>직책: 대표이사</p>
                    <p>연락처: 010-3304-5222</p>
                    <p>이메일: easyflower.order1@gmail.com</p>
                </div>
                <p className="policy-text">
                    정보주체께서는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                </p>

                <h2 className="policy-section-title">제10조 (권익침해 구제방법)</h2>
                <p className="policy-text">
                    정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
                </p>
                <ul className="policy-list">
                    <li>개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)</li>
                    <li>개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</li>
                    <li>대검찰청: (국번없이) 1301 (www.spo.go.kr)</li>
                    <li>경찰청: (국번없이) 182 (ecrm.cyber.go.kr)</li>
                </ul>

                <h2 className="policy-section-title">제11조 (개인정보 처리방침 변경)</h2>
                <p className="policy-text">
                    ① 이 개인정보처리방침은 2025년 2월 5일부터 적용됩니다.
                </p>
                <p className="policy-text">
                    ② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
                </p>
                <p className="policy-text">
                    - 2025년 1월 1일 ~ 2025년 2월 4일 적용 (이전 버전 없음)
                </p>
            </div>

            {/* 법적 정보 푸터 */}
            <footer className="footer page-footer">
                <div className="footer-legal">
                    <p>
                        상호명: (주)이지플라워 | 대표자: 홍석준 | 사업자등록번호: 166-81-03311
                    </p>
                    <p>
                        통신판매업신고: 2026-서울영등포-352 | TEL: 010-3304-5222
                    </p>
                    <p>
                        주소: 서울 영등포구 국회대로36길 6-1 2층 J424호
                    </p>
                </div>
                <p className="footer-copyright">© 2025 이지플라워. All rights reserved.</p>
            </footer>
        </main>
    );
}
