import React from 'react'

const Cards = () => {
    const cardContent = [
        {
          title: "Why Choose Knowledge Quest?",
          description: `Our program offers an integrated approach to mastering real-world skills:`,
            contenttext  : `Real-Time Training
          ✓ Learn every concept with real-time practical examples.
          ✓ Solve real-world problems through case studies.
          ✓ Identify problems and develop innovative solutions.
          ✓ Focus on thought processes, innovation, and critical thinking.
          ✓ Build projects from start to finish and host them in live production environments.`,
        },
        {
          title: "Why Choose Knowledge Quest?",
          description: `Our program offers an integrated approach to mastering real-world skills:`,
          contenttext  : `Real-Time Training
          Real-Time Training
          ✓ Learn every concept with real-time practical examples.
          ✓ Solve real-world problems through case studies.
          ✓ Identify problems and develop innovative solutions.
          ✓ Focus on thought processes, innovation, and critical thinking.
          ✓ Build projects from start to finish and host them in live production environments.`,
        },
        // {
        //   title: "Why Choose Knowledge Quest?",
        //   description: `Our program offers an integrated approach to mastering real-world skills:
          
        //   Real-Time Training
        //   ✓ Learn every concept with real-time practical examples.
        //   ✓ Solve real-world problems through case studies.
        //   ✓ Identify problems and develop innovative solutions.
        //   ✓ Focus on thought processes, innovation, and critical thinking.
        //   ✓ Build projects from start to finish and host them in live production environments.`,
        // },
      ];
    
      return (
        <div className="flex justify-center items-center py-12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-4">
            {cardContent.map((content, index) => (
              <div
                key={index}
                className="bg-navy-blue text-white bg-[#094166] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-3 ease-in-out">
                <h3 className="text-3xl font-bold mb-4">{content.title}</h3>
                <p className="text-[16px] leading-[30px] font-semibold text-left whitespace-pre-line">{content.description}</p>
                <p className="text-[16px] leading-[30px] font-semibold text-left whitespace-pre-line">{content.contenttext}</p>
              </div>
            ))}
          </div>
        </div>
      )
}

export default Cards
