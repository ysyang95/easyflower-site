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
                    <li>서비스 제공: 화환 주문 처리, 배송 서비스 제공</li>
                    <li>고객 관리: 고객 상담, 페이백 적립금 관리</li>
                    <li>마케팅 활용: 이벤트 정보 제공 (동의 시)</li>
                </ul>

                <h2 className="policy-section-title">제2조 (수집하는 개인정보 항목)</h2>
                <p className="policy-text">
                    회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.
                </p>
                <ul className="policy-list">
                    <li><strong>필수항목:</strong> 이름, 연락처(전화번호), 배송지 주소</li>
                    <li><strong>선택항목:</strong> 이메일 주소</li>
                </ul>

                <h2 className="policy-section-title">제3조 (개인정보의 처리 및 보유 기간)</h2>
                <p className="policy-text">
                    회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                </p>
                <ul className="policy-list">
                    <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
                    <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
                    <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                </ul>

                <h2 className="policy-section-title">제4조 (개인정보의 제3자 제공)</h2>
                <p className="policy-text">
                    회사는 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 정보주체의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다. 단, 배송 업무를 위해 배송업체에 필요한 정보(이름, 연락처, 주소)를 제공할 수 있습니다.
                </p>

                <h2 className="policy-section-title">제5조 (개인정보의 파기)</h2>
                <p className="policy-text">
                    회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                </p>

                <h2 className="policy-section-title">제6조 (정보주체의 권리·의무 및 행사방법)</h2>
                <p className="policy-text">
                    정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                </p>
                <ul className="policy-list">
                    <li>개인정보 열람 요구</li>
                    <li>오류 등이 있을 경우 정정 요구</li>
                    <li>삭제 요구</li>
                    <li>처리정지 요구</li>
                </ul>

                <h2 className="policy-section-title">제7조 (개인정보 보호책임자)</h2>
                <div className="privacy-contact-box">
                    <p><strong>개인정보 보호책임자</strong></p>
                    <p>성명: 홍석준</p>
                    <p>직책: 대표</p>
                    <p>연락처: 010-3304-5222</p>
                    <p>이메일: easyflower.order1@gmail.com</p>
                </div>

                <h2 className="policy-section-title">제8조 (개인정보 처리방침 변경)</h2>
                <p className="policy-text">
                    이 개인정보 처리방침은 2025년 1월 1일부터 적용됩니다.
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
