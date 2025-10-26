import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Calendar } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: Search,
      title: "Quick Search",
      description: "Find your exam venue and seat details in seconds",
    },
    {
      icon: MapPin,
      title: "Accurate Location",
      description: "Get precise hall, block, and seat number information",
    },
    {
      icon: Calendar,
      title: "All Exams",
      description: "Access seat details for all your semester examinations",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl animate-fade-in"
      style={{ animationDelay: "0.2s" }}
    >
      {features.map((feature, index) => (
        <Card
          key={index}
          className="glass-effect card-hover text-center animate-scale-in"
          style={{ animationDelay: `${0.3 + index * 0.1}s` }}
        >
          <CardContent className="p-6">
            <div className="mx-auto mb-4 p-3 rounded-full w-fit bg-secondary">
              <feature.icon className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-subtle-green mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeatureCards;
