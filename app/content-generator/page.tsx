"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Loader2, Sparkles, FileText, BookOpen, Newspaper } from "lucide-react"

export default function ContentGeneratorPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")
  const [contentType, setContentType] = useState("")
  const [topic, setTopic] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [wordCount, setWordCount] = useState("1500")

  const generateContent = async () => {
    if (!topic || !contentType) return

    setIsGenerating(true)
    try {
      const response = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: contentType,
          topic,
          difficulty,
          wordCount: Number.parseInt(wordCount),
        }),
      })

      const data = await response.json()
      setGeneratedContent(data.content)
    } catch (error) {
      console.error("Error generating content:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const contentTypes = [
    { value: "review", label: "Product Review", icon: <FileText className="w-4 h-4" /> },
    { value: "guide", label: "Technical Guide", icon: <BookOpen className="w-4 h-4" /> },
    { value: "comparison", label: "Product Comparison", icon: <FileText className="w-4 h-4" /> },
    { value: "news", label: "News Article", icon: <Newspaper className="w-4 h-4" /> },
    { value: "tutorial", label: "Step-by-step Tutorial", icon: <BookOpen className="w-4 h-4" /> },
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-blue-600" />
            AI Content Generator
          </h1>
          <p className="text-lg text-gray-600">
            Generate high-quality 3D printing content using advanced AI technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <Card>
            <CardHeader>
              <CardTitle>Content Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    {contentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center gap-2">
                          {type.icon}
                          {type.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
                <Input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., Bambu Lab X1 Carbon review, PLA vs PETG comparison"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
                <Select value={difficulty} onValueChange={setDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">
                      <Badge className="bg-green-100 text-green-800">Beginner</Badge>
                    </SelectItem>
                    <SelectItem value="intermediate">
                      <Badge className="bg-yellow-100 text-yellow-800">Intermediate</Badge>
                    </SelectItem>
                    <SelectItem value="advanced">
                      <Badge className="bg-red-100 text-red-800">Advanced</Badge>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Word Count</label>
                <Select value={wordCount} onValueChange={setWordCount}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="800">800 words (Short)</SelectItem>
                    <SelectItem value="1500">1500 words (Medium)</SelectItem>
                    <SelectItem value="2500">2500 words (Long)</SelectItem>
                    <SelectItem value="3500">3500 words (Comprehensive)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={generateContent}
                disabled={isGenerating || !topic || !contentType}
                className="w-full"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating Content...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Content
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Output Panel */}
          <Card>
            <CardHeader>
              <CardTitle>Generated Content</CardTitle>
            </CardHeader>
            <CardContent>
              {generatedContent ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{generatedContent.split(" ").length} words</Badge>
                    <Button variant="outline" size="sm">
                      Copy to Clipboard
                    </Button>
                  </div>
                  <Textarea
                    value={generatedContent}
                    onChange={(e) => setGeneratedContent(e.target.value)}
                    className="min-h-[500px] font-mono text-sm"
                    placeholder="Generated content will appear here..."
                  />
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Configure your content settings and click "Generate Content" to start</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent Generations */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Content Generation Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  type: "Review",
                  title: "Bambu Lab X1 Carbon Complete Review",
                  words: 2150,
                  difficulty: "Intermediate",
                },
                { type: "Guide", title: "Perfect First Layer Calibration", words: 1800, difficulty: "Beginner" },
                { type: "Comparison", title: "Prusa MINI+ vs Bambu A1 mini", words: 2400, difficulty: "Intermediate" },
                { type: "Tutorial", title: "Multi-Material Printing Setup", words: 1950, difficulty: "Advanced" },
                { type: "News", title: "Latest 3D Printing Innovations", words: 1200, difficulty: "Beginner" },
                { type: "Guide", title: "Troubleshooting Layer Adhesion", words: 1650, difficulty: "Intermediate" },
              ].map((item, index) => (
                <Card key={index} className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.type}</Badge>
                      <Badge
                        className={
                          item.difficulty === "Beginner"
                            ? "bg-green-100 text-green-800"
                            : item.difficulty === "Intermediate"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }
                      >
                        {item.difficulty}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.words} words</p>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
