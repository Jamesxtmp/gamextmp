import './game.css'
import { useEffect } from 'react'
import { setCssVar } from '../tools/seterCssVar'

const mapData = {
    totalVerticalElements: 30,
    totalHorizontalElements: 30,
    verticalElements: 100,
    horizontalProm: 100,
}

const MapGame = () => {
    function setVars () {
        const { verticalElements, horizontalProm } = mapData
        const gridMapWidth = document.getElementById( 'grid_map' ).clientWidth
        const widthElement = gridMapWidth / verticalElements
    
        setCssVar( '--width_elements', `${ widthElement }px` )
        setCssVar( '--heigth_elements', `${ horizontalProm / 100 * widthElement }px` )
    }
    function createArrElemets ( cant ) {
        const arrAns = []
        for (let i = 0; i < cant; i++) {
            arrAns.push( `el${ i + 1 }` )
        }
        return arrAns
    }
    const arrIdElements = createArrElemets( mapData.verticalElements )
    useEffect( () => {
        setVars()
    }, [] )
    return(
        <div className='wrap_map' >
            <div className='grid_map' id='grid_map' >
                {
                    arrIdElements.map( id => {
                        return(
                            <div className='element_grid' id={ id } key={ id }></div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default MapGame