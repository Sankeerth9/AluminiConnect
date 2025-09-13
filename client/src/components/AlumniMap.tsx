import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MapPin, Users, Building, GraduationCap, ExternalLink } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface AlumniLocation {
  id: string;
  name: string;
  position: string;
  company: string;
  year: string;
  location: string;
  coordinates: [number, number];
  avatar: string;
  skills: string[];
}

export default function AlumniMap() {
  const [selectedAlumnus, setSelectedAlumnus] = useState<AlumniLocation | null>(null);

  const alumniLocations: AlumniLocation[] = [
    {
      id: '1',
      name: 'Dr. Priya Sharma',
      position: 'Senior AI Research Scientist',
      company: 'Google Cloud',
      year: '2015',
      location: 'San Francisco, CA',
      coordinates: [37.7749, -122.4194],
      avatar: 'PS',
      skills: ['AI/ML', 'Research', 'Quantum Computing']
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      position: 'VP of Engineering',
      company: 'TechUnicorn',
      year: '2018',
      location: 'Bangalore, India',
      coordinates: [12.9716, 77.5946],
      avatar: 'RK',
      skills: ['Engineering', 'Leadership', 'Startups']
    },
    {
      id: '3',
      name: 'Sneha Reddy',
      position: 'Founder & CEO',
      company: 'EduTech Solutions',
      year: '2016',
      location: 'Hyderabad, India',
      coordinates: [17.3850, 78.4867],
      avatar: 'SR',
      skills: ['Entrepreneurship', 'EdTech', 'Product Management']
    },
    {
      id: '4',
      name: 'Arjun Patel',
      position: 'Senior Software Engineer',
      company: 'Microsoft',
      year: '2019',
      location: 'Seattle, WA',
      coordinates: [47.6062, -122.3321],
      avatar: 'AP',
      skills: ['Software Engineering', 'Cloud Computing', 'DevOps']
    },
    {
      id: '5',
      name: 'Kavya Nair',
      position: 'Data Scientist',
      company: 'Amazon',
      year: '2017',
      location: 'London, UK',
      coordinates: [51.5074, -0.1278],
      avatar: 'KN',
      skills: ['Data Science', 'Machine Learning', 'Analytics']
    },
    {
      id: '6',
      name: 'Vikash Jain',
      position: 'Product Manager',
      company: 'Meta',
      year: '2014',
      location: 'Menlo Park, CA',
      coordinates: [37.4530, -122.1817],
      avatar: 'VJ',
      skills: ['Product Management', 'Strategy', 'UX']
    },
    {
      id: '7',
      name: 'Meera Singh',
      position: 'Investment Banker',
      company: 'Goldman Sachs',
      year: '2013',
      location: 'New York, NY',
      coordinates: [40.7128, -74.0060],
      avatar: 'MS',
      skills: ['Finance', 'Investment Banking', 'Risk Management']
    },
    {
      id: '8',
      name: 'Ravi Chandran',
      position: 'DevOps Engineer',
      company: 'Netflix',
      year: '2020',
      location: 'Los Gatos, CA',
      coordinates: [37.2269, -121.9736],
      avatar: 'RC',
      skills: ['DevOps', 'Cloud Infrastructure', 'Automation']
    }
  ];

  const getRoleColor = (year: string) => {
    const yearNum = parseInt(year);
    if (yearNum >= 2020) return 'bg-green-100 text-green-800';
    if (yearNum >= 2015) return 'bg-blue-100 text-blue-800';
    return 'bg-purple-100 text-purple-800';
  };

  return (
    <Card className="rounded-xl hover:shadow-lg transition-all duration-300 border-0 bg-white">
      <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-xl">
        <CardTitle className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <MapPin className="h-5 w-5" />
          </div>
          Alumni World Map
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Map Stats */}
          <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{alumniLocations.length} alumni locations</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>8 countries</span>
            </div>
          </div>

          {/* Map Container */}
          <div className="h-96 rounded-lg overflow-hidden border border-gray-200">
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: '100%', width: '100%' }}
              className="z-0"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {alumniLocations.map((alumnus) => (
                <Marker
                  key={alumnus.id}
                  position={alumnus.coordinates}
                  eventHandlers={{
                    click: () => setSelectedAlumnus(alumnus),
                  }}
                >
                  <Popup>
                    <div className="p-2 min-w-[250px]">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="text-sm font-medium">
                            {alumnus.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-800">{alumnus.name}</h3>
                          <p className="text-sm text-gray-600">{alumnus.position}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Building className="h-4 w-4 text-gray-500" />
                          <span>{alumnus.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <GraduationCap className="h-4 w-4 text-gray-500" />
                          <span>Class of {alumnus.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>{alumnus.location}</span>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-1">
                          {alumnus.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Selected Alumnus Details */}
          {selectedAlumnus && (
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border border-emerald-200">
              <div className="flex items-start gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="text-lg font-medium">
                    {selectedAlumnus.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">{selectedAlumnus.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{selectedAlumnus.position} at {selectedAlumnus.company}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span>Class of {selectedAlumnus.year}</span>
                    <span>•</span>
                    <span>{selectedAlumnus.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {selectedAlumnus.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button size="sm" variant="outline" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Connect
                </Button>
              </div>
            </div>
          )}

          {/* Alumni Distribution */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-gray-600">Total Alumni</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">{alumniLocations.length}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-gray-600">Countries</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">8</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
