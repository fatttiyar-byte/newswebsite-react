
import React, { useState } from "react";

import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
  Newspaper,
  ArrowBack,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };


  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        direction: "rtl",

       
        padding: 3,

        position: "relative",
      }}
    >

 

   

      <Box
        sx={{
          width: "100%",

          maxWidth: 430,

          padding: {
            xs: 3,
            sm: 4,
          },

          borderRadius: "24px",

          background:
            "linear-gradient(145deg, rgba(23,37,84,0.98), rgba(15,23,42,0.98))",

          border:
            "1px solid rgba(255,255,255,0.1)",

          boxShadow:
            "0 25px 70px rgba(0,0,0,0.55)",
        }}
      >

        {/* =========================
            Logo
            ========================= */}

        <Box
          sx={{
            width: 70,
            height: 70,

            margin: "0 auto 20px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            borderRadius: "20px",

            background:
              "linear-gradient(135deg, #1e3a8a, #172554)",

            border:
              "1px solid rgba(255,255,255,0.12)",

            boxShadow:
              "0 12px 30px rgba(0,0,0,0.3)",
          }}
        >
          <Newspaper
            sx={{
              fontSize: 36,
              color: "#fff",
            }}
          />
        </Box>


        {/* =========================
            Title
            ========================= */}

        <Typography
          sx={{
            textAlign: "center",

            color: "#fff",

            fontSize: {
              xs: 22,
              sm: 25,
            },

            fontWeight: 800,

            mb: 1,
          }}
        >
          ورود به حساب کاربری
        </Typography>


        <Typography
          sx={{
            textAlign: "center",

            color:
              "rgba(255,255,255,0.6)",

            fontSize: 14,

            mb: 4,
          }}
        >
          برای دسترسی به امکانات سایت خبری وارد شوید
        </Typography>


        {/* =========================
            Login Form
            ========================= */}

        <form onSubmit={handleSubmit}>

          {/* Email */}

          <Typography
            sx={{
              color: "#fff",

              fontSize: 14,

              fontWeight: 600,

              mb: 1,
            }}
          >
            ایمیل
          </Typography>


          <TextField
            fullWidth

            required

            type="email"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }

            placeholder="ایمیل خود را وارد کنید"

            sx={{
              mb: 2.5,

              "& .MuiOutlinedInput-root": {
                height: 52,

                color: "#fff",

                borderRadius: "13px",

                background:
                  "rgba(255,255,255,0.05)",

                "& fieldset": {
                  borderColor:
                    "rgba(255,255,255,0.15)",
                },

                "&:hover fieldset": {
                  borderColor:
                    "rgba(255,255,255,0.3)",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#64748b",
                },
              },

              "& input::placeholder": {
                color:
                  "rgba(255,255,255,0.4)",

                opacity: 1,
              },
            }}
          />


          {/* Password */}

          <Typography
            sx={{
              color: "#fff",

              fontSize: 14,

              fontWeight: 600,

              mb: 1,
            }}
          >
            رمز عبور
          </Typography>


          <TextField
            fullWidth

            required

            value={password}

            onChange={(e) =>
              setPassword(e.target.value)
            }

            type={
              showPassword
                ? "text"
                : "password"
            }

            placeholder="رمز عبور خود را وارد کنید"

            sx={{
              mb: 1.5,

              "& .MuiOutlinedInput-root": {
                height: 52,

                color: "#fff",

                borderRadius: "13px",

                background:
                  "rgba(255,255,255,0.05)",

                "& fieldset": {
                  borderColor:
                    "rgba(255,255,255,0.15)",
                },

                "&:hover fieldset": {
                  borderColor:
                    "rgba(255,255,255,0.3)",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#64748b",
                },
              },

              "& input::placeholder": {
                color:
                  "rgba(255,255,255,0.4)",

                opacity: 1,
              },
            }}

            InputProps={{
              endAdornment: (
                <InputAdornment position="end">

                  <IconButton
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }

                    sx={{
                      color:
                        "rgba(255,255,255,0.55)",
                    }}
                  >

                    {showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}

                  </IconButton>

                </InputAdornment>
              ),
            }}
          />


          {/* Remember Me */}

          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color:
                    "rgba(255,255,255,0.35)",

                  "&.Mui-checked": {
                    color: "#64748b",
                  },
                }}
              />
            }

            label={
              <Typography
                sx={{
                  color:
                    "rgba(255,255,255,0.65)",

                  fontSize: 13,
                }}
              >
                مرا به خاطر بسپار
              </Typography>
            }

            sx={{
              mb: 2,
            }}
          />


          {/* Login Button */}

          <Button
            fullWidth

            type="submit"

            sx={{
              height: 52,

              borderRadius: "13px",

              color: "#fff",

              fontSize: 15,

              fontWeight: 700,

              background:
                "linear-gradient(135deg, #1e3a8a, #172554)",

              border:
                "1px solid rgba(255,255,255,0.1)",

              boxShadow:
                "0 10px 25px rgba(0,0,0,0.3)",

              "&:hover": {
                background:
                  "linear-gradient(135deg, #172554, #0f172a)",
              },
            }}
          >
            ورود به حساب
          </Button>


          {/* Register */}

          <Typography
            sx={{
              textAlign: "center",

              color:
                "rgba(255,255,255,0.55)",

              fontSize: 13,

              mt: 3,
            }}
          >
            حساب کاربری ندارید؟

            <Button
              type="button"

              sx={{
                color: "#cbd5e1",

                fontWeight: 700,

                fontSize: 13,

                textTransform: "none",
              }}
            >
              ثبت نام
            </Button>

          </Typography>

        </form>

      </Box>
    </Box>
  );
};


export default Login;

