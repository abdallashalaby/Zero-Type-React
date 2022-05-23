import React from "react"
import "./footer.css"
import fb from "./facebook-square-brands.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import

function Footer() {
    return (
      <div id="footer">
        <div>© 2023 StarTech.All Rights reserved</div>
        <div className="icons">
<FontAwesomeIcon icon={brands('facebook')} />

        </div>
      </div>
    )
}

export default Footer

