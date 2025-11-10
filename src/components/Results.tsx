import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  MapPin,
  Calendar,
  AlertTriangle,
  Building,
  DoorOpen,
  Armchair,
} from "lucide-react";

interface ResultsProps {
  studentData: {
    registrationNumber: string;
    subjectCode: string;
    block: string;
    roomNo: string;
    seatNo: string;
    date: string;
    time: string;
    error?: string;
  };
}

const Results = ({ studentData }: ResultsProps) => {
  return (
    <div className="w-full max-w-2xl space-y-6 animate-slide-in">
      {/* Error or Success Confirmation Card */}
      {studentData.error ? (
        <Card className="glass-effect border-border card-hover">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-3 p-3 bg-destructive/20 rounded-full w-fit">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle className="text-xl font-semibold text-destructive flex items-center justify-center space-x-2">
              <span>Seat Details Not Found</span>
              <Badge
                variant="secondary"
                className="bg-destructive/10 text-destructive border-border"
              >
                Error
              </Badge>
            </CardTitle>
            <div className="mt-2 text-muted-foreground text-sm">
              {studentData.error}
            </div>
            <div className="mt-4 text-left">
              <p className="font-semibold text-foreground mb-2">
                Troubleshooting:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>
                  Double-check your registration number and exam date for any
                  errors.
                </li>
                <li>
                  If the seating plan was recently updated, wait a few hours and
                  try again.
                </li>
                <li>
                  Ask a faculty or class representative for help if needed.
                </li>
              </ul>
            </div>
          </CardHeader>
        </Card>
      ) : (
        <>
          <Card className="glass-effect border-border card-hover">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-3 p-3 bg-secondary rounded-full w-fit">
                <CheckCircle className="h-6 w-6 text-foreground" />
              </div>
              <CardTitle className="text-xl font-semibold text-subtle-green flex items-center justify-center space-x-2">
                <span>Seat Details Found</span>
                <Badge
                  variant="secondary"
                  className="bg-secondary text-foreground border-border"
                >
                  Confirmed
                </Badge>
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Examination Details */}
          <Card className="glass-effect card-hover animate-scale-in">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-subtle-green flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-foreground" />
                <span>Examination Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-stretch justify-around md:space-x-6 space-y-4 md:space-y-0 text-center">
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-semibold text-muted-foreground">
                    Subject Code
                  </p>
                  <p className="text-lg font-bold text-foreground mt-1">
                    {studentData.subjectCode}
                  </p>
                </div>

                <Separator
                  orientation="vertical"
                  className="hidden md:block h-auto"
                />
                <Separator className="block md:hidden" />

                <div className="flex flex-col justify-center">
                  <p className="text-xs font-semibold text-muted-foreground">
                    Date & Time
                  </p>
                  <p className="text-lg font-semibold text-foreground mt-1">
                    {studentData.date}
                  </p>
                  <p className="text-base text-muted-foreground">
                    {studentData.time}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seat Allocation */}
          <Card
            className="glass-effect border-border card-hover animate-scale-in"
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-subtle-green flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-foreground" />
                <span>Your Seat Allocation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-secondary/30 p-4 rounded-lg">
                  <Building className="h-5 w-5 mx-auto text-muted-foreground mb-1" />
                  <p className="text-xs font-semibold text-muted-foreground">
                    Block
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {studentData.block}
                  </p>
                </div>
                <div className="text-center bg-secondary/30 p-4 rounded-lg">
                  <DoorOpen className="h-5 w-5 mx-auto text-muted-foreground mb-1" />
                  <p className="text-xs font-semibold text-muted-foreground">
                    Room Number
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {studentData.roomNo}
                  </p>
                </div>
              </div>

              <div className="text-center bg-secondary/30 p-4 rounded-lg w-full">
                <Armchair className="h-5 w-5 mx-auto text-muted-foreground mb-1" />
                <p className="text-xs font-semibold text-muted-foreground">
                  Seat Number
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {studentData.seatNo}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Important Instructions */}
          <Card
            className="glass-effect border-border card-hover animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-subtle-green flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                <span>Important Instructions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-foreground">
                  Report to the examination hall 30 minutes before exam time
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-foreground">
                  Carry your valid ID card and hall ticket
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-foreground">
                  Mobile phones and electronic devices are strictly prohibited
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-foreground">
                  Follow all examination rules and regulations
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default Results;
