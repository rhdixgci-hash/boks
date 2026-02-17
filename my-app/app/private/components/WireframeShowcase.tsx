import { motion } from 'motion/react';
import { Layout, Smartphone, Monitor, Tablet } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function WireframeShowcase() {
  const layouts = [
    {
      name: 'Hero Section',
      description: 'Full-screen landing with geometric overlays',
      breakpoints: ['Desktop', 'Tablet', 'Mobile']
    },
    {
      name: 'Dashboard Grid',
      description: 'Metrics-driven executive view',
      breakpoints: ['Desktop', 'Tablet', 'Mobile']
    },
    {
      name: 'Gallery Layout',
      description: 'Masonry-style portfolio display',
      breakpoints: ['Desktop', 'Tablet', 'Mobile']
    },
    {
      name: 'Documentation',
      description: 'Side-by-side content structure',
      breakpoints: ['Desktop', 'Tablet', 'Mobile']
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-lg mb-4 flex items-center gap-2">
          <Layout className="w-5 h-5" />
          Layout Wireframes
        </h4>
        <p className="text-sm text-muted-foreground mb-6">
          Responsive layout patterns demonstrating adaptive design principles across devices.
        </p>
      </div>

      <Tabs defaultValue="hero">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="hero">Hero</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="docs">Docs</TabsTrigger>
        </TabsList>

        <TabsContent value="hero" className="mt-6">
          <Card className="p-6">
            <div className="mb-4 flex gap-2">
              <Badge variant="outline">
                <Monitor className="w-3 h-3 mr-1" />
                Desktop
              </Badge>
              <Badge variant="outline">
                <Tablet className="w-3 h-3 mr-1" />
                Tablet
              </Badge>
              <Badge variant="outline">
                <Smartphone className="w-3 h-3 mr-1" />
                Mobile
              </Badge>
            </div>
            
            {/* Wireframe representation */}
            <div className="border-2 border-dashed border-border rounded-lg p-8 bg-muted/20">
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Header */}
                <div className="h-12 bg-muted rounded" />
                
                {/* Hero Content */}
                <div className="space-y-4 py-12">
                  <div className="h-8 bg-muted rounded w-3/4 mx-auto" />
                  <div className="h-6 bg-muted rounded w-1/2 mx-auto" />
                  <div className="h-4 bg-muted rounded w-2/3 mx-auto" />
                  <div className="flex gap-2 justify-center mt-8">
                    <div className="h-10 w-32 bg-primary rounded" />
                    <div className="h-10 w-32 bg-muted rounded" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="grid grid-cols-4 gap-4 mt-12">
                  <div className="h-24 border-2 border-muted rounded" />
                  <div className="h-24 border-2 border-muted rounded" />
                  <div className="h-24 border-2 border-muted rounded" />
                  <div className="h-24 border-2 border-muted rounded" />
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="dashboard" className="mt-6">
          <Card className="p-6">
            <div className="mb-4 flex gap-2">
              <Badge variant="outline">
                <Monitor className="w-3 h-3 mr-1" />
                Desktop Primary
              </Badge>
            </div>
            
            {/* Dashboard wireframe */}
            <div className="border-2 border-dashed border-border rounded-lg p-8 bg-muted/20">
              <div className="space-y-6">
                {/* Metrics row */}
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-32 bg-muted rounded-lg p-4">
                      <div className="h-4 w-4 bg-primary rounded mb-4" />
                      <div className="h-6 bg-background rounded mb-2" />
                      <div className="h-3 bg-background/50 rounded w-2/3" />
                    </div>
                  ))}
                </div>

                {/* Charts section */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="h-64 bg-muted rounded-lg p-4">
                    <div className="h-4 bg-background rounded w-1/3 mb-4" />
                    <div className="h-full bg-background/20 rounded flex items-end gap-2 p-4">
                      {[40, 65, 45, 80, 55, 70].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary rounded" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="h-64 bg-muted rounded-lg p-4">
                    <div className="h-4 bg-background rounded w-1/3 mb-4" />
                    <div className="h-full bg-background/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="gallery" className="mt-6">
          <Card className="p-6">
            <div className="mb-4 flex gap-2">
              <Badge variant="outline">Masonry Grid</Badge>
              <Badge variant="outline">Responsive</Badge>
            </div>
            
            {/* Gallery wireframe */}
            <div className="border-2 border-dashed border-border rounded-lg p-8 bg-muted/20">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-48 bg-muted rounded" />
                <div className="h-64 bg-muted rounded" />
                <div className="h-56 bg-muted rounded" />
                <div className="h-64 bg-muted rounded" />
                <div className="h-48 bg-muted rounded" />
                <div className="h-56 bg-muted rounded" />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="docs" className="mt-6">
          <Card className="p-6">
            <div className="mb-4 flex gap-2">
              <Badge variant="outline">Sidebar Navigation</Badge>
              <Badge variant="outline">Two-column</Badge>
            </div>
            
            {/* Documentation wireframe */}
            <div className="border-2 border-dashed border-border rounded-lg p-8 bg-muted/20">
              <div className="flex gap-6">
                {/* Sidebar */}
                <div className="w-1/4 space-y-3">
                  <div className="h-6 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded w-4/5" />
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-4/5" />
                  <div className="h-px bg-border my-4" />
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-4/5" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="h-8 bg-muted rounded w-2/3" />
                  <div className="h-4 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                  <div className="h-32 bg-muted rounded mt-6" />
                  <div className="h-4 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded w-4/5" />
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
