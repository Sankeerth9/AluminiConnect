import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AlumniCard from "@/components/AlumniCard";
import { Search, Filter } from "lucide-react";

export default function AlumniDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  // TODO: Remove mock data - replace with API calls
  const allAlumni = [
    {
      id: "1",
      name: "Sarah Johnson",
      graduationYear: 2018,
      company: "Google",
      location: "San Francisco, CA",
      skills: ["Software Engineering", "Machine Learning", "Python"],
      email: "sarah.johnson@example.com"
    },
    {
      id: "2",
      name: "Michael Chen",
      graduationYear: 2019,
      company: "Microsoft",
      location: "Seattle, WA",
      skills: ["Cloud Computing", "Azure", "DevOps"],
      email: "michael.chen@example.com"
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      graduationYear: 2020,
      company: "Tesla",
      location: "Austin, TX",
      skills: ["Electrical Engineering", "Automotive", "IoT"],
      email: "emily.rodriguez@example.com"
    },
    {
      id: "4",
      name: "David Kim",
      graduationYear: 2018,
      company: "Apple",
      location: "Cupertino, CA",
      skills: ["iOS Development", "Swift", "UI/UX"],
      email: "david.kim@example.com"
    },
    {
      id: "5",
      name: "Lisa Thompson",
      graduationYear: 2017,
      company: "Amazon",
      location: "Denver, CO",
      skills: ["Data Science", "AWS", "Analytics"],
      email: "lisa.thompson@example.com"
    },
    {
      id: "6",
      name: "James Wilson",
      graduationYear: 2021,
      company: "Startup XYZ",
      location: "Austin, TX",
      skills: ["Full Stack", "React", "Node.js"],
      email: "james.wilson@example.com"
    }
  ];

  // Filter alumni based on search and year
  const filteredAlumni = allAlumni.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.location?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = !yearFilter || alumni.graduationYear.toString() === yearFilter;
    
    return matchesSearch && matchesYear;
  });

  const graduationYears = Array.from(new Set(allAlumni.map(a => a.graduationYear))).sort((a, b) => b - a);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    console.log(`Searching for: ${value}`);
  };

  const handleYearFilter = (value: string) => {
    setYearFilter(value);
    console.log(`Filtering by year: ${value}`);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setYearFilter("");
    console.log("Filters cleared");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8" data-testid="page-alumni-directory">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3 font-serif">Alumni Directory</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect with fellow graduates from our engineering community
          </p>
        </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, company, or location..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
              data-testid="input-search"
            />
          </div>
          
          <div className="flex gap-2">
            <Select value={yearFilter} onValueChange={handleYearFilter}>
              <SelectTrigger className="w-48" data-testid="select-year-filter">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by graduation year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Years</SelectItem>
                {graduationYears.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    Class of {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {(searchTerm || yearFilter) && (
              <Button 
                variant="outline" 
                onClick={clearFilters}
                data-testid="button-clear-filters"
              >
                Clear
              </Button>
            )}
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Showing {filteredAlumni.length} of {allAlumni.length} alumni
        </div>
      </div>

      {/* Alumni Grid */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-testid="alumni-grid"
      >
        {filteredAlumni.map((alumni) => (
          <AlumniCard key={alumni.id} alumni={alumni} />
        ))}
      </div>

      {filteredAlumni.length === 0 && (
        <div className="text-center py-12" data-testid="no-results">
          <p className="text-muted-foreground text-lg">
            No alumni found matching your search criteria.
          </p>
          <Button 
            variant="outline" 
            className="mt-4" 
            onClick={clearFilters}
            data-testid="button-clear-search"
          >
            Clear Search
          </Button>
        </div>
      )}
    </div>
    </div>
  );
}