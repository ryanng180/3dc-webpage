import partners from "../../Assets/PartnersList"

function PartnerSection(){
    return(
        <div id="partnerSection">
            {partners.map((partner)=>{
                return(
                    <div className="partnerDiv">
                    <img src={partner.partnerLogo} alt={partner.partnerName + " Logo"}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default PartnerSection