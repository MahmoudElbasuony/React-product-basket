import React, { ReactElement } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { setTheme } from "../../redux/actions";
import {
  IThemeTogglerStateProps,
  IThemeTogglerDispatchProps,
} from "../../redux/types";
import { isDarkTheme } from "../../redux/selectors";
import { Theme } from "../../models/enums";
import { IGlobalState } from "../../redux/types";
import DefaultCheckBox from "../../components/Checkboxs/DefaultCheckBox/index";
import "./style.css";

interface IThemeTogglerProps extends IThemeTogglerStateProps {
  onChange?: () => void;
  className?: string;
}

function mapStateToProps(state: IGlobalState): IThemeTogglerStateProps {
  return {
    isDarkTheme: isDarkTheme(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch): IThemeTogglerDispatchProps {
  return {
    setTheme: (theme: Theme) => dispatch(setTheme(theme)),
  };
}

function mergeProps(
  stateProps: IThemeTogglerStateProps,
  dispatchProps: IThemeTogglerDispatchProps
): IThemeTogglerProps {
  return {
    ...stateProps,
    onChange: function () {
      stateProps.isDarkTheme
        ? dispatchProps.setTheme(Theme.Light)
        : dispatchProps.setTheme(Theme.Dark);
    },
  };
}

function DarkMode(props: IThemeTogglerProps): ReactElement {
  const modeClass = props.isDarkTheme ? "dark-mode-container--dark" : "";
  return (
    <div className={["dark-mode-container", modeClass, props.className].join(" ")}>
      <DefaultCheckBox checked={props.isDarkTheme} onCheck={props.onChange}>
        Dark Mode
      </DefaultCheckBox>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(DarkMode);
