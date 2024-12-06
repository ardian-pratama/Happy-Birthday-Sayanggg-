import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import cake from '@/assets/birthday-cake-svgrepo-com (3).svg';
import calendar from '@/assets/calendar-svgrepo-com.svg';
import love from '@/assets/love-svgrepo-com.svg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function HomePage() {
  return (
    <div className='h-full flex max-h-dvh flex-col p-5 max-w-[100vw]'>
      <Carousel className='my-auto bg-[#fc92d9] rounded-lg lg:max-w-[400px]'>
        <CarouselContent>
          <CarouselItem className='flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center p-5 flex-col'>
              <h1 className='text-2xl mb-2 font-agbalumo'>
                Silvana Nabila Shyifa
              </h1>
              <p>This is your day</p>
              <img
                src={calendar}
                alt=''
              />
              <p className='font-agbalumo text-lg'>07 Desember 2024</p>
              <p className='mt-2'>
                Ga kerasa yaa sekarang adalah hari spesial yang selalu kamu
                tunggu-tunggu dan dinanti, padahal setiap saat aku bersamamu
                merupakan hari-hari yang spesial 🥰
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className='flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center p-5 flex-col'>
              <h1 className='text-2xl font-extrabold'>
                Happy 19<sup>th</sup> Birthday
              </h1>
              <img
                src={cake}
                alt=''
                className='scale-75'
              />
              <p className='text-xl font-agbalumo'>Silvana Nabila Shyifa</p>
              <div className='mt-5'>
                <p>Udah 19 tahun aja nih 😄</p>
                <p className='mt-2'>
                  Doa dariku semoga kamu menjadi manusia yang senantiasa lebih
                  baik dari hari-hari sebelumnya, makin rajin ibadahnya,
                  bertambah semangat belajarnya, dan selalu tersenyumm 🥰
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className='flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center p-5 flex-col'>
              <p>
                Mungkin hari-hari yang mu lalui selalu terasa berat, tapi
                percayalah semua beban yang telah kamu rasakan akan terasa indah
                pada waktunya.
              </p>
              <p className='mt-3'>
                Jangan pernah menyerah dan merasa gagal, karena kegagalan itu
                suatu saat akan membawa mu menuju kesuksesan yang sebenarnya.
              </p>
              <p className='mt-3'>
                Dan jangan takut sama kuis kalkulus dan aljabar, walaupun
                terlihat susah tapi ga susah kok. kalau ga paham nanti tanya aku
                ajaa 😁
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className='flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center p-5 flex-col'>
              <img
                src={love}
                alt=''
                className='scale-75'
              />
              <p>Kamu akan selalu menjadi perempuan paling spesial di hidupku, karena setiap hal kecil yang ku lakukan bersama mu adalah sebuah kebahagiaan yang sangat istimewaa</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
