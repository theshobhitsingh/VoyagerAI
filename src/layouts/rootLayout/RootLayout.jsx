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
                                             <a href="https://shobhit-singh.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                  <img src="https://github.com/theshobhitsingh/Portfolio/blob/main/public/My%20Profile/MyProfile.png?raw=true" alt="" /> Portfolio
                                             </a> 
                                        </li>
                                        <li>
                                             <a href="https://leetcode.com/u/shobhit_singh_leetcode/" target="_blank" rel="noopener noreferrer">
                                                  <img src="data:image/png;base64,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" alt="" /> LeetCode
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