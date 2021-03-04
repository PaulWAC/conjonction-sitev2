import { withTranslation } from "react-i18next";

import * as S from "./styles";

const Select = ({ id, name, placeholder, onChange, t, value, optionName, defaultValue }) => (
  <S.Container>
    <label htmlFor={name}>{t(id)}</label>
    <S.Select>
        <select
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}
        >
        <option value="disabled" disabled>Veuillez sélectionner l'objet du message</option>
        <option value="info">Informations générales</option>
        <option value="projet">Informations Incubateur</option>
        </select>
      </S.Select>
  </S.Container>
);

export default withTranslation()(Select);