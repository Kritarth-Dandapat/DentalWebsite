// pages/team.js

import Image from 'next/image';

const teamMembers = [
  {
    name: 'Dr. John Doe',
    title: 'Chief Medical Officer',
    description: 'Dr. John Doe is a leading expert in dental health with over 20 years of experience.',
    imageUrl: '/team/john.jpg',
  },
  {
    name: 'Dr. Jane Smith',
    title: 'Senior Dentist',
    description: 'Dr. Jane Smith specializes in pediatric dentistry and orthodontics.',
    imageUrl: '/team/jane.jpg',
  },
  {
    name: 'Dr. Alex Johnson',
    title: 'Lead Orthodontist',
    description: 'Dr. Alex Johnson has pioneered new techniques in dental surgery.',
    imageUrl: '/team/alex.jpg',
  },
  {
    name: 'Mary Williams',
    title: 'Dental Hygienist',
    description: 'Mary Williams ensures patients receive the highest level of dental hygiene care.',
    imageUrl: '/team/mary.jpg',
  },
  {
    name: 'James Brown',
    title: 'Dental Assistant',
    description: 'James Brown supports the dental team in delivering excellent patient care.',
    imageUrl: '/team/james.jpg',
  },
  {
    name: 'Lisa Taylor',
    title: 'Office Manager',
    description: 'Lisa Taylor oversees all administrative operations at the dental practice.',
    imageUrl: '/team/lisa.jpg',
  },
  {
    name: 'Dr. Mark Lee',
    title: 'Endodontist',
    description: 'Dr. Mark Lee specializes in root canal treatments and other endodontic procedures.',
    imageUrl: '/team/mark.jpg',
  },
  {
    name: 'Dr. Susan White',
    title: 'Prosthodontist',
    description: 'Dr. Susan White is an expert in dental prosthetics, including implants and dentures.',
    imageUrl: '/team/susan.jpg',
  },
  {
    name: 'Dr. David Green',
    title: 'Periodontist',
    description: 'Dr. David Green focuses on the prevention, diagnosis, and treatment of periodontal disease.',
    imageUrl: '/team/david.jpg',
  },
  {
    name: 'Dr. Anna Carter',
    title: 'Oral Surgeon',
    description: 'Dr. Anna Carter performs complex surgeries, including wisdom teeth extractions and corrective jaw surgery.',
    imageUrl: '/team/anna.jpg',
  },
];

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Meet Our Expert Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl">
            <div className="relative w-full h-64">
              <Image
                src={member.imageUrl}
                alt={`Photo of ${member.name}, ${member.title}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-900">{member.name}</h2>
              <p className="text-gray-600 font-medium">{member.title}</p>
              <p className="mt-4 text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
