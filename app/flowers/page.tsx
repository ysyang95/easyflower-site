import Link from 'next/link';

// 화환 데이터 - 파일명 기반
const flowers = [
    { id: 1, name: '축하화환', price: '₩100,000', image: '/flowers/축하화환.jpg' },
    { id: 2, name: '근조화환', price: '₩100,000', image: '/flowers/근조화환.jpg' },
    { id: 3, name: '동양란', price: '₩100,000', image: '/flowers/동양란.png' },
    { id: 4, name: '서양란', price: '₩100,000', image: '/flowers/서양란.jpg' },
    { id: 5, name: '스투키', price: '₩100,000', image: '/flowers/스투키.jpg' },
    { id: 6, name: '금전수', price: '₩100,000', image: '/flowers/금전수.jpg' },
];

export default function FlowersPage() {
    return (
        <main className="flowers-container">
            {/* 헤더 */}
            <div className="flowers-header">
                <Link href="/" className="back-btn">← 뒤로</Link>
                <h1 className="flowers-title">화환 종류</h1>
            </div>

            {/* 화환 슬라이더 */}
            <div className="flowers-slider">
                {flowers.map((flower) => (
                    <div key={flower.id} className="flower-card">
                        <img
                            src={flower.image}
                            alt={flower.name}
                            className="flower-image"
                        />
                        <div className="flower-info">
                            <h3 className="flower-name">{flower.name}</h3>
                            <p className="flower-price">{flower.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 안내 문구 */}
            <p className="flowers-guide">← 옆으로 스와이프하세요 →</p>

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
            <div className="flowers-footer">
                <a href="http://pf.kakao.com/_lxleXn" className="order-cta" target="_blank" rel="noopener">
                    💬 카카오톡으로 주문하기
                </a>
            </div>
        </main>
    );
}
