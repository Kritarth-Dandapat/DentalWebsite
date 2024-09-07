// pages/team.js

import Image from 'next/image';

const teamMembers = [
  {
    name: 'FirstName LastName',
    title: 'Chief Medical Officer',
    description: 'FirstName LastName is a leading expert in dental health with over 20 years of experience.',
    imageUrl: '/team/john.jpg',
  },
  {
    name: 'FirstName LastName',
    title: 'Senior Dentist',
    description: 'FirstName LastName specializes in pediatric dentistry and orthodontics.',
    imageUrl: '/team/jane.jpg',
  },
  {
    name: 'FirstName LastName',
    title: 'Lead Orthodontist',
    description: 'FirstName LastName has pioneered new techniques in dental surgery.',
    imageUrl: '/team/alex.jpg',
  },
  {
    name: 'FirstName LastName',
    title: 'Dental Hygienist',
    description: 'FirstName LastName ensures patients receive the highest level of dental hygiene care.',
    imageUrl: '/team/mary.jpg',
  },
  {
    name: 'FirstName LastName',
    title: 'Dental Assistant',
    description: 'FirstName LastName supports the dental team in delivering excellent patient care.',
    imageUrl: '/team/james.jpg',
  },
  {
    name: 'FirstName LastName',
    title: 'Office Manager',
    description: 'FirstName LastName oversees all administrative operations at the dental practice.',
    imageUrl: '/team/lisa.jpg',
  },
  {
    name: 'FirstName LastName',
    title: 'Endodontist',
    description: 'FirstName LastName specializes in root canal treatments and other endodontic procedures.',
    imageUrl: '/team/mark.jpg',
  },
  {
    name: 'FirstName LastName',
    title: 'Prosthodontist',
    description: 'FirstName LastName is an expert in dental prosthetics, including implants and dentures.',
    imageUrl: '/team/susan.jpg',
  },
  {
    name: 'FirstName LastName',
    title: 'Periodontist',
    description: 'FirstName LastName focuses on the prevention, diagnosis, and treatment of periodontal disease.',
    imageUrl: '/team/david.jpg',
  },
  {
    name: 'FirstName LastName',
    title: 'Oral Surgeon',
    description: 'FirstName LastName performs complex surgeries, including wisdom teeth extractions and corrective jaw surgery.',
    imageUrl: '/team/anna.jpg',
  },
];

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src={member.imageUrl}
                alt={member.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <p className="text-gray-600">{member.title}</p>
              <p className="mt-4 text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
