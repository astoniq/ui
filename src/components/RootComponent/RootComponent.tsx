import * as React from "react";
import {HasComponent, HasRootRef} from "../../types";
import {classNames} from "../../common";

export interface RootComponentProps<T> extends React.AllHTMLAttributes<T>,
    HasRootRef<T>,
    HasComponent {
    baseClassName?: string | false,
}

export const RootComponent = <T, >({
                                       Component = 'div',
                                       baseClassName,
                                       getRootRef,
                                       className,
                                       ...restProps
                                   }: RootComponentProps<T>) => (
    <Component ref={getRootRef} className={classNames(baseClassName, className)} {...restProps} />
)