import Styles from "./dishe-details.module.css"
import { DisheDetailsProps } from "./types";
import { IconDelivery, IconCategory, IconReviews } from "@/icons";

export function DisheDetails(props:DisheDetailsProps) {
  return (
    <div className={Styles.details}>
      <div className={Styles.icon}>
        Icon
      </div>
      {props.subtitle && <span>{props.subtitle}</span>}
      {props.title}
    </div>
  )
}