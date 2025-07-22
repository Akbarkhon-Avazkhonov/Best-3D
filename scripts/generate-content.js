import { xai } from "@ai-sdk/xai"
import { generateText } from "ai"

const client = xai(process.env.XAI_API_KEY)

// Генерация обзоров принтеров
async function generatePrinterReview(printerName, category, features) {
  const prompt = `Write a comprehensive 3D printer review for the ${printerName}. 
  Category: ${category}
  Key features: ${features.join(", ")}
  
  Structure the review with:
  1. Introduction and first impressions
  2. Unboxing and assembly experience
  3. Print quality analysis with different materials (PLA, ABS, PETG)
  4. Software and user experience
  5. Pros and cons
  6. Technical specifications
  7. Final verdict with rating explanation
  
  Write in an expert, professional tone. Include specific technical details and real-world testing scenarios. Make it around 1500-2000 words.`

  const { text } = await generateText({
    model: client,
    prompt,
    temperature: 0.7,
  })

  return text
}

// Генерация технических гайдов
async function generateTechnicalGuide(topic, difficulty, targetAudience) {
  const prompt = `Create a comprehensive 3D printing guide about: ${topic}
  Difficulty level: ${difficulty}
  Target audience: ${targetAudience}
  
  Structure the guide with:
  1. Introduction - why this topic matters
  2. Prerequisites and required tools/materials
  3. Step-by-step instructions with detailed explanations
  4. Common problems and troubleshooting
  5. Pro tips and advanced techniques
  6. Safety considerations
  7. Conclusion and next steps
  
  Make it practical, actionable, and include specific examples. Around 1200-1800 words.`

  const { text } = await generateText({
    model: client,
    prompt,
    temperature: 0.6,
  })

  return text
}

// Генерация сравнительных статей
async function generateComparisonArticle(product1, product2, category) {
  const prompt = `Write a detailed comparison between ${product1} and ${product2} in the ${category} category.
  
  Structure the comparison with:
  1. Introduction - why compare these models
  2. Specifications side-by-side table
  3. Build quality and design comparison
  4. Performance testing results
  5. Software and ecosystem comparison
  6. Price and value analysis
  7. Use case recommendations
  8. Final verdict - which is better for whom
  
  Be objective, mention both strengths and weaknesses. Include real testing data and user scenarios. Around 1800-2200 words.`

  const { text } = await generateText({
    model: client,
    prompt,
    temperature: 0.7,
  })

  return text
}

// Генерация контента для материалов и запчастей
async function generateMaterialGuide(materialType, applications) {
  const prompt = `Create a comprehensive guide about ${materialType} 3D printing material.
  Main applications: ${applications.join(", ")}
  
  Cover:
  1. Material properties and characteristics
  2. Printing settings and requirements
  3. Best practices and techniques
  4. Common applications and use cases
  5. Troubleshooting common issues
  6. Storage and handling tips
  7. Recommended brands and products
  8. Cost analysis and alternatives
  
  Make it technical but accessible. Include specific temperature settings, speeds, and practical tips. Around 1000-1500 words.`

  const { text } = await generateText({
    model: client,
    prompt,
    temperature: 0.6,
  })

  return text
}

// Основная функция генерации контента
async function generateAllContent() {
  console.log("🚀 Starting content generation with Grok...")

  // Генерируем обзоры принтеров
  const printerReviews = [
    {
      name: "Bambu Lab X1 Carbon",
      category: "Professional",
      features: ["AI monitoring", "Multi-color printing", "Enclosed chamber", "Auto-calibration"],
    },
    {
      name: "Prusa XL",
      category: "Professional",
      features: ["Large build volume", "Multi-tool system", "Modular design", "Advanced sensors"],
    },
    {
      name: "Creality K1 Max",
      category: "High-Speed",
      features: ["600mm/s printing", "AI-powered", "Auto-leveling", "Large build volume"],
    },
    {
      name: "Elegoo Neptune 4 Pro",
      category: "Budget",
      features: ["Klipper firmware", "Auto-leveling", "Direct drive", "Fast printing"],
    },
  ]

  console.log("📝 Generating printer reviews...")
  for (const printer of printerReviews) {
    try {
      const review = await generatePrinterReview(printer.name, printer.category, printer.features)
      console.log(`✅ Generated review for ${printer.name}`)
      console.log(`Preview: ${review.substring(0, 200)}...`)
      console.log("---")
    } catch (error) {
      console.error(`❌ Error generating review for ${printer.name}:`, error)
    }
  }

  // Генерируем технические гайды
  const technicalGuides = [
    {
      topic: "Perfect First Layer Calibration",
      difficulty: "Beginner",
      audience: "New 3D printer owners",
    },
    {
      topic: "Advanced Support Structures Optimization",
      difficulty: "Advanced",
      audience: "Experienced users and professionals",
    },
    {
      topic: "Multi-Material Printing Setup and Techniques",
      difficulty: "Intermediate",
      audience: "Hobbyists wanting to expand capabilities",
    },
    {
      topic: "Klipper Firmware Installation and Configuration",
      difficulty: "Advanced",
      audience: "Technical users and modders",
    },
  ]

  console.log("📚 Generating technical guides...")
  for (const guide of technicalGuides) {
    try {
      const content = await generateTechnicalGuide(guide.topic, guide.difficulty, guide.audience)
      console.log(`✅ Generated guide: ${guide.topic}`)
      console.log(`Preview: ${content.substring(0, 200)}...`)
      console.log("---")
    } catch (error) {
      console.error(`❌ Error generating guide for ${guide.topic}:`, error)
    }
  }

  // Генерируем сравнительные статьи
  const comparisons = [
    {
      product1: "Bambu Lab A1 mini",
      product2: "Prusa MINI+",
      category: "Compact Printers",
    },
    {
      product1: "Creality Ender 3 V3 SE",
      product2: "Anycubic Kobra 2",
      category: "Budget Beginner Printers",
    },
    {
      product1: "Formlabs Form 3+",
      product2: "Elegoo Saturn 3 Ultra",
      category: "Resin 3D Printers",
    },
  ]

  console.log("⚖️ Generating comparison articles...")
  for (const comp of comparisons) {
    try {
      const comparison = await generateComparisonArticle(comp.product1, comp.product2, comp.category)
      console.log(`✅ Generated comparison: ${comp.product1} vs ${comp.product2}`)
      console.log(`Preview: ${comparison.substring(0, 200)}...`)
      console.log("---")
    } catch (error) {
      console.error(`❌ Error generating comparison:`, error)
    }
  }

  // Генерируем гайды по материалам
  const materialGuides = [
    {
      material: "Carbon Fiber Reinforced Filaments",
      applications: ["Drone parts", "Automotive components", "Tool handles", "Structural parts"],
    },
    {
      material: "Water-Soluble Support Materials (PVA, HIPS)",
      applications: ["Complex geometries", "Overhangs", "Multi-part assemblies", "Hollow objects"],
    },
    {
      material: "High-Temperature Engineering Plastics (PEEK, PEI)",
      applications: ["Aerospace", "Medical devices", "Industrial tooling", "Chemical resistance"],
    },
    {
      material: "Flexible Filaments (TPU, TPE)",
      applications: ["Phone cases", "Gaskets", "Wearables", "Shock absorbers"],
    },
  ]

  console.log("🧪 Generating material guides...")
  for (const material of materialGuides) {
    try {
      const guide = await generateMaterialGuide(material.material, material.applications)
      console.log(`✅ Generated material guide: ${material.material}`)
      console.log(`Preview: ${guide.substring(0, 200)}...`)
      console.log("---")
    } catch (error) {
      console.error(`❌ Error generating material guide:`, error)
    }
  }

  console.log("🎉 Content generation completed!")
}

// Запускаем генерацию
generateAllContent().catch(console.error)
