import React from 'react'
import TeamMember from '../components/TeamMember.jsx'

function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/150',
      bio: 'Passionate about connecting talent with opportunities.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://via.placeholder.com/150',
      bio: 'Building innovative solutions for career development.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: 'https://via.placeholder.com/150',
      bio: 'Ensuring seamless experiences for all our users.'
    }
  ]

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize how professionals manage their careers
          </p>
        </div>

        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2020, our platform emerged from a simple observation: the job market
                was becoming increasingly complex, yet the tools available to job seekers remained
                outdated and fragmented.
              </p>
              <p>
                We believed there had to be a better way. A way that combined cutting-edge technology
                with human insight to create meaningful connections between talented individuals and
                the opportunities they deserve.
              </p>
              <p>
                Today, we serve thousands of professionals across various industries, helping them
                showcase their skills, discover opportunities, and advance their careers with confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries to create better solutions for career development.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty and transparency in all our dealings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Empowerment</h3>
              <p className="text-gray-600">
                We believe in giving people the tools they need to take control of their careers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Community</h3>
              <p className="text-gray-600">
                We foster a supportive environment where professionals can learn and grow together.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage