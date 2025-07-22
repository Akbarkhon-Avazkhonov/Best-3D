import { xai } from "@ai-sdk/xai"
import { generateText } from "ai"

const client = xai(process.env.XAI_API_KEY)

async function generateEducationalSeries(seriesTitle, episodes, targetAudience) {
  const prompt = `Create a ${episodes}-part educational series titled "${seriesTitle}" for ${targetAudience}.

  For each episode, provide:
  1. Episode title and number
  2. Learning objectives
  3. Key concepts covered
  4. Practical exercises
  5. Prerequisites
  6. Estimated time to complete
  7. Materials/tools needed
  8. Assessment criteria

  Make it progressive, building knowledge from basic to advanced concepts. Each episode should be 1000-1500 words.`

  const { text } = await generateText({
    model: client,
    prompt,
    temperature: 0.6,
  })

  return text
}

async function generateCaseStudy(project, industry, challenges, solutions) {
  const prompt = `Create a detailed case study about ${project} in the ${industry} industry.
  
  Main challenges: ${challenges.join(", ")}
  Solutions implemented: ${solutions.join(", ")}

  Structure:
  1. Executive summary
  2. Project background and objectives
  3. Challenges faced
  4. Solution approach and methodology
  5. Implementation process
  6. Results and outcomes
  7. Lessons learned
  8. Recommendations for similar projects
  9. Future implications

  Include specific technical details, metrics, and real-world insights. Around 1500-2000 words.`

  const { text } = await generateText({
    model: client,
    prompt,
    temperature: 0.7,
  })

  return text
}

async function generateTutorialSeries(skill, complexity, duration) {
  const prompt = `Create a comprehensive tutorial series for learning ${skill} in 3D printing.
  Complexity level: ${complexity}
  Expected duration: ${duration}

  Break down into:
  1. Course overview and prerequisites
  2. Module breakdown with learning paths
  3. Hands-on projects and exercises
  4. Common mistakes and how to avoid them
  5. Advanced techniques and pro tips
  6. Troubleshooting guide
  7. Resources for further learning
  8. Certification or assessment criteria

  Make it practical, project-based, and suitable for self-paced learning. Around 2000-2500 words.`

  const { text } = await generateText({
    model: client,
    prompt,
    temperature: 0.6,
  })

  return text
}

async function generateAllEducationalContent() {
  console.log("🎓 Starting educational content generation...")

  const educationalSeries = [
    {
      title: "3D Printing Fundamentals",
      episodes: 8,
      audience: "complete beginners",
    },
    {
      title: "Advanced CAD for 3D Printing",
      episodes: 12,
      audience: "intermediate users",
    },
    {
      title: "Professional 3D Printing Workflows",
      episodes: 10,
      audience: "business professionals",
    },
    {
      title: "Resin 3D Printing Mastery",
      episodes: 6,
      audience: "hobbyists and professionals",
    },
  ]

  for (const series of educationalSeries) {
    try {
      const content = await generateEducationalSeries(series.title, series.episodes, series.audience)
      console.log(`✅ Generated educational series: ${series.title}`)
      console.log(`Preview: ${content.substring(0, 200)}...`)
      console.log("---")
    } catch (error) {
      console.error(`❌ Error generating educational series:`, error)
    }
  }

  const caseStudies = [
    {
      project: "Custom prosthetics manufacturing",
      industry: "healthcare",
      challenges: ["Patient-specific fitting", "Biocompatible materials", "Cost reduction"],
      solutions: ["3D scanning integration", "Medical-grade filaments", "Automated production"],
    },
    {
      project: "Rapid prototyping for automotive parts",
      industry: "automotive",
      challenges: ["High-temperature resistance", "Functional testing", "Speed to market"],
      solutions: ["Engineering plastics", "Multi-material printing", "Iterative design process"],
    },
    {
      project: "Educational tools for STEM learning",
      industry: "education",
      challenges: ["Budget constraints", "Curriculum integration", "Teacher training"],
      solutions: ["Low-cost printers", "Lesson plan development", "Professional development"],
    },
  ]

  console.log("📋 Generating case studies...")
  for (const study of caseStudies) {
    try {
      const content = await generateCaseStudy(study.project, study.industry, study.challenges, study.solutions)
      console.log(`✅ Generated case study: ${study.project}`)
      console.log(`Preview: ${content.substring(0, 200)}...`)
      console.log("---")
    } catch (error) {
      console.error(`❌ Error generating case study:`, error)
    }
  }

  const tutorialSeries = [
    {
      skill: "Fusion 360 for 3D Printing",
      complexity: "intermediate",
      duration: "4 weeks",
    },
    {
      skill: "Multi-color 3D Printing Techniques",
      complexity: "advanced",
      duration: "2 weeks",
    },
    {
      skill: "Post-processing and Finishing",
      complexity: "beginner to intermediate",
      duration: "3 weeks",
    },
    {
      skill: "Business Applications of 3D Printing",
      complexity: "professional",
      duration: "6 weeks",
    },
  ]

  console.log("📚 Generating tutorial series...")
  for (const tutorial of tutorialSeries) {
    try {
      const content = await generateTutorialSeries(tutorial.skill, tutorial.complexity, tutorial.duration)
      console.log(`✅ Generated tutorial series: ${tutorial.skill}`)
      console.log(`Preview: ${content.substring(0, 200)}...`)
      console.log("---")
    } catch (error) {
      console.error(`❌ Error generating tutorial series:`, error)
    }
  }

  console.log("🎉 All educational content generated!")
}

generateAllEducationalContent().catch(console.error)
