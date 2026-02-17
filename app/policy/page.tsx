import Link from 'next/link';

export default function PolicyPage() {
    return (
        <main className="policy-container">
            {/* 헤더 */}
            <div className="policy-header">
                <Link href="/" className="back-btn">← 뒤로</Link>
                <h1 className="policy-title">리워드 정책</h1>
            </div>

            {/* 메인 배너 */}
            <div className="policy-banner">
                <div className="policy-banner-icon">💰</div>
                <div className="policy-banner-title">주문 1건당 1만원 적립!</div>
                <div className="policy-banner-sub">분기마다 모바일 상품권으로 돌려드려요</div>
            </div>

            {/* 정책 설명 */}
            <div className="policy-content">
                <h2 className="policy-section-title">📋 리워드란?</h2>
                <p className="policy-text">
                    이지플라워만의 회원 혜택입니다.<br />
                    주문하실 때마다 <strong>1건당 1만원</strong>이 적립되고,<br />
                    <strong>분기(3개월)</strong>가 끝나면 일주일 이내에 리워드 포인트를 <strong>상품권</strong>으로 돌려드려요!
                </p>

                <h2 className="policy-section-title">🎁 이용 방법</h2>
                <div className="policy-steps">
                    <div className="policy-step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <strong>주문하기</strong>
                            <p>카카오톡으로 화환을 주문해주세요</p>
                        </div>
                    </div>
                    <div className="policy-step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <strong>전화번호 등록</strong>
                            <p>적립용 전화번호를 알려주세요</p>
                        </div>
                    </div>
                    <div className="policy-step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <strong>자동 적립</strong>
                            <p>1건당 1만원 자동 적립</p>
                        </div>
                    </div>
                    <div className="policy-step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <strong>상품권 수령</strong>
                            <p>분기 말에 상품권으로 지급!</p>
                        </div>
                    </div>
                </div>

                <h2 className="policy-section-title">✨ 왜 이지플라워인가요?</h2>
                <div className="policy-benefits">
                    <div className="benefit-item">🚀 빠른 화환 배송</div>
                    <div className="benefit-item">💰 쌓이는 혜택</div>
                    <div className="benefit-item">🎁 분기별 상품권</div>
                    <div className="benefit-item">📞 카톡 간편 주문</div>
                </div>
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
                    <p>
                        <a href="/privacy" className="privacy-link">[개인정보처리방침]</a>
                    </p>
                </div>
                <p className="footer-copyright">© 2025 이지플라워. All rights reserved.</p>
            </footer>

            {/* 하단 버튼 */}
            <div className="policy-footer">
                <a href="http://pf.kakao.com/_lxleXn" className="order-cta" target="_blank" rel="noopener">
                    💬 지금 바로 주문하기
                </a>
            </div>
        </main>
    );
}
