import Link from 'next/link';

export default function Home() {
    return (
        <main className="container">
            {/* 로고 섹션 */}
            <div className="logo-section">
                <img src="/logo.jpg" alt="Easy Flower 이지플라워" className="logo-image" />
            </div>

            {/* 메인 타이틀 */}
            <h1 className="main-title">기업 전문 화환, 이지플라워입니다</h1>
            <p className="sub-title">언제 어디서든 빠르게 경조사 화환을 제공해 드립니다</p>

            {/* 페이백 배너 - 클릭 가능 */}
            <Link href="/policy" className="payback-banner">
                <div className="payback-icon">💰</div>
                <div className="payback-content">
                    <div className="payback-title">주문 1건당 1만원 페이백!</div>
                    <div className="payback-desc">특별한 고객님을 위한 이지플라워만의 혜택입니다</div>
                </div>
            </Link>

            {/* 버튼 영역 - 2개 나란히 */}
            <div className="button-section">
                <div className="button-row">
                    <a href="http://pf.kakao.com/_lxleXn" className="action-btn kakao" target="_blank" rel="noopener">
                        💬 카카오톡 채널
                    </a>
                    <Link href="/flowers" className="action-btn flowers">
                        🌸 화환 종류
                    </Link>
                </div>
            </div>

            {/* 푸터 */}
            <footer className="footer">
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
        </main>
    );
}
