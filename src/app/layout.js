export const metadata = {
  title: "Бат-Ирээдүй Portfolio",
  description: "Миний хувийн танилцуулгын вэб сайт",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}