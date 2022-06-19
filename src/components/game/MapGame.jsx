import './game.css'
import { useEffect } from 'react'
import { setCssVar } from '../tools/seterCssVar'

const mapData = {
    totalElementsX: 30,
    totalElementsY: 10,
    showElementsX: 10,
    porcentY: 100,
}

const MapGame = () => {
    function setVars () {
        const { showElementsX, porcentY, totalElementsX } = mapData
        const widthElement = window.innerWidth / showElementsX
    
        setCssVar( '--width_elements', `${ widthElement }px` )
        setCssVar( '--heigth_elements', `${ porcentY / 100 * widthElement }px` )
        setCssVar( '--width_grid', `${ widthElement * totalElementsX }px` )
    }
    function createArrElemets ( cant ) {
        const arrAns = []
        for (let i = 0; i < cant; i++) {
            arrAns.push( i + 1 )
        }
        return arrAns
    }
    function moveMap() {
        const { showElementsX } = mapData
        const widthElement = window.innerWidth / showElementsX
        const wrapMap = document.getElementById('wrap_map')
        addEventListener('keydown', e => {
            switch( e.key ){
                case 'ArrowUp': console.log( 'ArrowUp' )
                break
                case 'ArrowDown': {
                    console.log( wrapMap.scrollHeight / showElementsX )
                    console.log( wrapMap.scrollWidth )
                    console.log( wrapMap.scrollLeft )
                    console.log( wrapMap.scrollTop )
                    console.log( '---------------' )
                }
                break
                case 'ArrowRight': {
                    wrapMap.scrollLeft += widthElement + .3
                }
                break
                case 'ArrowLeft': {
                    wrapMap.scrollLeft -= widthElement + .3
                }
                break
                default: console.log( 'invalid key' )
            }
        })
    }
    const arrIdX = createArrElemets( mapData.totalElementsX )
    const arrIdY = createArrElemets( mapData.totalElementsY )
    useEffect( () => {
        setVars()
        moveMap()
    }, [] )
    return(
        <div className='wrap_map' id='wrap_map' >
            <div className='grid_map' id='grid_map' >
                {
                    arrIdY.map( idY => {
                        return(<div key={ idY } id={ idY } >{
                            arrIdX.map( idX => {
                                return(
                                    <div className='element_grid'
                                        id={`${ idY }-${ idX }`}
                                        key={ idX }
                                    ></div>
                                )
                            })
                        }</div>)
                    })
                }
            </div>
        </div>
    )
}
export default MapGame