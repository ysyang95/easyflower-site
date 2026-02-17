import Link from 'next/link';

export default function OrderPage() {
    return (
        <main className="order-container">
            {/* 헤더 */}
            <div className="order-header">
                <Link href="/" className="back-btn">← 뒤로</Link>
                <h1 className="order-title">주문 안내</h1>
            </div>

            {/* 주문 방법 섹션 */}
            <section className="order-section">
                <div className="order-section-icon">📌</div>
                <h2 className="order-section-title">주문 방법</h2>
                <p className="order-text">
                    카카오톡 채널에서 원하시는 화환 종류를 선택하시면, 주문에 필요한 정보를 안내해 드립니다.
                </p>

                <div className="order-tip">
                    💡 부고 문자 캡처 또는 청첩장 링크로 대체 가능합니다!
                </div>

                <div className="order-info-list">
                    <div className="order-info-item">
                        <span className="info-number">1</span>
                        <div className="info-content">
                            <strong>받는 분 정보</strong>
                            <p>성함 및 관계</p>
                        </div>
                    </div>
                    <div className="order-info-item">
                        <span className="info-number">2</span>
                        <div className="info-content">
                            <strong>배송지</strong>
                            <p>장소명 + 주소 (예: ○○홀, ○○호실 등)</p>
                        </div>
                    </div>
                    <div className="order-info-item">
                        <span className="info-number">3</span>
                        <div className="info-content">
                            <strong>보내는 분</strong>
                            <p>회사명 + 성함</p>
                        </div>
                    </div>
                    <div className="order-info-item">
                        <span className="info-number">4</span>
                        <div className="info-content">
                            <strong>리본 문구</strong>
                            <p>요청이 없으면 기본 문구로 제작됩니다</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 결제 안내 섹션 */}
            <section className="order-section">
                <div className="order-section-icon">💰</div>
                <h2 className="order-section-title">결제 안내</h2>

                {/* 현금 */}
                <div className="payment-card">
                    <div className="payment-card-header cash">
                        <span className="payment-icon">💵</span>
                        <h3>현금 (계좌이체)</h3>
                    </div>
                    <div className="payment-card-body">
                        <div className="account-info">
                            <p className="bank-name">기업은행</p>
                            <p className="account-number">540-055355-04-012</p>
                            <p className="account-holder">예금주: (주)이지플라워</p>
                        </div>
                    </div>
                </div>

                {/* 카드 */}
                <div className="payment-card">
                    <div className="payment-card-header card">
                        <span className="payment-icon">💳</span>
                        <h3>카드</h3>
                    </div>
                    <div className="payment-card-body">
                        <ul className="payment-list">
                            <li>카카오톡으로 <strong>카드 사진</strong>을 보내주시거나, <strong>카드번호 + 유효기간</strong>을 알려주세요</li>
                            <li>기등록된 카드가 있는 경우, 해당 카드로 결제됩니다</li>
                            <li>별도 요청이 없는 한, 다음 주문부터는 <strong>등록된 카드로 자동 결제</strong>됩니다</li>
                        </ul>
                    </div>
                </div>

                {/* 외상 */}
                <div className="payment-card">
                    <div className="payment-card-header credit">
                        <span className="payment-icon">📋</span>
                        <h3>외상 (후불)</h3>
                    </div>
                    <div className="payment-card-body">
                        <ul className="payment-list">
                            <li><strong>사업자등록증</strong> + <strong>담당자 이메일</strong> 필요</li>
                            <li>익월 10일까지 <strong>세금(전자)계산서</strong> 발행</li>
                            <li>익월 말일까지 <strong>입금</strong> 부탁드립니다</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 기타 안내 */}
            <section className="order-section">
                <div className="order-section-icon">ℹ️</div>
                <h2 className="order-section-title">기타 안내</h2>
                <ul className="payment-list extra-info">
                    <li><strong>영수증</strong> 또는 <strong>세금(전자)계산서</strong> 필요 시 별도 요청해 주세요</li>
                    <li>세금계산서 발행 시 <strong>사업자등록증</strong> + <strong>담당자 이메일</strong>이 필요합니다</li>
                </ul>
            </section>

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
                    <p>
                        <a href="/privacy" className="privacy-link">[개인정보처리방침]</a>
                    </p>
                </div>
                <p className="footer-copyright">© 2025 이지플라워. All rights reserved.</p>
            </footer>

            {/* 하단 고정 버튼 */}
            <div className="order-footer">
                <a href="http://pf.kakao.com/_lxleXn" className="order-cta" target="_blank" rel="noopener">
                    💬 카카오톡으로 주문하기
                </a>
            </div>
        </main>
    );
}
