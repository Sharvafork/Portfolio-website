import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import { BellRing, Check } from "lucide-react"
import movie from './assets/movie.png'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]

type CardProps = React.ComponentProps<typeof Card>

function Projects({ className, ...props }: CardProps) {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen w-full bg-background text-foreground p-10 font-sans sm:pl-28 md:pl-36">
            <div className="flex flex-col md:flex-row items-start gap-6" style={{top: "10px"}}>
                <div>
                    <h1 className="text-4xl font-bold mb-4">Projects i've been a part of</h1>
                    <p className="text-muted-foreground max-w-xl mb-8">
                        Here's a glimpse of some of the projects I've been a part of
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Projects</h2>

                    <div className="grid md:grid-cols-3 gap-6" style={{top: "10px"}}>
                        <Card className="group transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg border border-border">
                            <CardHeader>
                                <CardTitle className="text-base sm:text-lg md:text-xl">Movie App</CardTitle>
                                <CardDescription className="text-xs sm:text-sm md:text-base">A modern movie discovery platform with real-time search and reviews.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="rounded-lg overflow-hidden aspect-video mb-4">
                                    <img src={movie} alt="movie" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105" />
                                </div>
                                <p className="text-muted-foreground text-sm mb-2">React, TMDB API, Styled Components</p>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                <span className="text-muted-foreground text-xs">2024</span>
                                <Button variant="secondary" size="sm" onClick={() => navigate('/projects/movie')}>Learn More</Button>
                            </CardFooter>
                        </Card>

                        <Card className="group transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg border border-border">
                            <CardHeader>
                                <CardTitle className="text-base sm:text-lg md:text-xl">Movie App</CardTitle>
                                <CardDescription className="text-xs sm:text-sm md:text-base">A modern movie discovery platform with real-time search and reviews.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="rounded-lg overflow-hidden aspect-video mb-4">
                                    <img src={movie} alt="movie" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105" />
                                </div>
                                <p className="text-muted-foreground text-sm mb-2">React, TMDB API, Styled Components</p>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                <span className="text-muted-foreground text-xs">2024</span>
                                <Button variant="secondary" size="sm" onClick={() => navigate('/projects/movie')}>Learn More</Button>
                            </CardFooter>
                        </Card>

                        <Card className="group transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg border border-border">
                            <CardHeader>
                                <CardTitle className="text-base sm:text-lg md:text-xl">Movie App</CardTitle>
                                <CardDescription className="text-xs sm:text-sm md:text-base">A modern movie discovery platform with real-time search and reviews.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="rounded-lg overflow-hidden aspect-video mb-4">
                                    <img src={movie} alt="movie" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105" />
                                </div>
                                <p className="text-muted-foreground text-sm mb-2">React, TMDB API, Styled Components</p>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                <span className="text-muted-foreground text-xs">2024</span>
                                <Button variant="secondary" size="sm" onClick={() => navigate('/projects/movie')}>Learn More</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;