export default function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
