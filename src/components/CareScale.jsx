import Sun from '../image/sun.svg'
import Water from '../image/water.svg'

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions



let quantityLabel ={
    1: 'peu',
    2 : 'modérément',
    3 : "beaucoup"
}

function CareScale({scaleValue, careType}) {
    let rang =[1,2,3]

    let scaleValue =
    careType==='light'?(
        <img src={sun} alt=''/>
    ) : (

        <img src={water} alt=''/>
    )
        return(
            <div onClick ={()=>
            alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careType == 'light' ? 'de lumièrer' : "d'arrossage"
            }`
            )
            }
            >
            {
                range.map((rangeElem)=>
                scaleValue >= rangeElem ? ( <span key ={rangeElem.toString()}>{scaleType}</span>): null
                )}
            </div>
        )
    
}

export default CareScale