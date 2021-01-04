import React from "react";
import "./BilanComponent.scss";
import Button from "@material-ui/core/Button";

function BilanComponent() {
  return (
    <div className="container-bilan">
      <h4>
        Vous souhaitez approfondir ce bilan avec un conseiller spécialisé?
      </h4>
      <span className="span">
        vos coordonnées ne seront pas utilisés pour un autre usage
      </span>
      <div className="btn">
        <Button className="button">Faire un bilan complet</Button>
      </div>
    </div>
  );
}

export default BilanComponent;
