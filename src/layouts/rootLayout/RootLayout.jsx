import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const PUBLISHABLE_KEY = "pk_test_bG92ZWQta2l0LTY4LmNsZXJrLmFjY291bnRzLmRldiQ";
const queryClient = new QueryClient();

const RootLayout = () => {
     return (
          <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
               <QueryClientProvider client={queryClient}>
                    <div className="rootLayout">
                         <header>
                              <Link to="/" className="logo">
                                   <img src="/logo.png" alt="" />
                                   <span>VoyagerAI</span>
                              </Link>
                              <div className="social_links">
                                   <ul>
                                        <li>
                                             <a href="https://linkedin.com/in/shobhit-singh-the-programmer" target="_blank" rel="noopener noreferrer">
                                                  <img src="https://instadownloader-zeta.vercel.app/linkedin.svg" alt="" /> LinkedIn
                                             </a>
                                        </li>
                                        <li>
                                             <a href="https://github.com/theshobhitsingh" target="_blank" rel="noopener noreferrer">
                                                  <img src="https://instadownloader-zeta.vercel.app/github1.svg" alt="" /> GitHub
                                             </a>
                                        </li>
                                        <li>
                                             <a href="https://www.geeksforgeeks.org/user/shobhit_singh_gfg/" target="_blank" rel="noopener noreferrer">
                                                  <img src="https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda" alt="" />GfG
                                             </a>
                                        </li>
                                        <li>
                                             <a href="https://leetcode.com/shobhit_singh_leetcode/" target="_blank" rel="noopener noreferrer">
                                                  <img src="https://miro.medium.com/v2/resize:fit:2400/1*IC0JXUE3UEAfDfQnFyGtGA.jpeg" alt="" />LeetCode
                                             </a>
                                        </li>
                                        <li>
                                             <a href="https://shobhit-singh.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                  <img src="https://github.com/theshobhitsingh/Portfolio/blob/main/public/My%20Profile/MyProfile.png?raw=true" alt="" /> Portfolio
                                             </a>
                                        </li>

                                   </ul>
                              </div>

                              <div className="user">
                                   <SignedIn>
                                        <UserButton />
                                   </SignedIn>
                              </div>
                         </header>
                         <main>
                              <Outlet />
                         </main>
                    </div>
               </QueryClientProvider>
          </ClerkProvider>
     );
};

export default RootLayout;