import "./index.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        {/* <body className="flex flex-col"> */}
        <div className="h-[100%] flex-1 flex flex-col">
          {/* 头部 */}
          <Header />
          <div className="mt-[20px] h-full flex flex-1">
            {/* 侧边栏 */}
            <Sidebar className="h-full" />
            <div className="flex-1 ml-[20px]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
