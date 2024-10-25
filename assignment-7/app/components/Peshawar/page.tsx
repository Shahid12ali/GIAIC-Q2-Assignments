'use client';
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Peshawar = () => {
    const router = useRouter();
  return (
    <div className="text-center">
      <h1 className="text-4xl font-serif font-bold">Peshawar,The City of flowers</h1>
      <br />
      <hr />
      <p className="text-2xl font-sans text-justify m-4">
         Peshawar is the major educational, political and business centre of Khyber Pakhtunkhwa. Peshawar is also famous for its kebab (Chapli Kebab) and Peshawari Shoe.
         Peshawar's recorded history goes back as far as at least 539 BC, making it one of the oldest living cities in South Asia.
      </p>
      <div className="flex">
        <hr />
        <br />
        <Image src="/images/pswrf1.jpg"alt="pshr1"width={440}height={300} className="mx-0.5"></Image>
        <Image src="/images/pshwrf2.jpg"alt="pshr2"width={440}height={300}className="mx-0.5"></Image>
        <Image src="/images/pshwr3.jpg"alt="pshr3"width={440}height={300}className="mx-0.5"></Image>
      </div>
      <br />
      <hr />
      <h1 className="text-4xl font-serif font-bold">Peshawar,The City of flowers</h1>
      <br />
      <p className="text-2xl font-sans text-justify m-4">
         Peshawar is the sixth most populous city of Pakistan, with a population of over 1.97 million in 2017 census. It is situated in the north-west of the country,
         lying in the Valley of Peshawar. It is the capital of the province of Khyber Pakhtunkhwa, where it is the largest city.Peshawar is primarily populated by Pashtuns,
         who comprise the second-largest ethnic group in the country.Situated in the Valley of Peshawar, a broad area situated east of the historic Khyber Pass, Peshawar's
         recorded history dates back to at least 539 BCE, making it one of the oldest cities in South Asia. Peshawar also remained capital of Gandhara civilization and is among the oldest continuously inhabited cities of the country.
      </p>
      <br />
      <hr />
      <div className="flex flex-wrap ">
        <br />
        <Image src="/images/pswr.main1.jpg"alt="pswr1"width={440}height={300}className="mx-0.5 mb-1"></Image>
        <Image src="/images/pswr.main5.webp"alt="-pswr5"width={440}height={300}className="mx-0.5 mb-1"></Image>
        <Image src="/images/pswr.main2.jpg"alt="pswr2"width={440}height={300}className="mx-0.5 mb-1"></Image>
        <br />
        <Image src="/images/pswr.main4.jpg"alt="pswr4"width={440}height={300}className="mx-0.5"></Image>
        <Image src="/images/pswr.main6.jpg"alt="pswr6"width={440}height={300}className="mx-0.5"></Image>
        <Image src="/images/pswr.main3..jpg"alt="pswr3"width={440}height={300}className="mx-0.5"></Image>
        <br />
        <hr />
        <p className="text-2xl font-sans text-justify m-4">
         The area encompassing modern-day Peshawar is mentioned in the Vedic scriptures; it was one of the principal cities of ancient Gāndhāra. Peshawer served as the capital of the Kushan Empire during the rule of Kanishka
         and was home to the Kanishka Stupa, which was among the tallest buildings in the ancient world. Peshawar was then ruled by the Hephthalites, followed by the Hindu Shahis, before the arrival of a variety of Muslim empires.
         The city was an important trading centre of the Mughal Empire before becoming part of the Durrani Empire in 1747, after which it served as the Durrani winter capital from 1776 until the capture of the city by the Sikh Empire in 1823. In 1849,
         The city was captured by the East India Company and subsequently became part of British Raj, under whose rule it remained until the Partition of British India and subsequent independence of Pakistan in 1947.
         The modern name of the city "Peshawar" is possibly derived from the [reconstructed] Sanskrit word "Purushapura" (Sanskrit: Puruṣapura, meaning "City of Men" or "City of Purusha"). It was named so by Mughal Emperor Akbar from its old name Parashawar, 
         the meaning of which Akbar did not understand.The ruler of the city during its founding may have been a Hindu raja (king) named Purush; the word pur means "city" in Sanskrit. Sanskrit, written in the Kharosthi script, was the literary language employed by 
         the Buddhist kingdoms which ruled over the area during its earliest recorded period. The city's name may also be derived from the Sanskrit name for "City of Flowers," Poshapura, a name found in an ancient Kharosthi inscription that may refer to Peshawar.
         Chinese Buddhist monk Xuanzang's seventh century account of a city in Gandhara called the city Po-la-sha-pu-lo, and an earlier fifth century account by Fa-Hien records the city's name as Fou-lou-sha, the Chinese equivalent of the Sanskrit name of the city,
         Purushapura. An ancient inscription from the Shapur era identifies a city in the Gandhara valley by the name pskbvr, which may be a reference to Peshawar.
        </p>
      </div>
      <button className="bg-blue-950 px-2 py-2 rounded text-white" onClick={() => router.push("/")}>Back To Home Page</button>   
    </div>
  );
};

export default Peshawar;