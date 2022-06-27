import './css/game.css'
import './css/noPasedElements.css'
import { useEffect } from 'react'

const App = () => {
    function scrollButtons ( mapNode ) {
        addEventListener('keydown', e => {
            switch ( e.key ) {
                case 'ArrowUp': 
                    mapNode.scrollTop -= 10
                    break
                case 'ArrowDown': 
                    mapNode.scrollTop += 10
                    break
                case 'ArrowRight': 
                    mapNode.scrollLeft += 10
                    break
                case 'ArrowLeft': 
                    mapNode.scrollLeft -= 10
                    break
                    
                default:
                    break
            }
            console.clear()
            console.log( mapNode.scrollTop )
            console.log( mapNode.scrollLeft )
            console.log( mapNode.scrollWidth )
            console.log( mapNode.scrollHeight )
        })
    }
    useEffect( () => {
        const mapNode = document.getElementById('map-view')
        scrollButtons( mapNode )
    }, [] )
    return(<>
        <div className='map-view' id='map-view'>
            <div className='wrap-player' >
                <div className='player'></div>
            </div>
            <div className='map' id='map'>
                <div className='no-pased' id='noPasedTop' ></div>
                <div className='no-pased' id='noPasedBottom' ></div>
                <div className='no-pased' id='noPasedRigth' ></div>
                <div className='no-pased' id='noPasedLeft' ></div>
                <div className='obstacle' ></div>
            </div>
        </div>
    </>)
}
export default App