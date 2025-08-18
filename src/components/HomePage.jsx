import {OurMission} from './OurMission';
import { OurValues } from './OurValues';
import { RequestProduct } from './RequestProduct'
import { ProductDesign } from './ProductDesign';
export function HomePage(){
    return(

        <>
        <ProductDesign/>

         <OurMission/>
        <OurValues/>
        <RequestProduct/>
        </>
    );
        
    
}