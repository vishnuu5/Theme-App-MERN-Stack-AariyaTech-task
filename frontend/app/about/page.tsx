import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About This App</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside space-y-1 ">
                <li>Next.js 16 with App Router</li>
                <li>TypeScript</li>
                <li>Tailwind CSS v4</li>
                <li>ShadCN UI Components</li>
                <li>next-themes for theme management</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Node.js + Express</li>
                <li>MongoDB</li>
                <li>Mongoose ODM</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>
              This application demonstrates a complete light/dark mode implementation with persistent user preferences.
              The theme is managed using the next-themes library, which handles system detection and localStorage
              persistence.
            </p>
            <p>
              Users can customize colors through a theme customizer dialog that allows selection of preset themes or
              custom color picking. All preferences are saved locally and restored on subsequent visits.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features Implemented</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1">
              <li>Light and Dark Mode with system preference detection</li>
              <li>Persistent theme preferences using localStorage</li>
              <li>Custom theme customization with color picker</li>
              <li>Responsive design for all devices</li>
              <li>Smooth transitions between themes</li>
              <li>Server-side rendering with Next.js</li>
              <li>TypeScript for type safety</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
