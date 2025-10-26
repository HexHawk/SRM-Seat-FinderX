import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Search } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface FormProps {
  onSubmit: (registrationNumber: string, examDate: Date) => void;
  isLoading: boolean;
}

const Form = ({ onSubmit, isLoading }: FormProps) => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [examDate, setExamDate] = useState<Date>();
  const [isOpen, setIsOpen] = useState(false);

  const regNoPattern = /^RA\d{13}$/i;
  const isRegNoValid = regNoPattern.test(registrationNumber);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegNoValid && examDate) {
      onSubmit(registrationNumber, examDate);
    }
  };

  return (
    <Card className="w-full max-w-md glass-effect card-hover animate-fade-in">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-3 p-3 bg-secondary rounded-full w-fit">
          <Search className="h-6 w-6 text-foreground" />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">Enter Details</CardTitle>
        <p className="text-sm text-muted-foreground">Fill in your registration number and exam date</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="registration" className="text-sm font-medium text-foreground">
              Registration Number
            </Label>
            <Input
              id="registration"
              type="text"
              placeholder="RAXXXXXXXXXXXXX"
              value={registrationNumber}
              maxLength={15}
              onChange={(e) =>
                setRegistrationNumber(e.target.value.toUpperCase())
              }
              className="bg-secondary border-border text-foreground placeholder-muted-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">Exam Date</Label>
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-secondary border-border text-foreground hover:bg-accent",
                    !examDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {examDate ? format(examDate, "dd/MM/yyyy") : "Select exam date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-card border-border" side="bottom" align="center" avoidCollisions={false}>
                <Calendar
                  mode="single"
                  selected={examDate}
                  onSelect={(date) => {
                    setExamDate(date);
                    setIsOpen(false);
                  }}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-2.5 transition-all duration-200"
            disabled={!isRegNoValid || !examDate || isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
                <span>Finding Seat...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4" />
                <span>Find My Seat</span>
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
