import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Sun, Palette, Database } from "lucide-react"

const features = [
  {
    icon: <Sun className="h-8 w-8" />,
    title: "Light Mode",
    description: "Clean and bright interface perfect for daytime usage",
  },
  {
    icon: <Moon className="h-8 w-8" />,
    title: "Dark Mode",
    description: "Easy on the eyes for evening and low-light environments",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Custom Themes",
    description: "Personalize colors and accents to match your preference",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Persistent Storage",
    description: "Your theme choice is saved and restored on each visit",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary dark:bg-secondary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-muted max-w-2xl mx-auto">Everything you need for a perfect theme experience</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="text-primary mb-2">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
