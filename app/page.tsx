"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export const HomePage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () =>{
    authClient.signUp.email({
      email,
      name,
      password
    }, {
      onError: () => {
        alert("Something went wrong")
      },
      onSuccess: () => {
        alert("Success")
      }
    })
  }

  return(
    <div className="m-2">
      <Input
      placeholder="Enter your name here..."
      value={name}
      onChange={(e) => setName(e.target.value)}
      />

      <Input
      placeholder="Enter your email here..."
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />

      <Input 
      placeholder="Enter you password here..."
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />

      <Button 
      onClick={onSubmit}>
        Create User
      </Button>
    </div>
  )
}

export default HomePage;