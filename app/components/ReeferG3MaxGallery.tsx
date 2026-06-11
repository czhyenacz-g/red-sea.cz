import { AquariumReferenceGallery } from "./AquariumReferenceGallery";
import { REEFER_G3_MAX_GALLERY } from "../data/reeferG3MaxGallery";

export function ReeferG3MaxGallery() {
  return <AquariumReferenceGallery title="REEFER G3 MAX — referenční galerie" groups={REEFER_G3_MAX_GALLERY} />;
}
