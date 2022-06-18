import './game.css'
import { useEffect } from 'react'
import { setCssVar } from '../tools/seterCssVar'

const mapData = {
    totalElementsX: 30,
    totalElementsY: 10,
    elementsX: 10,
    porcentY: 100,
}

const MapGame = () => {
    function setVars () {
        const { elementsX, porcentY, totalElementsX } = mapData
        const widthElement = window.innerWidth / elementsX
    
        setCssVar( '--width_elements', `${ widthElement }px` )
        setCssVar( '--heigth_elements', `${ porcentY / 100 * widthElement }px` )
        setCssVar( '--width_grid', `${ widthElement * totalElementsX }px` )
    }
    function createArrElemets ( cant ) {
        const arrAns = []
        for (let i = 0; i < cant; i++) {
            arrAns.push( `el${ i + 1 }` )
        }
        return arrAns
    }
    const arrIdX = createArrElemets( mapData.totalElementsX )
    const arrIdHorizontal = createArrElemets( mapData.totalElementsY )
    console.log( arrIdHorizontal )
    useEffect( () => {
        setVars()
    }, [] )
    return(
        <div className='wrap_map' >
            <div className='grid_map' id='grid_map' >
                {
                    arrIdHorizontal.map( idY => {
                        console.log( 'idY' )
                        arrIdX.map( idX => {
                            console.log( 'idX' )
                            return(
                                <div className='element_grid' id={ idX } key={ idX }></div>
                            )
                        })
                    })
                }
            </div>
        </div>
    )
}
export default MapGame