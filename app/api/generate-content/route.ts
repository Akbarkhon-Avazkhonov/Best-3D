import { xai } from "@ai-sdk/xai"
import { generateText } from "ai"
import { type NextRequest, NextResponse } from "next/server"

const client = xai(process.env.XAI_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { type, topic, difficulty, wordCount } = await request.json()

    let prompt = ""

    switch (type) {
      case "review":
        prompt = `Write a comprehensive 3D printer review about "${topic}".
        Difficulty level: ${difficulty}
        Target word count: ${wordCount}
        
        Structure the review with:
        1. Introduction and first impressions
        2. Unboxing and assembly experience
        3. Print quality analysis with different materials
        4. Software and user experience
        5. Detailed pros and cons
        6. Technical specifications
        7. Value for money assessment
        8. Final verdict with rating
        
        Write in an expert, professional tone with specific technical details.`
        break

      case "guide":
        prompt = `Create a comprehensive 3D printing guide about "${topic}".
        Difficulty level: ${difficulty}
        Target word count: ${wordCount}
        
        Structure the guide with:
        1. Introduction and prerequisites
        2. Required tools and materials
        3. Step-by-step instructions
        4. Common problems and solutions
        5. Pro tips and advanced techniques
        6. Safety considerations
        7. Conclusion and next steps
        
        Make it practical and actionable with specific examples.`
        break

      case "comparison":
        prompt = `Write a detailed comparison article about "${topic}".
        Difficulty level: ${difficulty}
        Target word count: ${wordCount}
        
        Structure the comparison with:
        1. Introduction and context
        2. Specifications comparison table
        3. Performance analysis
        4. Price and value comparison
        5. Use case recommendations
        6. Pros and cons for each option
        7. Final recommendation
        
        Be objective and provide clear recommendations for different user types.`
        break

      case "news":
        prompt = `Write a news article about "${topic}" in the 3D printing industry.
        Difficulty level: ${difficulty}
        Target word count: ${wordCount}
        
        Structure the article with:
        1. Compelling headline and lead
        2. Key facts and developments
        3. Industry context and background
        4. Expert opinions and analysis
        5. Market implications
        6. Future outlook
        
        Write in journalistic style with engaging content.`
        break

      case "tutorial":
        prompt = `Create a step-by-step tutorial about "${topic}".
        Difficulty level: ${difficulty}
        Target word count: ${wordCount}
        
        Structure the tutorial with:
        1. Learning objectives
        2. Prerequisites and setup
        3. Detailed step-by-step process
        4. Troubleshooting common issues
        5. Variations and advanced techniques
        6. Practice exercises
        7. Additional resources
        
        Make it educational and easy to follow with clear instructions.`
        break

      default:
        return NextResponse.json({ error: "Invalid content type" }, { status: 400 })
    }

    const { text } = await generateText({
      model: client,
      prompt,
      temperature: 0.7,
      maxTokens: Math.floor(wordCount * 1.5), // Approximate token count
    })

    return NextResponse.json({ content: text })
  } catch (error) {
    console.error("Error generating content:", error)
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 })
  }
}
