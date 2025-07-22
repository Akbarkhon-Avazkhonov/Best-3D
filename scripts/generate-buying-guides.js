import { xai } from "@ai-sdk/xai"
import { generateText } from "ai"

const client = xai(process.env.XAI_API_KEY)

async function generateBuyingGuide(category, priceRange, userLevel) {
  const prompt = `Create a comprehensive buying guide for ${category} 3D printers in the ${priceRange} price range, targeted at ${userLevel} users.

  Structure the guide with:
  1. Introduction - who this guide is for
  2. Key factors to consider when buying
  3. Top 5 recommended models with detailed analysis
  4. Budget considerations and hidden costs
  5. Where to buy and what to avoid
  6. Essential accessories and upgrades
  7. Maintenance and support considerations
  8. Future-proofing advice
  9. Conclusion and final recommendations

  Make it practical, include specific model recommendations with pros/cons, and real pricing information. Around 2000-2500 words.`

  const { text } = await generateText({
    model: client,
    prompt,
    temperature: 0.7,
  })

  return text
}

async function generateTroubleshootingGuide(problemType, difficulty) {
  const prompt = `Create a detailed troubleshooting guide for ${problemType} in 3D printing.
  Difficulty level: ${difficulty}

  Structure:
  1. Problem identification - symptoms and causes
  2. Quick fixes to try first
  3. Systematic diagnosis process
  4. Step-by-step solutions for each cause
  5. Prevention strategies
  6. When to seek professional help
  7. Tools and materials needed
  8. Advanced troubleshooting techniques

  Include photos descriptions, specific settings, and real-world examples. Make it actionable and easy to follow. Around 1500-2000 words.`

  const { text } = await generateText({
    model: client,
    prompt,
    temperature: 0.6,
  })

  return text
}

async function generateMaintenanceGuide(printerType, schedule) {
  const prompt = `Create a comprehensive maintenance guide for ${printerType} 3D printers with a ${schedule} maintenance schedule.

  Cover:
  1. Daily maintenance tasks
  2. Weekly maintenance checklist
  3. Monthly deep maintenance
  4. Quarterly major service
  5. Annual overhaul procedures
  6. Tools and supplies needed
  7. Warning signs to watch for
  8. Preventive care tips
  9. Cost breakdown of maintenance
  10. DIY vs professional service decisions

  Make it practical with specific procedures, timing, and cost estimates. Around 1800-2200 words.`

  const { text } = await generateText({
    model: client,
    prompt,
    temperature: 0.6,
  })

  return text
}

async function generateAllBuyingGuides() {
  console.log("🛒 Starting buying guides generation...")

  const buyingGuides = [
    {
      category: "Budget FDM",
      priceRange: "under $300",
      userLevel: "beginner",
    },
    {
      category: "Professional FDM",
      priceRange: "$1000-$5000",
      userLevel: "professional",
    },
    {
      category: "Resin SLA",
      priceRange: "$200-$800",
      userLevel: "intermediate",
    },
    {
      category: "Large Format",
      priceRange: "$800-$3000",
      userLevel: "advanced hobbyist",
    },
  ]

  for (const guide of buyingGuides) {
    try {
      const content = await generateBuyingGuide(guide.category, guide.priceRange, guide.userLevel)
      console.log(`✅ Generated buying guide: ${guide.category} (${guide.priceRange})`)
      console.log(`Preview: ${content.substring(0, 200)}...`)
      console.log("---")
    } catch (error) {
      console.error(`❌ Error generating buying guide:`, error)
    }
  }

  const troubleshootingGuides = [
    { problem: "Layer Adhesion Problems", difficulty: "Beginner" },
    { problem: "Stringing and Oozing", difficulty: "Intermediate" },
    { problem: "Warping and Curling", difficulty: "Intermediate" },
    { problem: "Under-extrusion and Clogs", difficulty: "Advanced" },
    { problem: "Dimensional Accuracy Issues", difficulty: "Advanced" },
  ]

  console.log("🔧 Generating troubleshooting guides...")
  for (const guide of troubleshootingGuides) {
    try {
      const content = await generateTroubleshootingGuide(guide.problem, guide.difficulty)
      console.log(`✅ Generated troubleshooting guide: ${guide.problem}`)
      console.log(`Preview: ${content.substring(0, 200)}...`)
      console.log("---")
    } catch (error) {
      console.error(`❌ Error generating troubleshooting guide:`, error)
    }
  }

  const maintenanceGuides = [
    { type: "FDM Desktop", schedule: "regular home use" },
    { type: "Professional FDM", schedule: "heavy commercial use" },
    { type: "Resin SLA", schedule: "regular hobbyist use" },
    { type: "Large Format", schedule: "industrial application" },
  ]

  console.log("🔧 Generating maintenance guides...")
  for (const guide of maintenanceGuides) {
    try {
      const content = await generateMaintenanceGuide(guide.type, guide.schedule)
      console.log(`✅ Generated maintenance guide: ${guide.type}`)
      console.log(`Preview: ${content.substring(0, 200)}...`)
      console.log("---")
    } catch (error) {
      console.error(`❌ Error generating maintenance guide:`, error)
    }
  }

  console.log("🎉 All buying guides generated!")
}

generateAllBuyingGuides().catch(console.error)
