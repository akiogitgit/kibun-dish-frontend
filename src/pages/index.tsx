import type { NextPage } from "next"
import Head from "next/head"
import { Button, Center, Group } from "@mantine/core"
import { useGetApi } from "../hooks/useApi"
import { ProposeFood } from "../components/ProposeFood"

const Home: NextPage = () => {
  return (
    <div>
      <header></header>

      <main>
        <h1>気分dish</h1>
        <ProposeFood />
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
