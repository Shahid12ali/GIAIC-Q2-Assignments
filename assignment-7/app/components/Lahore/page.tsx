'use client';
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Lahore = () => {
    const router = useRouter();
  return (
    <div className="text-center">
      <h1 className="text-4xl font-serif font-bold">Lahore, The City of Gardens</h1>
      <br />
      <div className="flex">
        <hr />
        <br />
        <Image src="/images/lhr1.jpg"alt="lhr1"width={440}height={300} className="mx-0.5"></Image>
        <Image src="/images/lhr2.jpg"alt="lhr2"width={440}height={300}className="mx-0.5"></Image>
        <Image src="/images/lhr3.jpg"alt="lhr3"width={440}height={300}className="mx-0.5"></Image>
      </div>
      <br />
      <hr />
      <br />
      <h1 className="text-4xl font-serif font-bold">Lahore Pakistan</h1>
      <br />
      <p className="text-2xl font-sans text-justify m-4">
         Lahore is the capital and largest city of the Pakistani province of Punjab. It is the second largest city in Pakistan, 
         after Karachi, and 26th largest in the world, with a population of over 13 million. It is located in the north-eastern region of Punjab,
         along the River Ravi. Lahore is one of Pakistan's major industrial and economic hubs.It has been the historic capital and cultural centre
         of the wider Punjab region,and is one of Pakistan's most socially liberal, progressive, and cosmopolitan cities.

         Lahore's origins reach into antiquity. The city has been inhabited for around two millennia, although it rose to prominence in the late 10th century.
         Lahore was the capital of several empires during medieval era, including the Hindu Shahis, Ghaznavids, and Delhi Sultanate. It reached the height of 
         its splendor under the Mughal Empire between the late 16th and early 18th century and also served as its capital city for many years. During this period,
         it was one of the largest cities in the medieval world. The city was captured by the forces of the Afsharid ruler Nader Shah in 1739. Although the Mughal
         authority was re-established, it fell into a period of decay while being contested among the Afghans and the Sikhs between 1748 and 1798. Lahore eventually 
         became the capital of the Sikh Empire in the early 19th century, regaining some of its lost grandeur. Lahore was annexed to the British Raj in 1849 and became 
         the capital of British Punjab. Lahore was central to the independence movements of both India and Pakistan, with the city being the site of both the declaration 
         of Indian Independence and the resolution calling for the establishment of Pakistan. It experienced some of the worst riotings during the Partition period preceding 
         Pakistan's independence.Following the success of the Pakistan Movement and the subsequent partition of British India in 1947, Lahore was declared the capital of Pakistan's Punjab province.
      </p>
      <br />
      <hr />
      <h1 className="text-4xl font-serif font-bold">Lahore, The City of Gardens</h1>
      <br />
      <div className="flex flex-wrap ">
        <br /> <br />
        <Image src="/images/lhr.main1.jpg"alt="lhr1"width={440}height={300}className="mx-0.5 mb-1"></Image>
        <Image src="/images/lhr.main3.jpg"alt="-lhr3"width={440}height={300}className="mx-0.5 mb-1"></Image>
        <Image src="/images/lhr.main2.jpg"alt="lhr2"width={440}height={300}className="mx-0.5 mb-1"></Image>
        <br />
        <Image src="/images/lhr.main5.jpg"alt="lhr5"width={440}height={300}className="mx-0.5"></Image>
        <Image src="/images/lhr.main6.jpg"alt="lhr6"width={440}height={300}className="mx-0.5"></Image>
        <Image src="/images/lhr.main4.jpg"alt="lhr4"width={440}height={300}className="mx-0.5"></Image>
        <br />
        <br />
        <hr />
        <hr />
        <p className="text-2xl font-sans text-justify m-4">
            Lahore exerts a strong cultural influence over Pakistan. A UNESCO City of Literature and major center for Pakistan's publishing industry,
            Lahore remains the foremost center of Pakistan's literary scene. The city is also a major centre of education in Pakistan, with some of
            Pakistan's leading universities based in the city.For many years, Lahore was home to Pakistan's film industry, Lollywood, though in recent
            years most filming has shifted to Karachi. Lahore is a major centre of Qawwali music.The city also hosts much of Pakistan's tourist industry,
            with major attractions including the Walled City, the famous Badshahi and Wazir Khan mosques, as well as several Sikh and Sufi shrines. Lahore is
            also home to the Lahore Fort and Shalimar Gardens, both of which are UNESCO World Heritage Sites.

            The origin of Lahore's name is unclear. The city's name has been variously recorded by early Muslim historians as Luhawar,  and Rahwar.
            The Iranian polymath and geographer, Abu Rayhan Al-Biruni, referred to the city as Luhāwar in his 11th century work, Qanun, while the poet Amir Khusrow, 
            who lived during the Delhi Sultanate period, recorded the city's name as Lāhanūr. Yaqut al-Hamawi records the city's name as Lawhūr, mentioning that it was 
            famously known as Lahāwar.Persian historian Firishta mentions the city as Alahwar in his work, with al-Ahwar being another variation.

            One theory suggests that Lahore's name is a corruption of the word Ravāwar, as R to L shifts are common in languages derived from Sanskrit. Ravāwar is the simplified
            pronunciation of the name Iravatyāwar, a name possibly derived from the Ravi River, known as the Iravati River in the Vedas. Another theory suggests the city's name 
            may derive from the word Lohar, meaning "blacksmith".

            According to a legend, Lahore's name derives from Lavpur or Lavapuri ("City of Lava"),and is said to have been founded by Prince Lava, the son of Sita and Rama. 
            The same account attributes the founding of nearby Kasur to his twin brother Kusha,though it was actually established in the 16th century.
        </p>
      </div>
      <button className="bg-blue-950 px-2 py-2 rounded text-white" onClick={() => router.push("/")}>Back To Home Page</button>   
    </div>
  );
};

export default Lahore;