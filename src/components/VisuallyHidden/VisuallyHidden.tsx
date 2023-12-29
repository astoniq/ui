import {RootComponent, RootComponentProps} from "../RootComponent/RootComponent";
import styles from "./VisuallyHidden.module.css";
import * as React from "react";

export type VisuallyHiddenProps<T> = RootComponentProps<T>;

export const VisuallyHidden = <T,>({Component = 'span', ...restProps}: VisuallyHiddenProps<T>) => (
    <RootComponent Component={Component} {...restProps} baseClassName={styles['VisualHidden']} />
)