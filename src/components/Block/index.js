import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const Block = ({ title, content, highlight, highlight2, text_start, text_end, t }) => {
  return (
    <S.Container>
      <Fade left>
        <h6>{t(title)}</h6>
        <S.TextWrapper>
          <S.Content>{t(text_start)}<span className="realistic-marker-highlight">{t(highlight)}</span></S.Content>
          <S.Content><span className="realistic-marker-highlight">{t(highlight2)}</span>{t(text_end)}</S.Content>
        </S.TextWrapper>
      </Fade>
    </S.Container>
  );
};

export default withTranslation()(Block);
