import * as React from "react";
import {PlatformType} from "./utils/platform";

export type AnyFunction = (...args: any[]) => any;

export type AlignType = 'left' | 'center' | 'right';

export interface HasChildren {
    children?: React.ReactNode;
}

export type HasDataAttribute = Record<`data-${string}`, string | number | boolean | undefined | null>;

export interface HasRootRef<T> {
    getRootRef?: React.Ref<T>;
}

export interface HasRef<T> {
    getRef?: React.Ref<T>;
}

export interface HasComponent {
    Component?: React.ElementType;
}

export interface HasAlign {
    align?: AlignType;
}

export interface HasPlatform {
    platform?: PlatformType;
}

export interface Version {
    major: number;
    minor?: number;
    patch?: number;
}

export type AnchorHTMLAttributesOnly = Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof React.HTMLAttributes<HTMLAnchorElement>
>;

export type Exact<A, B> = A extends B ? B : never;

export type CSSCustomProperties<T extends string | undefined = string> = Record<`--${string}`, T>;

interface Nothing {}

export type LiteralUnion<Union, Type> = Union | (Type & Nothing);

export type HTMLAttributesWithRootRef<T> = React.HTMLAttributes<T> & HasRootRef<T>;

export type ValuesOfObject<T> = T[keyof T];

export type GetPropsWithFunctionKeys<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

export type PickOnlyFunctionProps<T> = Pick<T, GetPropsWithFunctionKeys<T>>;