import React, { Suspense } from "react";
import "./App.css";
import { getTheme, isDarkTheme } from "./redux/selectors";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import { IGlobalState } from "./redux/types";
import { Theme } from "./models/enums";
import NotFound from "./screens/NotFound";
import { AppRoutes } from "./routes";
import { Loader } from "./components/Loader/index";
export interface IAppProps {
  theme: Theme;
  isDarkTheme: boolean;
}

function mapStateToProps(state: IGlobalState): IAppProps {
  return {
    theme: getTheme(state),
    isDarkTheme: isDarkTheme(state),
  };
}

function App(props: IAppProps) {
  return (
    <div className={`app ${props.isDarkTheme ? "--dark-mode" : ""}`}>
      <Suspense fallback={<Loader />}>
        <Switch>
          {AppRoutes}
          <Route path="/notfound" component={NotFound}></Route>
          <Route exact path="/" component={Home} />
          <Route path="*" render={() => <Redirect to="/notfound"/>} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default connect(mapStateToProps)(App);
