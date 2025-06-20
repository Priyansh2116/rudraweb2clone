import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const ElectronicsDomainPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">
      {/* Sparkles Effect */}
      <SparklesCore
        className="absolute inset-0 z-0"
        particleColor="#ffffff"
        particleDensity={30}
      />

      <h2 className="text-white text-4xl mb-12 z-10 font-serif">
        Electronics Domain Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">

        {/* Technical Director – Pragati Prithvi */}
        <Link href="https://www.linkedin.com/in/pragati-prithvi/">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./electronics-member6.png" alt="Pragati Prithvi" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Technical Director - Pragati Prithvi</h3>
          </div>
        </Link>

        {/* Electronics Lead – Sonakshi Srivastava */}
        <Link href="https://www.linkedin.com/in/srivastava-sonakshi/">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./electronics-member5.png" alt="Sonakshi Srivastava" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Electronics Lead - Sonakshi Srivastava</h3>
          </div>
        </Link>

        {/* Kaustubh Guha */}
        <Link href="https://www.linkedin.com/in/kaustub-guha/">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./electronics-member4.png" alt="Kaustubh Guha" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Kaustubh Guha</h3>
          </div>
        </Link>

        {/* Sidhant Chakrabarti */}
        <Link href="https://www.linkedin.com/in/sidhant1226/">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./electronics-member7.png" alt="Sidhant Chakrabarti" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Sidhant Chakrabarti</h3>
          </div>
        </Link>

        {/* Aaryan Sarat */}
        <Link href="https://in.linkedin.com/in/aaryan-sarat-491241331">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./aaryan.jpeg" alt="Aaryan Sarat" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Aaryan Sarat</h3>
          </div>
        </Link>

        {/* V Krishna */}
        <Link href="https://www.linkedin.com/in/vkrishna89/">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./vkrishna.jpeg" alt="V Krishna" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">V Krishna</h3>
          </div>
        </Link>

        {/* Hariharan R */}
        <Link href="">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./hariharan.jpeg" alt="Hariharan R" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Hariharan R</h3>
          </div>
        </Link>

        {/* Mishti Bansal */}
        <Link href="">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./mishti.jpeg" alt="Mishti Bansal" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Mishti Bansal</h3>
          </div>
        </Link>

        {/* Abhijeet Koushal */}
        <Link href="https://www.linkedin.com/in/abhijeeth-koushal-addenki-800a18277/">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./abhijeet.jpeg" alt="Abhijeet Koushal" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Abhijeet Koushal</h3>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default ElectronicsDomainPage;
