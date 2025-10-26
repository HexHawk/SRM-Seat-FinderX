import { useState } from "react";
import Header from "@/components/Header";
import Form from "@/components/Form";
import Results from "@/components/Results";
import FeatureCards from "@/components/FeatureCards";

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [studentData, setStudentData] = useState(null);

  const handleFormSubmit = async (
    registrationNumber: string,
    examDate: Date
  ) => {
    setIsLoading(true);
    setStudentData(null);
    setShowResults(false);
    try {
      const formattedDate = examDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/find-seat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            registerNumber: registrationNumber,
            date: formattedDate,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("No seat found for the provided details.");
      }
      const data = await response.json();
      // Use the first result if available
      const seat = data.data && data.data.length > 0 ? data.data[0] : null;
      if (!seat) {
        throw new Error("No seat found for the provided details.");
      }
      setStudentData(seat);
      setShowResults(true);
    } catch (error: any) {
      setStudentData({ error: error.message || "An error occurred." });
      setShowResults(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewSearch = () => {
    setShowResults(false);
    setStudentData(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-12">
          {!showResults ? (
            <>
              {/* Hero Section */}
              <div className="text-center space-y-6 max-w-2xl animate-fade-in">
                <div className="inline-flex items-center space-x-2 bg-secondary text-foreground px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-subtle-green rounded-full animate-pulse"></div>
                  <span>Exclusive to Ramapuram campus</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  <span>Locate your </span>
                  <span className="text-subtle-green">Exam Seat</span>
                  <span> in Seconds</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Find your place, ace your pace.
                </p>
              </div>

              {/* Form Section */}
              <Form onSubmit={handleFormSubmit} isLoading={isLoading} />

              {/* Feature Cards */}
              <FeatureCards />
            </>
          ) : (
            <>
              {/* Results Section */}
              <Results studentData={studentData} />

              {/* New Search Button */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <button
                  onClick={handleNewSearch}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
                >
                  ← Search for another seat
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} SRM Seat FinderX</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
