
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Model(props) {


    const duckref = useRef()

    useFrame(({clock}) => {
        duckref.current.position.y = Math.sin(clock.elapsedTime)
        duckref.current.rotation.x = Math.sin(clock.elapsedTime)
        duckref.current.rotation.z += Math.sin(clock.elapsedTime)

    })
    const gltf = useLoader(GLTFLoader, '/showcase.glb')
    gltf.scene.traverse( function( node ) {
    if ( node.isMesh ) { 
        node.castShadow = true
        node.receiveShadow = true
    }
    })

    const duck = useLoader(GLTFLoader, 'duck.gltf')
    duck.scene.traverse( function( node ) {
    if ( node.isMesh ) { 
        node.castShadow = true
        node.receiveShadow = true
    }
    })

    const eventHandler = () =>{
    console.log('hello')
    }


  return <>
    <primitive object={gltf.scene} position-y ={ -2 } />
    <primitive object={duck.scene} position-y ={ -2 } onClick={eventHandler} ref={duckref}/>
  </> 

}

// useGLTF.preload('/showcase.glb')