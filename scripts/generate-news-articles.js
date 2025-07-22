import { xai } from "@ai-sdk/xai"
import { generateText } from "ai"

const client = xai(process.env.XAI_API_KEY)

async function generateNewsArticle(topic, angle, urgency) {
  const prompt = `Write a news article about ${topic} from the angle of ${angle}.
  Urgency level: ${urgency}

  Structure:
  1. Compelling headline
  2. Lead paragraph with key information
  3. Background context
  4. Expert quotes and analysis
  5. Market implications
  6. What this means for consumers
  7. Future outlook
  8. Conclusion

  Write in journalistic style, include specific details, and make it engaging for 3D printing enthusiasts. Around 800-1200 words.`

  const { text } = await generateText({
    model: client,
    prompt,
    temperature: 0.8,
  })

  return text
}

async function generateIndustryAnalysis(trend, timeframe, impact) {
  const prompt = `Create an industry analysis about ${trend} in the 3D printing industry over the ${timeframe} timeframe.
  Expected impact: ${impact}

  Cover:
  1. Current state of the trend
  2. Key drivers and catalysts
  3. Market size and growth projections
  4. Major players and competition
  5. Technological challenges
  6. Consumer adoption patterns
  7. Investment and funding landscape
  8. Regulatory considerations
  9. Future predictions and scenarios

  Make it analytical, data-driven, and professional. Around 1500-2000 words.`

  const { text } = await generateText({
    model: client,
    prompt,
    temperature: 0.7,
  })

  return text
}

async function generateProductLaunchCoverage(product, company, significance) {
  const prompt = `Write comprehensive coverage of the ${product} launch by ${company}.
  Market significance: ${significance}

  Include:
  1. Product announcement details
  2. Key features and innovations
  3. Technical specifications
  4. Pricing and availability
  5. Market positioning
  6. Competitive analysis
  7. Industry expert reactions
  8. Consumer implications
  9. Long-term market impact

  Write as breaking news with analysis. Around 1000-1500 words.`

  const { text } = await generateText({
    model: client,
    prompt,
    temperature: 0.7,
  })

  return text
}

async function generateAllNewsContent() {
  console.log("📰 Starting news content generation...")

  const newsArticles = [
    {
      topic: "New breakthrough in 3D printing speed technology",
      angle: "technological innovation",
      urgency: "high",
    },
    {
      topic: "Major 3D printer manufacturer acquisition",
      angle: "business and market impact",
      urgency: "medium",
    },
    {
      topic: "New regulations for 3D printing materials safety",
      angle: "regulatory and safety concerns",
      urgency: "high",
    },
    {
      topic: "3D printing adoption in aerospace industry",
      angle: "industry application growth",
      urgency: "medium",
    },
  ]

  for (const article of newsArticles) {
    try {
      const content = await generateNewsArticle(article.topic, article.angle, article.urgency)
      console.log(`✅ Generated news article: ${article.topic}`)
      console.log(`Preview: ${content.substring(0, 200)}...`)
      console.log("---")
    } catch (error) {
      console.error(`❌ Error generating news article:`, error)
    }
  }

  const industryAnalyses = [
    {
      trend: "AI integration in 3D printing",
      timeframe: "next 3 years",
      impact: "transformative",
    },
    {
      trend: "Sustainable 3D printing materials",
      timeframe: "next 5 years",
      impact: "significant",
    },
    {
      trend: "Desktop metal 3D printing",
      timeframe: "next 2 years",
      impact: "moderate but growing",
    },
  ]

  console.log("📊 Generating industry analyses...")
  for (const analysis of industryAnalyses) {
    try {
      const content = await generateIndustryAnalysis(analysis.trend, analysis.timeframe, analysis.impact)
      console.log(`✅ Generated industry analysis: ${analysis.trend}`)
      console.log(`Preview: ${content.substring(0, 200)}...`)
      console.log("---")
    } catch (error) {
      console.error(`❌ Error generating industry analysis:`, error)
    }
  }

  const productLaunches = [
    {
      product: "Next-generation multi-material printer",
      company: "Leading 3D printer manufacturer",
      significance: "game-changing for prosumer market",
    },
    {
      product: "Revolutionary resin 3D printer",
      company: "Emerging technology startup",
      significance: "potential market disruptor",
    },
  ]

  console.log("🚀 Generating product launch coverage...")
  for (const launch of productLaunches) {
    try {
      const content = await generateProductLaunchCoverage(launch.product, launch.company, launch.significance)
      console.log(`✅ Generated product launch coverage: ${launch.product}`)
      console.log(`Preview: ${content.substring(0, 200)}...`)
      console.log("---")
    } catch (error) {
      console.error(`❌ Error generating product launch coverage:`, error)
    }
  }

  console.log("🎉 All news content generated!")
}

generateAllNewsContent().catch(console.error)
