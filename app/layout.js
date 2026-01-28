export const metadata = {
  title: "Vivek Vishvakarma | Growth Marketing Agency",
  description: "SEO, Ads & Ecommerce Growth Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}