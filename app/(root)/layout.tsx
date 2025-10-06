import Header from "@/components/Header"

const Home = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="min-h-screen text-gray-400">
      <Header />

      <div className="container py-10">
        {children}
      </div>
    </main>
  )
}

export default Home
