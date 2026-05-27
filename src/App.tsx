import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CategoryStrip } from './components/CategoryStrip'
import { MovieRow, type Movie } from './components/MovieRow'
import { LiveSport } from './components/LiveSport'
import { Footer } from './components/Footer'
import './styles.css'

import m1 from './assets/m1.jpg'
import m2 from './assets/m2.jpg'
import m3 from './assets/m3.jpg'
import m4 from './assets/m4.jpg'
import m5 from './assets/m5.jpg'
import m7 from './assets/m7.jpg'
import m8 from './assets/m8.jpg'

const trending: Movie[] = [
  { title: 'Neon Horizon', meta: '2025 · Sci‑Fi · 4K HDR', img: m1 },
  { title: 'Last Strike', meta: '2024 · Action · 4K', img: m2 },
  { title: 'Seoul Hearts', meta: 'K‑Drama · 16 Eps', img: m3 },
  { title: 'Tiny Heroes', meta: 'Cartoon · Family', img: m4 },
  { title: 'The Vanishing', meta: 'Series · S2', img: m5 },
  { title: "Dragon's Vow", meta: '2025 · Fantasy', img: m8 },
]

const latest: Movie[] = [
  { title: "Dragon's Vow", meta: '2025 · Fantasy Epic', img: m8 },
  { title: 'Neon Horizon', meta: '2025 · Sci‑Fi Thriller', img: m1 },
  { title: 'Tiny Heroes', meta: '2025 · Animated', img: m4 },
  { title: 'Last Strike', meta: '2024 · Action', img: m2 },
  { title: 'The Vanishing', meta: '2025 · Mystery', img: m5 },
  { title: 'Seoul Hearts', meta: '2025 · Romance', img: m3 },
]

const classics: Movie[] = [
  { title: 'Midnight Lane', meta: '1962 · Noir Classic', img: m7 },
  { title: 'Last Strike', meta: '1988 · Restored 4K', img: m2 },
  { title: "Dragon's Vow", meta: '1995 · Cult Favorite', img: m8 },
  { title: 'Neon Horizon', meta: '1984 · Sci‑Fi', img: m1 },
  { title: 'Midnight Lane II', meta: '1969 · Noir', img: m7 },
]

const kdrama: Movie[] = [
  { title: 'Seoul Hearts', meta: '16 Episodes · Hit', img: m3 },
  { title: 'Crimson Veil', meta: 'Romance Thriller', img: m5 },
  { title: 'Sunset Han', meta: 'Coming of Age', img: m3 },
  { title: 'Last Goodbye', meta: 'Melodrama · S1', img: m1 },
  { title: 'Moonlit', meta: 'Historical · 20 Eps', img: m8 },
]

const cartoons: Movie[] = [
  { title: 'Tiny Heroes', meta: 'Family Adventure', img: m4 },
  { title: 'Spark & Co.', meta: 'Comedy · Kids', img: m4 },
  { title: 'Forest Friends', meta: 'Preschool', img: m4 },
  { title: 'Sky Pirates', meta: 'Action · Animated', img: m4 },
]

export default function App() {
  return (
    <main className="bg-background min-h-screen text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <CategoryStrip />
      <MovieRow title="Trending Now in 3D" movies={trending} />
      <MovieRow title="Latest Releases" movies={latest} />
      <MovieRow title="K-Drama Spotlight" movies={kdrama} />
      <LiveSport />
      <MovieRow title="Classic Cinema · Remastered" movies={classics} />
      <MovieRow title="Cartoons for All Ages" movies={cartoons} />
      <Footer />
    </main>
  )
}
