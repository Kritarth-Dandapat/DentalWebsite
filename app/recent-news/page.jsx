// pages/news.js

import Image from 'next/image';

const newsItems = [
  {
    title: 'New Advances in Dental Technology',
    description: 'Dental technology is advancing rapidly, with new tools and techniques that improve patient care. From 3D printing to AI-driven diagnostics, the future of dentistry is here.',
    imageUrl: '/news/technology.jpg',
    date: 'August 15, 2023',
  },
  {
    title: 'The Importance of Regular Dental Checkups',
    description: 'Regular dental checkups are crucial for maintaining oral health. Learn why it’s important to see your dentist regularly and what can happen if you skip your appointments.',
    imageUrl: '/news/checkup.jpg',
    date: 'July 22, 2023',
  },
  {
    title: 'How to Choose the Right Toothbrush',
    description: 'With so many options available, choosing the right toothbrush can be overwhelming. This guide will help you select the best toothbrush for your dental needs.',
    imageUrl: '/news/toothbrush.jpg',
    date: 'June 30, 2023',
  },
  {
    title: 'Tips for Maintaining Oral Health During the Holidays',
    description: 'The holiday season can be tough on your teeth. Here are some tips to maintain your oral health while still enjoying all the festivities.',
    imageUrl: '/news/holidays.jpg',
    date: 'December 10, 2022',
  },
  {
    title: 'Understanding Dental Anxiety and How to Overcome It',
    description: 'Dental anxiety is a common issue that prevents many people from getting the care they need. Discover strategies to manage and overcome your fear of the dentist.',
    imageUrl: '/news/anxiety.jpg',
    date: 'November 5, 2022',
  },
  {
    title: 'The Benefits of Fluoride in Oral Health',
    description: 'Fluoride plays a crucial role in preventing tooth decay. Learn about its benefits and how it works to protect your teeth.',
    imageUrl: '/news/fluoride.jpg',
    date: 'October 25, 2022',
  },
  {
    title: 'The Role of Diet in Dental Health',
    description: 'What you eat has a direct impact on your oral health. Find out which foods are beneficial and which ones to avoid to keep your teeth healthy.',
    imageUrl: '/news/diet.jpg',
    date: 'September 15, 2022',
  },
  {
    title: 'The Future of Cosmetic Dentistry',
    description: 'Cosmetic dentistry is evolving with new treatments that provide better results with less discomfort. Discover the latest trends and technologies.',
    imageUrl: '/news/cosmetic.jpg',
    date: 'August 1, 2022',
  },
  {
    title: 'How to Prevent Gum Disease',
    description: 'Gum disease can lead to serious oral health problems if left untreated. Learn how to prevent it with proper oral hygiene and regular dental visits.',
    imageUrl: '/news/gum-disease.jpg',
    date: 'July 10, 2022',
  },
  {
    title: 'The Impact of Oral Health on Overall Health',
    description: 'Oral health is closely linked to overall health. Explore the connection and find out why taking care of your teeth is essential for your general well-being.',
    imageUrl: '/news/overall-health.jpg',
    date: 'June 25, 2022',
  },
  {
    title: 'Innovations in Teeth Whitening',
    description: 'Teeth whitening has come a long way, with new techniques and products that offer brighter results with minimal sensitivity. Learn about the latest innovations.',
    imageUrl: '/news/teeth-whitening.jpg',
    date: 'May 30, 2022',
  },
  {
    title: 'The Importance of Early Orthodontic Care',
    description: 'Early orthodontic care can prevent more severe dental issues later in life. Find out why it’s important to start treatment early and what options are available.',
    imageUrl: '/news/orthodontic-care.jpg',
    date: 'April 20, 2022',
  },
];


export default function News() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Recent News</h1>
      <div className="space-y-8">
        {newsItems.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-full md:w-1/3 h-48 md:h-64 relative">
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full md:w-2/3 p-6">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{item.date}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
