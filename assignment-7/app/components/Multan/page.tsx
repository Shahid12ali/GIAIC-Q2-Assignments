'use client';
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Multan = () => {
    const router = useRouter();
  return (
    <div className="text-center">
      <h1 className="text-4xl font-serif font-bold">Multan,the City of Saints, House of Gold</h1>
      <hr />
      <p className="text-2xl font-sans text-justify m-4">
         Multan is a city in Punjab, Pakistan, located on the bank of Chenab River. Multan is one of the five largest urban centres of Pakistan in 2023,
         with an estimated population of 2.2 million, and is the major cultural, religious and economic centre of Southern Punjab. Multan is known for rich ancient heritage
         and historic landmarks. The city is one of the oldest and continuously inhabited cities of Asia, with a history stretching deep into antiquity. A historic capital and
         cultural centre of Punjab and a significant centre of the Indus Valley civilization. Multan region was centre of many civilizations in its 5 millenia old history.
      </p>
      <br />
      <div className="flex">
        <hr />
        <br />
        <Image src="/images/mlt.f1.jpg"alt="mlt1"width={440}height={300} className="mx-0.5"></Image>
        <Image src="/images/mlt.f3.jpg"alt="mlt3"width={440}height={300}className="mx-0.5"></Image>
        <Image src="/images/mlt.f2.jpg"alt="mlt2"width={440}height={300}className="mx-0.5"></Image>
      </div>
      <br />
      <hr />
      <br />
      <h1 className="text-4xl font-serif font-bold">Multan,the City of Saints, House of Gold</h1>
      <br />
      <p className="text-2xl font-sans text-justify m-4">
         Multan was part of the Achaemenid Empire ruled by Darius the Great of Iran around 500 BC. The city was besieged by Alexander the Great during the Mallian Campaign.
         It was conquered by the Umayyad military commander Muhammad bin Qasim in 712 CE after the conquest of Sindh. Multan reached height of its splendour during the Arab rule of 9th and 10th century
         when it was made a separate state, the Emirate of Multan, thereby ruling large parts of Punjab and Kashmir.
      </p>
      <br />
      <hr />
      <div className="flex flex-wrap "> 
        <Image src="/images/mltn.main2.jpg"alt="mltn2"width={440}height={300}className="mx-0.5 mb-1"></Image>
        <Image src="/images/mltn.main3.jpeg"alt="-mltn3"width={440}height={300}className="mx-0.5 mb-1"></Image>
        <Image src="/images/mltn.main1.jpg"alt="mltn1"width={440}height={300}className="mx-0.5 mb-1"></Image>
        <br />
        <Image src="/images/mltn.main5.jpg"alt="mltn5"width={440}height={300}className="mx-0.5"></Image>
        <Image src="/images/mltn.main6.jpg"alt="mltn6"width={440}height={300}className="mx-0.5"></Image>
        <Image src="/images/mltn.main4.jpg"alt="mltn4"width={440}height={300}className="mx-0.5"></Image>
        <br />
        <hr />
        <p className="text-2xl font-sans text-justify m-4">the region came under the rule of empires such as the Ghaznavids, the Ghaurids and the Mamluks. In 1445, it became capital of the Langah Sultanate. Multan province was one of the largest provinces of the Mughal Empire.
          Afterwards, Multan became part of the Durrani and Sikh empires successively. In 1848, it was conquered by the British Empire and became part of British Punjab.
          Multan was among the largest cities of the world in early medieval era. The city was among most important trading centres and a great centre of knowledge and learning in the medieval Islamic Indian subcontinent,
          and attracted a multitude of Sufi mystics in the 11th and 12th centuries, becoming a great centre of spirituality in entire South Asia and earning the city the sobriquet "City of Saints." The city, along with the nearby city of Uch, 
          is renowned for its large number of Sufi shrines dating from that era.The origin of Multan's name is unclear. An ancient known name of the city was Malli-istan; Malli was the name of a tribe that inhabited the region and city.
          Some have suggested the name derives from the Old Persian word mulastāna, 'frontier land'.Hukm Chand in the 19th century suggested that the city was named after an ancient Hindu tribe called Malli or Mulu.
          Multan was founded by the great grandson of Prophet Noah according to the Persian historian Firishta. Founded before 3000 BC, Multan was home to ancient Aryan civilization of ethnic Iranian descent.
          The region has been the site of much warfare because of its location on a major invasion route between South and Central Asia.The region is home to numerous archaeological sites dating to the era of the Early Harappan period of the Indus Valley,
          civilization from 3000 BCE until 2800 BCE.According to Hindu religious texts, Multan was founded by the Hindu sage Kashyapa. These texts also assert that Multan was the capital of the Trigarta Kingdom ruled by the Katoch dynasty during the Kurukshetra,
          War that is central to the Hindu epic poem, the Mahabharata.Famous Hindu festival of Holi is generally assumed to have originated from Multan.[25] The city was visited by Greek Admiral Skylax, who passed through the area in 515 BCE on behest of Iran's Darius the great.
         The city is also mentioned to be explored by the Greek historian Herodotus in 400 BC. Kaspatyrus or Kashyapura (an old name of Multan) was a Gandharan city when conquered by Darius's army of Achaemenid empire, and it was included in the Province of Arachosia in 500 BCE era.
        </p>
      </div>
      <button className="bg-blue-950 px-2 py-2 rounded text-white" onClick={() => router.push("/")}>Back To Home Page</button>
    </div>
  );
};

export default Multan;