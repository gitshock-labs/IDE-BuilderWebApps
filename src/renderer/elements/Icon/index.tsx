import * as React from "react";

import { Close } from "./icons/Close";
import { Corner } from "./icons/Corner";
import { Folder } from "./icons/Folder";
import { Github } from "./icons/Github";
import { Pencil } from "./icons/Pencil";
import { ArrowLeft } from "./icons/ArrowLeft";
import { ArrowRight } from "./icons/ArrowRight";
import { Main } from "./icons/Main";
import { Plus } from "./icons/Plus";
import { Maximize } from "./icons/Maximize";
import { Minimize } from "./icons/Minimize";
import { Settings } from "./icons/Settings";
import { Hand } from "./icons/Hand";
import { Component } from "./icons/Component";
import { Burger } from "./icons/Burger";
import { Delete } from "./icons/Delete";
import { MenuCorner } from "./icons/MenuCorner";
import { Sync } from "./icons/Sync";
import { Figma } from "./icons/Figma";
import { Restore } from "./icons/Restore";
import { CloseTab } from "./icons/CloseTab";
import { Home } from "./icons/Home";
import { Muted } from "./icons/Muted";
import { UnMuted } from "./icons/UnMuted";

import "../../animations.css";
import "./index.css";

type Icons =
  | "Close"
  | "Corner"
  | "Folder"
  | "Github"
  | "Pencil"
  | "ArrowLeft"
  | "ArrowRight"
  | "Main"
  | "Plus"
  | "Maximize"
  | "Minimize"
  | "Hand"
  | "Component"
  | "Burger"
  | "Delete"
  | "Sync"
  | "MenuCorner"
  | "Settings"
  | "Figma"
  | "Restore"
  | "Home"
  | "Muted"
  | "UnMuted"
  | "CloseTab";

export interface IconProps {
  color?: string;
  size?: string;
}

export interface ContainerProps extends IconProps {
  type: Icons;
  isSpinner?: boolean;
  className?: string;
}

export class Icon extends React.Component<ContainerProps, unknown> {
  private iconsMap = {
    Close,
    Corner,
    Folder,
    Github,
    Pencil,
    ArrowLeft,
    ArrowRight,
    Main,
    Plus,
    Maximize,
    Minimize,
    Hand,
    Component,
    Burger,
    Delete,
    Settings,
    Sync,
    MenuCorner,
    Figma,
    Restore,
    CloseTab,
    Home,
    Muted,
    UnMuted,
  };

  constructor(props: ContainerProps) {
    super(props);
  }

  render(): JSX.Element {
    const classNames: string[] = ["icon"];
    const IconView = this.iconsMap[this.props.type];

    if (this.props.className) {
      classNames.push(this.props.className);
    }
    if (this.props.isSpinner) {
      classNames.push("spin");
    }

    return (
      <div className={classNames.join(" ")}>
        <IconView {...this.props} />
      </div>
    );
  }
}
