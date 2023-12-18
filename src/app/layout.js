import './globals.css'


export const metadata = {
  title: 'Rejouice ',
  description: 'Clone of rejouice.com for brushing up css skills.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}