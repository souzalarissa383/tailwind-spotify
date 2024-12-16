import { HorizontalCard } from '../components/cards/HorizontalCard';
import { VerticalCard } from '../components/cards/VerticalCard';
import { Footer } from '../components/Footer';
import { Icon } from '../components/Icon';
import { Sidebar } from '../components/Sidebar';
import { SpriteCategories } from '../shared/enums/SpriteCategories';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <section className="flex items-center gap-4">
          <button className="rounded-full bg-black/20 p-1 disabled:bg-black/5 disabled:text-zinc-100/20 enabled:hover:bg-black/80 transition-colors ease-in-out duration-300">
          <Icon
                category={SpriteCategories.ARROWS}
                name="chevron-left"
                size="lg"
              />
            </button>
            <button
              disabled
              className="rounded-full bg-black/20 p-1 disabled:bg-black/5 disabled:text-zinc-100/20 enabled:hover:bg-black/80 transition-colors ease-in-out duration-300"
            >
              <Icon
                category={SpriteCategories.ARROWS}
                name="chevron-right"
                size="lg"
              />
            </button>
          </section>

          <h1 className="font-semibold text-3xl mt-10 text-white">Good Afternoon</h1>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <HorizontalCard
              album="Busco Romance Love Show"
              artist="SZA"
              cover="/assets/media/album08.jpg"
              href="#"
            />
            <HorizontalCard
              album="Taurus, Vol. 2"
              artist="Artist/Band"
              cover="/assets/media/album09.jpg"
              href="#"
            />
            <HorizontalCard
              album="CAJU"
              artist="Artist/Band"
              cover="/assets/media/album10.jpg"
              href="#"
            />
          </section>

          <h2 className="font-semibold text-2xl mt-10 text-white">
            Made for Larissa Souza
          </h2>
          <section className="grid md:grid-cols-5 grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
            <VerticalCard
              album="Descobertas da Semana"
              artist="Artist/Band"
              cover="/assets/media/image-01.jpg"
              href="#"
            />
            <VerticalCard
              album="FLO, Summer Walker, Beyoncé e mais"
              artist="Artist/Band"
              cover="/assets/media/image-05.jpg"
              href="#"
            /> 
            <VerticalCard
              album="Budah, BK, Luccas Carlos e mais"
              artist="Artist/Band"
              cover="/assets/media/image-02.jpg"
              href="#"
            /> 
            <VerticalCard
              album="Drake, Kanye West, Mac Miller e mais"
              artist="Artist/Band"
              cover="/assets/media/image-06.jpg"
              href="#"
            />
            
             
            <VerticalCard
              album="The Weeknd, PARTYNEXTDOOR, 7latenights e mais"
              artist="Artist/Band"
              cover="/assets/media/image-03.jpg"
              href="#"
            />
            
            <VerticalCard
              album="IZA, Anitta, Gloria Groove e mais"
              artist="Artist/Band"
              cover="/assets/media/image-04.jpg"
              href="#"
            />
          
          </section>
          <h2 className="font-semibold text-2xl mt-10 text-white">
                Your songs are missed
          </h2>
          <section className="grid md:grid-cols-5 grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
            <VerticalCard
              album="Lucas"
              artist="Anchietx, Os Garotin"
              cover="/assets/media/album02.jpg"
              href="#"
            />
            <VerticalCard
              album="AFRODHIT"
              artist="IZA"
              cover="/assets/media/album03.jpg"              
              href="#"
            /> 
            <VerticalCard
              album="Vinho"
              artist="Delacruz"
              cover="/assets/media/album04.jpg"
              href="#"
            /> 
            <VerticalCard
              album="Dois"
              artist="Luccas Carlos"
              cover="/assets/media/album05.jpg"
              href="#"
            />
            <VerticalCard
              album="TROCA ENTRE NÓS "
              artist="Ju Cizar"
              cover="/assets/media/album06.jpg"
              href="#"
            />
            <VerticalCard
              album="Púrpura"
              artist="Budah"
              cover="/assets/media/album07.jpg"
              href="#"
            />
          </section>
        </main>
      </div>

      <Footer
        artist="Lady Gaga"
        cover="/assets/media/album.jpg"
        music="The Edge Of Glory"
      />
    </div>
  );
}