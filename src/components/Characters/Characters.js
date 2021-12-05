import { getDataApi } from "../../utils/getDataApi";
import { IMG_STANDART_XLARGE } from "../../constants/api";
import { ROOT_MODAL } from "../../constants/root";

import Notification from "../Notification";
import classes from "./Characters.css";
class Characters {
  renderContent(data) {
    let htmlContent = "";
    data.forEach(({ name, thumbnail: { path, extension } }) => {
      const imgSrc = path + "/" + IMG_STANDART_XLARGE + "." + extension;
      console.log(imgSrc);
      htmlContent += `
      <li class="${classes.charectors__item}">
      <img class="img-cover bg-contain ${classes.charectors__img}" src="${imgSrc}"/>
      <span class="${classes.charectors__name}">${name}</span>
      </li>
      `;
    });
    const htmlWrapper = `
    <div class="${classes.wrapper}">
        <ul class="${classes.charectors__container}">
            ${htmlContent}
        </ul>
        <button
            class="btn bg-contain ${classes.charectors__close}"
            onclick="modal.innerHTML=''"
        ></button>
    </div>

`;

    ROOT_MODAL.innerHTML = htmlWrapper;
  }

  // renderNotification(data) {
  //   console.log("content is null: ", data);
  // }

  async render(uri) {
    const data = await getDataApi.getData(uri);
    data.length ? this.renderContent(data) : Notification.render();
  }
}

export default new Characters();
