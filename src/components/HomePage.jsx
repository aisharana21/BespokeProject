import {OurMission} from './OurMission';
import { OurValues } from './OurValues';
import { RequestProduct } from './RequestProduct'
import { ProductDesign } from './ProductDesign';
import { FAQ } from './FAQ';
export function HomePage(){
    return(

        <>
        <ProductDesign/>

         <OurMission/>
        <OurValues/>
        <RequestProduct/>
        <FAQ/>
        </>
    );
        
    
}