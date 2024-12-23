import React, { useRef } from "react"
import * as THREE from "three"
import { useLoader } from "@react-three/fiber"
import { STLLoader } from "three-stdlib"
import Switch from "./switch"

interface lightSwitchProps {
  position: [number, number, number] // Position prop
  scale: [number, number, number] // Scale prop
}

const LightSwitch: React.FC<lightSwitchProps> = ({ position, scale }) => {
  const groupRef = useRef<THREE.Group | null>(null)

  const geometry = useLoader(STLLoader, "../../switch casing (1).stl")
  const metalTexture = useLoader(THREE.TextureLoader, "/leather.jpg")

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <mesh geometry={geometry} rotation={[Math.PI / 2, 0, 0]}>
        <Switch position={[10.5, -2, 7.5]} />
        <meshStandardMaterial map={metalTexture} />
      </mesh>
    </group>
  )
}

export default LightSwitch
