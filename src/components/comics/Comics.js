import {
  API_URL,
  URL_COMICS,
  IMG_STANDART_XLARGE,
  IMG_NOT_AVALIBLE,
} from "../../constants/api";
import { getDataApi } from "../../utils/getDataApi";
import { ROOT_INDEX } from "../../constants/root";

import "./Comics.css";

class Comics {
  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);
    let htmlContent = "";
    data.forEach(({ id, title, thumbnail: { extension, path } }) => {
      if (path.lastIndexOf(IMG_NOT_AVALIBLE) === -1) {
        const imgSrc = path + "/" + IMG_STANDART_XLARGE + "." + extension;
        htmlContent += `
        <li class="comics__item">
        <span class="comics__name">${title}</span>
        <img class="comics__img" src="${imgSrc}"/>
        </li>
        `;
      }

    });

    const htmpWrapper = `
    <ul class="comics__container">
    ${htmlContent}
    </ul>
    `;

    ROOT_INDEX.innerHTML = htmpWrapper;
  }
  eventListener(){
    document.querySelectorAll('.comics__item').forEach(element=>{
      element.addEventListener('click',()=>{
        console.log(1);
      })
    })
  }
}

export default new Comics();
