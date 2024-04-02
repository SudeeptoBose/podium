import { PositionalAudio, BakeShadows, Float, OrbitControls, Sky, Text } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Model } from './Model'
import { Suspense } from 'react'
import { Leva, useControls } from 'leva'


export default function Experience()
{

    // const { sunPosition } = useControls('sky', {
    //     sunPosition: { value: [ 2.0, 1.2, 3.0 ] }
    // })

    // const { textColor } = useControls('textColor',{
    //     textColor:{
    //         value: '#217474'
    //     }
    // })

    // const { lightColor } = useControls('lightColor',{
    //     lightColor:{
    //         value: '#8bc8d3'
    //     }
    // })

    return <>
        <Perf position='top-left' />
        
        {/* <BakeShadows/> */}
        
        <OrbitControls 
            makeDefault
            autoRotate={true}
            autoRotateSpeed={1}
            maxPolarAngle = {Math.PI / 2}
            enableDamping={true}
        />

        <directionalLight 
            castShadow
            position={ [ 3, 8, 4 ] }
            intensity={ 4.5 }
            color='#8bc8d3'
            shadow-camera-far= {50}
            shadow-camera-top= {10}
            shadow-camera-right= {10}
            shadow-camera-bottom= {-10}
            shadow-camera-left= {-10}
            shadow-mapSize={ [ 2048, 2048 ] }
            shadow-normalBias={0.04}
        />

        <ambientLight intensity={0.5 } />

        <Sky sunPosition={ [2.0, 1.2, 3.0] } />

        <mesh receiveShadow position-y={ -2 } rotation-x={ - Math.PI * 0.5 } scale={ 200 } >
            <planeGeometry />
            <meshStandardMaterial color="white" />
        </mesh>
        
        <Float 
            speed={6}
            floatIntensity={2}
        >
            <Text 
            font='/Bangers-Regular.ttf'
                fontSize={0.75}
                maxWidth={1}
                position={[0, 1.75, 1]}
                rotation={[0,Math.PI/4,0]}
                color='#217474' 
                > Product Showcase 
                
            </Text>
        </Float>

        <Model />


    </>
}