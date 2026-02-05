import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: '이지플라워 - 기업 전문 화환 서비스',
    description: '기업 전문 화환 서비스, 이지플라워입니다. 주문 1건당 1만원 페이백!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
