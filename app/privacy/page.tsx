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
                    회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                <ul className="policy-list">
                    <li><strong>재화 또는 서비스 제공:</strong> 화환 주문 접수 및 배송, 간편 결제 등록 및 결제 처리, 세금계산서 및 영수증 발행</li>
                    <li><strong>고객 관리 및 혜택 제공:</strong> 주문 담당자 식별, 리워드 적립 및 제공, 불만 처리, 배송 완료 안내</li>
                    <li><strong>마케팅 활용:</strong> 신규 서비스 안내 및 이벤트 정보 제공 (동의 시)</li>
                </ul>

                <h2 className="policy-section-title">제2조 (처리하는 개인정보의 항목)</h2>
                <p className="policy-text">
                    회사는 원활한 주문 및 결제 지원을 위해 다음과 같은 항목을 수집·처리합니다.
                </p>
                <ul className="policy-list">
                    <li><strong>필수항목 (주문/배송):</strong> 주문자 정보(회사명, 담당자명, 연락처), 배송 정보(수취인명, 수취인 연락처, 배송지 주소)</li>
                    <li><strong>필수항목 (결제):</strong> 신용카드 정보(카드번호, 유효기간, 할부개월), 결제 승인 내역 또는 계좌이체 정보</li>
                    <li><strong>선택항목 (리워드/마케팅):</strong> 리워드 지급 및 안내를 위한 담당자 정보(성명, 연락처)</li>
                </ul>

                <h2 className="policy-section-title">제3조 (개인정보의 처리 및 보유 기간)</h2>
                <p className="policy-text">
                    ① 회사는 법령에 따른 보유기간 또는 정보주체로부터 동의 받은 보유기간 내에서 개인정보를 처리·보유합니다.
                </p>
                <p className="policy-text">
                    ② 구체적인 보유 기간은 다음과 같습니다.
                </p>
                <ul className="policy-list">
                    <li><strong>카드 결제 정보:</strong> 고객의 간편 결제 지원을 위해 서비스 이용 계약 유지 기간 동안 보관 (고객의 삭제 요청 시 즉시 파기)</li>
                    <li><strong>주문 및 배송 정보:</strong> 원활한 재주문 지원 및 배송 관리를 위해 서비스 이용 계약 유지 기간 동안 보관 (단, 법적 증빙을 위해 5년간 보관)</li>
                    <li><strong>리워드 관리 정보:</strong> 리워드 지급 완료 또는 거래 종료 시까지</li>
                </ul>
                <p className="policy-text">
                    ③ 관계법령에 따른 보존기간:
                </p>
                <ul className="policy-list">
                    <li>대금결제 및 재화 공급에 관한 기록: 5년 (전자상거래법 등)</li>
                    <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                </ul>

                <h2 className="policy-section-title">제4조 (개인정보 처리업무의 위탁)</h2>
                <p className="policy-text">
                    ① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                </p>
                <ul className="policy-list">
                    <li>
                        <strong>1. 화환 제작 및 배송:</strong> 럭시플로라 유한책임회사 (및 해당 업체의 제휴 화원사)
                        <br />- 위탁 업무: 화환 제작, 배송, 배송 완료 사진 전송
                    </li>
                    <li>
                        <strong>2. 결제 처리:</strong> 한국신용카드결제(KOCES)
                        <br />- 위탁 업무: 신용카드 단말기 유지보수, 결제 승인 및 매입 처리
                    </li>
                </ul>
                <p className="policy-text">
                    ② 회사는 위탁계약 체결 시 관련 법령에 따라 수탁자가 개인정보를 안전하게 처리하는지 관리·감독하고 있습니다.
                </p>

                <h2 className="policy-section-title">제5조 (개인정보의 파기)</h2>
                <p className="policy-text">
                    ① 회사는 개인정보 보유기간의 경과, 처리목적 달성, 서비스 해지 등 개인정보가 불필요하게 되었을 때에는 해당 정보를 파기합니다.
                </p>
                <p className="policy-text">
                    ② 파기방법: 전자적 파일 형태는 복구 및 재생되지 않도록 기술적인 방법으로 파기하며, 종이 문서는 분쇄하거나 소각합니다.
                </p>

                <h2 className="policy-section-title">제6조 (정보주체의 권리·의무 및 행사방법)</h2>
                <p className="policy-text">
                    ① 정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                </p>
                <p className="policy-text">
                    ② 권리 행사는 회사의 대표전화, 이메일, 카카오톡 메신저를 통해 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
                </p>
                <p className="policy-text">
                    ③ 특히 마케팅 정보 수신을 원치 않을 경우, 회사의 대표전화나 카카오톡 등을 통해 언제든지 수신 거부(철회)를 요청할 수 있으며, 회사는 즉시 조치합니다.
                </p>

                <h2 className="policy-section-title">제7조 (개인정보의 안전성 확보조치)</h2>
                <p className="policy-text">
                    회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                </p>
                <ul className="policy-list">
                    <li><strong>관리적 조치:</strong> 정기적인 직원 교육, 개인정보 취급자 최소화</li>
                    <li><strong>기술적 조치:</strong> 보안프로그램 설치, 업무용 PC 및 메신저 비밀번호 설정, 결제 정보의 안전한 저장 및 관리</li>
                    <li><strong>물리적 조치:</strong> 서류자료 잠금 보관 및 폐기</li>
                </ul>

                <h2 className="policy-section-title">제8조 (개인정보 보호책임자)</h2>
                <p className="policy-text">
                    회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 불만처리 및 피해구제를 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="privacy-contact-box">
                    <p><strong>개인정보 보호책임자</strong></p>
                    <p>성명: 홍석준</p>
                    <p>직책: 대표이사</p>
                    <p>연락처: 010-3304-5222 / easyflower.order1@gmail.com</p>
                </div>

                <h2 className="policy-section-title">제9조 (권익침해 구제방법)</h2>
                <ul className="policy-list">
                    <li>개인정보침해 신고센터: (국번없이) 118 (privacy.kisa.or.kr)</li>
                    <li>개인정보분쟁조정위원회: 1833-6972 (www.kopico.go.kr)</li>
                </ul>

                <h2 className="policy-section-title">제10조 (개인정보의 국외 보관)</h2>
                <p className="policy-text">
                    회사는 데이터의 안전한 보관 및 백업을 위하여 아래와 같이 국외 클라우드 서비스를 이용하고 있습니다.
                </p>
                <div className="privacy-contact-box">
                    <p><strong>이전(보관)받는 자: Google LLC</strong></p>
                    <p>이전(보관) 국가: 미국 (전 세계 데이터센터 분산 저장)</p>
                    <p>이전(보관) 항목: 주문 관리 내역 및 서비스 이용 기록</p>
                    <p>보관 목적 및 기간: 서비스 제공을 위한 데이터 보관 / 거래 종료 시까지</p>
                </div>

                <h2 className="policy-section-title">제11조 (시행일)</h2>
                <p className="policy-text">
                    이 개인정보 처리방침은 2026년 2월 3일부터 적용됩니다. 이전에 적용된 개인정보 처리방침은 없습니다. (신규 제정)
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
