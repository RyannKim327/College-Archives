import React, { useState } from "react";
import { Text, View } from "react-native";
import Card from "./components/card";
import Button from "./widgets/button";
import Input from "./widgets/input";
import axios from "axios"

export default function Index() {
  const [l, setL] = useState(false);

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [section, setSection] = useState("")
  // const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")
  const [retrieveUsers, setRetrieveUsers] = useState([])

  const submit = async (status: string) => {
    setL(true)
    try{
      // const { data } = await axios.post(`https://sesgundo-class-manager-server.vercel.app/users/`,
      //   {
      //     firstName,
      //     lastName,
      //     section,
      //     status
      //   }
      // )
      const response = await fetch(`https://sesgundo-class-manager-server.vercel.app/users/`, {
        "method": "POST",
        headers: {
        "Content-Type": "application/json",
        },
        "body": JSON.stringify({
          firstName,
          lastName,
          section,
          status
        })
      })

      console.log(response.ok)
      if(!response.ok){
        throw new Error("Server is not responding...")
      }

      const result = await response.json()

      setMessage(result.message)
    } catch(error){
      console.error(error)
      // setMessage(error.error)
    }

    setL(false)
    setTimeout(() => {
      setMessage("")
    }, 2500)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <Text style={{
          fontWeight: "bold",
          fontSize: 25,
          fontFamily: "serif"
        }}>SIA HandsOn #1</Text>
        <Input label="First name" onChange={setFirstName} disabled={l} />
        <Input label="Last name" onChange={setLastName} disabled={l} />
        <Input label="Section" onChange={setSection} disabled={l} />
        <Text>{message}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
                submit("Present")
              }}
              loading={l}
              >
            Present
          </Button>
          <Button
            style={{
              backgroundColor: "red",
            }}
            clickable={l}
            onClick={() => {
              submit("Absent")
            }}
          >
            Absent
          </Button>
        </View>
      </Card>
    </View>
  );
}
