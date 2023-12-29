import * as React from "react";
import {classNames} from "../../common";
import {useTokensClassName} from "./useTokenClassName";

type ProvidedChildProps = {
    className?: string;
}

type InjectTokenClassNameToChildProps = {
    children: React.ReactElement<ProvidedChildProps>
}

const InjectTokenClassNameToChild = ({children}: InjectTokenClassNameToChildProps) => {
    const tokensClassName = useTokensClassName();

    return React.cloneElement(children, {
        className: classNames(tokensClassName, children.props.className)
    })
}

export interface TokenClassProviderProps {
    children: React.ReactNode
}

export const TokensClassProvider = ({children}: TokenClassProviderProps) => {
    return React.Children.map(children, (child) => {
        if (React.isValidElement<ProvidedChildProps>(child)) {
            return <InjectTokenClassNameToChild>{child}</InjectTokenClassNameToChild>
        }
        return child
    })
}