import React from "react";
import { connect } from "react-redux";
import { IGlobalState } from "../../redux/types";
import { isDarkTheme } from "../../redux/selectors";
import "./style.css";
import { LinkButton } from "../../components/Buttons/LinkButton";
export interface INotFoundStateProps {
  isDarkTheme: boolean;
}

function mapStateToProps(state: IGlobalState): INotFoundStateProps {
  return {
    isDarkTheme: isDarkTheme(state),
  };
}

function NotFound({ isDarkTheme }: INotFoundStateProps) {
  const notFoundDarkModeClass = isDarkTheme ? "notFoundContainer--dark" : "";
  return (
    <div className={["notFoundContainer", notFoundDarkModeClass].join(" ")}>
      Page Not Found
      <br />
      <LinkButton className="link-btn--sm" to="/">
        &lt;&lt; Back
      </LinkButton>
    </div>
  );
}

export default connect(mapStateToProps)(NotFound);
