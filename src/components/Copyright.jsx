import './CSS/copyright.css'


export function Copyright(){
    return (
        <div className="copyright-container">

            <div className="copyright-text">
                <p>                &copy; 2040 Copyright. All Rights Reserved.
</p>
            </div>
            <div className="policies">
            <a href="">Privacy Policy</a>
            <a href="">Terms & Condition</a>
            <a href="">Site Map</a>
            </div>
        </div> 
    );
}