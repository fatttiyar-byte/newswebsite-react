import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    CircularProgress,
    Avatar,
    Box,
} from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



export default function Weather() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       
        fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=aba99cbb2412e51dfd0b3b585ae3696c&units=metric&lang=fa`
        )
            .then((res) => res.json())
            .then((data) => {
                setWeather(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (

            




            <Box  
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 5,
                    
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
       <>
        <Card
        sx={{
            maxWidth: 340,
            mx: "auto",
            borderRadius: 4,
            boxShadow: 5,
            direction:"rtl",
            mb:20
        }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                    }}
                >
               

                    <Box>
                        <Typography variant="h5">
                            {weather.name}
                        </Typography>

                        <Typography color="text.secondary">
                            {weather.weather[0].description}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <ThermostatIcon color="error" />
                    <Typography sx={{ ml: 1 }}>
                        دما: {weather.main.temp}°C
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <WaterDropIcon color="primary" />
                    <Typography sx={{ ml: 1 }}>
                        رطوبت: {weather.main.humidity}%
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <AirIcon color="success" />
                    <Typography sx={{ ml: 1 }}>
                        سرعت باد: {weather.wind.speed} m/s
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <WbSunnyIcon color="warning" />
                    <Typography sx={{ ml: 1 }}>
                        احساس دما: {weather.main.feels_like}°C
                    </Typography>
                </Box>
            </CardContent>
        </Card>
        
        </>

        

        

    );
}

