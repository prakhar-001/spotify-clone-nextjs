import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Listen to music for Free!!!",
  manifest: "/manifest.json"
};

export const viewport = {
  themeColor: "#334155",
}

export const revalidate = 0;

export default async function RootLayout({ children }) {

  // const userSongs = await getSongsByUserId();
  const userSongs = [
    {
      id: 3,
      created_at: '2024-06-18T21:21:21.780739+00:00',
      title: 'Run Free',
      song_path: 'song-Run Free-lxkwrcxl',
      image_path: 'image-Run Free-lxkwrcxl',
      author: 'Deep Chills',
      user_id: '20e12acb-7135-468b-b668-8fa959674693'
    },
    {
      id: 2,
      created_at: '2024-06-18T21:18:14.00829+00:00',
      title: 'Chain',
      song_path: 'song-Chain-lxkwo1pi',
      image_path: 'image-Chain-lxkwo1pi',
      author: 'Bawa Gulzar',
      user_id: '20e12acb-7135-468b-b668-8fa959674693'
    },
    {
      id: 1,
      created_at: '2024-06-18T21:14:34.677136+00:00',
      title: 'Gracee',
      song_path: 'song-Gracee-lxkwk2s9',
      image_path: 'image-Gracee-lxkwk2s9',
      author: 'Babe Rexhaa',
      user_id: '20e12acb-7135-468b-b668-8fa959674693'
    }
  ];

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player/>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
