import '@/app/ui/global.css';
import {inter} from './ui/fonts';
//it is better to declare global css in root layout 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
